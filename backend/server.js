// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";   // <- make sure file name matches!

dotenv.config();                                   // read .env

const app  = express();
const PORT = process.env.PORT || 4000;

/* ---------- middleware ---------- */
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",               // front‑end dev URL
    credentials: true,
  })
);
app.use("/images", express.static("uploads"));     // serve uploaded images

/* ---------- routes ---------- */
app.get("/", (_, res) => res.send("API working 🚀"));
app.use("/api/food", foodRouter);

/* ---------- DB connect + start server ---------- */
try {
  await connectDB();                               // waits for Mongo
  app.listen(PORT, () =>
    console.log(`🚀  Server started on http://localhost:${PORT}`)
  );
} catch (err) {
  console.error("❌  Unable to start server:", err.message);
  process.exit(1);
}



