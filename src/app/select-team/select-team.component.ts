import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Observable';
import {Grade, Team} from '../data-model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css']
})
export class SelectTeamComponent implements OnInit {

  public teams: Team[];


  ngOnInit() {
    this.getTeams();
  }
  constructor(private router: Router, private  service: DataService) {

  }
  getTeams() {
    this.service.getTeams().subscribe(teams => this.teams = teams);

  }
}
