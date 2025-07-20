import { auth } from "@/auth";
import { getCoursesList } from "@/queries/courses";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const GET = async (_request) => {
    const session = await auth();
    if (!session?.user) {
        return new NextResponse(`You are not authenticated!`, {
            status: 401,
        });
    }

    await dbConnect();

    try {
        const courses = await getCoursesList();

        return new NextResponse(JSON.stringify(courses), {
            status: 200,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
