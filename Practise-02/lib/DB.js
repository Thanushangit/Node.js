import mongoose from "mongoose"

import dotenv from "dotenv";

dotenv.config();



const connectDB=async ()=>{
    
   try{
     await mongoose.connect(process.env.MONGODB_URL);
     console.log("mongoDB connected successfully...")
   }catch(err){
    console.error(`The error occured`,err.message);
    // if error occured the connection requested close 
    process.exit(1)
   }
}

export default connectDB;
