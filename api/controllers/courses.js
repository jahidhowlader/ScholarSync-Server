import Course from "../models/Course.js";

export const allCourses = async (req, res, next) => {

    try {

        const users = await Course.find()

        res.send(users)

    } catch (err) {
        next(err);
    }
};

export const addCourse = async (req, res, next) => {

    console.log(req.body);

    try {

        // ADD NEW COURSE
        const newCourse = new Course({
            ...req.body,
        });

        // SAVE USER IN MongoDB AND RETURN
        await newCourse.save();
        res.status(201).json({ message: "Course has been created." });

    } catch (err) {
        next(err);
    }
};
