import { Injectable } from '@angular/core';
import Todo from '../todo/todo';

@Injectable()
export default class TodoStore {
    public todos: Todo[] = [];
    private lastId: number = 0;

    add(text: string, active: boolean = true): Todo {
        const todo = new Todo(text, ++this.lastId, active);
        this.todos.push(todo);

        return todo;
    }

    remove(id: number): boolean {
        const todoToRemove = this.get(id);

        if (!todoToRemove) {
            return false;
        }

        this.todos = this.todos.reduce((output, todo) => {
            if (todo.id !== todoToRemove.id) {
                output.push(todo);
            }

            return output;
        }, []);

        return true;
    }

    get(id: number): Todo|null {
        let foundTodo = null;

        this.todos.some((todo) => {
            if (todo.id === id) {
                foundTodo = todo;
                return true;
            }

            return false;
        });

        return foundTodo;
    }
}
