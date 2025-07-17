"use client";

import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SidebarLessons } from "./sidebar-lessons";
import { replaceMongoIdInArray } from "@/lib/convertData";
import { useSearchParams } from "next/navigation";

export const SidebarModules = ({ courseId, modules }) => {
    const searchParams = useSearchParams();

    const allModules = replaceMongoIdInArray(modules).toSorted((a, b) => a.order - b.order);

    //? Expand module:
    const query = searchParams.get("name");
    const expandModule = allModules.find((moduleData) => {
        return moduleData?.lessonIds.find((lesson) => lesson?.slug === query);
    });
    const expandModuleId = expandModule?.id ?? allModules[0]?.id;

    return (
        <Accordion defaultValue={expandModuleId} type="single" collapsible className="w-full px-6">
            {allModules.map((moduleData) => (
                <AccordionItem key={moduleData?.id} className="border-0" value={moduleData?.id}>
                    <AccordionTrigger>{moduleData?.title}</AccordionTrigger>

                    {/* //? lessons */}
                    <SidebarLessons courseId={courseId} lessons={moduleData?.lessonIds} moduleSlug={moduleData?.slug} />
                </AccordionItem>
            ))}
        </Accordion>
    );
};
