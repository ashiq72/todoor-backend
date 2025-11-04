import express from "express";
import { ItemControllers } from "./item.controller";
const router = express.Router();

router.post("/create-item", ItemControllers.createItem);
router.get("/", ItemControllers.getAllItems);

export const ItemRoutes = router;
