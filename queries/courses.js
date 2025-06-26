import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module-model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";
import { getTestimonialsForCourse } from "./testimonials";
import { getEnrollmentsForCourse } from "./enrollments";
import { dbConnect } from "@/service/mongo";

export async function getCoursesList() {
    await dbConnect();

    try {
        const courses = await Course.find({})
            .select([
                "title",
                "subtitle",
                "thumbnail",
                "price",
                "modules",
                "category",
                "instructor",
            ])
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
    } catch (err) {
        throw new Error(err);
    }
}

export async function getCourseDetails(id) {
    await dbConnect();

    try {
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
    } catch (err) {
        throw new Error(err);
    }
}

export async function getCourseDetailsByInstructor(instructorId) {
    await dbConnect();

    try {
        const courses = await Course.find({ instructor: instructorId })
            .populate({
                path: "category",
                model: Category,
            })
            .populate({
                path: "instructor",
                model: User,
            })
            .lean();

        //! Enrollments:
        const enrollments = await Promise.all(
            courses.map(async (course) => {
                const enrollment = await getEnrollmentsForCourse(course?._id.toString());
                return enrollment;
            }),
        );
        const totalEnrollments = enrollments.reduce((acc, currentValue) => {
            return acc + currentValue.length;
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
            totalTestimonials.reduce((acc, curr) => {
                return acc + curr.rating;
            }, 0) / totalTestimonials.length;

        return {
            courses: replaceMongoIdInArray(courses),
            enrollments: totalEnrollments,
            reviews: totalTestimonials.length,
            ratings: avgRating.toPrecision(2),
        };
    } catch (err) {
        throw new Error(err);
    }
}
