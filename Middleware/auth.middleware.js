import jwt from "jsonwebtoken";
import User from "../Models/user.schema.js";
import dotenv from "dotenv";

dotenv.config();

const authmiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer Token
  if (!token) {
    return res.status(401).json({ message: "Token is missing!" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    console.log(req.user);
    const user = await User.findById(req.user._id);

    if (user.role != "admin") {
      return res.status(401).json({ message: "Access Deny" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: `Invalid Token, Internal server error` });
  }
};

export default authmiddleware;
