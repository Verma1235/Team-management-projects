import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }

}, { timestamps: true });

let UserModel = mongoose.model("Users", UserSchema);

export { UserModel };