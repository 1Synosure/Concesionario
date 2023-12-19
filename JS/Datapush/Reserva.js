const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'concesionario'
});

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar las solicitudes de inicio de sesión
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Consulta SQL para verificar las credenciales
  const query = `SELECT * FROM cliente WHERE Nombre = ? AND Correo_electronico = ?`;

  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      return res.status(500).send('Error interno del servidor');
    }

    if (results.length > 0) {
      // Usuario autenticado correctamente
      res.send('Inicio de sesión exitoso');
    } else {
      // Credenciales incorrectas
      res.send('Credenciales incorrectas');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
