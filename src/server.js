const express = require('express');
const app = express();
const neo4j = require('neo4j-driver');
const bodyParser = require('body-parser');
const PORT = 3000;

const routeCliente = require('./routes/clientesRoutes');
const routeEmpleado = require('./routes/empleadosRoutes');
const routeSucursal = require('./routes/sucursalesRoutes');
const logger = require('./routes/logger');

//aplicando Middlewares
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//aplicando rutas
app.use('/api', routeCliente, routeEmpleado, routeSucursal);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));