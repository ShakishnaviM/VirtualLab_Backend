import express from 'express';
import {signIn, signUp, google} from '../controller/authController.js';

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google", google);
export default router;