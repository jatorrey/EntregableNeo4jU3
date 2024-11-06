const neo4j = require('neo4j-driver');
let driver = neo4j.driver(
    'neo4j://neo01:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

// Q2
async function managerOver3Projects() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (e:Empleado)-[:GESTIONA_PROYECTO]->(p:Proyecto)
            WITH e, COUNT(p) AS numProyectos
            WHERE numProyectos > 3
            RETURN e.nombre;`
        );
        return result.records.map(record => ({ Empleados: record.get('e.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q3
async function backendDevelopers() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (e:Empleado {especializacion: 'Backend'})-[:TRABAJA_EN_PROYECTO]->(p:Proyecto)
            WITH e, COUNT(p) AS numProyectos
            WHERE numProyectos > 2
            RETURN e.nombre;`
        );
        return result.records.map(record => ({ Empleados: record.get('e.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q5
async function technicians() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (e:Empleado) WHERE e.tipo = 'Soporte' RETURN e.nombre;`
        );
        return result.records.map(record => ({ Empleados: record.get('e.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q8
async function developersOver500k() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (e:Empleado{tipo: 'Desarrollador'})-[:TRABAJA_EN_PROYECTO]->(p:Proyecto)
            WHERE p.presupuesto > 500000
            RETURN e.nombre;`
        );
        return result.records.map(record => ({ Empleados: record.get('e.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

module.exports = {
    managerOver3Projects,
    backendDevelopers,
    technicians,
    developersOver500k
}