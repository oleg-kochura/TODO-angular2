import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service'

@Component({
  selector: 'todo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private todoService: TodoServiceService) { }

  filterBy(target: any) {
    let key = target.textContent.toLowerCase().split(' ').join('');
    this.todoService.filterBy(key);
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

}
