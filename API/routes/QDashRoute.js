import express from 'express';
import { verifyToken } from '../Utils/verifyUser.js';
import { getQData } from '../controller/QDashController.js';

const router = express.Router();

router.get('/', getQData);

export default router;