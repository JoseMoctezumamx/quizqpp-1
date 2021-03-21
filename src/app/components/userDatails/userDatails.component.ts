import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface UserElement {
  email   :string;
  password:string;
  rol     :string;
  status  :boolean; 
}

const ELEMENT_DATA: UserElement[] = [
  {email:'izteotl@gmail.com', password:'12345', rol:'ROOT', status:true}
];

@Component({
  selector: 'app-userDatails',
  templateUrl: './userDatails.component.html',
  styleUrls: ['./userDatails.component.scss']
})
export class UserDatailsComponent implements OnInit {
  displayedColumns: string[] = ['email','password','rol','status','delete','edit'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteUser(row:UserElement){
    console.log(row);

  }

  editUser(row:UserElement){
    console.log(row);
  }

  addUser(){
    this.router.navigateByUrl('/addUser');
  }

}
