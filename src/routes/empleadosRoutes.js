const express = require('express');
const router = express.Router();
const controller = require('../controller/empleadosController');

//Q2
router.route('/empleados/gerenteMasDeTresProyectos').get(controller.getManagerOver3Projects);

//Q3
router.route('/empleados/programadoresBackend').get(controller.getBackendDevelopers);

//Q5
router.route('/empleados/tecnicos').get(controller.getTechnicians);

//Q8
router.route('/empleados/programadoresMasDe500k').get(controller.getDevelopersOver500k);

module.exports = router;