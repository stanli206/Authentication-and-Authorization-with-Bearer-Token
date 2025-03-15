import User from "../Models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword, " hashed password");

    const newUser = new User({ username, email, password: hashPassword, role });
    await newUser.save();
    res.status(200).json({ message: "registered Successfully", data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registered Failed, Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isPasswordmatch = await bcrypt.compare(password, user.password);
    if (!isPasswordmatch) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    user.token = token;
    res.status(200).json({ message: "Login Success", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "loginfailed, internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    res.status(200).json({ message: "Authorized user", data: [user] });
  } catch (error) {
    res.status(500).json({ err: "Internal server error" });
  }
};
