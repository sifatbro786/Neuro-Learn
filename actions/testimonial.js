"use server";

import { Course } from "@/model/course-model";
import { create } from "@/queries/testimonials";
import { dbConnect } from "@/service/mongo";

export async function createReview(data) {
    await dbConnect();

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
