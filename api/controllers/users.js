import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const allUser = async (req, res, next) => {

  try {

    const users = await User.find()
    
    res.send(users)

  } catch (err) {
    next(err);
  }
};

export const singleUser = async (req, res, next) => {

  try {

    const users = await User.findOne({email: req.params.email})
    
    res.send(users.isAdmin)

  } catch (err) {
    next(err);
  }
};
