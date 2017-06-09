export class Todo {
  title: string;
  done: boolean;
  createdAt: Date;
  id: number;

  static count: number = 1;

  constructor(title: string){
    this.title = title;
    this.done = false;
    this.createdAt = new Date();
    this.id = Todo.count++;
  }

}
