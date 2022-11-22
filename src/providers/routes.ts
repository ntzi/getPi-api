import { Router } from 'express';
import point from '../routes/point.js'

const rootRouter = Router();

rootRouter.use('/api', point);

export default rootRouter;
