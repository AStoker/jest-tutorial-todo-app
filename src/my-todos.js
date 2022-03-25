export class MyTodos {
    todos = [];

    newTodo(text) {
        this.todos.unshift({ text, completed: false });
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}