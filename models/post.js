import { Schema, models, model } from "mongoose";

const PostSchema = new Schema({
  creator:{
    type:Schema.Types.ObjectId,
    ref: 'User'
  },
  prompt:{
    type:String,
    required:[true, "Need a prompt"]
  },
  tag:{
    type:String
  }
});

const Post = models.Post || model("Post", PostSchema);
export default Post;