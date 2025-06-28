import { SectionTitle } from "@/components/section-title";
import { getCourseDetailsByInstructor } from "@/queries/courses";
import { MessageSquare, Presentation, Star, UsersRound } from "lucide-react";
import Image from "next/image";
import CourseCard from "../../courses/_components/CourseCard";

const InstructorProfile = async ({ params: { instructorId } }) => {
    //? Instructor Courses Details:
    const courseDetailsByInstructor = await getCourseDetailsByInstructor(instructorId.toString());

    //? Instructor Info:
    const courseDetailsByInstructor2 = await getCourseDetailsByInstructor(
        instructorId.toString(),
        true,
    );
    const courses = courseDetailsByInstructor2?.courses;
    const filterInstructor = courses.find(
        ({ instructor }) => instructor?._id.toString() === instructorId,
    );

    const instructor = filterInstructor?.instructor;
    const fullName = instructor?.firstName + " " + instructor?.lastName;

    return (
        <section id="categories" className="space-y-6  py-6  lg:py-12">
            <div className="container grid grid-cols-12 lg:gap-x-8 gap-y-8">
                {/* //? Instructor Info */}
                <div className="col-span-12 lg:col-span-4 ">
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <div className="mb-6">
                            <div className="relative w-36 h-36 rounded-full  mb-5 mx-auto overflow-hidden">
                                <Image
                                    src={instructor?.profilePicture}
                                    alt={fullName}
                                    className="w-full h-full object-cover rounded"
                                    fill
                                />
                            </div>

                            <div>
                                <h4 className="text-xl lg:text-2xl mb-1 text-center">{fullName}</h4>
                                <div className="text-gray-600 font-medium mb-6 text-sm text-center">
                                    {instructor?.designation}
                                </div>
                                <ul className=" items-center gap-3 flex-wrap text-sm text-gray-600 font-medium grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-4">
                                    <li className="flex items-center space-x-3">
                                        <Presentation className="text-gray-600 w-4" />
                                        <div>{courseDetailsByInstructor.courses} Courses</div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <UsersRound className="text-gray-600 w-4" />
                                        <div>{courseDetailsByInstructor.enrollments} Students</div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <MessageSquare className="text-gray-600 w-4" />
                                        <div>{courseDetailsByInstructor.reviews} Reviews</div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <Star className="text-gray-600 w-4" />
                                        <div>
                                            {courseDetailsByInstructor.ratings} Average Rating
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-600 text-xs leading-[1.8]">{instructor?.bio}</p>
                    </div>
                </div>

                {/* //? Courses Info*/}
                <div className="col-span-12 lg:col-span-8">
                    <div>
                        <SectionTitle className="mb-6">Courses</SectionTitle>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            {courses && courses.length > 0 ? (
                                courses.map((course) => (
                                    <CourseCard key={course?.id} course={course} />
                                ))
                            ) : (
                                <p className="text-center text-red-500 text-xl font-semibold">
                                    Courses Not Available
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InstructorProfile;
