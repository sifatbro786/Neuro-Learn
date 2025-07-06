"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { changeLessonPublishState, deleteLesson } from "@/actions/lesson";

export const LessonActions = ({ lesson, moduleId, onDelete }) => {
    const [action, setAction] = useState(null);
    const [published, setPublished] = useState(lesson?.active);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            switch (action) {
                case "change-active":
                    {
                        const activeState = await changeLessonPublishState(lesson?.id);
                        setPublished(!activeState);

                        toast.success("The lesson has been updated");
                    }
                    break;

                case "delete":
                    {
                        if (published) {
                            toast.error(
                                "A published lesson can not be deleted. First unpublished it, then delete.",
                            );
                        } else {
                            await deleteLesson(lesson?.id, moduleId);
                            toast.success("The lesson has been deleted successfully");
                            onDelete();
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
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-x-2">
                <Button variant="outline" size="sm" onClick={() => setAction("change-active")}>
                    {published ? "Unpublish" : "Publish"}
                </Button>

                <Button size="sm" onClick={() => setAction("delete")}>
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
};
