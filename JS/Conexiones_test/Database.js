// Importa el módulo 'mysql'
const mysql = require('mysql');

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'Consesionario',
  password: 'root',
  protocol:'tcp'
});
//Tabla cliente
const createDatabaseAndTableScript = `  
CREATE TABLE IF NOT EXISTS cliente (
    Rut VARCHAR(20) PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Historial_de_compra INT,
    Numero_de_telefono VARCHAR(15),
    Direccion VARCHAR(255),
    Correo_electronico VARCHAR(255),
    Autos_arrendados INT
  );
  
`;

//Tabla Boleta
const createBoletaTableScript = `
CREATE TABLE IF NOT EXISTS boleta (
    Numero_de_boleta INT PRIMARY KEY,
    Rut_cliente VARCHAR(20),
    Id_auto INT,
    Rut_vendedor VARCHAR(20),
    Precio_de_venta DECIMAL(10, 2),
    Fecha_de_compra DATE,
    Garantia VARCHAR(255),
    Detalles_de_pago TEXT
);
`;

// Conéctate a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
      
  }
  
});
connection.query(createDatabaseAndTableScript, (error) => {
    if (error) {
      console.error('Error al ejecutar el script SQL:', error);
    } else {
      console.log('Tabla cliente creada exitosamente ');
    }

})
connection.query(createBoletaTableScript, (error) => {
  if (error) {
    console.error('Error al ejecutar el script SQL para la tabla Boleta:', error);
  } else {
    console.log('Tabla Boleta creada correctamente')
  }})
;
const createVehiculoTableScript = `
CREATE TABLE IF NOT EXISTS vehiculo (
    Id_auto INT PRIMARY KEY,
    Id_cliente INT,
    Color VARCHAR(50),
    Precio DECIMAL(10, 2),
    Modelo VARCHAR(50),
    Tipo_combustible VARCHAR(20),
    Numero_de_chasis VARCHAR(50),
    Patente VARCHAR(20),
    Marca VARCHAR(50),
    Anio INT,
    Tipo_de_vehiculo VARCHAR(20)
);
`;

// Ejecutar la consulta para crear la tabla Vehiculo
connection.query(createVehiculoTableScript, (error) => {
    if (error) {
        console.error('Error al crear la tabla Vehiculo:', error);
    } else {
        console.log('Tabla Vehiculo creada correctamente');
    }

    // Cierra la conexión después de ejecutar la consulta
});

const createFacturaTableScript = `
CREATE TABLE IF NOT EXISTS factura (
    Numero_factura INT PRIMARY KEY,
    Fecha_emision DATE,
    Cliente VARCHAR(20),
    Precio_unitario DECIMAL(10, 2),
    Cantidad INT,
    Impuestos DECIMAL(10, 2),
    Descuentos DECIMAL(10, 2),
    Total_pagar DECIMAL(10, 2),
    Estado_pago VARCHAR(50),
    Fecha_vencimiento DATE,
    Metodo_pago VARCHAR(50),
    Id_trabajador INT
);
`;

// Ejecutar la consulta para crear la tabla Factura
connection.query(createFacturaTableScript, (error) => {
    if (error) {
        console.error('Error al crear la tabla Factura:', error);
    } else {
        console.log('Tabla Factura creada correctamente');
    }

    // Cierra la conexión después de ejecutar la consulta
});

const createTrabajadorTableScript = `
CREATE TABLE IF NOT EXISTS trabajador (
    Id_trabajador INT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Numero_de_telefono VARCHAR(15),
    Cargo VARCHAR(255),
    Correo_electronico VARCHAR(255),
    Numero_de_cuenta_bancaria VARCHAR(20),
    Direccion VARCHAR(255)
);
`;

// Ejecutar la consulta para crear la tabla Trabajador
connection.query(createTrabajadorTableScript, (error) => {
    if (error) {
        console.error('Error al crear la tabla Trabajador:', error);
    } else {
        console.log('Tabla Trabajador creada correctamente');
    }

    // Cierra la conexión después de ejecutar la consulta
    connection.end();
});



