require("dotenv").config()
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const budget = require('./models/budget.js')
const unit= require('./models/unit.js')
const unitController=require('./controllers/units')
const methodOverride=require('method-override')
const MONGO_URI =process.env.MONGO_URI
mongoose.connect(MONGO_URI + 'nook')
mongoose.connection.once('open', ()=>{
    console.log('connected to Mongo')
})

//MIDDLEWEAR
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.use('/unit',unitController)

app.listen(3000, () => {
    console.log("Server is listening!!!")
})