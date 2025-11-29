// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", name: "MercadoJG Backend (dev)" });
});

app.get("/", (req, res) => {
  res.send("MercadoJG Backend funcionando");
});

export default app;
