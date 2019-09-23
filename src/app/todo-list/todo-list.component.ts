import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChange
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  data:string = "hi"
  count = 0;
  selected = [];
  itemName = new FormControl('');
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

  constructor() {
    console.log("this is constructor" + this.data);
  }
  
  OnChanges(changes: SimpleChange){
    console.log("this is ngOnChanges");
  }
  ngOnInit() {
    console.log("this is ngOnInit");
  }
  ngDoCheck(){
    console.log("this is ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("this is ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("this is ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("this is ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("this is ngAfterviewChecked");
  }
  ngOnDestroy(){
    console.log("this is ngOnDestroy");
  }
}