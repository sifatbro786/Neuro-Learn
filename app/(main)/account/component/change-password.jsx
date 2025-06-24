"use client";

import { changePassword } from "@/actions/account";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function ChangePassword({ email }) {
    const [passwordState, setPasswordState] = useState({
        oldPassword: "",
        newPassword: "",
        newPasswordRetype: "",
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setPasswordState({ ...passwordState, [key]: value });
    };

    const doPasswordChange = async (e) => {
        e.preventDefault();

        if (passwordState.newPassword !== passwordState.newPasswordRetype) {
            toast.error("New passwords do not match.");
            return;
        }

        try {
            await changePassword(email, passwordState.oldPassword, passwordState.newPassword);
            toast.success("Password changed successfully.");

            setPasswordState({
                oldPassword: "",
                newPassword: "",
                newPasswordRetype: "",
            });
        } catch (err) {
            console.error(err);
            toast.error(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
            <form onSubmit={doPasswordChange}>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <Label className="mb-2 block">Old password :</Label>
                        <Input
                            type="password"
                            placeholder="Old password"
                            name="oldPassword"
                            value={passwordState.oldPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block">New password :</Label>
                        <Input
                            type="password"
                            placeholder="New password"
                            name="newPassword"
                            value={passwordState.newPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block">Re-type New password :</Label>
                        <Input
                            type="password"
                            name="newPasswordRetype"
                            placeholder="Re-type New password"
                            value={passwordState.newPasswordRetype}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                {/*end grid*/}
                <Button className="mt-5 cursor-pointer" type="submit">
                    Save password
                </Button>
            </form>
        </div>
    );
}
