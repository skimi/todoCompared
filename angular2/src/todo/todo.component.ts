import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo',
    template: require('./todo.html')
})
export class TodoComponent {
    @Input() todo: Object;
    @Input() click: Function;
}
