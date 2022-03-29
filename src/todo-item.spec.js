
import { TodoItem } from "./todo-item";

describe('Todo Item', () => {
    it('should be defined', () => {
        expect(TodoItem).toBeDefined();
    });

    it('should set default states', () => {
        const todoItem = new TodoItem();
        expect(todoItem.completed).toBe(false);
        expect(todoItem.text).toBe('');
        expect(todoItem.delete).toBeDefined();
    });

});