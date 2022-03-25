import { CustomElement } from 'aurelia';
import { render } from '../test/helper';
import { MyTodos } from './my-todos';

describe('my-todos', () => {
    it('should render the header text', async () => {
        const node = (await render('<my-todos></my-todos>', MyTodos)).document.firstElementChild;
        // In Shadow DOM open mode, shadowRoot is also accessible through DOM API
        //   node.shadowRoot
        // But only Aurelia API can access shadowRoot in both open and closed mode.
        const shadowRoot = CustomElement.for(node).shadowRoot;
        const text = shadowRoot.querySelector('h1').textContent;
        expect(text.trim()).toBe('My Todo\'s');
    });

    describe('todo management', () => {

        describe('adding todos', () => {
            it('should create a new todo', () => {
                const myTodos = new MyTodos();
    
                expect(myTodos.todos.length).toBe(0);
    
                myTodos.newTodo('Buy milk');
    
                expect(myTodos.todos.length).toBe(1);
                expect(myTodos.todos[0].text).toBe('Buy milk');
                expect(myTodos.todos[0].completed).toBe(false);
            });
    
            it('should put new todos first', () => {
                const myTodos = new MyTodos();
    
                myTodos.newTodo('Buy milk');
                myTodos.newTodo('Buy bread');
    
                expect(myTodos.todos[0].text).toBe('Buy bread');
                expect(myTodos.todos[1].text).toBe('Buy milk');
            });
        });

        describe('deleting todos', () => {
            it('should delete a todo', () => {
                const myTodos = new MyTodos();
    
                myTodos.newTodo('Buy milk');
                myTodos.newTodo('Buy bread');
    
                expect(myTodos.todos.length).toBe(2);
    
                myTodos.deleteTodo(0);
    
                expect(myTodos.todos.length).toBe(1);
                expect(myTodos.todos[0].text).toBe('Buy milk');
            });
        })

    });
});
