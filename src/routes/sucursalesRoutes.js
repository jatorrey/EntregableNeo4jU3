const express = require('express');
const router = express.Router();
const controller = require('../controller/sucursalesController');

//Q1
router.route('/sucursales/masDe5Empleados').get(controller.getOver5Employees);

//Q4
router.route('/proyectos/masDeMillon').get(controller.getOverMillion);

//Q7
router.route('/sucursales/masDe5Visitas').get(controller.getOver5Visits);

//Q10
router.route('/sucursales/masDe5Fullstack').get(controller.getOver5Fullstack);

//Q11
router.route('/empleados/traspasarTecnicos').post(controller.postTraspassTechnicians);

//Q12
router.route('/empleados/reemplazarGerente').post(controller.postManagerReplacement);

//Q13
router.route('/sucursales/transferirProyecto').post(controller.postBranchChange);

//Q15
router.route('/sucursales/transferirEmpleados').post(controller.postTransferEmployees);

module.exports = router;