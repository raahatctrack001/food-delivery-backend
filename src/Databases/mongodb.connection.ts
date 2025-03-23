import mongoose, { Connection } from "mongoose";

export const databaseConnection = async (): Promise<Connection | void> => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
        return connectionInstance.connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        setTimeout(databaseConnection, 5000);
    }
};
