import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { TodoItems } from '../app/todoitems';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = "https://jsonplaceholder.typicode.com/todos" 
  arguments = {
    _limit: 10
  }

  constructor(private http:HttpClient) { }

  getTodos():Observable<TodoItems[]>{

    let _arguments:string = ''
    Object.entries(this.arguments).forEach(element => {
      _arguments += element[0] + '=' + element[1] + '&' 
    })
    console.log("arguments: ", _arguments)
    return this.http.get<TodoItems[]>(this.todosUrl + '?' +  _arguments)
  }


  deleteTodo(id:number):Observable<TodoItems>{
    // this service does not support restful delete
    return this.http.delete<TodoItems>(this.todosUrl + '/' + id)
  }

  insertTodo(todoItem:TodoItems):Observable<TodoItems>{
    return this.http.post<TodoItems>(this.todosUrl, todoItem)
  }
}
