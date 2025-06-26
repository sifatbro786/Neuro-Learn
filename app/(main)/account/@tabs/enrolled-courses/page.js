import { auth } from "@/auth";
import EnrollCourseCard from "../../component/enroll-courseCard";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/queries/users";
import { getEnrollmentsForUser } from "@/queries/enrollments";

async function EnrolledCourses() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    const loggedInUser = await getUserByEmail(session?.user?.email);
    const enrollments = await getEnrollmentsForUser(loggedInUser?.id);

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {enrollments && enrollments.length > 0 ? (
                enrollments.map((enrollment) => (
                    <EnrollCourseCard key={enrollment?.id} enrollment={enrollment} />
                ))
            ) : (
                <p className="text-3xl text-center">No Enrollments Found!</p>
            )}
        </div>
    );
}

export default EnrolledCourses;
