import express from 'express';
import checkRouter from './routers/checkrouter.js'
import MongoConnection from './lib/DB.js';

const app=express();

MongoConnection()

app.use("/check",checkRouter)

app.listen(6464, ()=>{
    console.log("The server is runnig 6464 port")
})