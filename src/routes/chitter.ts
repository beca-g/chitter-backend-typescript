import express, { Router, Request, Response } from "express";
import { ChitterController } from "../controllers/chitter/chitter";

const router = Router({});

router.use(express.json());
router.use(express.urlencoded({ extended: false }))

const chitterController = new ChitterController();

router.get("/", (req: Request, res: Response) => {
	return res.status(200).send(chitterController.read());
});

router.post("/", (req: Request, res: Response) => {
	console.log("POST ROUTE REACHED")
	const peep = req.body.body
	console.log("body is", peep);
	chitterController.createPeep(peep)
	res.send(req.body)
});

export default router;
