"use server";

import { getSlug, replaceMongoIdInArray } from "@/lib/convertData";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { Assessment } from "@/model/assessment-model";
import { Quizset } from "@/model/quizset-model";
import { Quiz } from "@/model/quizzes-model";
import { createQuiz, getQuizSetById } from "@/queries/quizzes";
import { createAssessmentReport } from "@/queries/reports";
import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";

export async function updateQuizSet(quizSetId, dataToUpdate) {
    await dbConnect();

    try {
        await Quizset.findByIdAndUpdate(quizSetId, dataToUpdate);
    } catch (err) {
        throw new Error(err);
    }
}

export async function deleteQuizSet(quizSetId) {
    await dbConnect();

    try {
        await Quizset.findByIdAndDelete(quizSetId);
    } catch (err) {
        throw new Error(err);
    }
}

export async function doCreateQuizSet(data) {
    await dbConnect();

    try {
        data["slug"] = getSlug(data.title);

        const createdQuizSet = await Quizset.create(data);
        return createdQuizSet?._id.toString();
    } catch (err) {
        throw new Error(err);
    }
}

export async function addQuizToQuizSet(quizSetId, quizData) {
    await dbConnect();

    try {
        const transformedData = {};

        transformedData["title"] = quizData["title"];
        transformedData["description"] = quizData["description"];
        transformedData["slug"] = getSlug(quizData["title"]);
        transformedData["options"] = [
            {
                text: quizData.optionA.label,
                is_correct: quizData.optionA.isTrue,
            },
            {
                text: quizData.optionB.label,
                is_correct: quizData.optionB.isTrue,
            },
            {
                text: quizData.optionC.label,
                is_correct: quizData.optionC.isTrue,
            },
            {
                text: quizData.optionD.label,
                is_correct: quizData.optionD.isTrue,
            },
        ];

        const createdQuizId = await createQuiz(transformedData);
        const quizSet = await Quizset.findById(quizSetId);

        quizSet.quizIds.push(createdQuizId);
        quizSet.save();
    } catch (err) {
        throw new Error(err);
    }
}

export async function updateQuiz(quizId, quizData) {
    await dbConnect();

    try {
        const transformedData = {};

        transformedData["title"] = quizData["title"];
        transformedData["description"] = quizData["description"];
        transformedData["slug"] = getSlug(quizData["title"]);
        transformedData["options"] = [
            {
                text: quizData.optionA.label,
                is_correct: quizData.optionA.isTrue,
            },
            {
                text: quizData.optionB.label,
                is_correct: quizData.optionB.isTrue,
            },
            {
                text: quizData.optionC.label,
                is_correct: quizData.optionC.isTrue,
            },
            {
                text: quizData.optionD.label,
                is_correct: quizData.optionD.isTrue,
            },
        ];

        await Quiz.findByIdAndUpdate(quizId, transformedData);
    } catch (e) {
        throw new Error(e);
    }
}

export async function deleteQuiz(quizId, quizSetId) {
    await dbConnect();

    try {
        const quizSet = await Quizset.findById(quizSetId);
        quizSet.quizIds.pull(new mongoose.Types.ObjectId(quizId));

        await Quiz.findByIdAndDelete(quizId);
        quizSet.save();
    } catch (e) {
        throw new Error(e);
    }
}

export async function changeQuizSetPublishState(quizSetId) {
    await dbConnect();

    try {
        const quizSet = await Quizset.findById(quizSetId);
        const res = await Quizset.findByIdAndUpdate(
            quizSetId,
            { active: !quizSet.active },
            { lean: true },
        );

        return res.active;
    } catch (err) {
        throw new Error(err);
    }
}

export async function addQuizAssessment(courseId, quizSetId, answers) {
    await dbConnect();

    try {
        const quizSet = await getQuizSetById(quizSetId);
        const quizzes = replaceMongoIdInArray(quizSet?.quizIds);

        const assessmentRecord = quizzes.map((quiz) => {
            const obj = {};
            obj.quizId = new mongoose.Types.ObjectId(quiz.id);

            const found = answers.find((a) => a.quizId === quiz.id);
            if (found) {
                obj.attempted = true;
            } else {
                obj.attempted = false;
            }

            const mergedOptions = quiz.options.map((o) => {
                return {
                    option: o.text,
                    isCorrect: o.is_correct,
                    isSelected: (function () {
                        const found = answers.find((a) => a.options[0].option === o.text);
                        if (found) {
                            return true;
                        } else {
                            return false;
                        }
                    })(),
                };
            });
            obj["options"] = mergedOptions;

            return obj;
        });

        const assessmentEntry = {};
        assessmentEntry.assessments = assessmentRecord;
        assessmentEntry.otherMarks = 0;

        const assessment = await Assessment.create(assessmentEntry);
        const loggedInUser = await getLoggedInUser();

        await createAssessmentReport({
            courseId: courseId,
            userId: loggedInUser.id,
            quizAssessment: assessment?._id,
        });
    } catch (err) {
        throw new Error(err);
    }
}
