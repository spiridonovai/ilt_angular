import { Component, OnInit } from '@angular/core';
import {User} from "../data-model";
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  public users: User[];


  ngOnInit() {
    this.getUsers();
  }
  constructor(private router: Router, private  service: DataService) {

  }
  getUsers() {
    this.service.getUsers().subscribe(users => this.users = users);
  }

}
