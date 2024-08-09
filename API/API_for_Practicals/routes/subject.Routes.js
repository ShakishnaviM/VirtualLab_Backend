import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import {getSubjects,getsubject,createSubject,updateSubject,deleteSubject} from '../controllers/subject.controller.js'


router.get('/',getSubjects  )
router.get("/:id" , getsubject)
router.post("/", createSubject)
router.put("/api/subjects/:id",updateSubject)
router.delete("/:id", deleteSubject)


export default router;