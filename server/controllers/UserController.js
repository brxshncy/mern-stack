import asyncHandler from "express-async-handler";
import { User } from "./../model/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields.");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User email has already been registered");
    }

    const user = User.create({
        email,
        name,
        password,
    });

    res.status(203).json(user);
});
