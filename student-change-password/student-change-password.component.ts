import { Component, OnInit , Input, Output, EventEmitter, SimpleChange, OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.less']
})

export class StudentChangePasswordComponent implements OnInit {
  @Output() strengthChange = new EventEmitter<number>();
  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
  y:any;

    loginForm: FormGroup;

    error_messages = {
      'fname': [
        { type: 'required', message: 'First Name is required.' },
      ],

      'lname': [
        { type: 'required', message: 'Last Name is required.' }
      ],

      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'minlength', message: 'Email length.' },
        { type: 'maxlength', message: 'Email length.' },
        { type: 'required', message: 'please enter a valid email address.' }
      ],

      'password': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
      'confirmpassword': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
    }



  constructor(private route:ActivatedRoute,public formBuilder: FormBuilder )  {
    this.loginForm = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])),
        confirmpassword: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])),
      }, {
        validators: this.password.bind(this)
      });

  }
  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  myFunction(){
    var x = document.getElementById("myInput");
    if (x.type === "password"){
       x.type = "text";
    }
    else{
      x.type = "password";
    }
  }

}
