import AppliedList from "../models/AppliedList.js";

export const applyCourse = async (req, res, next) => {

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

// GET USER ADMISION LIST
export const getApplyCourse = async (req, res, next) => {

    try {

        const applyList = await AppliedList.find({ email: req.params.email })

        res.status(200).send(applyList)

    } catch (err) {
        next(err);
    }

}

// GET ALL ADMISSION REQUEST FOR ADMIN
export const getAllApplyCourse = async (req, res, next) => {

    try {

        const allApplyList = await AppliedList.find({})

        res.status(200).send(allApplyList)

    } catch (err) {
        next(err);
    }

}

// REJECT ADMISSION REQUEST
export const rejectApplyCourse = async (req, res, next) => {

    try {

        await AppliedList.findByIdAndDelete(req.params.id)

        res.status(202).json({ message: "Application reject!" })

    } catch (err) {
        next(err);
    }

}

// APRROVE ADMISSION REQUEST
export const approveApplyCourse = async (req, res, next) => {

    try {

        await AppliedList.findByIdAndUpdate(req.params.id, { status: 'approved' })

        res.status(200).json({ message: "Application Approve!" })

    } catch (err) {
        next(err);
    }

}