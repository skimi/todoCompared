"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var todo_1 = require("todo/todo");
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.todos = [new todo_1["default"]('Hello World', 0)];
        this.filter = 1;
        this.toggleTodo('test');
    }
    TodoListComponent.prototype.addTodo = function (text) {
        this.todos.push(new todo_1["default"](text, this.todos.length + 1));
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        todo.toggle();
    };
    TodoListComponent.prototype.filterTodo = function (filter) {
        this.filter = filter;
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        template: require('./todo-list.html')
    })
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
