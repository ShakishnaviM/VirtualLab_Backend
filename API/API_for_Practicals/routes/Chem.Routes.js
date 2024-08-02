import express from 'express';
const routers = express.Router();

import { getChemistryList,  getOneItem,createItemList,updateItemList,deleteItemList} from '../controllers/Chem.Controller.js'

routers.get('/',getChemistryList);
routers.get("/:id" , getOneItem)
routers.post("/", createItemList)
routers.put("/:id",updateItemList)
routers.delete("/:id", deleteItemList)


export default routers;