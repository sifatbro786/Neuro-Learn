"use client";

import { updateUserContact } from "@/actions/account";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactInfo({ userInfo }) {
    const [contactState, setContactState] = useState({
        phone: userInfo?.phone,
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setContactState({ ...contactState, [key]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUserContact(userInfo?.email, contactState);
            toast.success("User contact updated successfully.");
        } catch (err) {
            console.error(err);
            toast.error(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <Label className="mb-2 block">Phone No :</Label>
                        <Input
                            id="number"
                            type="number"
                            name="phone"
                            placeholder="Phone :"
                            onChange={handleChange}
                            value={contactState?.phone}
                        />
                    </div>
                    {/* <div>
                        <Label className="mb-2 block">Website :</Label>
                        <Input name="url" id="url" type="url" placeholder="Url :" />
                    </div> */}
                </div>
                {/*end grid*/}
                <Button
                    className="mt-5 cursor-pointer"
                    type="submit"
                    disabled={userInfo?.phone === contactState?.phone}
                >
                    {userInfo?.phone ? "Save Contact" : "Add"}
                </Button>
            </form>
        </div>
    );
}
