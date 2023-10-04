const  mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:String,
    gender:String,
    shirt_size:String,
    language:String
})

const user = mongoose.model('user',userschema)


module.exports= {user}