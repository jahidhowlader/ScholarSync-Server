import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        totalStudents: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);