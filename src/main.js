import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyTodos } from './my-todos';
import shared from './shared.scss';

Aurelia
    .register(StyleConfiguration.shadowDOM({
        // optionally add the shared styles for all components
        sharedStyles: [shared]
    }))
    .app(MyTodos)
    .start();
