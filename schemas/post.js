const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  password : {
    type : Number,
    require: true,
  },
  title: {
    type : String,
  },
  content: {
    type : String,
  },
},

{timestamps : true});

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;