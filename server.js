import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import authRoute from './api/routes/auth.js'
import jwtRoute from './api/routes/jwt.js'
import usersRoute from './api/routes/users.js'
import coursesRoute from './api/routes/courses.js'
import appliedListRoute from './api/routes/appliedList.js'
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to MongoDB');

    } catch (error) {

        console.log('MongoDB Connection Failed');
        throw error
    }
}

// middleware
app.use(cors({ credentials: true, origin: ['https://travelnest-client.web.app', 'http://localhost:5173'] }))
// app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/jwt", jwtRoute)
app.use("/api/courses", coursesRoute)
app.use("/api/appliedList", appliedListRoute)
app.get('/', (req, res) => {

    res.send("Hello World")
})

// Handle Error
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    });
});

app.listen(port, () => {
    connect()
    console.log("Connect to backend");
})