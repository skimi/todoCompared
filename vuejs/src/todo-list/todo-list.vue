<template>
    <div class="jumbotron mt-3 container todo-list">
        <h1>Todos</h1>

        <div class="form-group">
            <input
                class="form-control"
                placeholder="Add a todo"
                v-model="newTodoText"
                v-on:keyup.enter="addTodo">
        </div>

        <div class="btn-group mb-3">
            <button class="btn btn-default" v-on:click="changeFilter(0)">All</button>
            <button class="btn btn-default" v-on:click="changeFilter(1)">Active</button>
            <button class="btn btn-default" v-on:click="changeFilter(2)">Completed</button>
        </div>

        <ul class="list-group">
            <li v-for="todo in filteredTodos" class="list-group-item">
                <label class="todo" v-bind:class="{ completed: !todo.active }">
                    <input
                        type="checkbox"
                        v-model="todo.active"
                        v-bind:true-value="false"
                        v-bind:false-value="true"> {{ todo.text }}
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'todo-list',
        props: ['initialTodos'],
        data: function() {
            return {
                newTodoText: '',
                todos: this.initialTodos,
                filter: 0
            }
        },
        computed: {
            filteredTodos: function() {
                return this.todos.filter((todo) => {
                    return this.filter === 0
                        || (this.filter === 1 && todo.active)
                        || (this.filter === 2 && !todo.active)
                });
            }
        },
        methods: {
            addTodo: function() {
                this.todos.push({
                    text: this.newTodoText,
                    active: true,
                });

                this.newTodoText = '';
            },
            changeFilter: function(filterId) {
                this.filter = filterId;
            }
        }
    }
</script>
