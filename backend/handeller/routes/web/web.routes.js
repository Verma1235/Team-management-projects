import express from "express";
import { HomeScreen, BadReqHandeller,userSignUp } from "../../controllers/web/web.controller.js";
let Routes = express.Router();

// get request
Routes.get("/", HomeScreen);

//post request
Routes.post("/signup",userSignUp);


// handell all req error
Routes.all('/{*verma}', BadReqHandeller);

export { Routes };