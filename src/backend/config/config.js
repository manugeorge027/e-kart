const mongoose = require('mongoose');
const connectdb=async()=>{

try{
 console.log("Connecting....")
 const connect=await mongoose.connect('mongodb://127.0.0.1:27017/kart').then(()=>console.log("Mongodb conneted"))
 .catch((err)=>console.log(err))

}catch(error)
{
    console.error(error)
    process.exit(1)
    
}}
module.exports=connectdb