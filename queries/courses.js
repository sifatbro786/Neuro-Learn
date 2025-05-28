import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/models/category-model";
import { Course } from "@/models/course-model";
import { Module } from "@/models/module-model";
import { Testimonial } from "@/models/testimonial-model";
import { User } from "@/models/user-model";
import { getTestimonialsForCourse } from "./testimonials";
import { getEnrollmentsForCourse } from "./enrollments";

export async function getCoursesList() {
    const courses = await Course.find({})
        .select(["title", "subtitle", "thumbnail", "price", "modules", "category", "instructor"])
        .populate({
            path: "category",
            model: Category,
        })
        .populate({
            path: "instructor",
            model: User,
        })
        .populate({
            path: "testimonials",
            model: Testimonial,
        })
        .populate({
            path: "modules",
            model: Module,
        })
        .lean();

    return replaceMongoIdInArray(courses);
}

export async function getCourseDetails(id) {
    const course = await Course.findById(id)
        .populate({
            path: "category",
            model: Category,
        })
        .populate({
            path: "instructor",
            model: User,
        })
        .populate({
            path: "testimonials",
            model: Testimonial,
            populate: {
                path: "user",
                model: User,
            },
        })
        .populate({
            path: "modules",
            model: Module,
        })
        .lean();

    return replaceMongoIdInObject(course);
}

export async function getCourseDetailsByInstructor(instructorId) {
    const courses = await Course.find({ instructor: instructorId }).lean();

    //! Enrollments:
    const enrollments = await Promise.all(
        courses.map(async (course) => {
            const enrollment = await getEnrollmentsForCourse(course?._id.toString());
            return enrollment;
        }),
    );
    const totalEnrollments = enrollments.reduce((item, currentValue) => {
        return item.length + currentValue.length;
    }, 0);

    //! Testimonials:
    const testimonials = await Promise.all(
        courses.map(async (course) => {
            const testimonial = await getTestimonialsForCourse(course._id.toString());
            return testimonial;
        }),
    );

    //! Reviews:
    const totalTestimonials = testimonials.flat();

    //! avgRating:
    const avgRating =
        totalTestimonials.reduce((item, curr) => {
            return item + curr.rating;
        }, 0) / totalTestimonials.length;

    return {
        courses: courses.length,
        enrollments: totalEnrollments,
        reviews: totalTestimonials.length,
        ratings: avgRating.toPrecision(2),
    };
}
