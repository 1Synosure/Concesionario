const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario_mysql',
    password: 'tu_contraseña_mysql',
    database: 'tu_basededatos'
});

// Conéctate a MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
    } else {
        console.log('Conexión exitosa a MySQL');
    }
});

// Ruta para buscar arriendo por número de orden o RUT del cliente
app.get('/buscar-arriendo', (req, res) => {
    const opcion = req.query.opcion;
    const valor = req.query.valor;

    let query = '';

    if (opcion === 'numeroOrden') {
        query = `SELECT * FROM arriendos WHERE numeroOrden = ${valor}`;
    } else if (opcion === 'rutCliente') {
        query = `SELECT * FROM arriendos WHERE rutCliente = '${valor}'`;
    }

    // Ejecutar la consulta
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al buscar arriendo en MySQL:', error);
            res.json({ error: 'Ocurrió un error al buscar el arriendo.' });
        } else {
            res.json({ arriendo: results });
        }
    });
});

// Resto de tu código aqui se supone que deberian mezclarse los 3 js que mande jejeje 

// Cerrar la conexión a MySQL cuando el servidor se detenga
app.on('close', () => {
    connection.end();
    console.log('Conexión a MySQL cerrada');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
