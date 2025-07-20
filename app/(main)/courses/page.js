"use client";

import SearchCourse from "./_components/SearchCourse";
import SortCourse from "./_components/SortCourse";
import FilterCourseMobile from "./_components/FilterCourseMobile";
import ActiveFilters from "./_components/ActiveFilters";
import FilterCourse from "./_components/FilterCourse";
import CourseCard from "./_components/CourseCard";
import { useEffect, useMemo, useState } from "react";
import Loader from "@/components/Loader";

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("");
    const [filter, setFilter] = useState({
        categories: [],
        price: [],
    });

    const applyArrayFilter = ({ type, value }) => {
        const isApplied = filter[type].includes(value);
        setFilter((prev) => ({
            ...prev,
            [type]: isApplied ? prev[type].filter((v) => v !== value) : [...prev[type], value],
        }));
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch("/api/courses");
                const data = await res.json();
                setCourses(data);
            } catch (error) {
                console.error("Failed to load courses:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const filteredCourses = useMemo(() => {
        let result = [...courses];

        //? search:
        if (searchText) {
            result = result.filter((course) =>
                course.title.toLowerCase().includes(searchText.toLowerCase()),
            );
        }

        //? filter by category:
        if (filter.categories.length > 0) {
            result = result.filter((course) =>
                filter.categories.includes(course.category?.title?.toLowerCase()),
            );
        }

        //? filter by price:
        if (filter.price.length > 0) {
            result = result.filter((course) => {
                if (filter.price.includes("free") && course.price === 0) return true;
                if (filter.price.includes("paid") && course.price > 0) return true;
                return false;
            });
        }

        //? sort by price:
        if (sortType === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortType === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [searchText, sortType, courses, filter]);

    return (
        <section className="container space-y-6 dark:bg-transparent py-6 pt-20">
            {/* //? header */}
            <div className="flex items-baseline justify-between border-gray-200 border-b pb-2 lg:pb-6 flex-col gap-4 lg:flex-row">
                {/* //* Search */}
                <SearchCourse onSearch={setSearchText} />

                <div className="flex items-center justify-between lg:justify-end gap-2 max-lg:w-full">
                    {/* //* Sorting */}
                    <SortCourse onSortChange={setSortType} />

                    {/* //* Filter Menus For Mobile */}
                    <FilterCourseMobile filter={filter} applyArrayFilter={applyArrayFilter} />
                </div>
            </div>

            {/* //* active filters */}
            <ActiveFilters filter={filter} applyArrayFilter={applyArrayFilter} />

            <section className="pb-24 pt-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* //* Filters -> (desktop + mobile) */}
                    <FilterCourse filter={filter} applyArrayFilter={applyArrayFilter} />

                    {/* //* Course List */}
                    <div className="lg:col-span-3">
                        {isLoading ? (
                            <Loader />
                        ) : filteredCourses.length > 0 ? (
                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                {filteredCourses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-red-500 text-xl font-semibold">
                                Courses Not Available
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
}
