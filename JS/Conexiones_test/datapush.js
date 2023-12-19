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

// Conéctate a la base de datos
connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
  
      // Consulta para insertar datos en la tabla
      const insertQuery = `
        INSERT INTO cliente (Rut, Nombre, Historial_de_compra, Numero_de_telefono, Direccion, Correo_electronico, Autos_arrendados)
        VALUES ('123456789', 'Ejemplo Cliente', 1, '123-456-7890', 'Ejemplo Dirección', 'cliente@example.com', 2)
      `;
  
      // Ejecuta la consulta
      connection.query(insertQuery, (error) => {
        if (error) {
          console.error('Error al insertar datos:', error);
        } else {
          console.log('Datos insertados correctamente');
        }
  
        // Cierra la conexión después de la consulta
      });
    }
  });
  
  const insertDataScript = `
  INSERT INTO boleta (Numero_de_boleta, Rut_cliente, Id_auto, Rut_vendedor, Precio_de_venta, Fecha_de_compra, Garantia, Detalles_de_pago)
  VALUES (1, '123456789', 1, 'Vendedor123', 10000.00, '2023-01-01', 'Garantía 1 año', 'Pago completo');
  `;
  
  connection.query(insertDataScript, (error) => {
      if (error) {
        console.error('Error al insertar datos en la tabla Boleta:', error);
      } else {
        console.log('Datos insertados correctamente en la tabla Boleta');
      }
  
      // Cierra la conexión después de ejecutar la consulta
     
  });
  
  // Script para insertar datos en la tabla Vehiculo
const insertVehiculoDataScript = `
INSERT INTO vehiculo (Id_auto, Id_cliente, Color, Precio, Modelo, Tipo_combustible, Numero_de_chasis, Patente, Marca, Anio, Tipo_de_vehiculo)
VALUES
  (1, 1, 'Rojo', 20000.00, 'Sedan', 'Gasolina', '123ABC456DEF789GH', 'ABC123', 'Toyota', 2022, 'Automóvil'),
  (2, 2, 'Azul', 25000.00, 'SUV', 'Diésel', '456DEF789GH123ABC', 'XYZ987', 'Ford', 2021, 'Camioneta'),
  (3, 1, 'Negro', 18000.00, 'Compacto', 'Gasolina', '789GH123ABC456DEF', 'LMN456', 'Honda', 2023, 'Automóvil');
`;

// Ejecutar la consulta para insertar datos en la tabla Vehiculo
connection.query(insertVehiculoDataScript, (error) => {
    if (error) {
        console.error('Error al insertar datos en la tabla Vehiculo:', error);
    } else {
        console.log('Datos insertados correctamente en la tabla Vehiculo');
    }

    // Cierra la conexión después de ejecutar la consulta
});


// Script para insertar datos en la tabla Factura
const insertFacturaDataScript = `
INSERT INTO factura (
    Numero_factura, 
    Fecha_emision, 
    Cliente, 
    Precio_unitario, 
    Cantidad, 
    Impuestos, 
    Descuentos, 
    Total_pagar, 
    Estado_pago, 
    Fecha_vencimiento, 
    Metodo_pago, 
    Id_trabajador
) VALUES
    (1, '2023-01-15', 'Cliente1', 100.00, 2, 10.00, 5.00, 205.00, 'Pendiente', '2023-02-15', 'Tarjeta', 1),
    (2, '2023-02-01', 'Cliente2', 150.00, 1, 15.00, 0.00, 165.00, 'Pagado', '2023-03-01', 'Efectivo', 2),
    (3, '2023-03-10', 'Cliente3', 120.00, 3, 12.00, 8.00, 336.00, 'Pendiente', '2023-04-10', 'Transferencia', 3);
`;

// Ejecutar la consulta para insertar datos en la tabla Factura
connection.query(insertFacturaDataScript, (error) => {
    if (error) {
        console.error('Error al insertar datos en la tabla Factura:', error);
    } else {
        console.log('Datos insertados correctamente en la tabla Factura');
    }

});
// Script para insertar datos en la tabla Trabajador
const insertTrabajadorDataScript = `
INSERT INTO trabajador (
    Id_trabajador,
    Nombre,
    Numero_de_telefono,
    Cargo,
    Correo_electronico,
    Numero_de_cuenta_bancaria,
    Direccion
) VALUES
    (1, 'Juan Pérez', '123-456-7890', 'Gerente', 'juan@example.com', '12345678901234567890', 'Calle Principal 123'),
    (2, 'María García', '987-654-3210', 'Vendedor', 'maria@example.com', '09876543210987654321', 'Avenida Secundaria 456'),
    (3, 'Carlos Rodríguez', '555-123-4567', 'Recepcionista', 'carlos@example.com', '55555555555555555555', 'Calle Transversal 789');
`;

// Ejecutar la consulta para insertar datos en la tabla Trabajador
connection.query(insertTrabajadorDataScript, (error) => {
    if (error) {
        console.error('Error al insertar datos en la tabla Trabajador:', error);
    } else {
        console.log('Datos insertados correctamente en la tabla Trabajador');
    }

    // Cierra la conexión después de ejecutar la consulta
    connection.end();
});
