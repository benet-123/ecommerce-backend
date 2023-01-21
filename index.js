const express=require('express')  //import express 

const cors=require('cors')  //import cors

//import  dataservice
const dataService=require('./services/dataService')


const app=express() //create application using express

//to parse the request
app.use(express.json())


app.listen(3000,()=>{
    console.log('listening to port 3000');
})
 
app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all the products
app.get('/all-products',(req,res)=>{
    dataService.getPrducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})



//api  to add wislist products
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api to get to wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//api to delete wishlist product
app.delete('/deletwish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})


