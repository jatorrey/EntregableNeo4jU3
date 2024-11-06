const sucursalModel = require('../model/sucursalesModel');

//Q1
async function getOver5Employees(req, res) {
    try {
        const result = await sucursalModel.over5Employees();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q4
async function getOverMillion(req, res) {
    try {
        const result = await sucursalModel.overMillion();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q7
async function getOver5Visits(req, res) {
    try {
        const result = await sucursalModel.over5Visits();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q10
async function getOver5Fullstack(req, res) {
    try {
        const result = await sucursalModel.over5FullStack();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q11
async function postTraspassTechnicians(req, res) {
    const { origen, destino } = req.body;
    try {
        const result = await sucursalModel.traspassTechnicians(origen, destino);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q12
async function postManagerReplacement(req, res) {
    const { sucursal, gerente } = req.body;
    try {
        const result = await sucursalModel.managerReplacement(sucursal, gerente);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q13
async function postBranchChange(req, res) {
    const { sucursalOrigen, sucursalDestino, proyecto } = req.body;
    try {
        const result = await sucursalModel.branchChange(sucursalOrigen, sucursalDestino, proyecto);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q15
async function postTransferEmployees(req, res) {
    const { sucursalOrigen, sucursalDestino } = req.body;
    try {
        const result = await sucursalModel.transferEmployees(sucursalOrigen, sucursalDestino);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getOver5Employees,
    getOverMillion,
    getOver5Visits,
    getOver5Fullstack,
    postTraspassTechnicians,
    postManagerReplacement,
    postBranchChange,
    postTransferEmployees
}