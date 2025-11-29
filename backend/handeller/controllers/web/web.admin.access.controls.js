import mongoose from "mongoose";
import dotenv from "dotenv";
// import {} from "";

dotenv.config();


let AdminAcess = (req, res) => {
    try {
        const { email } = req.body;
        
        if (email == process.env.ADMIN_EMAIL) {
            return res.send({ email, role: "ADMIN" });
        }
        else {
            return res.send({ email, role: "USER" })
        }
    } catch (err) {
        res.status(400).json({message:"error at assign role",error:err});
    }

}

export { AdminAcess };