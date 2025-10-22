import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB(); // ✅ Connect to MongoDB

const app = express(); // ✅ Declare app first

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // ✅ Now it's safe to use

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
