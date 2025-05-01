import express from "express";
import { body, validationResult } from "express-validator";
import { createOrder } from "../controllers/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

orderRouter.post(
    "/",
    [
        // Customer validation
        body("customer.name").trim().notEmpty().withMessage("Customer name is required"),
        body("customer.phone")
            .trim()
            .notEmpty()
            .withMessage("Phone number is required")
            .matches(/^\+?\d{9,15}$/)
            .withMessage("Invalid phone number format"),
        body("customer.email")
            .optional()
            .isEmail()
            .withMessage("Invalid email format")
            .normalizeEmail(),
        body("customer.address").trim().notEmpty().withMessage("Address is required"),
        body("customer.city").trim().notEmpty().withMessage("City is required"),
        body("customer.zipCode")
            .optional()
            .matches(/^[a-zA-Z0-9\s-]*$/)
            .withMessage("Invalid zip code format"),
        body("customer.directions").optional().trim(),

        // Items validation
        body("items").isArray({ min: 1 }).withMessage("At least one item is required"),
        body("items.*.id").trim().notEmpty().withMessage("Item ID is required"),
        body("items.*.name").trim().notEmpty().withMessage("Item name is required"),
        body("items.*.price").isFloat({ min: 0 }).withMessage("Item price must be a positive number"),
        body("items.*.quantity").isInt({ min: 1 }).withMessage("Item quantity must be a positive integer"),
        body("items.*.category").optional().trim(),
        body("items.*.image").optional().trim(),

        // Payment and total validation
        body("payment").equals("cash").withMessage("Payment method must be 'cash'"),
        body("total")
            .trim()
            .notEmpty()
            .withMessage("Total is required")
            .matches(/^\d+(\.\d{1,2})?\sSAR$/)
            .withMessage("Total must be a valid monetary value (e.g., '25 SAR' or '25.00 SAR')"),
    ],
    authMiddleware,
    createOrder
);

export default orderRouter;