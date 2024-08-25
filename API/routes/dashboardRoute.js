import express from 'express';
import { progress } from '../controller/dashboardController.js';

const router = express.Router();

// Use userID as a route parameter
router.get("/progress/:userID", progress);

export default router;
