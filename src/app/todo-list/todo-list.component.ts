import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  count = 0;
  todos = [
  ];

  addtodo(todoname) {
    this.count++;
    var label = todoname;
    var newtodo = {
      id: this.count,
      name: todoname,
      done: false
    }
    this.todos.push(newtodo);
  }

  constructor() { }

  ngOnInit() {

  }
}