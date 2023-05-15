import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { TWEET_ROUTER } from "./routes/tweetRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import { USER_ROUTER } from "./routes/userRoute.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use("/api/user", USER_ROUTER);
app.use("/api/tweets", TWEET_ROUTER);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running at port : ${PORT}`));
