import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo.module';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  listOfTodos : Todo[] = [];
  newTodo : Todo = {
    id: '',
    description: '',
    isCompleted: false,
    completedDate: new Date,
    createdDate: new Date,
    isDeleted: false,
    deletedDate: new Date,
  }
  
  constructor(private todoService : TodoService) {}

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.todoService.getAllTodos().subscribe({
      next: (todos) => {
        console.log(todos);
        this.listOfTodos = todos;
      }
    });
  }

  addtodo() : void {
    this.todoService.addtodo(this.newTodo).subscribe({
      next: (todo) => {
        this.listOfTodos.push(todo);
        this.newTodo = {
          id: '',
          description: '',
          isCompleted: false,
          completedDate: new Date,
          createdDate: new Date,
          isDeleted: false,
          deletedDate : new Date,
        }
      },
      error: (err) => {
        console.log(err);
        alert("Something went wrong on server todo can't be added");
      }
    });
  }

  completionUpdate(id: string, completed: boolean): void {
    this.todoService.updatetodo(id, !completed).subscribe({
      next: (todo) => {
        //this.getall();
      },
      error: (err) => {
        console.error(err);
        alert("Something went wrong on the server, todo can't be updated");
      }
    });
  }

  deleteTodo(id: string) : void {
    this.todoService.deletetodo(id).subscribe({
      next: (response) => {
       if(response) {
        this.getall();
        alert("todo deleted successfully");
       } 
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
