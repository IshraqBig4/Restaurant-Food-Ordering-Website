import { validationResult } from "express-validator";
import Order from "../models/orderModel.js";
import { v4 as uuidv4 } from "uuid";

export const createOrder = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const { customer, items, payment, total } = req.body;

        // Generate unique order ID
        const orderId = uuidv4();

        // Create order
        const order = new Order({
            customer,
            items,
            payment,
            total,
            userId: req.userId,
            orderId,
        });

        // Save to MongoDB
        await order.save();

        res.status(201).json({ success: true, orderId });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};