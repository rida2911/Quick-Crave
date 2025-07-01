import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name:        { type: String,  required: true },
    description: { type: String,  required: true },
    price:       { type: Number,  required: true },
    image:       { type: String,  required: true },
    category:    { type: String,  required: true },
  },
  { timestamps: true }                   // optional: createdAt / updatedAt
);

// Re‑use the model if it already exists in dev hot‑reload
const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default Food;
