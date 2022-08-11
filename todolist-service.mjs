export class TodoListService {
    todoList = [
        "Programmer",
        "Zaman",
        "Now"
    ];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todoList.map((value, index) => {
                return {
                    id: index,
                    todo: value
                };
            })
        });
    }

    getTodoList(req, res) {
        res.write(this.getJsonTodoList());
        res.end();
    }

    createTodo(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo);

            res.write(this.getJsonTodoList());
            res.end();
        })
    }
}