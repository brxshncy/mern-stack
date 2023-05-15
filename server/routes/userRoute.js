import express from "express";
import { createUser } from "../controllers/UserController.js";

const USER_ROUTER = express.Router();

USER_ROUTER.route("/").post(createUser);

export { USER_ROUTER };
