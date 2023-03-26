const bcrypt=require("bcryptjs")
const users=[
{
    name:'admin',
     email:'admin@gmail.com',
     password:bcrypt.hashSync("12345",salt)
}

]
module.exports=users