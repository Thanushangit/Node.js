import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config()

const MongoConnection= async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("The mongoDB connected successfuly")
}catch(err){
    console.log("Fail to connect mongodb",err.message)
    process.exit(1)
}
}


export default MongoConnection