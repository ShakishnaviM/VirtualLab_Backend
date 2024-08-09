import express from 'express';
const router = express.Router();

import { getItem,getOneItem,deleteItemList } from '../controllers/chemistryPracticals.controller.js';


// Routes
router.get('/chemistrypracticals', getItem);
router.get('/chemistrypracticals/:id', getOneItem);

router.delete('/chemistrypracticals/:id', deleteItemList);

export default router;
