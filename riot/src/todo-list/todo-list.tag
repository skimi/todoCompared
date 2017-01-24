<todo-list class="jumbotron mt-3">

    <h1>Todos</h1>

    <form onsubmit={ add }>
        <div class="form-group">
            <input ref="input" class="form-control" placeholder="Add a todo">
        </div>
    </form>

    <div class="btn-group mb-3">
        <button class="btn btn-default" onClick={() => this.changeFilter(0)}>All</button>
        <button class="btn btn-default" onClick={() => this.changeFilter(1)}>Active</button>
        <button class="btn btn-default" onClick={() => this.changeFilter(2)}>Completed</button>
    </div>

    <ul class="list-group">
        <li each={ filteredItems(filter) } class="list-group-item" no-reorder>
            <label class="todo { completed: !active }">
                <input type="checkbox" checked={ !active } onclick={ parent.toggle }> { title }
            </label>
        </li>
    </ul>


    <script>
        this.items = opts.items || [];
        this.filter = 1;

        add(e) {
            e.preventDefault()
            if (this.text) {
                this.items.push({ title: this.text })
                this.text = this.refs.input.value = ''
            }
        }

        toggle(e) {
            var item = e.item
            item.active = !item.active
        }

        filteredItems(filter) {
            return this.items.filter(function(todo) {
                return filter === 0
                    || (filter === 1 && todo.active)
                    || (filter === 2 && !todo.active);
            })
        }

        changeFilter(filter) {
            this.filter = filter;
        }
    </script>

</todo-list>
