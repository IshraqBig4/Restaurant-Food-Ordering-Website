import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: String,
        address: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: String,
        directions: String,
    },
    items: [{
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        category: String,
        image: String,
    }],
    payment: { type: String, required: true },
    total: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);