const express = require('express');
const cors = require('cors');

const burgersRoutes = require('./routes/burgers');
const pedidosRoutes = require('./routes/pedidos');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/burgers", burgersRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});