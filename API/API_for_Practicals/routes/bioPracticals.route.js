import express from 'express';
const router = express.Router();

import { getItem,getOneItem,deleteItemList } from '../controllers/bioPractical.controller.js';


// Routes
router.get('/biologypracticals', getItem);
router.get('/biopracticals/:id', getOneItem);
router.delete('/biopracticals/:id', deleteItemList);

export default router;
