import express from 'express';
import { test, updateUser , userDelete} from '../controller/userController.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", userDelete);

export default router;