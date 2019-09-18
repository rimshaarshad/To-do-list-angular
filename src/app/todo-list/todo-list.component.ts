import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  count = 0;
  selected = [];
  marked = false;
  theCheckbox = false;
  todos = [
    {
      id: 45,
      name: "ali",
      done: true
    },
    {
      id: 45,
      name: "tea",
      done: true
    },
    {
      id: 45,
      name: "item2",
      done: true
    },
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

toggleVisibility(e){
    this.marked= e.target.checked;
}

  constructor() { }

  ngOnInit() {

  }
}