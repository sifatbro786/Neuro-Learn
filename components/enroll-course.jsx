"use client";

import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { createCheckoutSession } from "@/actions/stripe";
import { useEffect, useState } from "react";

export default function EnrollCourse({ asLink, courseId }) {
    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        const enrollmentForCourse = async () => {
            const response = await fetch(`/api/hasEnrollment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ courseId }),
            });

            const data = await response.json();
            setEnrolled(data);
        };
        enrollmentForCourse();
    }, [courseId]);

    const formAction = async (data) => {
        const { url } = await createCheckoutSession(data);
        window.location.assign(url);
    };

    return (
        <>
            <form action={formAction}>
                <input type="hidden" name="courseId" value={courseId} />

                {asLink ? (
                    <>
                        {!enrolled && (
                            <Button
                                type="submit"
                                variant="ghost"
                                className="text-xs text-sky-700 h-7 gap-1"
                            >
                                Enroll
                                <ArrowRight className="w-3" />
                            </Button>
                        )}
                    </>
                ) : (
                    <Button type="submit" className={cn(buttonVariants({ size: "lg" }))}>
                        Enroll Now
                    </Button>
                )}
            </form>
        </>
    );
}
