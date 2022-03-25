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

});
