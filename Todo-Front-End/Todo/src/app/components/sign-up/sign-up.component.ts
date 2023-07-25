import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  userform: FormGroup;

  constructor(private httpservices: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.userform = this.fb.group({
      email: [''],
      username: [''],
      password: ['']
    });
  }


  handelSubmit() {
    this.httpservices.adduser(this.userform.value).subscribe();
    this.ngOnInit();
    window.location.reload();
  }

}
