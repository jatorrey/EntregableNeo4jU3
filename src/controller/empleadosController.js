const empleadoModel = require('../model/empleadosModel');

//Q2
async function getManagerOver3Projects(req, res) {
    try {
        const result = await empleadoModel.managerOver3Projects();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q3
async function getBackendDevelopers(req, res) {
    try {
        const result = await empleadoModel.backendDevelopers();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q5
async function getTechnicians(req, res) {
    try {
        const result = await empleadoModel.technicians();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q8
async function getDevelopersOver500k(req, res) {
    try {
        const result = await empleadoModel.developersOver500k();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getManagerOver3Projects,
    getBackendDevelopers,
    getTechnicians,
    getDevelopersOver500k
}