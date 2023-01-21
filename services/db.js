//import mongoose
const mongoose=require('mongoose')

//define connection string, to connect node and mongodb
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb'); //to check whtethr it works
})

//model creation 
const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//model creation of wishlist

const Wishlist = mongoose.model('Wishlist',{
    id:Number,
   title:String,
    price:Number,
    description:String,
     image:String
})

//export the model

module.exports={
    Product,Wishlist
}