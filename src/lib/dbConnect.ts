import mongoose, { ConnectOptions } from "mongoose";

type Connection = {
    isConnected?: number;
}

const connection: Connection = {};

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI as string || '', {} as ConnectOptions);
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected");
    }catch(err){
        console.log("Database connection failed: ", err);
        process.exit(1);
    }
}

export default dbConnect;
