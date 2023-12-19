const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Importa el paquete cors
const app = express();
const port = 8000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'Consesionario',
    password: 'root',
    protocol:'tcp'
});

// Conectar a la base de datos
connection.connect(error => {
    if (error) {
        console.error('Error de conexión a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Usa cors middleware para habilitar CORS
app.use(cors());

// Ruta para manejar la solicitud GET y devolver datos desde la base de datos MySQL
app.get('/api/datos', (req, res) => {
    const query = 'SELECT * FROM factura';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al realizar la consulta:', error);
            res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
