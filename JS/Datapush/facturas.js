const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'concesionario'
});

// Conéctate a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }

  console.log('Conexión exitosa a la base de datos');

  // Consulta para obtener la tabla completa
  const selectQuery = 'SELECT * FROM factura';

  // Ejecuta la consulta
  connection.query(selectQuery, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      connection.end();
      return;
    }

    console.log('Datos de la tabla Cliente:');
    console.table(results);

    // Renderiza la página con EJS y envía los datos a la vista
    app.get('/', (req, res) => {
      res.render('index', { clienteData: results });
    });

    // Cierra la conexión después de la consulta
    connection.end();
  });
});

// Inicia el servidor después de realizar la consulta
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
