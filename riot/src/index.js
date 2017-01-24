import './todo-list/todo-list.tag';
import './index.css';

riot.mount('todo-list', {
    items: [
        { title: 'Avoid excessive caffeine', active: false },
        { title: 'Hidden item',  active: true },
        { title: 'Be less provocative', active: true  },
        { title: 'Be nice to people', active: true }
    ]
});
