import express from 'express';

const app=express();


app.listen(6464,()=>{
    console.log("the server is running port is 6464")
})


// it for the CRUD work 

// this it the Read data 
app.get("/movies",(req,res)=>{
    res.json({"message":"good morning Thanushan"})
})


// this it the Create data 
app.post("/movies",(req,res)=>{
    res.json({"message":"good morning Thanushan"})
})



// this it the update data 
app.put("/movies/:id",(req,res)=>{
    res.json({"message":"good morning Thanushan"})
})


// this it the detele data 
app.delete("/movies/:id",(req,res)=>{
    res.json({"message":"good morning Thanushan"})
})
