const express = require('express');
const router = express.Router();
const controller = require('../controller/clientesController');

//Q6
router.route('/clientes/clienteEspecifico').get(controller.getSpecificClient);

//Q9
router.route('/clientes/clientesMasDeTresProyectos').get(controller.getClientOver3Proyects);

//Q14
router.route('/clientes/clientesSinVisitas').get(controller.getNoVisits);

module.exports = router;