"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { credentialLogin } from "@/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LoginForm() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const response = await credentialLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                toast.error(response?.error);
            } else {
                toast.success("Sign-in successfully");
                router.push("/");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Card className="mx-auto max-w-sm w-full">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>

                                {/* //TODO: Forgot password */}
                                {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                                      Forgot your password?
                                    </Link> 
                                */}
                            </div>
                            <Input id="password" type="password" name="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <p>
                        Register as{" "}
                        <Link href="/register/student" className="underline">
                            Student
                        </Link>{" "}
                        or{" "}
                        <Link href="/register/instructor" className="underline">
                            Instructor
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
