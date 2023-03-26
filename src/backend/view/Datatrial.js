const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('rat',{ name: String,age:Number,address:String });

const kitty = new Cat({ name: 'DTS',age:12,address:"Mukkam" });
kitty.save().then(() => {console.log('meow'),process.exit()});