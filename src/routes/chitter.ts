import express, { Router, Request, Response } from "express";
import { ChitterController } from "../controllers/chitter/chitter";

const router = Router({});

router.use(express.json());
router.use(express.urlencoded({ extended: false }))

const chitterController = new ChitterController();

router.get("/peeps", (req: Request, res: Response) => {
	return res.status(200).send(chitterController.readPeeps());
});

router.post("/peeps", (req: Request, res: Response) => {
	console.log("POST PEEP ROUTE REACHED")
	const peep = req.body.body
	console.log("body is", peep);
	chitterController.createPeep(peep)
	res.send(req.body)
});

router.post("/users", (req: Request, res: Response) => {
	console.log("POST REGISTER ROUTE REACHED")
	const username = req.body.username
	const email = req.body.email
	const password = req.body.password
	console.log("new user is", username);
	chitterController.createUser(username, email, password)
	res.send(req.body.username)
});

router.get("/users", (req: Request, res: Response) => {
	return res.status(200).send(chitterController.readUsers());
});

export default router;
