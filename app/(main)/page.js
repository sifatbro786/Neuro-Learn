import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getCategories } from "@/queries/categories"
import { getCoursesList } from "@/queries/courses"
import { ArrowRightIcon, BookOpenIcon } from "lucide-react"
import Link from "next/link"
import CourseCard from "./courses/_components/CourseCard"
import { CategoryCard } from "@/components/category-card"
import HeroSection from "@/components/home/HeroSection"
import HowItWorks from "@/components/home/HowItWorks"
import LearningPlatformComponent from "@/components/home/LearningPlatformComponent"

export default async function HomePage() {
    const courses = await getCoursesList()
    const categories = await getCategories()

    return (
        <>
            <HeroSection />


            {/* course category */}
            <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Explore by Category</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Choose from our wide range of categories to find the perfect learning path for you
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {categories.map((category) => {
                            return <CategoryCard key={category?.id} category={category} />
                        })}
                    </div>
                </div>
            </section>

            <LearningPlatformComponent/>

            {/* favourite course */}
            <section id="courses" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Courses</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Start your learning journey with our most popular courses
                            </p>
                        </div>
                        <Link
                            href={"/courses"}
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 mt-4 sm:mt-0"
                        >
                            Browse All Courses
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {courses.length > 0 ? (
                            courses.slice(0, 8).map((course) => {
                                return <CourseCard key={course?.id} course={course} />
                            })
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <BookOpenIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No Courses Available</p>
                                <p className="text-gray-500 dark:text-gray-500">Check back soon for new courses!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <HowItWorks />

        </>
    )
}
