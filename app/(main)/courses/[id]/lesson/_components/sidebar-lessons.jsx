import { AccordionContent } from "@radix-ui/react-accordion";
import { SidebarLessonItems } from "./sidebar-lesson-items";

export const SidebarLessons = () => {
    return (
        <AccordionContent>
            <div className="flex flex-col w-full gap-3">
                <SidebarLessonItems />
            </div>
        </AccordionContent>
    );
};
