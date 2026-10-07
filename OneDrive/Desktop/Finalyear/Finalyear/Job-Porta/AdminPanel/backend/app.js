import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./route/authRoutes.js"; // 👈 your existing route file
import { DB } from "./config/DB.js";
import applicationRoutes from "./route/applicationRoutes.js";


const app = express();

// ======================
// Middleware
// ======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Change if needed
    credentials: true,
  })
);

// ======================
// Database Connection
// ======================
DB()

// ======================
// Routes
// ======================
app.use("/api", authRoutes);  
app.use("/api", applicationRoutes);
// If inside authRoutes you have router.post("/login")
// Final endpoint becomes:  http://localhost:4000/api/login

// ======================
// Test Route
// ======================
app.get("/", (req, res) => {
  res.send("🚀 Server Running");
});

// ======================
// Error Handler
// ======================
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

// ======================
// Start Server
// ======================
const PORT =   5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});