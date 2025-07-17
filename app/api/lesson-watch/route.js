import { NextResponse } from "next/server";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { getLesson } from "@/queries/lessons";
import { getModuleBySlug } from "@/queries/modules";
import { Watch } from "@/model/watch-model";

const STARTED = "started";
const COMPLETED = "completed";

export async function POST(request) {
    const { lessonId, moduleSlug, state, lastTime } = await request.json();

    const lesson = await getLesson(lessonId);
    const loggedInUser = await getLoggedInUser();
    const moduleInfo = await getModuleBySlug(moduleSlug);

    if (!loggedInUser) {
        return new NextResponse(`You are not authenticated.`, {
            status: 401,
        });
    }

    if (state !== STARTED && state !== COMPLETED) {
        return new NextResponse(`Invalid state. Can not process request.`, {
            status: 500,
        });
    }

    if (!lesson) {
        return new NextResponse(`Invalid lesson. Can not process request.`, {
            status: 500,
        });
    }

    const watchEntry = {
        lastTime,
        lesson: lesson.id,
        module: moduleInfo.id,
        user: loggedInUser.id,
        state,
    };

    try {
        const found = await Watch.findOne({
            lesson: lessonId,
            module: moduleInfo.id,
            user: loggedInUser.id,
        }).lean();

        if (state === STARTED) {
            if (!found) {
                watchEntry["created_at"] = Date.now();
                await Watch.create(watchEntry);
            }
        } else if (state === COMPLETED) {
            if (!found) {
                watchEntry["created_at"] = Date.now();
                await Watch.create(watchEntry);
            } else {
                if (found.state === STARTED) {
                    watchEntry["modified_at"] = Date.now();
                    await Watch.findByIdAndUpdate(found._id, {
                        state: COMPLETED,
                    });
                }
            }
        }

        return new NextResponse("Watch Record added Successfully.", {
            status: 200,
        });
    } catch (error) {
        console.error(error);

        return new NextResponse(error.message, {
            status: 500,
        });
    }
}
