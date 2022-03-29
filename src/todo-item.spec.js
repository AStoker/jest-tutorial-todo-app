
import { render } from '../test/helper';

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

    it('should trigger delete when clicked', async () => {

        const result = (await render('<todo-item></todo-item>', TodoItem));
        
        const node = result.document.firstElementChild;
        const viewModel = result.getViewModel(TodoItem);

        const deleteSpy = jest.spyOn(viewModel, 'delete');
        
        const shadowRoot = node.shadowRoot; //for open mode
        shadowRoot.querySelector('button').click();

        expect(deleteSpy).toHaveBeenCalled();

        deleteSpy.mockClear();
    });

});
