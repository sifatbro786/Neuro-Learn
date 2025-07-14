"use server";

import { Course } from "@/model/course-model";
import { create } from "@/queries/testimonials";

export async function createReview(data) {
    try {
        const createdReview = await create(data);

        const course = await Course.findById(data.courseId);
        course.testimonials.push(createdReview?._id);
        await course.save();

        return createReview;
    } catch (err) {
        throw new Error(err);
    }
}
