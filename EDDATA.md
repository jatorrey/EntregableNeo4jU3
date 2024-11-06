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

