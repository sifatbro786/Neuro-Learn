import { Accordion } from "@/components/ui/accordion";
import { Clock10, BookCheck } from "lucide-react";
import CourseModuleList from "./CourseModuleList";

export default function CourseCurriculum({ course }) {
    const totalDuration = course?.modules.reduce((item, curr) => {
        return item + curr.duration;
    }, 0);

    return (
        <>
            <div className="flex gap-x-5 items-center justify-center flex-wrap my-6 lg:my-6 bg-yellow-400 w-fit mx-auto lg:mx-0 text-gray-900 text-sm px-2 py-0.5 rounded-sm">
                <span className="flex items-center gap-1.5">
                    <BookCheck className="w-4 h-4" />
                    {course?.modules.length} Chapters
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock10 className="w-4 h-4" />
                    {(totalDuration / 60).toPrecision(2)} Hours
                </span>
                {/* <span className="flex items-center gap-1.5">
                    <Radio className="w-4 h-4" />4 Live Class
                </span> */}
            </div>

            {/* //* contents */}
            <Accordion
                defaultValue={["item-1", "item-2", "item-3"]}
                type="multiple"
                collapsible="true"
                className="w-full"
            >
                {course?.modules &&
                    course?.modules.map((module) => (
                        <CourseModuleList key={module._id} module={module} />
                    ))}
            </Accordion>
        </>
    );
}
