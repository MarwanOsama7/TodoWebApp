import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { user } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:8081/todo';

  urluser:string = "http://localhost:8081/user";
  constructor(private http: HttpClient) { }

  public fetchAll(): Observable<Todo[]> {

    return this.http.get<Todo[]>(this.url + '/findall');
  }
  public fetchbyuser(id:number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url + '/finduser/' + id);
  }

  // public addlist(todo: Todo) {
  //   return this.http.post<Todo>(this.url, todo).subscribe();
  // }
  public add(taskData: any) {
    return    this.http.post<any>(this.url, taskData)
    .subscribe(
      response => {
        console.log('Task saved successfully:', response);
        // Add any success message or navigation logic here.
      },
      error => {
        console.error('Error saving task:', error);
        // Add any error handling logic here.
      }
    );
  }
  public delete(id: number) {
    return this.http.delete<Todo>(this.url + '/delete/' + id);
  }
  public findById(id: number) {
    return this.http.get<Todo>(this.url + '/id/' + id);
  }
  public update(id: number, todo: Todo) {
    return this.http.put<Todo>(this.url + '/update/' + id, todo);
  }

  public updatelist(id: number,taskData: any) {
    return    this.http.put<any>(this.url + '/update/' + id, taskData)
    .subscribe(
      response => {
        console.log('Task saved successfully:', response);
        // Add any success message or navigation logic here.
      },
      error => {
        console.error('Error saving task:', error);
        // Add any error handling logic here.
      }
    );
  }
  public adduser(user: user) {
    return this.http.post<user>(this.urluser, user);
  }

  public login(username: string, password: string) {
    const loginData = { username, password };
    return this.http.post(this.urluser + '/login', loginData , { responseType: 'text' });
  }
}
