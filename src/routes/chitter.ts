import { Router, Request, Response } from 'express';
import { Chitter } from '../models/chitter'

const router = Router();
let chitter = new Chitter();

// @route GET /dashboard
// @desc Authenticate a user
// @access PUBLIC

router.get('/', (req: Request, res: Response) => {
    // res.send(200);
    res.send(chitter.getAllPeeps());
});

export default router;