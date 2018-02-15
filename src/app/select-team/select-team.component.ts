import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Observable';
import {Grade, Team} from '../data-model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css']
})
export class SelectTeamComponent implements OnInit {

  public teams: Team[];
  public team: number;
  teamForm: FormGroup;
  ngOnInit() {

  }
  constructor(private fb: FormBuilder, private router: Router, private  service: DataService) {
    this.createForm();
    this.getTeams();
  }
  getTeams() {
    this.service.getTeams().subscribe(teams => this.teams = teams);

  }
  createForm() {
    this.teamForm = this.fb.group({
      team: ['', Validators.required]
    });
  }
   selectTeam(team: number) {
    this.team = team;
    console.log(this.team);
    this.router.navigate(['/user', this.team]);
  }
}
