import { AccordionContent } from "@radix-ui/react-accordion";
import { SidebarLessonItems } from "./sidebar-lesson-items";
import { replaceMongoIdInArray } from "@/lib/convertData";

export const SidebarLessons = ({ courseId, lessons, moduleSlug }) => {
    const allLessons = replaceMongoIdInArray(lessons).toSorted((a, b) => a.order - b.order);

    return (
        <AccordionContent className="mb-5">
            <div className="flex flex-col w-full gap-3">
                {allLessons.map((lesson) => (
                    <SidebarLessonItems key={lesson?.id} courseId={courseId} lesson={lesson} moduleSlug={moduleSlug} />
                ))}
            </div>
        </AccordionContent>
    );
};
