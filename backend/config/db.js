import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();                       // loads .env variables

// NOTE: keep your URI in .env for safety
const MONGO_URI =
  process.env.MONGODB_URI ||
 const URI = "mongodb+srv://username:password@cluster0.mongodb.net/Quickcrave";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅  MongoDB connected");
  } catch (err) {
    console.error("❌  MongoDB connection error:", err.message);
    process.exit(1);                  // stop app if DB fails
  }
};
