const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors")
const port = 3001;
const User = require("./model/User");
const Book = require("./model/book");
const connectionUrl = `mongodb+srv://Navaraj:gilAo24Sz2L3GG9T@cluster0.dwlicok.mongodb.net/mernpractice?retryWrites=true&w=majority`
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose.connect(connectionUrl).then(()=>console.log("mongo connected")).catch((e)=>{console.log(e)})

//register
app.post("/signup",async(req,res)=>{
 try{
    let user = await User.create(req.body);
    res.json({
        statusCode:200,
        status:"Success",
        user
    })
 }
 catch(e){
    res.json({
        statusCode:400,
        message:e.message
    })
 }
 

})


//login
app.post("/signin",async(req,res)=>{
    let {email,password} = req.body;
    let user = await User.findOne({email,password})
    if(user){
       res.json({
        statusCode:200,
        status:"Success"
       })
    }
    else{
        res.json({
            statusCode:404,
            status:"Failed"
           })
    }
})


//creating notes
app.post("/postbook",async(req,res)=>{
    console.log(req.body)
    try{
        let book= await Book.create(req.body);
        res.json({
            statusCode:200,
            status:"Success",
            book
        })
        }
    catch(e){
        res.json({
            statusCode:500,
            message:e.message
        })
    }
    
})

//sending all notes

app.get("/getbook",async(req,res)=>{
    try{
     let books = await Book.find();
     console.log(books)
     res.json({
        statusCode:200,
        status:"Success",
        books
     })
    }
    catch(e){
        res.json({
            statusCode:500,
            message:e.message
        })
    }
})

//deleting all notes
app.delete("/deletebook",async(req,res)=>{
    try{
     await Book.deleteMany()
     res.json({
        statusCode:200,
        status:"Success"
    })
    }
    catch(e){
        res.json({
            statusCode:500,
            message:e.message
        })
    }
})
app.listen(port,()=>{console.log(`server is up at port ${3001}`)})