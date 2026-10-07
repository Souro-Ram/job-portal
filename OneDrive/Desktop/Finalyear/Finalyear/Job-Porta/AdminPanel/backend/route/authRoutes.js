import express from "express";

const router = express.Router();

// Static credentials
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "123456";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({
      success: true,
      message: "Login Successful"
    });
  }

  res.json({
    success: false,
    message: "Invalid Email or Password"
  });
});

export default router;