import { users } from '../data/db.js';

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ msg: "Faltan datos" });

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ msg: "Usuario ya existe" });

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  res.status(201).json({ msg: "Usuario creado", user: newUser });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ msg: "Credenciales incorrectas" });

  res.json({ msg: "Login correcto", user });
};
