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

// 
export const singleUser = async (req, res, next) => {

  try {

    const user = await User.findOne({ email: req.params.email })

    res.send({ singleUser: user, isAdmin: user.isAdmin })

  } catch (err) {
    next(err);
  }
};

// UPDATE USER COLLECTION AFTER CLIENTS CLICK APPLY
export const addCourseByClient = async (req, res, next) => {

  try {

    await User.updateOne(

      { email: req.query.email },
      { $push: { appliedCourses: req.query._id } }
    )

    res.status(201).json({ message: "Course has been added." });

  } catch (err) {
    next(err)
  }
}