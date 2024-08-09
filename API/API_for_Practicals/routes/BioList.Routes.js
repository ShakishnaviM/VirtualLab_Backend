import express from 'express';
const routers = express.Router();
import { getBioList,getOneItem,createItemList,updateItemList,deleteItemList } from '../controllers/bioList.Controller.js';

routers.get('/',getBioList);
routers.get("/:id" , getOneItem)
routers.post("/", createItemList)
routers.put("/:id",updateItemList)
routers.delete("/:id", deleteItemList)

export default routers