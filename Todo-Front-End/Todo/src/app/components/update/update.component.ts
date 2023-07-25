import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/model/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  todoToBeUpdated: Todo;
  updatedForm: FormGroup;
  show = false;
  tasks: string;
  done: boolean;
  userId: number;
  taskId: number;
  constructor(private httpservices: HttpService, private fb: FormBuilder, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    if (id !== null) {
      this.httpservices.findById(+id).subscribe(todo => this.todoToBeUpdated = todo);
    }

    this.updatedForm = this.fb.group({
      task: [''],
      done: ['']
    });
  }

  handelSubmit() {
    const taskData = {
      task: this.tasks,
      done: this.done,
      user: {
        id: this.userId
      }
    };
    this.httpservices.updatelist(this.todoToBeUpdated.id, taskData);
  }

  update() {
      const mockTaskData = {
        tasks: 'Existing Task',
        done: true,
        user: { id: 1 }
      };

      this.tasks = this.todoToBeUpdated.tasks.toString();
      this.done = this.todoToBeUpdated.done.valueOf();
      this.userId = mockTaskData.user.id;

          this.show = !this.show;
    }
    // this.updatedForm.setValue({
    //   task: this.todoToBeUpdated.tasks,
    //   done: this.todoToBeUpdated.done
    // });
 
  }

