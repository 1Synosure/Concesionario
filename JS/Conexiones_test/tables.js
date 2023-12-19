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

/* La línea `// Conéctate a la base de datos` es un comentario en el código JavaScript. No hace nada en
términos de funcionalidad, pero sirve como comentario útil para indicar que el siguiente código está
estableciendo una conexión con la base de datos. Los comentarios se utilizan para proporcionar
explicaciones o información adicional sobre el código y el intérprete de JavaScript los ignora. */

// Conéctate a la base de datos
connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
  
      // Consulta para obtener la tabla completa
      const selectQuery = 'SELECT * FROM cliente';
  
      // Ejecuta la consulta
      connection.query(selectQuery, (error, results) => {
        if (error) {
          console.error('Error al realizar la consulta:', error);
        } else {
          console.log('Datos de la tabla Cliente:');
          console.table(results);
        }
  
        // Cierra la conexión después de la consulta
        
      });
    }
  });
7// Consulta para seleccionar todos los registros de la tabla Boleta
const selectDataScript = `
SELECT * FROM boleta;
`;

// Ejecutar la consulta
connection.query(selectDataScript, (error, results) => {
    if (error) {
        console.error('Error al seleccionar datos de la tabla Boleta:', error);
    } else {
        // Mostrar los resultados
        console.log('Registros de la tabla Boleta:');
        console.table(results);  // Utilizamos console.table para mostrar los resultados en formato tabular
    }

});

// Consulta para obtener datos de la tabla Vehiculo
const selectVehiculoDataScript = `
SELECT * FROM vehiculo;
`;

// Ejecutar la consulta para obtener datos de la tabla Vehiculo
connection.query(selectVehiculoDataScript, (error, results) => {
    if (error) {
        console.error('Error al obtener datos de la tabla Vehiculo:', error);
    } else {
        // Imprimir los resultados
        console.log('Datos de la tabla Vehiculo:');
        console.table(results);
    }

    // Cierra la conexión después de ejecutar la consulta

});
// Consulta para obtener datos de la tabla Factura
const selectFacturaDataScript = `
SELECT * FROM factura;
`;

// Ejecutar la consulta para obtener datos de la tabla Factura
connection.query(selectFacturaDataScript, (error, results) => {
    if (error) {
        console.error('Error al obtener datos de la tabla Factura:', error);
    } else {
        // Imprimir los resultados
        console.log('Datos de la tabla Factura:');
        console.table(results);
    }


});

// Consulta para obtener datos de la tabla Trabajador
const selectTrabajadorDataScript = `
SELECT * FROM trabajador;
`;

// Ejecutar la consulta para obtener datos de la tabla Trabajador
connection.query(selectTrabajadorDataScript, (error, results) => {
    if (error) {
        console.error('Error al obtener datos de la tabla Trabajador:', error);
    } else {
        // Imprimir los resultados
        console.log('Datos de la tabla Trabajador:');
        console.table(results);
    }

    // Cierra la conexión después de ejecutar la consulta
    connection.end();
});
