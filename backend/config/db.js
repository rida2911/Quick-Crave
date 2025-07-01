import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();                       // loads .env variables

// NOTE: keep your URI in .env for safety
const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://ridajahan:Ridaah2911@cluster0.pckmbpl.mongodb.net/QuickCrave";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅  MongoDB connected");
  } catch (err) {
    console.error("❌  MongoDB connection error:", err.message);
    process.exit(1);                  // stop app if DB fails
  }
};
