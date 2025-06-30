import { Module } from "@/model/module-model";

export async function create(moduleData) {
    try {
        const modules = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(modules));
    } catch (err) {
        throw new Error(err);
    }
}
