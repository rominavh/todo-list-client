import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo = new Todo();
  submitted = false;

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  newTodo(): void {
    this.submitted = false;
    this.todo = new Todo();
    this.todo.estado = "false"; // Estado por defecto de nuevo TODO
  }

  save() {
    if(this.selectedFiles && this.selectedFiles.length > 0){
      this.currentFileUpload = this.selectedFiles.item(0);
    }
    this.todoService.createTodo(this.todo, this.currentFileUpload)
      .subscribe(data => console.log(data), error => console.log(error));
    this.todo = new Todo();
    this.selectedFiles = undefined
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  selectFile(event) {
    const file = event.target.files.item(0)
      this.selectedFiles = event.target.files;
  }
 

}
