import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../todoitems'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items:TodoItems[] = [
    {
      id:1,
      title:'ToDo title 1 sdfg sett',
      isCompleted:false
    },
    {
      id:2,
      title:'ToDo title 2',
      isCompleted:true
    },
    {
      id:3,
      title:'ToDo title 3 fasdfvsfdvsdfsdfbsdf',
      isCompleted:false
    }
  ]

  constructor(private myService:TodoService) { }

  ngOnInit(): void {
    console.log('todo list init')

    this.myService.getTodos().subscribe(todos => {
      this.items = todos
    })

  }

  addNewTodoItem(todoTitle:any){

    console.log('todo-list function')
    console.log(todoTitle)
    
    let todoItem:TodoItems = {
      id: this.items.length + 1, 
      title: todoTitle,
      isCompleted: false
    }
    this.items.push(todoItem)

    this.myService.insertTodo(todoItem).subscribe(todo => {
      console.log(todo)
    });
  }

  deleteTodoItem(id:number):void{
    console.log("deleting...")
    this.items = this.items.filter(item => item.id != id)

    this.myService.deleteTodo(id).subscribe(todo => {
      console.log(todo)
    });
  }

}
