import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service'
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})

export class TodoFormComponent {
  newTodoTitle: string = '';
  selectedValue: String;
  toggleState: Boolean;

  sortBy = [
    {value: 'name', viewValue: 'Name'},
    {value: 'number', viewValue: 'Number'},
    {value: 'date', viewValue: 'Date'}
  ];


  constructor(private todoService: TodoServiceService) { }

  addTodo() {
    if (this.newTodoTitle) {
      let todo = new Todo(this.newTodoTitle);
      this.todoService.add(todo);
      this.resetForm();
    }
  }

  toggleAll() {
    this.todoService.toggleAll(this.toggleState);
  }

  sort() {
    this.todoService.sort(this.selectedValue);
  }

  resetForm() {
    this.newTodoTitle = '';
  }

}
