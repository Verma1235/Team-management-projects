import mongoose from "mongoose";

let TeamMemberSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Number,
        required: true
    },
    info:
    {
        type: String,
        required: false,
    },
    role: {
        type: String,

    },
    address: {
        type: String
    },
    contact: {
        type: String
    }
}, { timestamps: true });

let TMemberModel=mongoose.model("tmember",TeamMemberSchema);

export {TMemberModel};