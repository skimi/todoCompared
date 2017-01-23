import React from 'react';
import Todo from 'Components/Todo';

export default class TodoList extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    text: 'Hello World',
                    active: true,
                }
            ],
            filter: 1
        }
    }

    addTodo(text) {
        if (!text) {
            return;
        }

        const todos = this.state.todos.concat([
            {
                text,
                active: true
            }
        ])
        this.setState(Object.assign({}, this.state, { todos }));
    }

    toggleTodo(todoId) {
        const todo = Object.assign({}, this.state.todos[todoId], {
            active: !this.state.todos[todoId].active
        });
        const todos = [
            ...this.state.todos.slice(0, todoId),
            todo,
            ...this.state.todos.slice(todoId+1),
        ];
        this.setState(Object.assign({}, this.state, { todos }));
    }

    changeFilter(filterId) {
        this.setState(Object.assign({}, this.state, { filter: filterId }));
    }

    render() {
        return (
            <div className="jumbotron todo-list mt-3">
                <h1>Todos</h1>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Create a todo"
                        onKeyPress={(e) => {
                            if (e.key == 'Enter') {
                                this.addTodo(e.currentTarget.value);
                                e.currentTarget.value = '';
                            }
                        }}
                        />
                </div>
                <div className="btn-group mb-3">
                    <button className="btn btn-default" onClick={() => this.changeFilter(0)}>All</button>
                    <button className="btn btn-default" onClick={() => this.changeFilter(1)}>Active</button>
                    <button className="btn btn-default" onClick={() => this.changeFilter(2)}>Completed</button>
                </div>
                <ul className="list-group">
                    { this.state.todos.reduce((output, todo, i) => {
                        if (this.state.filter === 0
                            || (this.state.filter === 1 && todo.active)
                            || (this.state.filter === 2 && !todo.active)) {
                            output.push((
                                <li key={i} className="list-group-item">
                                    <Todo text={todo.text} active={todo.active} click={() => this.toggleTodo(i)} />
                                </li>
                            ));

                            return output;
                        }

                        return output;
                    }, []) }
                </ul>
            </div>
        )
    }
}
