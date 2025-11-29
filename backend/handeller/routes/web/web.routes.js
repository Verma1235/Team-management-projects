import express from "express";
import { HomeScreen, BadReqHandeller,userSignUp ,userLogin,dataSet} from "../../controllers/web/web.controller.js";
import {AdminAcess} from "../../controllers/web/web.admin.access.controls.js"
import {auth} from "../../middlewares/web/user.middleware.js";
let Routes = express.Router();

// get request
Routes.get("/", HomeScreen);

//post request
Routes.post("/signup",userSignUp);

Routes.post("/login",userLogin);
Routes.use(auth);
Routes.get("/data",dataSet);
// Routes.post("/dashboard")
Routes.post("/admin",AdminAcess)

// handell all req error
Routes.all('/{*verma}', BadReqHandeller);

export { Routes };