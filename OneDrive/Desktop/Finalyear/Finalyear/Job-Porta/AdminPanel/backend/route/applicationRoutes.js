import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// ==============================
// Access Existing Collection
// ==============================

const collectionName = "applications";

const Application = mongoose.model(
  collectionName,
  new mongoose.Schema({}, { strict: false }),
  collectionName
);

// ==============================
// 1️⃣ Get All Applications
// ==============================
router.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find();

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// 2️⃣ Get Single Application
// ==============================
router.get("/applications/:id", async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==============================
// 3️⃣ Delete Application
// ==============================
router.delete("/applications/:id", async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;