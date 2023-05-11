import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    content: {
        type: String,
    },
});
