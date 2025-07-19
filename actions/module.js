"use server";

import { Course } from "@/model/course-model";
import { Module } from "@/model/module-model";
import { create } from "@/queries/modules";
import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";

export async function createModule(data) {
    await dbConnect();

    try {
        const title = data.get("title");
        const slug = data.get("slug");
        const courseId = data.get("courseId");
        const order = data.get("order");

        const createdModule = await create({ title, slug, course: courseId, order });

        const course = await Course.findById(courseId);
        course.modules.push(createdModule?._id);
        course.save();

        return createdModule;
    } catch (err) {
        throw new Error(err);
    }
}

export async function reOrderModules(data) {
    await dbConnect();

    try {
        await Promise.all(
            data.map(async (element) => {
                await Module.findByIdAndUpdate(element.id, { order: element.position });
            }),
        );
    } catch (err) {
        throw new Error(err);
    }
}

export async function updateModule(moduleId, data) {
    await dbConnect();

    try {
        await Module.findByIdAndUpdate(moduleId, data);
    } catch (err) {
        throw new Error(err);
    }
}

export async function changeModulePublishState(moduleId) {
    await dbConnect();

    try {
        const moduleData = await Module.findById(moduleId);
        const res = await Module.findByIdAndUpdate(
            moduleId,
            { active: !moduleData.active },
            { lean: true },
        );

        return res.active;
    } catch (err) {
        throw new Error(err);
    }
}

export async function deleteModule(moduleId, courseId) {
    await dbConnect();

    try {
        const course = await Course.findById(courseId);
        course.modules.pull(new mongoose.Types.ObjectId(moduleId));

        await Module.findByIdAndDelete(moduleId);
        course.save();
    } catch (err) {
        throw new Error(err);
    }
}
