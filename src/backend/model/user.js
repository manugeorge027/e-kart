const mongoose=require("mongoose")
const schema1=mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:
    {
        type:String,
        require:true,
    },
    admin:
    {
        type:Boolean,
        require:true,
        default:false
    }
})
const user=mongoose.model('user',schema1)
module.exports=user