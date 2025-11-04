import { Router } from "express";
import { ItemRoutes } from "../app/modules/item/item.route";

const router = Router();

router.use("/items", ItemRoutes);
export default router;
