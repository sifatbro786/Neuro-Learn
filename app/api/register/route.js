import { User } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { firstName, lastName, email, password, userRole } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: userRole,
    };``

    await dbConnect();
    try {
        await User.create(newUser);
        return new NextResponse("User has been created!", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
