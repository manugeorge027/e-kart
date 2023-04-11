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
  _id: '6',
  name: 'Amazon Echo Dot 3rd Generation',
  image: '/images/alexa.jpg',
  description:
    'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  brand: 'Amazon',
  category: 'Electronics',
  price: 29.99,
  countInStock: 0,
  rating: 4,
  numReviews: 12,
 
}

)

output.save().then(() => {console.log("Save successfully"),
console.log("Data enter"),
process.exit()}
)

}catch(error){
    console.log(error)

}
