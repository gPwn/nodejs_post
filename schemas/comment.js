const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  password : {
    type : Number,
    require: true,
  },
  content: {
    type : String,
  },
  _postId: {
    type : String,
  },
},

{timestamps : true});

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;