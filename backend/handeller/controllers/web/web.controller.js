import mongoose from "mongoose";
import { UserModel } from "../../database/web/User.model.js";






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

        let object = { name, email, password };

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


export { HomeScreen, BadReqHandeller, userSignUp };