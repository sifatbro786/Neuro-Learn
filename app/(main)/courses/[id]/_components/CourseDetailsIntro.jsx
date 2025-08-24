import { auth } from "@/auth";
import EnrollCourse from "@/components/enroll-course";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hasEnrollmentForCourse } from "@/queries/enrollments";
import { getUserByEmail } from "@/queries/users";
import Image from "next/image";
import Link from "next/link";

export default async function CourseDetailsIntro({ course }) {
    const session = await auth();
    const loggedInUser = await getUserByEmail(session?.user?.email);
    const hasEnrollment = await hasEnrollmentForCourse(course?.id, loggedInUser?.id);

    return (
        <div className="overflow-x-hidden grainy">
            <section className="pt-12 pb-5 lg:pt-16 lg:pb-10">
                <div className="container">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            {/* Content Section - Left Side */}
                            <div className="lg:w-1/2">
                                <h1 className="text-lg text-gray-600 font-inter mb-4">
                                    {course?.subtitle}
                                </h1>
                                <p className="text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-5xl  font-pj mb-6">
                                    <span className="relative inline-flex sm:inline">
                                        <span className="bg-gradient-to-r from-[#044060] via-[#1670ef] to-[#ffffff] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                        <span className="relative">{course?.title}</span>
                                    </span>
                                </p>


                                <div className="flex flex-wrap gap-4">
                                    {hasEnrollment ? (
                                        <Link
                                            href={`/courses/${course?.id}/lesson`}
                                            className={cn(buttonVariants({ size: "lg" }), "flex-1 min-w-[180px] text-center")}
                                        >
                                            Access Course
                                        </Link>
                                    ) : (
                                        <div className="flex-1 min-w-[180px]">
                                            <EnrollCourse courseId={course?.id} />
                                        </div>
                                    )}

                                </div>

                                {/* Course stats */}
                                <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{course?.lessonsCount || 12}+</p>
                                        <p className="text-gray-600">Lessons</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{course?.duration || 8}+</p>
                                        <p className="text-gray-600">Hours</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{course?.level || "Intermediate"}</p>
                                        <p className="text-gray-600">Level</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section - Right Side */}
                            <div className="lg:w-1/2">
                                <div className="relative rounded-xl overflow-hidden ">
                                    <Image
                                        className="object-cover w-full"
                                        width={600}
                                        height={400}
                                        src={`/assets/images/courses/${course?.thumbnail}`}
                                        alt={course?.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}