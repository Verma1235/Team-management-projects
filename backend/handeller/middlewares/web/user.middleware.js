import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  try {
    // Standard header key is "authorization"
    const bearerHeader =
      req.headers["authorization"] ||
      req.headers["Authorization"] ||
      req.headers["authorisation"]; // optional extra

    if (!bearerHeader) {
      return res.status(401).json({ message: "No token found" });
    }

    // Expecting: "Bearer <token>"
    const parts = bearerHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(400).json({ message: "Invalid token format" });
    }

    const token = parts[1];

    // Verify the token
    const user = jwt.verify(token, process.env.JWT_TOKEN);

    req.body = user; // Better naming than req.token
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token", error: err.message });
  }
};

export { auth };
