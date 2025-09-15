import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";

import connectDB from "./dbConnection.js";
import authRoutes from "./routes/auth.js";

import User from "./models/User.js";

dotenv.config();

const app = express();

// Middleware


app.use(cors({
    origin: [
    "http://localhost:3000",         
    "https://creativfi.onrender.com" 
  ],
 
  credentials: true,
}));
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("🚀 creativfi backend running!");
});


console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
