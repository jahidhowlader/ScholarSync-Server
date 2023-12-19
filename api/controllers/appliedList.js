import AppliedList from "../models/AppliedList.js";

export const applyCourse = async (req, res, next) => {

    console.log(req.body);
    try {

        // APPLY COURSE
        const newApply = new AppliedList({ ...req.body });

        // SAVE new Apply IN MongoDB AND RETURN
        await newApply.save();
        res.status(201).json({ message: "Apply Successfully.." })

    } catch (err) {
        next(err);
    }

}

export const getApplyCourse = async (req, res, next) => {

    try {

        const applyList = await AppliedList.find({ email: req.params.email })

        res.send(applyList)

    } catch (err) {
        next(err);
    }

}