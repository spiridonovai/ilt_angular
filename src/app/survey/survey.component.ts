import { Component, OnInit } from '@angular/core';
import {GradeQuest, Question} from "../data-model";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  public questions: Question[];
  public questgrades: GradeQuest[];
  public id: number;
  constructor( private route: ActivatedRoute, private service: DataService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.service.getQuestionsOfTeam(this.id).subscribe(questions => this.questions = questions);
    console.log(this.questions);
  }
addAnswers()
{
  this.router.navigate(['team']);
}
  ngOnInit() {
  }

}
