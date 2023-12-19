const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createPool({
  host: 'localhost', // Cambia esto según tu configuración
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Ruta para manejar el envío del formulario
app.post('/enviar-formulario', async (req, res) => {
  try {
    // Obtener los datos del formulario
    const datosFormulario = req.body;

    // Insertar los datos en la base de datos
    const [result] = await connection.execute(
      'INSERT INTO arriendos (numeroOrden, nombre, rut, telefono, email, direccion, fechaInicio, fechaFin, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        datosFormulario.numeroOrden,
        datosFormulario.nombre,
        datosFormulario.rut,
        datosFormulario.telefono,
        datosFormulario.email,
        datosFormulario.direccion,
        datosFormulario.fechaInicio,
        datosFormulario.fechaFin,
        datosFormulario.estado
      ]
    );

    res.json({ success: true, mensaje: 'Formulario enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    res.status(500).json({ success: false, mensaje: 'Ocurrió un error al enviar el formulario.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
