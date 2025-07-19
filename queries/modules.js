import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "@/model/lesson-model";
import { Module } from "@/model/module-model";
import { dbConnect } from "@/service/mongo";

export async function create(moduleData) {
    await dbConnect();

    try {
        const modules = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(modules));
    } catch (err) {
        throw new Error(err);
    }
}

export async function getModule(moduleId) {
    await dbConnect();

    try {
        const moduleData = await Module.findById(moduleId)
            .populate({ path: "lessonIds", model: Lesson })
            .lean();
        return replaceMongoIdInObject(moduleData);
    } catch (err) {
        throw new Error(err);
    }
}

export async function getModuleBySlug(moduleSlug) {
    await dbConnect();

    try {
        const moduleData = await Module.findOne({ slug: moduleSlug }).lean();
        return replaceMongoIdInObject(moduleData);
    } catch (err) {
        throw new Error(err);
    }
}
