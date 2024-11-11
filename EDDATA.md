# Torres Reyes Jaime Camil | 19400679 | Entregable Unidad 3 Bases de Datos noSQL
# Estructura a realizar
Gestión Empresarial. 
La empresa "TechSoft" desea gestionar sus empleados, proyectos y sucursales a nivel nacional. 
Se requiere un sistema para administrar las diferentes áreas de trabajo y operaciones de la empresa.

Sucursales:
    - Cada sucursal tiene una clave, nombre, dirección, ciudad y capacidad (número máximo de empleados que puede albergar).
    - Cada sucursal tiene empleados exclusivos; es decir, un empleado solo puede trabajar en una sucursal a la vez.

Sucursal: - (Nodo)
    - Clave - (Atributo)
    - Nombre - (Atributo)
    - Dirección - (Atributo)
    - Ciudad - (Atributo)
    - Capacidad (Numero maximo de empleados que puede albergar) - (Atributo)
        - Empleados exclusivos (Cada empleado solo puede trabajar en una sucursal) - (condición - Ej: Empleado Juan Perez con clave 'ABC123' no puede trabajar en dos sucursales distintas)

Empleados: 
    - Cada empleado tiene un ID único, nombre, CURP, teléfono, número de cuenta bancaria (donde se deposita el sueldo) y fecha de contratación.
    - Hay tres tipos de empleados en cada sucursal:
    - Gerentes: responsables de supervisar la operación. Se requiere saber el área que gestionan.
    - Desarrolladores: Se requiere su especialización (back-end, front-end, full-stack), su lenguaje principal y el número de proyectos activos.
    - Soporte técnico: Se requiere el tipo de soporte que brindan (infraestructura, software, hardware) y su número de contacto interno.

Empleado: (Nodo)
    - CURP - (Atributo)
    - Nombre - (Atributo)
    - Telefono - (Atributo)
    - Número de cuenta bancaria - (Atributo)
    - Fecha de contratación - (Atributo)
        - 3 tipos de empleados - (Atributo)
            - Gerentes: Area que gestiona - (Relación con proyecto)
            - Desarrolladores: Especialización (back-end, front-end, full-stack) - (Atributo)
                - lenguaje - (Atributo) 
                - proyectos activos - (Relación con proyectos)
            - Soporte Técnico: Tipo de soporte (infraestructura, software, hardware) - (Atributo)
            - número de contacto interno - (Atributo)

Proyectos:
    - Los proyectos tienen un código, nombre, descripción, fecha de inicio, fecha de finalización y un presupuesto 
      asignado.
    - Cada proyecto es gestionado por un gerente y puede tener varios desarrolladores trabajando en él.
    - Un proyecto es desarrollado en una sucursal específica, pero puede involucrar a empleados de otras sucursales.

Proyectos: - (Nodo)
    - Código - (Atributo)
    - Nombre - (Atributo)
    - Descripción - (Atributo)
    - Fecha de Inicio - (Atributo)
    - Fecha de Finalización - (Atributo)
    - Presupuesto - (Atributo)
        - Cada proyecto es gestionado por un gerente y puede tener varios desarrolladores. - (Relación con empleados)
        - Cada proyecto es de una sucursal especifica, pero puede tener empleados de otras sucursales. - (Relación con sucursal)

Clientes:
    - Cada proyecto está asociado a un cliente, y se requiere su nombre, empresa, teléfono de contacto y correo 
      electrónico.
    - Un cliente puede contratar múltiples proyectos en diferentes sucursales.

Clientes: - (Nodo)
    - Nombre - (Atributo)
    - Empresa - (Atributo)
    - Telefono de contacto - (Atributo)
    - Correo electrónico - (Atributo)
        - Proyecto asociado a cliente - (Relación con cliente)
        - Un cliente puede tener varios proyectos en diferentes sucursales - (Relación con cliente, mismo que la pasada, pero solo implica que un cliente puede tener mas de un proyecto)

Reuniones y visitas:
    - Las sucursales tienen reuniones con clientes. Se debe registrar el cliente, la fecha, la hora y los asistentes 
      de la reunión (empleados de la empresa).
    - Se realizan visitas a las sucursales por parte de los clientes, registrando la fecha, hora, cliente, y motivo 
      de la visita.

Reuniones: (Reunion hecha con los clientes) - (Nodo)
    - Cliente - (Relación)
    - Fecha - (Atributo)
    - Hora - (Atributo)
    - Asistentes de la reunion (empleados) - (Varias relaciones)

Visitas: (Visitas a las sucursales de los clientes) - (Relación)
    - Fecha - (Atributo)
    - Hora - (Atributo)
    - Cliente - (Relación con nodo Cliente)
    - Motivo de visita - (Atributo)
    


Consultas (Querys):
Q00. Script del escenario de datos.
Q01. Obtener la lista de sucursales que tienen más de 5 empleados.
Q02. Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.
Q03. Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos.
Q04. Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.
Q05. Listar los empleados de soporte técnico de todas las sucursales.
Q06. Encontrar los proyectos que corresponden a un cliente en específico.
Q07. Obtener la lista de sucursales que han recibido visitas de más de 5 clientes diferentes.
Q08. Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.
Q09. Obtener la lista de clientes que han contratado más de 3 proyectos en diferentes sucursales.
Q10. Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.
Q11. Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.
Q12. Reemplaza al gerente de una sucursal en específico.
Q13. Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.
Q14. Obtener la lista de clientes que nunca han realizado visitas a las sucursales.
Q15. Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.

