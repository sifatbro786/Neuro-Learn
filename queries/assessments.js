import { replaceMongoIdInArray } from "@/lib/convertData";
import { Assessment } from "@/model/assessment-model";
import { dbConnect } from "@/service/mongo";

export async function getAssessmentByQuiz(quizId) {
    await dbConnect();

    try {
        const assessment = await Assessment.find({ quizId: quizId }).lean();
        return replaceMongoIdInArray(assessment);
    } catch (err) {
        throw new Error(err);
    }
}
