"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { changeModulePublishState, deleteModule } from "@/actions/module";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const ModuleActions = ({ moduleData, courseId }) => {
    const [action, setAction] = useState(null);
    const [published, setPublished] = useState(moduleData?.active);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            switch (action) {
                case "change-active":
                    {
                        const activeState = await changeModulePublishState(moduleData?.id);
                        setPublished(!activeState);

                        toast.success("The module has been updated successfully");
                        router.refresh();
                    }
                    break;

                case "delete":
                    {
                        if (published) {
                            toast.error(
                                "A published module can not be deleted. First unpublished it, then delete.",
                            );
                        } else {
                            await deleteModule(moduleData?.id, courseId);
                            toast.success("The module has been deleted successfully");
                            router.push(`/dashboard/courses/${courseId}`);
                        }
                    }
                    break;

                default: {
                    throw new Error("Invalid Module Actions");
                }
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-x-2">
                <Button variant="outline" size="sm" onClick={() => setAction("change-active")}>
                    {published ? "Unpublish" : "Publish"}
                </Button>

                <Button size="sm" onClick={() => setAction("delete")}>
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
};
