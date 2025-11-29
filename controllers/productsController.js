import { products } from '../data/db.js';

export const createProduct = (req, res) => {
  const { businessId, title, description, price, image } = req.body;
  if (!businessId || !title || !price) return res.status(400).json({ msg: "Faltan datos" });

  const newProduct = { id: Date.now(), businessId, title, description, price, image };
  products.push(newProduct);
  res.status(201).json({ msg: "Producto creado", product: newProduct });
};

export const getProducts = (req, res) => {
  res.json(products);
};
