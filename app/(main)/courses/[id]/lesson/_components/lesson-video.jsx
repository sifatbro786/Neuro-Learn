"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const LessonVideo = ({ courseId, lesson, defaultModule }) => {
    const [hasWindow, setHasWindow] = useState(false);
    const [started, setStarted] = useState(false);
    const [ended, setEnded] = useState(false);
    const [duration, setDuration] = useState(0);

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    useEffect(() => {
        async function updateLessonWatch() {
            const response = await fetch("/api/lesson-watch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId: courseId,
                    lessonId: lesson?.id,
                    moduleSlug: defaultModule,
                    state: "started",
                    lastTime: 0,
                }),
            });

            if (response.status === 200) {
                setStarted(false);
            }
        }

        started && updateLessonWatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [started]);

    useEffect(() => {
        async function updateLessonWatch() {
            const response = await fetch("/api/lesson-watch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId: courseId,
                    lessonId: lesson.id,
                    moduleSlug: defaultModule,
                    state: "completed",
                    lastTime: duration,
                }),
            });

            if (response.status === 200) {
                setEnded(false);
                router.refresh();
            }
        }
        ended && updateLessonWatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ended]);

    function handleOnStart() {
        setStarted(true);
    }

    function handleOnEnded() {
        setEnded(true);
    }

    function handleOnDurationChange(duration) {
        setDuration(duration);
    }

    // TODO
    // function handleOnProgress(state) {};

    return (
        <>
            {hasWindow && (
                <ReactPlayer
                    src={lesson?.video_url}
                    width="100%"
                    height="470px"
                    controls={true}
                    onStart={handleOnStart}
                    onEnded={handleOnEnded}
                    onDurationChange={handleOnDurationChange}
                />
            )}
        </>
    );
};
