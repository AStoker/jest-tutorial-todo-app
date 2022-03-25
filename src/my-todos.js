export class MyTodos {
    todos = [];
    todo = '';

    newTodo(text) {
        this.todos.unshift({ text, completed: false });
        this.todo = '';
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}