import { Router } from "express";
import { ItemRoutes } from "../app/modules/item/item.route";

const router = Router();

router.use("/item", ItemRoutes);
export default router;
