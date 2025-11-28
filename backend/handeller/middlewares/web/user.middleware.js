import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
let auth = async (req, res, next) => {


    try {
        let bearerHeader = req.headers['authorisation'];

        if (typeof bearerHeader != 'undefined') {

            let token = bearerHeader.split(" ")[1];

            let user = jwt.verify(token, process.env.JWT_TOKEN);

            console.log(user);
            req.token = user;
            next();

        } else { res.status(401).json({ message: "no token found" }); }



    } catch (err) {
        res.status(401).json({ message: `Error: ${err}` });
    }



}
export {auth};