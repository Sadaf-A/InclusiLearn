const mongoose = require("mongoose");

let uploadPostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    challenge: {
        type: String,
        required:true
    },
    solution: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    MediaType:{
        type:String,
        required:true
    }
   
})



const postModel = mongoose.model("postCollection", postSchema);
module.exports.postModel = postModel;