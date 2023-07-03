const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL , {  useUnifiedTopology: true,useNewUrlParser: true });


const Users = mongoose.model('Users',{
    id:String,
    email:String,
    password:Number
})

module.exports={
    Users
}
