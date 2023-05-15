import asyncHandler from "express-async-handler";
import { Tweet } from "./../model/TweetModel.js";

export const getTweets = asyncHandler(async (req, res) => {
    const tweets = await Tweet.find();

    res.status(200).json(tweets);
});

export const postTweet = asyncHandler(async (req, res) => {
    if (!req.body.content) {
        res.status(400);
        throw new Error("Please add content to your tweets");
    }
    const { content } = req.body;
    const tweet = await Tweet.create({
        content,
    });

    res.status(203).json(tweet);
});

export const showTweet = asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.id);

    if (!tweet) {
        res.status(400);
        throw new Error("Tweet not found.");
    }

    res.status(200).json(tweet);
});

export const updateTWeet = asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.id);

    if (!tweet) {
        res.status(400);
        throw new Error("Tweet not found.");
    }

    const updatedTweet = await Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json(updatedTweet);
});

export const deleteTWeet = asyncHandler(async (req, res) => {
    const deletedTweet = await Tweet.findOneAndDelete({ _id: req.params.id });

    if (!deletedTweet) {
        res.status(400);
        throw new Error("Tweet not found.");
    }

    res.status(200).json({
        message: `Tweet is deleted `,
        id: req.params.id,
    });
});
