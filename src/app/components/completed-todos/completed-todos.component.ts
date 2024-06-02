import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.module';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent {
  listOfCompletedtodos: Todo[] = []; 
  constructor(private todos: TodoService) {}

  ngOnInit() {
    this.getAllCompleted();
  };

  getAllCompleted() {
    this.todos.getAllCompleted().subscribe({
      next: (response) => {
        this.listOfCompletedtodos = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
