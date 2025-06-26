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
