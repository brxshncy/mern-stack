import mongoose from "mongoose";

const tweetSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        content: {
            type: String,
            required: [true, "This field is required."],
        },
    },
    {
        timeStamps: true,
    }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
