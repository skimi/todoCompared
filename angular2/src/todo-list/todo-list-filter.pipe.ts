import { Pipe, PipeTransform } from '@angular/core';
import { SHOW_ALL_TODOS, SHOW_ACTIVE_TODOS, SHOW_COMPLETED_TODOS } from './todo-list.component';

@Pipe({
    name: 'todoListPipe',
    pure: false
})
export class TodoListPipe implements PipeTransform {
    transform(data: any[], filterId: number): any[] {
        return data.filter(todo => {
            return filterId === SHOW_ALL_TODOS
                || (filterId === SHOW_ACTIVE_TODOS && todo.active)
                || (filterId === SHOW_COMPLETED_TODOS && !todo.active)
        });
    }
}
