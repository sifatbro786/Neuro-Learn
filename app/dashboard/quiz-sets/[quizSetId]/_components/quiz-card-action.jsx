"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQuizId } from "@/hooks/useQuiz";
import { deleteQuiz } from "@/actions/quiz";

export default function QuizCardAction({ quiz, quizSetId }) {
    const [action, setAction] = useState(null);
    
    const router = useRouter();
    const { setQuizId } = useQuizId();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            switch (action) {
                case "edit-quiz": {
                    setQuizId(quiz?.id);
                    router.refresh();
                    break;
                }
                case "delete-quiz": {
                    await deleteQuiz(quiz.id, quizSetId);
                    
                    toast.success(`The quiz has been deleted`);
                    router.refresh();
                    break;
                }
                default: {
                    throw new Error("Invalid action");
                }
            }
        } catch (err) {
            toast.error(err.message);
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Button variant="ghost" size="sm" onClick={() => setAction("edit-quiz")}>
                <Pencil className="w-3 mr-1" /> Edit
            </Button>
            <Button
                size="sm"
                className="text-destructive"
                variant="ghost"
                onClick={() => setAction("delete-quiz")}
            >
                <Trash className="w-3 mr-1" /> Delete
            </Button>
        </form>
    );
}
