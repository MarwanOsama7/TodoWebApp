import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  listOfTode: Todo[];
  listOfuser:Todo;
  todoform: FormGroup;
  show = false;
  tasks: string;
  done: boolean;
  userId: number;
   //id :Number;

  constructor(private httpservices: HttpService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
   this.httpservices.fetchAll().subscribe(todo => this.listOfTode = todo);
  // const id =2;
  // this.httpservices.fetchbyuser().subscribe(todo => this.listOfTode = todo);
    

    // this.todoform = this.fb.group({
    //   tasks: this.tasks,
    //   done: this.done,
    //   user: {
    //     id: this.userId
    //   }
    // });
  }

  handelSubmit() {
    const taskData = {
      tasks: this.tasks,
      done: this.done,
      user: {
        id: this.userId
      }
    };
    this.httpservices.add(taskData);
    this.ngOnInit();
    window.location.reload();
  }

  showAddTodo() {
    this.show = !this.show;
  }
  delete(id: number) {
    this.httpservices.delete(id).subscribe();
    this.ngOnInit();
  }
}
