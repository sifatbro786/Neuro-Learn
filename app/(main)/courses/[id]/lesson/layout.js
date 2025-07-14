import { CourseSidebarMobile } from "./_components/course-sidebar-mobile";
import { CourseSidebar } from "./_components/course-sidebar";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { redirect } from "next/navigation";
import { hasEnrollmentForCourse } from "@/queries/enrollments";

const CourseLayout = async ({ children, params: { id } }) => {
    const loggedInUser = await getLoggedInUser();
    if (!loggedInUser) redirect("/login");

    const isEnrolled = await hasEnrollmentForCourse(id, loggedInUser?.id);
    if (!isEnrolled) {
        redirect(`/courses`);
    }

    return (
        <div>
            <div className="h-[80px] lg:pl-96 fixed top-[60px] inset-y-0 w-full z-10">
                <div className="relative p-4 border-b h-full flex lg:hidden items-center bg-white shadow-sm">
                    {/* //? Course Sidebar For Mobile */}
                    <CourseSidebarMobile courseId={id} />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="hidden lg:flex h-full w-96 flex-col inset-y-0 z-10">
                    {/* //? sidebar starts */}
                    <CourseSidebar courseId={id} userId={loggedInUser?.id} />
                </div>
                <main className="lg:pl-96 pt-[80px] lg:pt-[20px] h-full col-span-10 px-4">
                    {children}
                </main>
            </div>
        </div>
    );
};
export default CourseLayout;
