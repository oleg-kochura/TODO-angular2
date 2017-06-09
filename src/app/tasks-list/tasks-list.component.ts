import { Component, OnInit } from '@angular/core';
import { Todo } from  '../todo';
import { TodoServiceService } from '../todo-service.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  todos: Observable<Todo[]>;
  filterKey: String = 'all';

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
    this.todoService.filter.subscribe(data => this.filterKey = data);
    this.todos = this.todoService.todos;
  }

  remove(todo) {
    this.todoService.remove(todo)
  }

}
