import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {Routes }from "./handeller/routes/web/web.routes.js"
import cors from "cors";
dotenv.config();
const app = express();

// middleware
app.use(cors({
    origin: "http://localhost:5173",   // your React project URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// routes handeller
app.use("/",Routes);


// database connection => then server starts
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Dtatabase connnected successfully");
    app.listen(process.env.PORT, () => console.log(`Server run at http://localhost:${process.env.PORT}`));
})
.catch((err)=>{
console.log("Error",err);
});


