import Vue from 'vue'
import TodoList from './todo-list/todo-list.vue'
import './index.css';

new Vue({
    el: '#container',
    render: createElement => createElement(
        TodoList,
        {
            props: {
                initialTodos: [
                    {
                        text: 'Hello World',
                        active: true,
                    },
                    {
                        text: 'Learn Vue',
                        active: false,
                    }
                ]
            }
        }
    ),
})
