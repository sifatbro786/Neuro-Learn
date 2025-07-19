"use server";

import { Lesson } from "@/model/lesson-model";
import { Module } from "@/model/module-model";
import { create } from "@/queries/lessons";
import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";

export async function createLesson(data) {
    await dbConnect();

    try {
        const title = data.get("title");
        const slug = data.get("slug");
        const moduleId = data.get("moduleId");
        const order = data.get("order");

        const createdLesson = await create({ title, slug, moduleId, order });

        const moduleData = await Module.findById(moduleId);
        moduleData.lessonIds.push(createdLesson?._id);
        moduleData.save();

        return createdLesson;
    } catch (err) {
        throw new Error(err);
    }
}

export async function reOrderLesson(data) {
    await dbConnect();

    try {
        await Promise.all(
            data.map(async (element) => {
                await Lesson.findByIdAndUpdate(element.id, { order: element.position });
            }),
        );
    } catch (err) {
        throw new Error(err);
    }
}

export async function updateLesson(lessonId, data) {
    await dbConnect();

    try {
        await Lesson.findByIdAndUpdate(lessonId, data);
    } catch (err) {
        throw new Error(err);
    }
}

export async function changeLessonPublishState(lessonId) {
    await dbConnect();

    try {
        const lesson = await Lesson.findById(lessonId);
        const res = await Lesson.findByIdAndUpdate(
            lessonId,
            { active: !lesson.active },
            { lean: true },
        );

        return res.active;
    } catch (err) {
        throw new Error(err);
    }
}

export async function deleteLesson(lessonId, moduleId) {
    await dbConnect();

    try {
        const moduleData = await Module.findById(moduleId);
        moduleData.lessonIds.pull(new mongoose.Types.ObjectId(lessonId));

        await Lesson.findByIdAndDelete(lessonId);
        moduleData.save();
    } catch (err) {
        throw new Error(err);
    }
}
