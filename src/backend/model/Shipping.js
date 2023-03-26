const mongoose=require("mongoose")
const shipping1=mongoose.Schema(
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
        addrss:
        {
            type:String,
            require:true
        },
        city:{
            type:String,
            require:true
        },
        postalcode:
        {
            type:Number,
            require:true
        },
        phonenumber:
        { type:Number,
            require:true

        }, 
        country:
        { type:String,
            require:true

        }         
        
    }
)
const shipping=mongoose.model("shipping",shipping1)
module.exports=shipping

