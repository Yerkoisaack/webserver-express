const http = require('http');

http.createServer((req, res) => {
        res.write('hola munto');
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');