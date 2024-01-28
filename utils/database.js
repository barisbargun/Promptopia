import mongoose, { Schema, model, models } from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  await mongoose.connect(
    process.env.MONGODB_URI,
    {
      dbName: "share_prompt"
    })

  isConnected = true;
}