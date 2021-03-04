import { Component, OnInit } from '@angular/core';

export class User{
  constructor(
    public username:string, 
    public email:string, 
    public isLogedIn:boolean,
    public accessRights:string){}
}

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.scss']
})
export class MyformsComponent implements OnInit {

  //email:string = "info@hurtlocker.pro"
  users:User[] = []
  selectOptions:string[] = ["Admin", "User", "Editor", "Reader"]
  
  _user:User = new User(
    "hurtlockerpro", 
    "info@hurtlocker.pro", 
    true,
    this.selectOptions[3])
  /*
  _username:string = "";
  _email:string = "";
  _accessRights:string = "";
  _isLogedIn:boolean = true;
  */
  constructor() { }

  ngOnInit(): void {
    this.users = [new User(
        "hurtlockerpro", 
        "info@hurtlocker.pro", 
        true,
        this.selectOptions[3])]

        console.log(this.users)
  }

  addUser(): void {
    this.users.push(
      new User(
        this._user.username,
        this._user.email,
        this._user.isLogedIn,
        this._user.accessRights))
  }


}
