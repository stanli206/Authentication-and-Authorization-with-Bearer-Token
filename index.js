import express from "express";
import dotenv from "dotenv";
import connectDB from "./DataBase/config.js";
import userRouter from "./Routers/user.router.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5001;
app.use(express.json());
connectDB();

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
