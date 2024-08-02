import express from 'express';
const routers = express.Router();

import { getPhysicsList,  getOneItem,createItemList,updateItemList,deleteItemList} from '../controllers/Phy.controller.js'

routers.get('/',getPhysicsList);
routers.get("/:id" , getOneItem)
routers.post("/", createItemList)
routers.put("/:id",updateItemList)
routers.delete("/:id", deleteItemList)


export default routers;