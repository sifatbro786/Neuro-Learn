"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { addQuizToQuizSet, updateQuiz } from "@/actions/quiz";
import { useQuizId } from "@/hooks/useQuiz";
import { useEffect, useMemo } from "react";

const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    optionA: z.object({
        label: z.string().min(1, { message: "Option label is required" }),
        isTrue: z.boolean().default(false),
    }),
    optionB: z.object({
        label: z.string().min(1, { message: "Option label is required" }),
        isTrue: z.boolean().default(false),
    }),
    optionC: z.object({
        label: z.string().min(1, { message: "Option label is required" }),
        isTrue: z.boolean().default(false),
    }),
    optionD: z.object({
        label: z.string().min(1, { message: "Option label is required" }),
        isTrue: z.boolean().default(false),
    }),
});

export const AddQuizForm = ({ quizSetId, quizSet }) => {
    const router = useRouter();
    const { quizId, setQuizId } = useQuizId();

    const filteredQuiz = useMemo(() => {
        return quizSet?.quizIds?.filter((quiz) => quiz?._id === quizId) || [];
    }, [quizSet, quizId]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "all",
        defaultValues: {
            title: "",
            description: "",
            optionA: { label: "", isTrue: false },
            optionB: { label: "", isTrue: false },
            optionC: { label: "", isTrue: false },
            optionD: { label: "", isTrue: false },
        },
    });

    const { isSubmitting } = form.formState;

    useEffect(() => {
        if (filteredQuiz && filteredQuiz.length === 1) {
            const data = filteredQuiz[0];
            form.reset({
                title: data.title || "",
                description: data.description || "",
                optionA: {
                    label: data.options[0]?.text || "",
                    isTrue: data.options[0]?.is_correct || false,
                },
                optionB: {
                    label: data.options[1]?.text || "",
                    isTrue: data.options[1]?.is_correct || false,
                },
                optionC: {
                    label: data.options[2]?.text || "",
                    isTrue: data.options[2]?.is_correct || false,
                },
                optionD: {
                    label: data.options[3]?.text || "",
                    isTrue: data.options[3]?.is_correct || false,
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizId]);

    const onSubmit = async (values) => {
        try {
            const correctness = [
                values.optionA.isTrue,
                values.optionB.isTrue,
                values.optionC.isTrue,
                values.optionD.isTrue,
            ];
            const correctMarked = correctness.filter((c) => c);
            const isOneCorrectMarked = correctMarked.length === 1;

            if (!isOneCorrectMarked) {
                toast.error("You must mark only one correct answer.");
                return;
            }

            if (filteredQuiz.length === 1) {
                // ✅ Edit Mode
                await updateQuiz(quizId, values);
                toast.success("The Quiz has been updated.");
                setQuizId(null);
            } else {
                // ✅ Create Mode
                await addQuizToQuizSet(quizSetId, values);
                toast.success("New quiz created successfully!");
            }

            form.reset({
                title: "",
                description: "",
                optionA: { label: "", isTrue: false },
                optionB: { label: "", isTrue: false },
                optionC: { label: "", isTrue: false },
                optionD: { label: "", isTrue: false },
            });

            router.refresh();
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="mt-6 border bg-gray-50 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                {filteredQuiz.length === 1 ? "Edit Quiz" : "Add New Quiz"}
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quiz Title</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isSubmitting}
                                        placeholder="Enter quiz question"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quiz Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={isSubmitting}
                                        placeholder="Enter quiz description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Option A */}
                    <div className="space-y-3">
                        <FormLabel>Option A</FormLabel>
                        <div className="flex items-start gap-3">
                            <FormField
                                control={form.control}
                                name="optionA.isTrue"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 border p-3">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="optionA.label"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isSubmitting}
                                                    placeholder="Enter Option A"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Option B */}
                    <div className="space-y-3">
                        <FormLabel>Option B</FormLabel>
                        <div className="flex items-start gap-3">
                            <FormField
                                control={form.control}
                                name="optionB.isTrue"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 border p-3">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="optionB.label"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isSubmitting}
                                                    placeholder="Enter Option B"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Option C */}
                    <div className="space-y-3">
                        <FormLabel>Option C</FormLabel>
                        <div className="flex items-start gap-3">
                            <FormField
                                control={form.control}
                                name="optionC.isTrue"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 border p-3">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="optionC.label"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isSubmitting}
                                                    placeholder="Enter Option C"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Option D */}
                    <div className="space-y-3">
                        <FormLabel>Option D</FormLabel>
                        <div className="flex items-start gap-3">
                            <FormField
                                control={form.control}
                                name="optionD.isTrue"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 border p-3">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="optionD.label"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isSubmitting}
                                                    placeholder="Enter Option D"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button disabled={isSubmitting} type="submit">
                            {filteredQuiz.length === 1 ? "Update" : "Save"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
