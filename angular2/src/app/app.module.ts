import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TodoComponent }  from '../todo/todo.component';
import { TodoListComponent }  from '../todo-list/todo-list.component';
import { TodoListPipe } from '../todo-list/todo-list-filter.pipe';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        TodoComponent,
        TodoListComponent,
        TodoListPipe
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
