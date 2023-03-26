const mongoose=require("mongoose")
// const shipping=require("./model/Shipping")
// const user=require("./model/user")
// const payment=require("./model/Payment")
// const order=require("./model/Order")
const product=require("../model/Products")
const connectdb=require("../config/config")

 Dataupdate=async()=>{
    connectdb()

    try{
       
        const findd={brand:'Boat'}
        const updated={name:'null'}
       await product.find({brand:'Boat'})
      console.log("successfully saved")
      //doc= await product.findOne(findd)
     
     console.log(doc.name)
    }catch(error)
    {
        console.log(error)
        process.exit(1)
    }
      
 }
 module.exports=Dataupdate
// export default Dataupdate