import { replaceMongoIdInArray } from "@/lib/convertData";
import { Course } from "@/model/course-model";
import { Enrollment } from "@/model/enrollment-model";
import { dbConnect } from "@/service/mongo";

export async function getEnrollmentsForCourse(courseId) {
    await dbConnect();

    try {
        const enrollments = await Enrollment.find({ course: courseId }).lean();
        return replaceMongoIdInArray(enrollments);
    } catch (err) {
        throw new Error(err);
    }
}

export async function getEnrollmentsForUser(userId) {
    await dbConnect();

    try {
        const enrollments = await Enrollment.find({ student: userId })
            .populate({
                path: "course",
                model: Course,
            })
            .lean();
        return replaceMongoIdInArray(enrollments);
    } catch (err) {
        throw new Error(err);
    }
}

export async function hasEnrollmentForCourse(courseId, studentId) {
    await dbConnect();

    try {
        const enrollment = await Enrollment.findOne({
            course: courseId,
            student: studentId,
        })
            .populate({
                path: "course",
                model: Course,
            })
            .lean();

        if (!enrollment) return false;

        return true;
    } catch (error) {
        throw new Error(error);
    }
}

export async function enrollForCourse(courseId, userId, paymentMethod) {
    const newEnrollment = {
        course: courseId,
        student: userId,
        method: paymentMethod,
        enrollment_date: Date.now(),
        status: "not-started",
    };

    try {
        const response = await Enrollment.create(newEnrollment);
        return response;
    } catch (err) {
        throw new Error(err);
    }
}
