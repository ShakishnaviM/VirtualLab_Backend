import express from 'express';
import { progress} from '../controller/dashboardController.js';

const router = express.Router();

router.get("/progress", progress);

export default router;
//dashboard router