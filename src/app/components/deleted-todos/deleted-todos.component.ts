import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.module';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})
export class DeletedTodosComponent {
  listofDeletedtodos: Todo[] = [];
  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.getAllDeleted();
  };

  getAllDeleted() {
    this.todo.getAllDeleted().subscribe({
      next: (data) => {
        this.listofDeletedtodos = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  };
}
