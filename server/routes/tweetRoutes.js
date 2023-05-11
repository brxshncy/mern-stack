import express from "express";
import {
    deleteTWeet,
    getTweets,
    postTweet,
    showTweet,
    updateTWeet,
} from "../controllers/TweeterController.js";

const TWEET_ROUTER = express.Router();

TWEET_ROUTER.route("/").get(getTweets).post(postTweet);

TWEET_ROUTER.route("/:id").get(showTweet).put(updateTWeet).delete(deleteTWeet);

export { TWEET_ROUTER };
