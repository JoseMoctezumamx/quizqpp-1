import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginInvalid:boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username : ['',Validators.email],
      password : ['',Validators.required]
    });
  }

  onSubmit(){
    this.router.navigateByUrl('/principal');
  }
}
