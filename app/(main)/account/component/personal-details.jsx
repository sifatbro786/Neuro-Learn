"use client";

import { updateUserInfo } from "@/actions/account";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function PersonalDetails({ userInfo }) {
    const [infoState, setInfoState] = useState({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        designation: userInfo.designation,
        bio: userInfo.bio,
    });

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setInfoState({
            ...infoState,
            [field]: value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateUserInfo(userInfo?.email, infoState);
            toast.success("User details updated successfully.");
        } catch (err) {
            console.error(err);
            toast.error(`Error: ${err.message}`);
        }
    };

    return (
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
            <form onSubmit={handleUpdate}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <Label className="mb-2 block" htmlFor="firstName">
                            First Name : <span className="text-red-600">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="First Name:"
                            id="firstName"
                            name="firstName"
                            value={infoState.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block" htmlFor="lastName">
                            Last Name : <span className="text-red-600">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Last Name:"
                            name="lastName"
                            value={infoState.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block">
                            Your Email : <span className="text-red-600">*</span>
                        </Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={infoState.email}
                            disabled
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block">Occupation :</Label>
                        <Input
                            name="designation"
                            id="designation"
                            type="text"
                            placeholder="Occupation :"
                            value={infoState.designation}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/*end grid*/}
                <div className="grid grid-cols-1">
                    <div className="mt-5">
                        <Label className="mb-2 block">Bio :</Label>
                        <Textarea
                            id="bio"
                            name="bio"
                            placeholder="Enter Your Bio :"
                            value={infoState.bio}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/*end row*/}
                <Button className="mt-5 cursor-pointer" asChild>
                    <input type="submit" name="send" value="Save Changes" />
                </Button>
            </form>
            {/*end form*/}
        </div>
    );
}
