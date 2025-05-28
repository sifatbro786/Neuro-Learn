import { CheckCheck } from "lucide-react";

export default function CourseOverview({ description, learning }) {
    return (
        <>
            <h3 className="text-xl lg:text-2xl">Course Description</h3>
            <p className="mt-4">{description}</p>
            <div className="bg-gray-50 space-y-6 p-8 rounded-md lg:mt-8">
                <h4 className="text-lg lg:text-xl">What You will Learn?</h4>
                <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                    {learning &&
                        learning.map((item) => (
                            <li key={item} className="flex space-x-3">
                                <div className="flex-none relative top-1">
                                    <CheckCheck />
                                </div>
                                <div className="flex-1">{item}</div>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
