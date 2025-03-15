import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../Controller/user.controller.js";
import authmiddleware from "../Middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/getUser", authmiddleware, getUser);

export default router;
