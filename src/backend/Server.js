// import express from "express"
const express=require("express")
const dotenv=require("dotenv")
const connectdb=require("./config/config")
const database=require("./Database")
const Routerconfig=require("./router/Routerconfig")
const app=express()
const ErrorHandler=require("./ErrorHandler")
const cors=require("cors")
const { json } = require("react-router-dom")

app.use(cors({
    orgin :"http://localhost:3000"
}))
app.use(express.json())
app.use(Routerconfig)
// app.use(ErrorHandler)

// app.get('/',(req,res) =>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.json(database) 
// })
// app.get('/:id',(req,res) =>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     console.log(req.params.id)
//     const product=database.find((p)=>p._id === req.params.id)
  
//     res.json(product )
// })
const PORT= 8080
app.listen(PORT,()=>{console.log("listening ")})