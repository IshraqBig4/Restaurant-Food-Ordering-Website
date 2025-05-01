import express from "express";
import { query } from "express-validator";
import { getMenu } from "../controllers/menuController.js";

const menuRouter = express.Router();

menuRouter.get(
    "/",
    [
        query("category")
            .optional()
            .trim()
            .isString()
            .withMessage("Category must be a string"),
    ],
    getMenu
);

export default menuRouter;