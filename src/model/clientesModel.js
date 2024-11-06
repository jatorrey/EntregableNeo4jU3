const neo4j = require('neo4j-driver');
let driver = neo4j.driver(
    'neo4j://neo01:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

// Q6
async function specificClient() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (c:Cliente {nombre: 'Raj Enterprises'})-[CONTRATA_PROYECTO]->(p:Proyecto)
            RETURN p.nombre;`
        );
        return result.records.map(record => ({ Proyectos: record.get('p.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q9
async function clientOver3Proyects() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (c:Cliente)-[:CONTRATA_PROYECTO]->(p:Proyecto)-[:PROYECTO_UBICADO]->(s:Sucursal)
            WITH c, COUNT(DISTINCT s) AS numSucursales
            WHERE numSucursales > 3
            RETURN c.nombre;`
        );
        return result.records.map(record => ({ Clientes: record.get('c.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q14
async function noVisits() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (c:Cliente)
            WHERE NOT (c)<-[:VISITA_CLIENTE]-(:Visita)
            RETURN c.nombre;`
        );
        return result.records.map(record => ({ Clientes: record.get('c.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

module.exports = {
    specificClient,
    clientOver3Proyects,
    noVisits
}