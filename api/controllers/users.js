import User from "../models/User.js";

// ALL USER FOR ADMIN
export const allUser = async (req, res, next) => {

  try {

    const users = await User.find()

    res.send(users)

  } catch (err) {
    next(err);
  }
};

// SINGLE USER
export const singleUser = async (req, res, next) => {

  try {

    const user = await User.findOne({ email: req.params.email })

    res.send({ singleUser: user, isAdmin: user.isAdmin })

  } catch (err) {
    next(err);
  }
};