import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {

  try {

    // Email Validation RegEX
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // GET DATA FROM CLIENT
    const { username, email, password } = req.body

    // CHECK VALIDATION FOR USERNAME
    if (!username) {
      return next(createError(406, "Name Field is required!"));
    }

    // CHECK VALIDATION FOR EMAIL
    if (!email || !emailValidation.test(email)) {
      return next(createError(406, "Provide a valid Eamil Address!"));
    }

    // CHECK VALIDATION FOR PASSWORD
    if (password.length < 8) {
      return next(createError(406, "Password should be greater then 8 characters!"));
    }

    // FIND EMAIL FROM DATABASE
    const findUser = await User.findOne({ email })

    // GET ERROR IF EMAIL HAS EXIST
    if (findUser) {
      return next(createError(409, "Eamil is already registered!"));
    }

    // NORMAL PASSWORD TO HASH PASSWORD THROUGH BCRYPT
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // CREATE NEW USER IF ALL VALIDATION ARE SUCCESSFULL
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });

    // SAVE USER IN MongoDB AND RETURN
    await newUser.save();
    res.status(201).send("User has been created.");

  } catch (err) {
    next(err);
  }
};


export const login = async (req, res, next) => {

  try {

    // FIND USER FROM MongoDB
    const user = await User.findOne({ email: req.body.email });

    // THROW ERROR IF USER NOT EXIST
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    // CHECK USER PASSWORD THROW BCRYPT
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // IF PASSWORD MISSING THEN THROW ERROR
    if (!isPasswordCorrect) {

      return next(createError(400, "Wrong credential!"));
    }

    // GOT USER FROM MongoDB AND RETURN
    const { password, isAdmin, ...otherDetails } = user._doc;
    
    res.status(200)
      .json({ details: { ...otherDetails }, isAdmin });

  } catch (err) {
    next(err);
  }
};