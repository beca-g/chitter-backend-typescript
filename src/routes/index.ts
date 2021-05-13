import { Router } from "express";
import chitterRouter from "./chitter";

const router = Router();

router.use("/chitter", chitterRouter);

export default router;