import { bindable } from 'aurelia';

export class TodoItem {

    @bindable completed = false;
    @bindable text = '';
    @bindable delete = () => {};

}