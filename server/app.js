const express = require('express'); // Importar express
const path = require('path'); // Importar path
const app = express();
const PORT = 3000;


app.use(express.json()); // Preparado para enviar y recibir JSON
app.use(express.static(path.join(__dirname, '../public'))); // Declaramos la ubicacion de la carpeta Estatica
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')))
app.use('/sweetalert2', express.static(path.join(__dirname, '../node_modules/sweetalert2/dist')))

// Endpoints para enrutar al servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

app.listen(PORT, () => console.log(`✅ Servidor escuchando en http://localhost:${PORT}`))