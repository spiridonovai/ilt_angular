import { Component, OnInit } from '@angular/core';
import {User} from "../data-model";
import {DataService} from "../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  public users: User[];
  public userNum: number;
  public id: number;
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: DataService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.service.getUsersOfTeam(this.id).subscribe(users => this.users = users);
    console.log(this.users);
    this.createForm();
  }
  ngOnInit() {

  }
  createForm() {
    this.userForm = this.fb.group({
      user: ['', Validators.required]
    });
  }
  selectUser(user: User) {
    console.log(this.userNum);
    this.service.addUser(user);
    this.router.navigate(['/survey', this.id]);
  }

}
