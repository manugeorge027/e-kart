const mongoose = require('mongoose');
//const url="mongodb+srv://manugeorge027:9LXkg8xSqmLshsxe@cluster0.rgyncxk.mongodb.net/?retryWrites=true&w=majority"
const url='mongodb+srv://manugeorge027:9LXkg8xSqmLshsxe@cluster0.rgyncxk.mongodb.net/kart'
const connectdb=async()=>{

try{
 console.log("Connecting....")
 const connect=await mongoose.connect(url).then(()=>console.log("Mongodb conneted"))
 .catch((err)=>console.log(err))

}catch(error)
{
    console.error(error)
    process.exit(1)
    
}}
module.exports=connectdb