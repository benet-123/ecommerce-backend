//to bring the databse
const db= require('./db')

//get all the products from db,Product is the model name
//model creation


const getPrducts=()=>{
   return db.Product.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                products:result
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'no products found'
            }
        }
    }
   )
}


//to add wihslist content
const addtowishlist=(id,title,price,image,description)=>{
// data addedd to mongodb --- create a model in db.js

return db.Wishlist.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:'Product already exist'
            }
        }
        else{
            const newProduct= new db.Wishlist({id,title,price,image,description})
            newProduct.save()  //to save data in mongodb
            return {
                status:true,
                statusCode:200,
                message:'Product addedd to wishlist'
            }
        }
    }
    
)
  }

  //to get wihslist content
  const getwishlist=()=>{
return db.Wishlist.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                products:result   //here we need the content not message so we created a new variable products 
            }
        }
        else{
            return{
                status: false,
            statusCode: 404,
            message:'Your wishlist is empty'
            }
        }
    }
)
  }


  //to delete wishlist content
  deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                // return{
                //     status:true,
                //     statusCode:200,
                //     products:result,
                //     message:"products removed"  //here we need the content not message so we created a new variable products 
                // }

                return db.Wishlist.find().then(
                    (result)=>{
                        if(result){
                            return{
                                status:true,
                                statusCode:200,
                                wishlist:result,
                                message:'product removed successfully'   //here we need the content not message so we created a new variable products 
                            }
                        }
                        else{
                            return{
                                status: false,
                            statusCode: 404,
                            message:'product not found'
                            }
                        }
                    }
                )
                

            }
            else{
                return{
                    status: false,
                statusCode: 404,
                message:'Your wishlist is empty'
                }
            }
        }
    )
    
  }


  
module.exports={
    getPrducts,addtowishlist,getwishlist,deletewish
}


