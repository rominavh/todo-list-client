import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { TodoService } from "./../todo.service";
import { Todo } from "./../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<Todo[]>;
  todo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.todos = this.todoService.getTodosList();
  }

  updateEstadoTodo(id: number) {
    this.todo = new Todo();
    this.todo.id = id;
    this.todo.estado = "true";
    this.todoService.updateEstadoTodo(id, this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
