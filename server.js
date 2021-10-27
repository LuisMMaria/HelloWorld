let express = require('express');
const app = express();

app.get('/saludo', (req, resp) => {
    resp.json("Hello World")
})

app.listen(8080, () => {
    console.log('Escuchando en puerto 8080');
})