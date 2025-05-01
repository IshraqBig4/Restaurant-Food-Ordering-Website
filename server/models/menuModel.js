import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String, required: true },
    description: { type: String },
});

export default mongoose.model("Menu", menuSchema);