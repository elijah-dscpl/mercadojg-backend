import { businesses } from '../data/db.js';

export const createBusiness = (req, res) => {
  const { userId, name, description } = req.body;
  if (!userId || !name) return res.status(400).json({ msg: "Faltan datos" });

  const newBusiness = { id: Date.now(), userId, name, description };
  businesses.push(newBusiness);
  res.status(201).json({ msg: "Negocio creado", business: newBusiness });
};

export const getBusinesses = (req, res) => {
  res.json(businesses);
};
