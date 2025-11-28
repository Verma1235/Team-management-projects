import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "../../database/web/User.model.js";

dotenv.config();





let HomeScreen = (req, res) => {
    let object = {
        status: 200,
        message: "home page",
        data: null
    }
    res.send(object);
}

let BadReqHandeller = (req, res) => {
    let object = {
        status: 404,
        message: "Page not found !!",
        reqURL: req.url
    }
    res.send(object);
}

// signup data
let userSignUp = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let hashpassword = await bcrypt.hash(password, 10);

        let object = { name, email, password: hashpassword };

        // Create user (already saved in DB)
        let user = await UserModel.create(object);

        res.send({
            status: 200,
            message: "Account created successfully",
            _id: user._id
        });

    } catch (err) {
        res.send({
            status: 500,
            message: "Account creation error",
            error: err

        });
    }
};

// login handel

let userLogin = async (req, res) => {
    try {
        const { email, password } = req?.body;
        let user = await UserModel.findOne({ email });

        if (!user) res.send({ status: 401, message: "User not exist !!" });

        let verify = await bcrypt.compare(password, user.password);
        if (!verify) res.send({ status: 401, message: "Invalid crediantial" });

        let Token = jwt.sign({ userId: user._id, userName: user.name, userEmail: user.email }, process.env.JWT_TOKEN, { expiresIn: "1h" });

        let obj = {
            status: 200,
            message: "Login successfully",
            token: Token
        }

        res.send(obj);



    } catch (err) {
        const obj = {
            status: 400,
            meassage: err.meassage,
        }

        res.send(obj);

    }


}


export { HomeScreen, BadReqHandeller, userSignUp, userLogin };