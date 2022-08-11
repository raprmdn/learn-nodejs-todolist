import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    res.write('Hello World');
    res.end();
});

server.listen(3000);