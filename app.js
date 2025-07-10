const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Proxy simulado para evitar CORS del lado del cliente
app.use('/api', (req, res) => {
    const target = 'https://reqres.in' + req.url;
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

    const options = {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': req.headers['x-api-key'] || 'reqres-free-v1'
        }
    };
    
    if(['POST', 'PUT'].includes(req.method)){
        options.body = JSON.stringify(req.body);
    }

    fetch(target, options)
        .then(resp =>resp.json().then(data => res.status(resp.status).json(data)))
        .catch(err => res.status(500).json({error: 'Proxy error', datails: err.message }));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
})