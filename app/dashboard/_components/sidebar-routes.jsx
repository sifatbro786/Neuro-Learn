"use client";

import { BarChart, CopyPlus } from "lucide-react";
import { BookOpen } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { BookA } from "lucide-react";

const routes = [
    {
        icon: BarChart,
        label: "Analytics",
        href: "/dashboard",
    },
    {
        icon: BookOpen,
        label: "Courses",
        href: "/dashboard/courses",
    },
    {
        icon: CopyPlus,
        label: "Add Course",
        href: "/dashboard/courses/add",
    },
    {
        icon: BookA,
        label: "Quizzes",
        href: "/dashboard/quiz-sets",
    },
];

export const SidebarRoutes = () => {
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};
