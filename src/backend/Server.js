// import express from "express"
const express=require("express")
const dotenv=require("dotenv")
const connectdb=require("./config/config")
const database=require("./Database")
const app=express()

const con=connectdb()


app.get('/',(req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(database) 
})
app.get('/:id',(req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log(req.params.id)
    const product=database.find((p)=>p._id === req.params.id)
  
    res.json(product )
})
const PORT= 8080
app.listen(PORT,()=>{console.log("listening ")})