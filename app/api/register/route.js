import { User } from "@/model/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { firstName, lastName, email, password, userRole } = await request.json();

    await dbConnect();

    try {
        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "Email already in use!" }, { status: 400 });
        }

        // ✅ Hash password
        const hashedPassword = await bcrypt.hash(password, 5);

        const newUser = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: userRole,
        };

        await User.create(newUser);
        return NextResponse.json({ message: "User has been created!" }, { status: 201 });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
