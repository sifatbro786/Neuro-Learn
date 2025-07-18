import { auth } from "@/auth";
import { hasEnrollmentForCourse } from "@/queries/enrollments";
import { getUserByEmail } from "@/queries/users";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { courseId } = await request.json();

    const session = await auth();
    if (!session?.user) {
        return new NextResponse(`You are not authenticated!`, {
            status: 401,
        });
    }

    await dbConnect();

    try {
        const loggedInUser = await getUserByEmail(session?.user?.email);
        const hasEnrollment = await hasEnrollmentForCourse(courseId, loggedInUser?.id);

        return new NextResponse(JSON.stringify(hasEnrollment), {
            status: 200,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
}
