import express from 'express';
import movieRouter from './routes/movies.routes.js'
import connectDB from './lib/DB.js';

const app=express();

// in here i connect my mongodb 

connectDB(); 

// data understanding middleware 
 app.use(express.json())

app.use('/movies',movieRouter)

app.listen(6464,()=>{
    console.log("the server is running port is 6464")
})


