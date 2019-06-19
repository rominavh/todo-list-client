import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = '/api/v1/todos';

  constructor(private http: HttpClient) { }

  getTodo(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateEstadoTodo(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTodosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTodosFilter(todo: Todo): Observable<any> {
    let params = new HttpParams();
    if(todo != undefined){
      if(todo.id != undefined){params = params.set('id', todo.id+'')}
      if(todo.estado != undefined){params = params.set('estado', todo.estado+'')}
      if(todo.descripcion != undefined){params = params.set('descripcion', todo.descripcion);}

      return this.http.get(`${this.baseUrl}/filter`, {params});
    }else{
      return this.http.get(`${this.baseUrl}`); // No se filtra
    }
  }

  createTodo(todo: Todo, file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('descripcion', todo.descripcion);
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', `${this.baseUrl}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }

}
