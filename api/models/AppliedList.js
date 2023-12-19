import mongoose from "mongoose";

const AppliedListSchema = new mongoose.Schema(
    {
        courseId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("AppliedList", AppliedListSchema);