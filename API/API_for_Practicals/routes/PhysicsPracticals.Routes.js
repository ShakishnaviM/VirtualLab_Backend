import express from 'express';
const router = express.Router();

import { getItem,getOneItem,deleteItemList } from '../controllers/physicspracticals.controller.js';


// Routes
router.get('/physicspracticals', getItem);
router.get('/physicspracticals/:id', getOneItem);

router.delete('/physicspracticals/:id', deleteItemList);

export default router;
