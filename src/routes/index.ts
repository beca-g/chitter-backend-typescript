import { Router } from 'express';
import chitter from './chitter';

const router = Router();

router.use('/chitter', chitter);

export default router;