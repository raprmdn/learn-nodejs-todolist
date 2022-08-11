import http from 'http';
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService();
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === "GET") {
        service.getTodoList(req, res);
    }

    res.write('Hello World');
    res.end();
});

server.listen(3000);