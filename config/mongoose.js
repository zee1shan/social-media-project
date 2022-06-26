const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codial_db')
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error to db"));
db.once('open',()=>{
    console.log("connecetd to mongodb");
})
module.exports=db;