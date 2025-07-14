import { replaceMongoIdInArray } from "@/lib/convertData";
import { Testimonial } from "@/model/testimonial-model";

export async function getTestimonialsForCourse(courseId) {
    try {
        const testimonials = await Testimonial.find({ courseId: courseId }).lean();
        return replaceMongoIdInArray(testimonials);
    } catch (err) {
        throw new Error(err);
    }
}

export async function create(reviewData) {
    try {
        const review = await Testimonial.create(reviewData);
        return JSON.parse(JSON.stringify(review));
    } catch (err) {
        throw new Error(err);
    }
}
