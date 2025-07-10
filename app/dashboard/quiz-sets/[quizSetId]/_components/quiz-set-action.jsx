"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { changeQuizSetPublishState, deleteQuizSet } from "@/actions/quiz";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const QuizSetAction = ({ quizSet }) => {
    const [action, setAction] = useState(null);
    const [published, setPublished] = useState(quizSet?.active);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            switch (action) {
                case "change-active":
                    {
                        const activeState = await changeQuizSetPublishState(quizSet?.id);
                        setPublished(!activeState);

                        toast.success("The quizset has been updated");
                        router.refresh();
                    }
                    break;

                case "delete":
                    {
                        if (published) {
                            toast.error(
                                "A published quizset can not be deleted. First unpublished it, then delete.",
                            );
                        } else {
                            await deleteQuizSet(quizSet?.id);
                            toast.success("The quizset has been deleted successfully");
                            router.push("/dashboard/quiz-sets");
                        }
                    }
                    break;

                default: {
                    throw new Error("Invalid Lesson Actions");
                }
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
            <Button variant="outline" size="sm" onClick={() => setAction("change-active")}>
                {published ? "Unpublish" : "Publish"}
            </Button>

            <Button size="sm" onClick={() => setAction("delete")}>
                <Trash className="h-4 w-4" />
            </Button>
        </form>
    );
};
