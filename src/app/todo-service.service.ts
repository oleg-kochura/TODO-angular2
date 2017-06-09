import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoServiceService {
  private todoStore = {
    todos: []
  };

  private _todos: Subject<Todo[]>;
  private _filter: Subject<String>;
  todos: Observable<Todo[]>;
  filter: Observable<String>;

  constructor() {
    this._todos = new Subject<Todo[]>();
    this._filter = new Subject<String>();
    this.filter = this._filter.asObservable();
    this.todos = this._todos.asObservable();
  }

  add(todo: Todo) {
    this.todoStore.todos.push(todo);
    this._todos.next(this.todoStore.todos);
  }

  remove(todo){
    let index = this.todoStore.todos.indexOf(todo);

    this.todoStore.todos.splice(index, 1);
    this._todos.next(this.todoStore.todos);
  }

  toggleAll(state) {
    this.todoStore.todos.forEach(todo => todo.done = state);
    this._todos.next(this.todoStore.todos);
  }

  filterBy(key) {
    if(key === 'clearcompleted') {
      this.clearCompleted();
    } else {
      this._filter.next(key);
    }
  }

  clearCompleted() {
    this.todoStore.todos = this.todoStore.todos.filter(todo => !todo.done);
    this._todos.next(this.todoStore.todos);
  }

  sort(key) {
    if (key === 'name') {
      this.todoStore.todos.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
      });
    } else if (key === 'number') {
        this.todoStore.todos.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
        })
    } else if (key === 'date') {
      this.todoStore.todos.sort((a, b) => {
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt < b.createdAt) return -1;
      })
    }
    this._todos.next(this.todoStore.todos);
  }
}
