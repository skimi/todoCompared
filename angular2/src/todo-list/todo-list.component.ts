import { Component } from '@angular/core';
import Todo from '../todo/todo';
import TodoStore from './todo-store.service';

export const SHOW_ALL_TODOS = 0;
export const SHOW_ACTIVE_TODOS = 1;
export const SHOW_COMPLETED_TODOS = 2;

@Component({
    selector: 'todo-list',
    template: require('./todo-list.html'),
    providers: [TodoStore]
})
export class TodoListComponent {
    filter: number;

    constructor(private todoStore: TodoStore) {
        this.todoStore.add('Hello World');
        this.filter = SHOW_ACTIVE_TODOS;
    }

    toggleTodo(todo: Todo) {
        todo.toggle();
    }

    filterTodo(filter: string) {
        switch (filter) {
            case 'all':
                this.filter = SHOW_ALL_TODOS;
                break;
            case 'completed':
                this.filter = SHOW_COMPLETED_TODOS;
                break;
            case 'active':
            default:
                this.filter = SHOW_ACTIVE_TODOS;
                break;
        }
    }
}
