import { CourseProgress } from "@/components/course-progress";
import { GiveReview } from "./give-review";
import { DownloadCertificate } from "./download-certificate";
import { SidebarModules } from "./sidebar-modules";
import { getCourseDetails } from "@/queries/courses";
import { Watch } from "@/model/watch-model";
import { getAReport } from "@/queries/reports";

export const CourseSidebar = async ({ courseId, userId }) => {
    const course = await getCourseDetails(courseId);

    const updatedModules = await Promise.all(
        course.modules.map(async (moduleData) => {
            const moduleId = moduleData._id.toString();
            const lessons = moduleData.lessonIds;

            await Promise.all(
                lessons.map(async (lesson) => {
                    const lessonId = lesson._id.toString();
                    const watch = await Watch.findOne({
                        lesson: lessonId,
                        module: moduleId,
                        user: userId,
                    }).lean();

                    if (watch?.state === "completed") {
                        lesson.state = "completed";
                    }
                    return lesson;
                }),
            );
            return moduleData;
        }),
    );

    //? report data for progress-bar:
    const report = await getAReport({ course: courseId, student: userId });

    const totalCompletedModules = report?.totalCompletedModules
        ? report?.totalCompletedModules?.length
        : 0;
    const totalModules = course?.modules ? course?.modules?.length : 0;

    const totalProgress = totalModules > 0 ? (totalCompletedModules / totalModules) * 100 : 0;

    return (
        <>
            <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
                <div className="p-8 flex flex-col border-b">
                    <h1 className="font-semibold">Reactive Accelerator</h1>
                    <div className="mt-10">
                        <CourseProgress variant="success" value={totalProgress} />
                    </div>
                </div>

                <SidebarModules courseId={courseId} modules={updatedModules} />

                <div className="w-full px-6">
                    <DownloadCertificate course={course} totalProgress={totalProgress} />
                    <GiveReview courseId={courseId} userId={userId} />
                </div>
            </div>
        </>
    );
};
