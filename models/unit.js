// module.exports = [
//     {
//         unit: "First",
//         city: "Mississauga",
//         address: "North Pole 1",
//         rented: true,
//         rentedfrom:" Feb 1, 2022",
//         renteduntil:" Feb 1, 2023",
//         amount: 2400,
//     },
//     {
//         unit: "Second",
//         city: "Mississauga",
//         address: "Silver Moon 20",
//         rented: true,
//         rentedfrom:" Feb 1, 2022",
//         renteduntil:" Feb 1, 2023",
//         amount: 2400,
//     },
//     {
//         unit: "Third",
//         city: "Mississauga",
//         address: "Income",
//         rented: true,
//         rentedfrom:" Feb 1, 2022",
//         renteduntil:" Feb 1, 2023",
//         amount: 2400,
//     },
// ]
const mongoose=require('mongoose')
const unitSchema=new mongoose.Schema({
    unit:{type:String},
    city:{type:String},
    address:{type:String},
    rented:{type:Boolean},
    rentedfrom:{type:String},
    renteduntil:{type:String},
    amount:{type:Number}
})
const Unit=mongoose.model('Unit',unitSchema)
module.exports=Unit