

const express=require('express')
const app=express()

app.use(express.json())
require('./routes/idea.routes')(app)
app.listen(8000,()=>{
    console.log('server has started')
})



const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost/ideaDB")

const db=mongoose.connection

db.once("open",()=>{
    console.log("mongodb connected")
})

db.on("error",()=>{
    console.log("mongodb not connected")
})

