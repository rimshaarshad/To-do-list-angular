import { NgModule,
  SimpleChange } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IsDonePipe } from './is-done.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TodoListComponent, IsDonePipe ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
