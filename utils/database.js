import mongoose, { Schema, model, models } from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("connected to MongoDB")
    return;
  }

  try {
    mongoose.connect(
      process.env.MONGODB_URI,
      {
        dbName: "share_prompt"
      })

    isConnected = true;
		
		console.log("Mongodb has connected")

  } catch (error) {

  }

}