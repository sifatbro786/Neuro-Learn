import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
    if (isConnected) return;

    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
        isConnected = true;

        return conn;
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};
