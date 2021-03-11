import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoTitle:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onInsertTodoItem:EventEmitter<any> = new EventEmitter()
  InsertNewTodoItem(){
    this.onInsertTodoItem.emit(this.todoTitle)
    console.log('Todo-add function')
  }

}
