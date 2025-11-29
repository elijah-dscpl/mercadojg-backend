import express from "express";
import serverless from "serverless-http";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Datos de prueba
let productos = [
  { id: 1, titulo: "Producto 1", descripcion: "Demo", precio: 100, imagen_url: "" },
  { id: 2, titulo: "Producto 2", descripcion: "Demo", precio: 200, imagen_url: "" }
];

// Rutas
app.get("/api/products", (req, res) => {
  res.json(productos);
});

export default serverless(app);
