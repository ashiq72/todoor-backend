import express from "express";
import { ItemControllers } from "./item.controller";
const router = express.Router();

router.post("/create-item", ItemControllers.createItemFaculty);

export const ItemRoutes = router;
