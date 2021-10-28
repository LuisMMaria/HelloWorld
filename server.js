let express = require('express');
let app = express();
const port = process.env.PORT || 8080

app.get('/saludo', (req, resp) => {
    resp.json("Hello World")
})

app.listen(port, () => {
    console.log('Escuchando en puerto 8080');
})