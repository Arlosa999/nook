const express= require ('express')
const app=express()
const budget = require('./models/budget.js')
const unit= require('./models/unit.js')
//MIDDLEWEAR
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))


//INDEX
app.get('/unit/',(req,res)=>{
    res.render('homepage.ejs',{
        unit: unit
    })
})
app.get('/budgets/',(req,res)=>{
    res.render('index.ejs',{
        budget: budget
    })
})
//NEW
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})
app.get('/unit/new', (req, res) => {
    res.render('newunit.ejs')
})
//DELETE
app.delete('/budgets/:id', (req, res)=>{
    budget.splice(req.params.id, 1)
    res.redirect('/budget')
})
app.delete('/unit/:id', (req, res)=>{
    unit.splice(req.params.id, 1)
    res.redirect('/unit')
})

//UPDATE
app.put('/budget/:id', (req, res)=>{
    budget[req.params.id] = req.body
    res.redirect('/budget')
})
app.put('/unit/:id', (req, res)=>{
    unit[req.params.id] = req.body
    res.redirect('/unit')
})
//CREATE 
app.post('/budget', (req, res)=>{
    budget.push(req.body)
    res.redirect('/budget')
})
app.post('/unit', (req, res)=>{
    unit.push(req.body)
    res.redirect('/unit')
})
//EDIT
app.get('/budget/:id/edit', (req,res)=>{
    res.render('edit.ejs', {
        budget: budget[req.params.id],
        index: req.params.id
})
})
app.get('/unit/:id/edit', (req,res)=>{
    res.render('edit.ejs', {
        unit: unit[req.params.id],
        index: req.params.id
})
})
//SHOW
app.get('/budgets/:id', (req, res)=>{
    res.render('show.ejs', {
        thisbudget: budget[req.params.id]
    })
})
app.get('/unit/:id', (req, res)=>{
res.render('unitshow.ejs', {
    thisunit: unit[req.params.id]
})
})

app.listen(3000, () => {
    console.log("Server is listening!!!")
})