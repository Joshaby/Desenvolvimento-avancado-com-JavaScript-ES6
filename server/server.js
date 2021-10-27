const http = require('http');
const fs = require('fs').promises;

const server = http.createServer((request, response) => {

    if (request.url == '/data') {
        fs.readFile('server/data.json').then(contents => {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(contents);
        });
    }

    if (request.url == '/data1') {
        response.writeHead(404);
        response.end();
    }
});

const port = 5000;

server.listen(port);