import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class AddUserComponent implements OnInit {

  isChecked = false;

  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  cancelar(){
    this.router.navigateByUrl('/userDetails');
  }

}
