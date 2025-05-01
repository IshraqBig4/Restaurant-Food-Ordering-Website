import { validationResult } from "express-validator";
import Menu from "../models/menuModel.js";

export const getMenu = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { category } = req.query;
        const query = category ? { category } : {};
        const menuItems = await Menu.find(query);

        res.status(200).json({ success: true, data: menuItems });
    } catch (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};