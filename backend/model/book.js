const mongoose=require("mongoose");
const BookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ISBN:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    published_date:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    Gener:{
        type:String,
        required:true
    }

})

const Books=mongoose.model("Book",BookSchema);
module.exports=Books