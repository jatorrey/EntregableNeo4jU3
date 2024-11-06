const clienteModel = require('../model/clientesModel');

//Q6
async function getSpecificClient(req, res) {
    try {
        const result = await clienteModel.specificClient();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q9
async function getClientOver3Proyects(req, res) {
    try {
        const result = await clienteModel.clientOver3Proyects();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Q14
async function getNoVisits(req, res) {
    try {
        const result = await clienteModel.noVisits();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getSpecificClient,
    getClientOver3Proyects,
    getNoVisits
}