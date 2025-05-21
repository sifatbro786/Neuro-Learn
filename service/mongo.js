import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
        return conn;
    } catch (err) {
        console.error(err);
    }
};
