const http = require('http');

//Request: Las solicitudades a mi web server y peticiones
//Response: Lo que el servidor responde al cliente
//Con esto creas el servidor.
http.createServer((req, res) => {

    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, {'Content-Type': 'application/csv'});
    
    res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto', 8080);