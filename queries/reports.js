import { replaceMongoIdInObject } from "@/lib/convertData";
import { Assessment } from "@/model/assessment-model";
import { Module } from "@/model/module-model";
import { Report } from "@/model/report-model";
import mongoose from "mongoose";
import { getCourseDetails } from "./courses";
import { dbConnect } from "@/service/mongo";

export async function getAReport(filter) {
    await dbConnect();

    try {
        const report = await Report.findOne(filter)
            .populate({
                path: "quizAssessment",
                model: Assessment,
            })
            .lean();

        return replaceMongoIdInObject(report);
    } catch (err) {
        throw new Error(err);
    }
}

export async function createWatchReport(data) {
    await dbConnect();

    try {
        let report = await Report.findOne({ course: data.courseId, student: data.userId });
        if (!report) {
            report = await Report.create({ course: data.courseId, student: data.userId });
        }

        const foundLesson = report.totalCompletedLessons.find(
            (lessonId) => lessonId.toString() === data.lessonId,
        );
        if (!foundLesson) {
            report.totalCompletedLessons.push(new mongoose.Types.ObjectId(data.lessonId));
        }

        const moduleInfo = await Module.findById(data.moduleId);
        const lessonIdsToCheck = moduleInfo?.lessonIds;
        const completedLessonIds = report.totalCompletedLessons;

        const isModuleComplete = lessonIdsToCheck.every((lesson) =>
            completedLessonIds.includes(lesson),
        );
        if (isModuleComplete) {
            const foundModule = report.totalCompletedModules.find(
                (moduleId) => moduleId.toString() === data.moduleId,
            );
            if (!foundModule) {
                report.totalCompletedModules.push(new mongoose.Types.ObjectId(data.moduleId));
            }
        }

        //? completion date:
        const course = await getCourseDetails(data.courseId);
        const modulesInCourse = course.modules;
        const moduleCount = modulesInCourse?.length ?? 0;

        const completedModule = report.totalCompletedModules;
        const completedModuleCount = completedModule?.length ?? 0;

        if (completedModuleCount >= 1 && completedModuleCount === moduleCount) {
            report.completion_date = Date.now();
            report.course_complete = true;
        }

        report.save();
    } catch (err) {
        throw new Error(err);
    }
}

export async function createAssessmentReport(data) {
    await dbConnect();

    try {
        let report = await Report.findOne({ course: data.courseId, student: data.userId });

        if (!report) {
            report = await Report.create({
                course: data.courseId,
                student: data.userId,
                quizAssessment: data.quizAssessment,
            });
        } else {
            if (!report.quizAssessment) {
                report.quizAssessment = data.quizAssessment;
                report.save();
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}
