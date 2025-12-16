import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        description: {
            type: String,
            required: [true, 'Please add content'],
        },
        image: {
            type: String,
            required: [true, 'Please add an image'],
        },
        approved: {
            type: Boolean,
            default: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
); 

const Post = mongoose.model("Post", postSchema);

export default Post;