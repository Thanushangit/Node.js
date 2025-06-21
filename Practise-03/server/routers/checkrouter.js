import express from 'express';
import { createproduct, deleteproduct, getproduct, updateproduct } from '../controllers/checkController.js';

const route= express.Router();


route.get("/getproduct",getproduct)
route.post("/createproduct",createproduct)
route.put("/editproduct/:id",updateproduct)
route.delete("/deleteproduct/:id",deleteproduct)


export default route;

