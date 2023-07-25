import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { user } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  listoftodo:Todo[];
  listofuser:user;
  username: string;
  password: string;
  errorMessage:string;
  //userid:number;
  constructor(private httpservices: HttpService, private router: Router , private rout: ActivatedRoute){}
  ngOnInit(): void {
     
  }

  
  onLoginSubmit() {
    this.httpservices.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login, navigate to home page, etc.
        //const userid = this.httpservices.getUserId(this.username);
        this.router.navigate(['todo' ]);
      },
      (error) => {
        // Handle login error, show error message, etc.
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    );
  }
}
