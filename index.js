import express from 'express';
import usersRoutes from './routes/users.js';
import businessesRoutes from './routes/businesses.js';
import productsRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/api/users', usersRoutes);
app.use('/api/businesses', businessesRoutes);
app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('¡Backend MercadoJG funcionando!');
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
