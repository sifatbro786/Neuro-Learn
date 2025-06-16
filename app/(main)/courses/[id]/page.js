import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
// import RelatedCourses from "./_components/RelatedCourses";
import { getCourseDetails } from "@/queries/courses";
import { replaceMongoIdInArray } from "@/lib/convertData";

export default async function SingleCoursePage({ params: { id } }) {
    const course = await getCourseDetails(id);

    return (
        <>
            {/* //* Intro */}
            <CourseDetailsIntro course={course} />

            {/* //* Course Details */}
            <CourseDetails course={course} />

            {/* //* Testimonials */}
            {course?.testimonials && (
                <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />
            )}

            {/* //* Related Courses */}
            {/* // TODO */}
            {/* <RelatedCourses /> */}
        </>
    );
}
