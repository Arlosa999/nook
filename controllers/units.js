const express=require('express')
const router=express.Router()
const Unit=require('../models/unit.js')
//INDEX
router.get('/',async(req,res)=>{
    const units=await Unit.find({})
    res.render('homepage.ejs',{
        units: units
    })
})
// app.get('/budgets/',(req,res)=>{
//     res.render('index.ejs',{
//         budget: budget
//     })
// })
//NEW
// app.get('/budgets/new', (req, res) => {
//     res.render('new.ejs')
// })
router.get('/new', (req, res) => {
    res.render('newunit.ejs')
})
//DELETE
// app.delete('/budgets/:id', (req, res)=>{
//     budget.splice(req.params.id, 1)
//     res.redirect('/budget')
// })
router.delete('/:id', async(req, res)=>{
    await Unit.findOneAndDelete(req.params.id)
    res.redirect('/unit')
})

//UPDATE
// app.put('/budget/:id', (req, res)=>{
//     budget[req.params.id] = req.body
//     res.redirect('/budget')
// })
router.put('/:id', async(req, res)=>{
    if (req.body.rented === "on")
    {
        req.body.rented=true
    }
    else{
        req.body.rented=false
    }
    const updatedUnit= await Unit.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/unit')
})
//CREATE 
// app.post('/budget', (req, res)=>{
//     budget.push(req.body)
//     res.redirect('/budget')
// })
router.post('/', async (req, res)=>{
    if (req.body.rented === "on")
    {
        req.body.rented=true
    }
    else{
        req.body.rented=false
    }
    const newUnit=await Unit.create(req.body)
    
    res.redirect('/unit')
})
//EDIT
// app.get('/budget/:id/edit', (req,res)=>{
//     res.render('edit.ejs', {
//         budget: budget[req.params.id],
//         index: req.params.id
// })
// })
router.get('/:id/edit', async(req,res)=>{
    const foundUnit = await Unit.findById(req.params.id)
    res.render('editunit.ejs', {
        index: req.params.id,
        unit: foundUnit
})
})
//SHOW
// app.get('/budgets/:id', (req, res)=>{
//     res.render('show.ejs', {
//         thisbudget: budget[req.params.id]
//     })
// })
router.get('/:id', async(req, res)=>{
const unit=await Unit.findById(req.params.id)
console.log(unit)
res.render('unitshow.ejs', {
    thisunit: unit
})
})
module.exports=router