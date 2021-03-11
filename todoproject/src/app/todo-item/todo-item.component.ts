import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItems } from '../todoitems';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoTitle:string = ''
  @Input() todoItem:TodoItems = new TodoItems(0, '', false)
  @Output() onDeleteTodoItem:EventEmitter<number> = new EventEmitter()



  constructor() { }

  ngOnInit(): void {
  }

  onChangeTodoItem():void{
    this.todoItem.isCompleted = !this.todoItem.isCompleted
  }

  setStyle():any{
    return {
      itemRow: true,
      textLineThrought: this.todoItem.isCompleted
    }
  }

  onDelete(id:number):void{
    this.onDeleteTodoItem.emit(id)
  }

}
