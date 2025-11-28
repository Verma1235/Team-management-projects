import express from "express";
import { HomeScreen, BadReqHandeller,userSignUp ,userLogin} from "../../controllers/web/web.controller.js";
import {auth} from "../../middlewares/web/user.middleware.js";
let Routes = express.Router();

// get request
Routes.get("/", HomeScreen);

//post request
Routes.post("/signup",userSignUp);

Routes.post("/login",userLogin);
Routes.use(auth);
// Routes.post("/dashboard")

// handell all req error
Routes.all('/{*verma}', BadReqHandeller);

export { Routes };