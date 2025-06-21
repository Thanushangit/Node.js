import express from 'express';
import movieRouter from './routes/movies.routes.js'

const app=express();

app.use('/movies',movieRouter)

app.listen(6464,()=>{
    console.log("the server is running port is 6464")
})


