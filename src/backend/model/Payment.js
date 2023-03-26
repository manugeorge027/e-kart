const mongoose=require("mongoose")
const payment1=mongoose.Schema(
    {   
        user:
        {
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:"user"
        },
        _id:
        { type: Number,
          require:true
        },
        paymentdetails:
        {
            type:String,
            require:true
        },
       shippingprice:{
            type: Number,
            require:true,
            default:0.0
        },
       totalprice:
        {
            type:Number,
            require:true
        },
        paid:
        { type:Boolean,
            require:true

        },
        paiddate:
        {
            type:Date
        },
        isDeliver:
        {
            type:Boolean,


        },
        isDeliver:{
            type:Boolean

        },
        
    }
)
const payment=mongoose.model("payment",payment1)
module.exports=payment

