import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { TodoService } from "./../todo.service";
import { Todo } from "./../todo";

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  todos: Observable<Todo[]>;
  todo: Todo = new Todo();
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todo.estado = "";
    this.searchData();
  }

  searchData() {
    this.todos = this.todoService.getTodosFilter(this.todo);
  }

}
