import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js"; // ruta de tus rutas de usuarios

const app = express();
app.use(cors()); // permite peticiones desde cualquier dominio
app.use(express.json()); // para parsear JSON

app.use("/api/users", usersRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend corriendo...");
});
