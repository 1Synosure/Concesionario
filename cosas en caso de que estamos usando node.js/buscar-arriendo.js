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

// Manejar solicitud GET
app.get('/buscar-arriendo', async (req, res) => {
  const opcion = req.query.opcion;

  try {
    let query, params;

    if (opcion === 'numeroOrden') {
      const numeroOrden = req.query.numeroOrden;
      query = 'SELECT * FROM tu_tabla WHERE numero_orden = ?';
      params = [numeroOrden];
    } else if (opcion === 'rutCliente') {
      const rutCliente = req.query.rutCliente;
      query = 'SELECT * FROM tu_tabla WHERE rut_cliente = ?';
      params = [rutCliente];
    } else {
      return res.status(400).json({ error: 'Opción de búsqueda no válida.' });
    }

    // Realizar la consulta a la base de datos
    const [rows, fields] = await connection.execute(query, params);

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'No se encontró un arriendo con los datos proporcionados.' });
    }
  } catch (error) {
    console.error('Error al buscar el arriendo:', error);
    res.status(500).json({ error: 'Ocurrió un error al buscar el arriendo.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
