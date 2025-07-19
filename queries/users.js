import { replaceMongoIdInObject } from "@/lib/convertData";
import { User } from "@/model/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email) {
    await dbConnect();

    try {
        const user = await User.findOne({ email: email }).select("-password").lean();
        return replaceMongoIdInObject(user);
    } catch (err) {
        throw new Error(err);
    }
}

export async function getUserDetails(userId) {
    await dbConnect();

    try {
        const user = await User.findById(userId).select("-password").lean();
        return replaceMongoIdInObject(user);
    } catch (err) {
        throw new Error(err);
    }
}

export async function validatePassword(email, password) {
    await dbConnect();

    try {
        const user = await getUserByEmail(email);
        const isMatch = await bcrypt.compare(password, user?.password);
        return isMatch;
    } catch (err) {
        throw new Error(err);
    }
}
