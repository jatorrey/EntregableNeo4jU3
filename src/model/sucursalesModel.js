const neo4j = require('neo4j-driver');
let driver = neo4j.driver(
    'neo4j://neo01:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

// Q1
async function over5Employees() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (s:Sucursal)-[:TIENE_EMPLEADO]->(e:Empleado)
            WITH s, COUNT(e) AS cantidadEmpleados
            WHERE cantidadEmpleados > 5
            RETURN s;`
        );
        return result.records.map(record => record.get('s').properties);
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q4
async function overMillion() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (p:Proyecto)
            WHERE p.presupuesto > 1000000
            RETURN p.nombre;`
        );
        return result.records.map(record => ({ Proyectos: record.get('p.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q7
async function over5Visits() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (s:Sucursal)<-[:VISITA_LUGAR]-(v:Visita)-[:VISITA_CLIENTE]->(c:Cliente)
            WITH s, COUNT(DISTINCT c) AS cantidadClientes
            WHERE cantidadClientes >= 5
            RETURN s.nombre;`
        );
        return result.records.map(record => ({ Sucursales: record.get('s.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q10
async function over5FullStack() {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (s:Sucursal)-[TIENE_EMPLEADO]->(e:Empleado {especializacion: 'Full-stack'})
            WITH s, COUNT(e) AS numEmpleados
            WHERE numEmpleados > 5
            RETURN s.nombre;`
        );
        return result.records.map(record => ({ Sucursales: record.get('s.nombre') }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q11
async function traspassTechnicians(sucOrigen, sucDestino) {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (s1:Sucursal {clave: '${sucOrigen}'})-[r:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Soporte'}), (s2:Sucursal {clave: '${sucDestino}'})
            MERGE (s2)-[:TIENE_EMPLEADO]->(e)
            DELETE r;`
        );
        return { message: 'Empleados transferidos' };
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q12
//SOLO SIRVE ESTA FUNCION
async function managerReplacement(sucModificar, curpGer) {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (s:Sucursal {clave: '${sucModificar}'})-[r:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Gerente'})
            DELETE r
            WITH s
            MATCH (e2:Empleado {curp: '${curpGer}'})
            MERGE (s)-[r:TIENE_EMPLEADO]->(e2);`
        );
        return { message: 'Gerente reemplazado' };
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q13
async function branchChange(sucOrigen, sucDestino, proyId) {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (p:Proyecto {clave: '${proyId}'})-[r:PROYECTO_UBICADO]->(s1:Sucursal {clave: '${sucOrigen}'})
            MATCH (s2:Sucursal {clave: '${sucDestino}'})
            MERGE (p)-[:PROYECTO_UBICADO]->(s2)
            DELETE r;`
        );
        return { message: 'Proyecto transferido' };
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q15
async function transferEmployees(sucOrigen, sucDestino) {
    const session = driver.session();
    try {
        const result = await session.run(
            `MATCH (s1:Sucursal {clave: '${sucOrigen}'})-[r:TIENE_EMPLEADO]->(e:Empleado), (s2:Sucursal {clave: '${sucDestino}'})
            MERGE (s2)-[:TIENE_EMPLEADO]->(e)
            DELETE r
            DETACH DELETE s1;`
        );
        return { message: 'Empleados transferidos' };
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

module.exports = {
    over5Employees,
    overMillion,
    over5Visits,
    over5FullStack,
    traspassTechnicians,
    managerReplacement,
    branchChange,
    transferEmployees
};