# Modelado de los datos
# Creando sucursales
MERGE (s:Sucursal {clave: 'S001', nombre: 'Sucursal 1', direccion: "Calle 123", ciudad: "Bogota", capacidad: 10});
MERGE (s:Sucursal {clave: 'S002', nombre: 'Sucursal 2', direccion: "Calle 456", ciudad: "Medellin", capacidad: 10});
MERGE (s:Sucursal {clave: 'S003', nombre: 'Sucursal 3', direccion: "Calle 789", ciudad: "Cali", capacidad: 10});
MERGE (s:Sucursal {clave: 'S004', nombre: 'Sucursal 4', direccion: "Calle 321", ciudad: "Barranquilla", capacidad: 10});
MERGE (s:Sucursal {clave: 'S005', nombre: 'Sucursal 5', direccion: "Calle 654", ciudad: "Cartagena", capacidad: 10});
MERGE (s:Sucursal {clave: 'S006', nombre: 'Sucursal Extra', direccion: "Calle 987", ciudad: "Bucaramanga", capacidad: 10});

# Empleados de tipo gerente
MERGE (e:Empleado {nombre: 'Juan Perez', curp: 'JPE001133', telefono: '3112224545', cuentaBancaria: '100294491020', fechaContrat: '2002-01-01', tipo: 'Gerente'}) RETURN e;
MERGE (e:Empleado {nombre: 'Maria Lopez', curp: 'MLO023012', telefono: 3115553838', cuentaBancaria: '100294491021', fechaContrat: '2002-04-21', tipo: 'Gerente'}) RETURN e;
MERGE (e:Empleado {nombre: 'Luis Gomez', curp: 'LGO456789', telefono: '3112329920', cuentaBancaria: '100294491022', fechaContrat: '2002-10-11', tipo: 'Gerente'}) RETURN e;
MERGE (e:Empleado {nombre: 'Carlos Sanchez', curp: 'CSA123456', telefono: '3111111111', cuentaBancaria: '100294491023', fechaContrat: '2001-02-22', tipo: 'Gerente'}) RETURN e;
MERGE (e:Empleado {nombre: 'Ana Torres', curp: 'ATO789012', telefono: '3112222222', cuentaBancaria: '100294491024', fechaContrat: '2002-05-05', tipo: 'Gerente'}) RETURN e;
MERGE (e:Empleado {nombre: 'Luis Perez', curp: 'LPE001232', telefono: '3111111122', cuentaBancaria: '100294491010', fechaContrat: '2002-01-01', tipo: 'Gerente'}) RETURN e;

# Empleados de tipo desarrollador
MERGE (e:Empleado {nombre: 'Jose Perez', curp: 'JPE001232', telefono: '2552341780', cuentaBancaria: '100294491025', fechaContrat: '2002-01-01', tipo: 'Desarrollador', especializacion: 'Backend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Luisa Lopez', curp: 'LLO023012', telefono: '3119504827', cuentaBancaria: '100294491026', fechaContrat: '2002-07-30', tipo: 'Desarrollador', especializacion: 'Frontend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Pedro Gomez', curp: 'PGO456789', telefono: '3112329922', cuentaBancaria: '100294491027', fechaContrat: '2004-09-21', tipo: 'Desarrollador', especializacion: 'Full-stack'}) RETURN e;
MERGE (e:Empleado {nombre: 'Maria Rodriguez', curp: 'MRO123456', telefono: '3111111112', cuentaBancaria: '100294491028', fechaContrat: '2002-02-22', tipo: 'Desarrollador', especializacion: 'Backend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Miguel Ahumada', curp: 'MAH789012', telefono: '3112222223', cuentaBancaria: '100294491029', fechaContrat: '2002-02-05', tipo: 'Desarrollador', especializacion: 'Frontend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Carlos Sanchez', curp: 'CSA567890', telefono: '4421234567', cuentaBancaria: '100294491030', fechaContrat: '2003-03-12', tipo: 'Desarrollador', especializacion: 'Full-stack'}) RETURN e;
MERGE (e:Empleado {nombre: 'Ana Martinez', curp: 'AMA901234', telefono: '5559876543', cuentaBancaria: '100294491031', fechaContrat: '2004-04-17', tipo: 'Desarrollador', especializacion: 'Backend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Luis Gutierrez', curp: 'LGU234567', telefono: '9982345678', cuentaBancaria: '100294491032', fechaContrat: '2005-05-20', tipo: 'Desarrollador', especializacion: 'Frontend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Paola Jimenez', curp: 'PJI678901', telefono: '6643456789', cuentaBancaria: '100294491033', fechaContrat: '2006-06-25', tipo: 'Desarrollador', especializacion: 'Full-stack'}) RETURN e;
MERGE (e:Empleado {nombre: 'Fernando Morales', curp: 'FMO345678', telefono: '2294567890', cuentaBancaria: '100294491034', fechaContrat: '2007-07-30', tipo: 'Desarrollador', especializacion: 'Backend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Diana Torres', curp: 'DTO789012', telefono: '7445678901', cuentaBancaria: '100294491035', fechaContrat: '2008-08-15', tipo: 'Desarrollador', especializacion: 'Frontend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Hugo Navarro', curp: 'HNA123456', telefono: '8336789012', cuentaBancaria: '100294491036', fechaContrat: '2009-09-01', tipo: 'Desarrollador', especializacion: 'Full-stack'}) RETURN e;
MERGE (e:Empleado {nombre: 'Sofia Herrera', curp: 'SHE456789', telefono: '9937890123', cuentaBancaria: '100294491037', fechaContrat: '2010-10-10', tipo: 'Desarrollador', especializacion: 'Backend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Javier Paredes', curp: 'JPA234567', telefono: '9618901234', cuentaBancaria: '100294491038', fechaContrat: '2011-11-20', tipo: 'Desarrollador', especializacion: 'Frontend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Claudia Ruiz', curp: 'CRU678901', telefono: '6869012345', cuentaBancaria: '100294491039', fechaContrat: '2012-12-15', tipo: 'Desarrollador', especializacion: 'Full-stack'}) RETURN e;
MERGE (e:Empleado {nombre: 'Enrique Salgado', curp: 'ESA345678', telefono: '6560123456', cuentaBancaria: '100294491040', fechaContrat: '2013-01-05', tipo: 'Desarrollador', especializacion: 'Backend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Natalia Vega', curp: 'NVE789012', telefono: '6182345678', cuentaBancaria: '100294491041', fechaContrat: '2014-02-28', tipo: 'Desarrollador', especializacion: 'Frontend'}) RETURN e;
MERGE (e:Empleado {nombre: 'Oscar Trujillo', curp: 'OTR123456', telefono: '4443456789', cuentaBancaria: '100294491042', fechaContrat: '2015-03-18', tipo: 'Desarrollador', especializacion: 'Full-stack'}) RETURN e;

# Empleados de tipo soporte
MERGE (e:Empleado {nombre: 'Sandra Esperanza', curp: 'SEE234567', telefono: '5524513879', cuentaBancaria: '100294491043', fechaContrat: '2016-04-25', tipo: 'Soporte', tipoSoporte: 'Infraestructura'}) RETURN e;
MERGE (e:Empleado {nombre: 'Valeria Leon', curp: 'VLE678901', telefono: '3410294817', cuentaBancaria: '100294491044', fechaContrat: '2017-05-15', tipo: 'Soporte', tipoSoporte: 'Hardware'}) RETURN e;
MERGE (e:Empleado {nombre: 'Luisa Rodriguez', curp: 'LRO345678', telefono: '1234567890', cuentaBancaria: '100294491045', fechaContrat: '2018-06-05', tipo: 'Soporte', tipoSoporte: 'Software'}) RETURN e;
MERGE (e:Empleado {nombre: 'Ricardo Montes', curp: 'RMO901234', telefono: '6672345678', cuentaBancaria: '100294491046', fechaContrat: '2019-07-18', tipo: 'Soporte', tipoSoporte: 'Redes'}) RETURN e;
MERGE (e:Empleado {nombre: 'Isabel Torres', curp: 'ITO789012', telefono: '4428765432', cuentaBancaria: '100294491047', fechaContrat: '2020-08-12', tipo: 'Soporte', tipoSoporte: 'Infraestructura'}) RETURN e;
MERGE (e:Empleado {nombre: 'Juan Hernandez', curp: 'JHE345678', telefono: '9983456789', cuentaBancaria: '100294491048', fechaContrat: '2021-09-30', tipo: 'Soporte', tipoSoporte: 'Hardware'}) RETURN e;
MERGE (e:Empleado {nombre: 'Laura Castillo', curp: 'LCA678901', telefono: '5587654321', cuentaBancaria: '100294491049', fechaContrat: '2022-10-15', tipo: 'Soporte', tipoSoporte: 'Software'}) RETURN e;
MERGE (e:Empleado {nombre: 'Emilio Perez', curp: 'EPE234567', telefono: '2294567890', cuentaBancaria: '100294491050', fechaContrat: '2023-01-10', tipo: 'Soporte', tipoSoporte: 'Redes'}) RETURN e;
MERGE (e:Empleado {nombre: 'Natalia Gomez', curp: 'NGO789012', telefono: '6569876543', cuentaBancaria: '100294491051', fechaContrat: '2023-02-21', tipo: 'Soporte', tipoSoporte: 'Infraestructura'}) RETURN e;
MERGE (e:Empleado {nombre: 'Alejandro Ruiz', curp: 'ARU345678', telefono: '8331234567', cuentaBancaria: '100294491052', fechaContrat: '2023-03-05', tipo: 'Soporte', tipoSoporte: 'Hardware'}) RETURN e;
MERGE (e:Empleado {nombre: 'Rosa Martinez', curp: 'RMA678901', telefono: '8715678901', cuentaBancaria: '100294491053', fechaContrat: '2023-04-14', tipo: 'Soporte', tipoSoporte: 'Software'}) RETURN e;
MERGE (e:Empleado {nombre: 'Gabriel Salinas', curp: 'GSA234567', telefono: '9612345678', cuentaBancaria: '100294491054', fechaContrat: '2023-05-20', tipo: 'Soporte', tipoSoporte: 'Redes'}) RETURN e;

# Relaciones de empleados a sucursales
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'JPE001133'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'CSA567890'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'PJI678901'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'PGO456789'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'HNA123456'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'CRU678901'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S001'}), (e:Empleado {curp: 'OTR123456'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;

MATCH (s:Sucursal {clave: 'S002'}), (e:Empleado {curp: 'MLO023012'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S002'}), (e:Empleado {curp: 'JPE001232'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S002'}), (e:Empleado {curp: 'MRO123456'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S002'}), (e:Empleado {curp: 'AMA901234'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S002'}), (e:Empleado {curp: 'FMO345678'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S002'}), (e:Empleado {curp: 'RMO901234'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;

MATCH (s:Sucursal {clave: 'S003'}), (e:Empleado {curp: 'LGO456789'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S003'}), (e:Empleado {curp: 'SHE456789'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S003'}), (e:Empleado {curp: 'ESA345678'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S003'}), (e:Empleado {curp: 'LLO023012'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S003'}), (e:Empleado {curp: 'MAH789012'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S003'}), (e:Empleado {curp: 'JHE345678'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;

MATCH (s:Sucursal {clave: 'S004'}), (e:Empleado {curp: 'CSA123456'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S004'}), (e:Empleado {curp: 'LGU234567'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S004'}), (e:Empleado {curp: 'DTO789012'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S004'}), (e:Empleado {curp: 'JPA234567'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S004'}), (e:Empleado {curp: 'EPE234567'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;

MATCH (s:Sucursal {clave: 'S005'}), (e:Empleado {curp: 'ATO789012'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S005'}), (e:Empleado {curp: 'NVE789012'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S005'}), (e:Empleado {curp: 'SEE234567'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S005'}), (e:Empleado {curp: 'ARU345678'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;

MATCH (s:Sucursal {clave: 'S006'}), (e:Empleado {curp: 'LPE001232'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S006'}), (e:Empleado {curp: 'VLE678901'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S006'}), (e:Empleado {curp: 'LRO345678'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;
MATCH (s:Sucursal {clave: 'S006'}), (e:Empleado {curp: 'GSA234567'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s, e;

# Creacion de proyectos y sus relaciones
MERGE (p:Proyecto {codigo: 'P001', nombre: 'Proyecto 001', descripcion: 'Proyecto 001 de prueba', fechaInicio: '2020-01-01', fechaFin: '2020-12-31', presupuesto: 650000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P001'}), (e:Empleado {curp: 'JPE001133'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P001'}), (e:Empleado {curp: 'JPE001232'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P001'}), (e:Empleado {curp: 'LLO023012'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S001'}), (p:Proyecto {codigo: 'P001'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P002', nombre: 'Proyecto 002', descripcion: 'Proyecto 002 de prueba', fechaInicio: '2010-01-01', fechaFin: '2010-12-31', presupuesto: 2500000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P002'}), (e:Empleado {curp: 'MLO023012'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P002'}), (e:Empleado {curp: 'JPE001232'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P002'}), (e:Empleado {curp: 'PGO456789'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S002'}), (p:Proyecto {codigo: 'P002'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P003', nombre: 'Proyecto 003', descripcion: 'Proyecto 003 de prueba', fechaInicio: '2011-01-01', fechaFin: '2011-12-31', presupuesto: 1650000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P003'}), (e:Empleado {curp: 'LGO456789'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P003'}), (e:Empleado {curp: 'JPE001232'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P003'}), (e:Empleado {curp: 'LLO023012'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S003'}), (p:Proyecto {codigo: 'P003'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P004', nombre: 'Proyecto 004', descripcion: 'Proyecto 004 de prueba', fechaInicio: '2002-01-01', fechaFin: '2002-12-31', presupuesto: 550000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P004'}), (e:Empleado {curp: 'CSA123456'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P004'}), (e:Empleado {curp: 'MRO123456'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P004'}), (e:Empleado {curp: 'MAH789012'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S004'}), (p:Proyecto {codigo: 'P004'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P005', nombre: 'Proyecto 005', descripcion: 'Proyecto 005 de prueba', fechaInicio: '2000-01-01', fechaFin: '2000-12-31', presupuesto: 450000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P005'}), (e:Empleado {curp: 'ATO789012'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P005'}), (e:Empleado {curp: 'OTR123456'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P005'}), (e:Empleado {curp: 'GSA234567'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S005'}), (p:Proyecto {codigo: 'P005'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P0A1', nombre: 'Proyecto 0A1', descripcion: 'Proyecto 0A1 de prueba', fechaInicio: '2022-01-01', fechaFin: '2022-12-31', presupuesto: 650000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P0A1'}), (e:Empleado {curp: 'LPE001232'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0A1'}), (e:Empleado {curp: 'NVE789012'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0A1'}), (e:Empleado {curp: 'RMA678901'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S001'}), (p:Proyecto {codigo: 'P0A1'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P0B1', nombre: 'Proyecto 0B1', descripcion: 'Proyecto 0B1 de prueba', fechaInicio: '2020-01-01', fechaFin: '2020-12-31', presupuesto: 650000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P0B1'}), (e:Empleado {curp: 'LPE001232'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0B1'}), (e:Empleado {curp: 'ESA345678'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0B1'}), (e:Empleado {curp: 'ARU345678'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S002'}), (p:Proyecto {codigo: 'P0B1'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P0C1', nombre: 'Proyecto 0C1', descripcion: 'Proyecto 0C1 de prueba', fechaInicio: '2020-01-01', fechaFin: '2020-12-31', presupuesto: 650000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P0C1'}), (e:Empleado {curp: 'LPE001232'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0C1'}), (e:Empleado {curp: 'NGO789012'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0C1'}), (e:Empleado {curp: 'CRU678901'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S003'}), (p:Proyecto {codigo: 'P0C1'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

MERGE (p:Proyecto {codigo: 'P0D1', nombre: 'Proyecto 0D1', descripcion: 'Proyecto 0D1 de prueba', fechaInicio: '2020-01-01', fechaFin: '2020-12-31', presupuesto: 650000}) RETURN p;
MATCH (p:Proyecto {codigo: 'P0D1'}), (e:Empleado {curp: 'LPE001232'})
MERGE (e)-[:GESTIONA_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0D1'}), (e:Empleado {curp: 'EPE234567'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (p:Proyecto {codigo: 'P0D1'}), (e:Empleado {curp: 'JPA234567'})
MERGE (e)-[:TRABAJA_EN_PROYECTO]->(p) RETURN p, e;
MATCH (s:Sucursal {clave: 'S004'}), (p:Proyecto {codigo: 'P0D1'})
MERGE (p)-[:PROYECTO_UBICADO]->(s) RETURN s, p;

# Creacion de clientes
MERGE (c:Cliente {nombre: 'ONI Enterprises', empresa: 'ONI', telefono: '123-456-7890', correo: 'contacto@onienterprises.com'}) RETURN c;
MERGE (c:Cliente {nombre: 'Vishkar Industries', empresa: 'Vishkar', telefono: '987-654-3210', correo: 'contacto@vishkarindustries.com'}) RETURN c;
MERGE (c:Cliente {nombre: 'Ganesh Enterprises', empresa: 'Ganesh', telefono: '555-555-5555', correo: 'contacto@ganeshenterprises.com'}) RETURN c;
MERGE (c:Cliente {nombre: 'Jin Incorporated', empresa: 'Jin', telefono: '111-111-1111', correo: 'contacto@jinincorporated.com'}) RETURN c;
MERGE (c:Cliente {nombre: 'Kumar Industries', empresa: 'Kumar', telefono: '222-222-2222', correo: 'contacto@kumarindustries.com'}) RETURN c;
MERGE (c:Cliente {nombre: 'Raj Enterprises', empresa: 'Raj', telefono: '333-333-3333', correo: 'contacto@rajenterprises.com'}) RETURN c;

# Relacion de clientes a proyectos
MATCH (c:Cliente {nombre: 'ONI Enterprises'}), (p:Proyecto {codigo: 'P001'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Vishkar Industries'}), (p:Proyecto {codigo: 'P002'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Ganesh Enterprises'}), (p:Proyecto {codigo: 'P003'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Jin Incorporated'}), (p:Proyecto {codigo: 'P004'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Kumar Industries'}), (p:Proyecto {codigo: 'P005'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Raj Enterprises'}), (p:Proyecto {codigo: 'P0A1'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Raj Enterprises'}), (p:Proyecto {codigo: 'P0B1'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Raj Enterprises'}), (p:Proyecto {codigo: 'P0C1'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;
MATCH (c:Cliente {nombre: 'Raj Enterprises'}), (p:Proyecto {codigo: 'P0D1'})
MERGE (c)-[:CONTRATA_PROYECTO]->(p) RETURN p, c;

# Creacion de reuniones y sus relaciones
MERGE (r:Reunion {fecha: date('2022-01-01'), hora: time('10:00'), motivo: 'Reunion para Proyecto P001'}) WITH r
MATCH (c:Cliente {nombre: 'ONI Enterprises'})
MATCH (s:Sucursal {clave: 'S001'})
MATCH (e1:Empleado {curp: 'JPE001133'})
MATCH (e2:Empleado {curp: 'JPE001232'})
MATCH (e3:Empleado {curp: 'LLO023012'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2002-01-01'), hora: time('10:00'), motivo: 'Reunion para Proyecto P002'}) WITH r
MATCH (c:Cliente {nombre: 'Vishkar Industries'})
MATCH (s:Sucursal {clave: 'S002'})
MATCH (e1:Empleado {curp: 'MLO023012'})
MATCH (e2:Empleado {curp: 'JPE001232'})
MATCH (e3:Empleado {curp: 'PGO456789'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2001-01-01'), hora: time('12:00'), motivo: 'Reunion para Proyecto P003'}) WITH r
MATCH (c:Cliente {nombre: 'Ganesh Enterprises'})
MATCH (s:Sucursal {clave: 'S003'})
MATCH (e1:Empleado {curp: 'LGO456789'})
MATCH (e2:Empleado {curp: 'JPE001232'})
MATCH (e3:Empleado {curp: 'LLO023012'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2000-01-01'), hora: time('09:00'), motivo: 'Reunion para Proyecto P004'}) WITH r
MATCH (c:Cliente {nombre: 'Jin Incorporated'})
MATCH (s:Sucursal {clave: 'S004'})
MATCH (e1:Empleado {curp: 'CSA123456'})
MATCH (e2:Empleado {curp: 'MRO123456'})
MATCH (e3:Empleado {curp: 'MAH789012'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('1999-01-01'), hora: time('11:00'), motivo: 'Reunion para Proyecto P005'}) WITH r
MATCH (c:Cliente {nombre: 'Kumar Industries'})
MATCH (s:Sucursal {clave: 'S005'})
MATCH (e1:Empleado {curp: 'ATO789012'})
MATCH (e2:Empleado {curp: 'OTR123456'})
MATCH (e3:Empleado {curp: 'GSA234567'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2005-01-01'), hora: time('13:00'), motivo: 'Reunion para Proyecto P0A1'}) WITH r
MATCH (c:Cliente {nombre: 'Raj Enterprises'})
MATCH (s:Sucursal {clave: 'S001'})
MATCH (e1:Empleado {curp: 'LPE001232'})
MATCH (e2:Empleado {curp: 'NVE789012'})
MATCH (e3:Empleado {curp: 'RMA678901'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2006-01-01'), hora: time('14:00'), motivo: 'Reunion para Proyecto P0B1'}) WITH r
MATCH (c:Cliente {nombre: 'Raj Enterprises'})
MATCH (s:Sucursal {clave: 'S002'})
MATCH (e1:Empleado {curp: 'LPE001232'})
MATCH (e2:Empleado {curp: 'ESA345678'})
MATCH (e3:Empleado {curp: 'ARU345678'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2007-01-01'), hora: time('15:00'), motivo: 'Reunion para Proyecto P0C1'}) WITH r
MATCH (c:Cliente {nombre: 'Raj Enterprises'})
MATCH (s:Sucursal {clave: 'S003'})
MATCH (e1:Empleado {curp: 'LPE001232'})
MATCH (e2:Empleado {curp: 'NGO789012'})
MATCH (e3:Empleado {curp: 'CRU678901'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

MERGE (r:Reunion {fecha: date('2008-01-01'), hora: time('16:00'), motivo: 'Reunion para Proyecto P0D1'}) WITH r
MATCH (c:Cliente {nombre: 'Raj Enterprises'})
MATCH (s:Sucursal {clave: 'S004'})
MATCH (e1:Empleado {curp: 'LPE001232'})
MATCH (e2:Empleado {curp: 'EPE234567'})
MATCH (e3:Empleado {curp: 'JPA234567'})
MERGE (r)-[rl:REUNION_LUGAR]->(s)
MERGE (c)-[ac:ASISTE_CLIENTE]->(r)
MERGE (e1)-[ae1:ASISTE_EMPLEADO]->(r)
MERGE (e2)-[ae2:ASISTE_EMPLEADO]->(r)
MERGE (e3)-[ae3:ASISTE_EMPLEADO]->(r)
RETURN c, s, e1, e2, e3, r, rl, ac, ae1, ae2, ae3;

# Creacion de visitas y sus relaciones
MERGE (v:Visita {fecha: date('2022-01-01'), hora: time('10:00'), motivo: 'Visita para Proyecto P001'}) WITH v
MATCH (s:Sucursal {clave: 'S001'})
MATCH (c:Cliente {nombre: 'ONI Enterprises'})
MERGE (v)-[vl:VISITA_LUGAR]->(s)
MERGE (v)-[vc:VISITA_CLIENTE]->(c)
RETURN s, c, v, vl, vc;

MERGE (v:Visita {fecha: date('2022-01-01'), hora: time('11:00'), motivo: 'Visita para Proyecto P002'}) WITH v
MATCH (s:Sucursal {clave: 'S001'})
MATCH (c:Cliente {nombre: 'Ganesh Enterprises'})
MERGE (v)-[vl:VISITA_LUGAR]->(s)
MERGE (v)-[vc:VISITA_CLIENTE]->(c)
RETURN s, c, v, vl, vc;

MERGE (v:Visita {fecha: date('2022-01-01'), hora: time('12:00'), motivo: 'Visita para Proyecto P003'}) WITH v
MATCH (s:Sucursal {clave: 'S001'})
MATCH (c:Cliente {nombre: 'Jin Incorporated'})
MERGE (v)-[vl:VISITA_LUGAR]->(s)
MERGE (v)-[vc:VISITA_CLIENTE]->(c)
RETURN s, c, v, vl, vc;

MERGE (v:Visita {fecha: date('2022-01-01'), hora: time('13:00'), motivo: 'Visita para Proyecto P004'}) WITH v
MATCH (s:Sucursal {clave: 'S001'})
MATCH (c:Cliente {nombre: 'Kumar Industries'})
MERGE (v)-[vl:VISITA_LUGAR]->(s)
MERGE (v)-[vc:VISITA_CLIENTE]->(c)
RETURN s, c, v, vl, vc;

MERGE (v:Visita {fecha: date('2022-01-01'), hora: time('14:00'), motivo: 'Visita para Proyecto P005'}) WITH v
MATCH (s:Sucursal {clave: 'S001'})
MATCH (c:Cliente {nombre: 'Raj Enterprises'})
MERGE (v)-[vl:VISITA_LUGAR]->(s)
MERGE (v)-[vc:VISITA_CLIENTE]->(c)
RETURN s, c, v, vl, vc;

# Resolucion de las querys
Q00. Script del escenario de datos.
    Podemos encontrar el archivo 'data.txt', donde se encuentra el script completo de nuestro escenario de datos.

Q01. Obtener la lista de sucursales que tienen más de 5 empleados.
    MATCH (s:Sucursal)-[:TIENE_EMPLEADO]->(e:Empleado)
    WITH s, COUNT(e) AS cantidadEmpleados
    WHERE cantidadEmpleados > 5
    RETURN s;

Q02. Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.
    MATCH (e:Empleado)-[:GESTIONA_PROYECTO]->(p:Proyecto)
    WITH e, COUNT(p) AS numProyectos
    WHERE numProyectos > 3
    RETURN e.nombre;

Q03. Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos.
    MATCH (e:Empleado {especializacion: 'Backend'})-[:TRABAJA_EN_PROYECTO]->(p:Proyecto)
    WITH e, COUNT(p) AS numProyectos
    WHERE numProyectos > 2
    RETURN e.nombre;

Q04. Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.
    MATCH (p:Proyecto)
    WHERE p.presupuesto > 1000000
    RETURN p.nombre;

Q05. Listar los empleados de soporte técnico de todas las sucursales.
    MATCH (e:Empleado) WHERE e.tipo = 'Soporte' RETURN e.nombre;

Q06. Encontrar los proyectos que corresponden a un cliente en específico.
    MATCH (c:Cliente {nombre: 'Raj Enterprises'})-[CONTRATA_PROYECTO]->(p:Proyecto)
    RETURN p.nombre;

Q07. Obtener la lista de sucursales que han recibido visitas de más de 5 clientes diferentes.
    MATCH (s:Sucursal)<-[:VISITA_LUGAR]-(v:Visita)-[:VISITA_CLIENTE]->(c:Cliente)
    WITH s, COUNT(DISTINCT c) AS cantidadClientes
    WHERE cantidadClientes >= 5
    RETURN s.nombre;

Q08. Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.
    MATCH (e:Empleado{tipo: 'Desarrollador'})-[:TRABAJA_EN_PROYECTO]->(p:Proyecto)
    WHERE p.presupuesto > 500000
    RETURN e.nombre;

Q09. Obtener la lista de clientes que han contratado más de 3 proyectos en diferentes sucursales.
    MATCH (c:Cliente)-[:CONTRATA_PROYECTO]->(p:Proyecto)-[:PROYECTO_UBICADO]->(s:Sucursal)
    WITH c, COUNT(DISTINCT s) AS numSucursales
    WHERE numSucursales > 3
    RETURN c.nombre;

Q10. Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.
    MATCH (s:Sucursal)-[TIENE_EMPLEADO]->(e:Empleado {especializacion: 'Full-stack'})
    WITH s, COUNT(e) AS numEmpleados
    WHERE numEmpleados > 5
    RETURN s.nombre;

Q11. Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.
    MATCH (s1:Sucursal {clave: 'S002'})-[r:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Soporte'}), (s2:Sucursal {clave: 'S004'})
    MERGE (s2)-[:TIENE_EMPLEADO]->(e)
    DELETE r;

Q12. Reemplaza al gerente de una sucursal en específico.
    MATCH (s:Sucursal {clave: 'S001'})-[r:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Gerente'})
    DELETE r
    WITH s
    MATCH (e2:Empleado {curp: 'LPE001232'})
    MERGE (s)-[r:TIENE_EMPLEADO]->(e2);

Q13. Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.
    MATCH (p:Proyecto {clave: 'P0A1'})-[r:PROYECTO_UBICADO]->(s1:Sucursal {clave: 'S001'})
    MATCH (s2:Sucursal {clave: 'S002'})
    MERGE (p)-[:PROYECTO_UBICADO]->(s2)
    DELETE r;

Q14. Obtener la lista de clientes que nunca han realizado visitas a las sucursales.
    MATCH (c:Cliente)
    WHERE NOT (c)<-[:VISITA_CLIENTE]-(:Visita)
    RETURN c.nombre;

Q15. Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.
    MATCH (s1:Sucursal {clave: 'S005'})-[r:TIENE_EMPLEADO]->(e:Empleado), (s2:Sucursal {clave: 'S001'})
    MERGE (s2)-[:TIENE_EMPLEADO]->(e)
    DELETE r
    DETACH DELETE s1;

# Enlaces de consultas
Q1.  http://localhost:3000/api/sucursales/masDe5Empleados
Q2.  http://localhost:3000/api/empleados/gerenteMasDeTresProyectos
Q3.  http://localhost:3000/api/empleados/programadoresBackend
Q4.  http://localhost:3000/api/proyectos/masDeMillon
Q5.  http://localhost:3000/api/empleados/tecnicos
Q6.  http://localhost:3000/api/clientes/clienteEspecifico
Q7.  http://localhost:3000/api/sucursales/masDe5Visitas
Q8.  http://localhost:3000/api/empleados/programadoresMasDe500k
Q9.  http://localhost:3000/api/clientes/masDeTresProyectos
Q10. http://localhost:3000/api/sucursales/masDe5Fullstack
Q11. http://localhost:3000/api/empleados/traspasarTecnicos
Q12. http://localhost:3000/api/empleados/reemplazarGerente
Q13. http://localhost:3000/api/sucursales/transferirProyecto
Q14. http://localhost:3000/api/clientes/clientesSinVisitas
Q15. http://localhost:3000/api/sucursales/transferirEmpleados


# Codigo JSON para importar las consultas de la base de datos en Postman

{
	"info": {
		"_postman_id": "0061d8a5-df47-42a6-952d-79de668c43bd",
		"name": "Querys U3 noSQL",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39047919"
	},
	"item": [
		{
			"name": "Mas 5 Empleados",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/sucursales/masDe5Empleados",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"sucursales",
						"masDe5Empleados"
					]
				}
			},
			"response": []
		},
		{
			"name": "Mas 3 Gestiones",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/empleados/gerenteMasDeTresProyectos",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"empleados",
						"gerenteMasDeTresProyectos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Programadores Backend",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/empleados/programadoresBackend",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"empleados",
						"programadoresBackend"
					]
				}
			},
			"response": []
		},
		{
			"name": "Mas de 1,000,000",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/proyectos/masDeMillon",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"proyectos",
						"masDeMillon"
					]
				}
			},
			"response": []
		},
		{
			"name": "Soporte Tecnico",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/empleados/tecnicos",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"empleados",
						"tecnicos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Cliente Especifico",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/clientes/clienteEspecifico",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"clientes",
						"clienteEspecifico"
					]
				}
			},
			"response": []
		},
		{
			"name": "Mas de 5 visitas",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/sucursales/masDe5Visitas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"sucursales",
						"masDe5Visitas"
					]
				}
			},
			"response": []
		},
		{
			"name": "Mas de 500k",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/empleados/programadoresMasDe500k",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"empleados",
						"programadoresMasDe500k"
					]
				}
			},
			"response": []
		},
		{
			"name": "Clientes mas de 3 proyectos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/clientes/masDeTresProyectos",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"clientes",
						"masDeTresProyectos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Sucursales con desarrolladores full-stack > 5",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/sucursales/masDe5Fullstack",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"sucursales",
						"masDe5Fullstack"
					]
				}
			},
			"response": []
		},
		{
			"name": "Traspasar Tecnicos",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"origen\": \"S002\",\r\n    \"destino\": \"S004\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/empleados/traspasarTecnicos",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"empleados",
						"traspasarTecnicos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Reemplazo de Gerente",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"sucursal\": \"S001\",\r\n    \"gerente\": \"ATO789012\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/empleados/reemplazarGerente",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"empleados",
						"reemplazarGerente"
					]
				}
			},
			"response": []
		},
		{
			"name": "Transferir Proyecto",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"sucursalOrigen\": \"S001\",\r\n    \"sucursalDestino\": \"S002\",\r\n    \"proyecto\": \"P0A1\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/sucursales/transferirProyecto",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"sucursales",
						"transferirProyecto"
					]
				}
			},
			"response": []
		},
		{
			"name": "Clientes sin Visitas",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/clientes/clientesSinVisitas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"clientes",
						"clientesSinVisitas"
					]
				}
			},
			"response": []
		},
		{
			"name": "Transferir empleados",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"sucursalOrigen\": \"S005\",\r\n    \"sucursalDestino\": \"S001\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/sucursales/transferirEmpleados",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"sucursales",
						"transferirEmpleados"
					]
				}
			},
			"response": []
		}
	]
}

# Codigo del Backend del proyecto

> SRC
    > controller
        > clientesController.js
        > empleadosController.js
        > sucursalesController.js
    > model
        > clientesModel.js
        > empleadosModel.js
        > sucursalesModel.js
    > routes
        > clientesRoutes.js
        > empleadosRoutes.js
        > sucursalesRoutes.js
    > server.js

clientesController.js:

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


empleadosController.js

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


sucursalesController.js

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


clientesModel.js

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


empleadosModel.js

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


sucursalesModel.js

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


cache.js

const redis = require('redis');
const client = redis.createClient({
    socket:{
        port:6379,
        host:'127.0.0.1'
    }
});

const cache = async function (req, res, next) {
    let fecha = new Date();
    await client.connect();
    await client.set(fecha.toLocaleDateString() + ":" + fecha.getHours() + "-" +
    fecha.getMinutes() + "-" + fecha.getSeconds(), " - " + req.method + " " +
    req.route.path);
    await client.disconnect();
    next()
}
module.exports = cache;


clientesRoutes.js

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


empleadosRoutes.js

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


sucursalesRoutes.js

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


logger.js

const redis = require('redis');
const client = redis.createClient({
    socket:{
        port:6379,
        host:'redisStack'
    }
});

// Exportar una función middleware que se ejecutará en cada solicitud
module.exports = (req, res, next) => {
    res.on('finish', async () => {
        await client.connect();
        const key = `${req.method}:${Date.now()}:${req.originalUrl}`;
        const valor = JSON.stringify({
            clave: key,
            time: new Date(),
            req: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                body: req.body
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: req.method === 'GET' ? res.data : null
            }
        });
        console.log(valor)
        await client.set(key, valor);
        await client.disconnect();
    });
    next();
};


server.js

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


.dockerignore

node_modules
npm-debug.log


.gitignore

node_modules


docker-compose.yml

services:
  app:
    build: .
    container_name: entregableU3
    ports:
      - "3000:3000"
    depends_on:
      - redis_stack
      - neo4j
    environment:
      - NEO4J_URL=neo4j://neo01:7687
    volumes:
      - ./Regs:/app
    networks:
      - backend
    command: npm start
  
  redis_stack:
    image: redis/redis-stack
    container_name: redisStack
    ports:
      - "6379:6379"
      - "8001:8001"
    depends_on:
      - neo4j
    networks:
      - backend

  neo4j:
    image: neo4j
    container_name: neo01
    ports:
      - "7687:7687"
      - "7474:7474"
    environment:
      - NEO4J_AUTH=none
    networks:
      - backend

networks:
  backend:
    driver: bridge


Dockerfile

FROM node
WORKDIR /Regs
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]