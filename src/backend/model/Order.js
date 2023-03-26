const mongoose=require("mongoose")
const cart1=mongoose.Schema(
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
        name:
        {
            type:String,
            require:true
        },
        image:
        {
            type:String,
            require:true
        },
        description:
        {
            type:String,
            require:true
        },
        brand:
        { type:String,
            require:true

        },
        category:
        {
            type:String,
            require:true

        },
        price:
        {    type:Number,
            require:true

        },
        countInStock:
        {
            type:Number,
            require:true
        },
        quantity:
        {
            type:Number,
            require:true
        },
        rating:
        {
            type:Number,
            require:true
        },
        numReviews:
        {
            type:Number,
            require:true
        }
        
    }
)
const cart=mongoose.model("cart",cart1)
module.exports =cart

