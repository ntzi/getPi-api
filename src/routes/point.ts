import { Router } from 'express';
import Point from '../controllers/point.js';

const router = Router();
const point = new Point();

router.get('/point/test', point.test)
router.get('/point', point.createMany);

export default router;
