import express from "express";
const router = express.Router();

// Registro
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  // aquí tu lógica de registro
  res.status(201).json({ message: "Usuario registrado correctamente" });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // aquí tu lógica de login
  // ejemplo: devuelves un token
  res.json({ token: "1234567890abcdef" });
});

export default router;
