import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo.module';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl : string = "https://localhost:7160/api/Todo";
  constructor(private http : HttpClient) { }

  getAllTodos() :Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl+'/Scheduletodos')
  }

  getAllCompleted() :Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl+'/Completedtodos')
  }

  getAllDeleted() :Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl+'/Deletedtodos')
  }

  addtodo(todo : Todo): Observable<Todo> {
    todo.id = '486814EF-F999-40B6-80F4-704AECA63419';
    return this.http.post<Todo>(this.baseApiUrl, todo);
  }

  updatetodo(id: string, completed: boolean): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseApiUrl}/${id}?updaterequest=${completed}`, {});
  }

  deletetodo(id: string) : Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseApiUrl}/${id}`);
  }
  
}
