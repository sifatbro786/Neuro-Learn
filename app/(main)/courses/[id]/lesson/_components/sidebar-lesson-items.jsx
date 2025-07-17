import { CheckCircle, PlayCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SidebarLessonItems = ({ courseId, lesson, moduleSlug }) => {
    const isPrivate = (lesson) => {
        return lesson?.access === "private";
    };
    const isComplete = (lesson) => {
        return lesson?.state === "completed";
    };

    return (
        <Link
            href={
                isPrivate(lesson)
                    ? "#"
                    : `/courses/${courseId}/lesson?name=${lesson?.slug}&module=${moduleSlug}`
            }
            className={cn(
                "flex items-center gap-x-2 text-slate-700 text-sm font-[500]  transition-all hover:text-slate-600 ",
                isPrivate(lesson)
                    ? "text-slate-700  hover:text-slate-700 cursor-default"
                    : isComplete(lesson) && "text-emerald-700 hover:text-emerald-700",
            )}
        >
            <div className="flex items-center gap-x-2">
                {isPrivate(lesson) ? (
                    <Lock size={16} className={cn("text-slate-700")} />
                ) : isComplete(lesson) ? (
                    <CheckCircle size={16} className={cn("text-emerald-700")} />
                ) : (
                    <PlayCircle size={16} className={cn("text-slate-700")} />
                )}
                {lesson.title}
            </div>
        </Link>
    );
};
