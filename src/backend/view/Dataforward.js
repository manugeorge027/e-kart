const mongoose=require("mongoose")
// const shipping=require("./model/Shipping")
// const user=require("./model/user")
// const payment=require("./model/Payment")
// const order=require("./model/Order")
const product=require("../model/Products")
const connectdb=require("../config/config")
const dataupdate=require('./Dataupdate')

try{
  
  connectdb()
// const doc=  product.findOneAndUpdate({brand:'Boat'},{name:'null'})
// doc= product.findOne({brand:'Boat'})
// console.log(doc.name)

const output=new product({
     
       _id: '2',
      name: 'Micromax IN 1b (Purple, 32 GB)',
      image: '/images/micromaxInB.jpg',
      description:
        'Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.',
      brand: 'Micromax',
      category: 'Electronics',
      price: 599.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
}

)

output.save().then(() => {console.log("Save successfully"),
console.log("Data enter"),
process.exit()}
)

}catch(error){
    console.log(error)

}
