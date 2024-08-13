import express from 'express';
const router = express.Router();
import { saveQuizData } from '../controllers/quizController.js';

router.post('/save',saveQuizData )


export default router;