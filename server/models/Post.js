import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userID:{
            type:String,
            required:True,
        },
        firstName:{
            type:String,
            required:True,
        },
        lastName:{
            type:String,
            required:True,
        },
        location:String,
        description:String,
        likes:{
            type:Map,
            of:Boolean,
        },
        comments:{
            type:Array,
            default:[]
        }
    },
    { timestamps;true }
);

const Post = mongoose.model("Post",postSchema);

export default Post;