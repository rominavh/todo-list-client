import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/filter', component: TodoSearchComponent },
  { path: 'add', component: CreateTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
