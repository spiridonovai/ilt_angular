import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Team, Grade, User, Question} from './data-model';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


@Injectable()
export class DataService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  private teamsUrl = 'http://u7dev-env-loadbalance.eu-central-1.elasticbeanstalk.com/api/member/team';
  private usersUrl = 'http://u7dev-env-loadbalance.eu-central-1.elasticbeanstalk.com/api/member/team';
  private questUrl = 'http:// u7dev-env-loadbalance.eu-central-1.elasticbeanstalk.com/api/member/team';
  private chartUrl = 'http:// u7dev-env-loadbalance.eu-central-1.elasticbeanstalk.com/charts';
  private tmpurl = '/questions';
  public questionstmp: Question[] = [
    {
      id: 1,
      question: 'The company\'s policies and procedures make sense to me.',
      FK_TEAM: 1,
    },
    {
      id: 2,
      question: 'The physical working conditions (e.g., heating, ventilation, space, cleanliness) are very good.',
      FK_TEAM: 1,
    },
    {
      id: 3,
      question: 'Individual differences are respected here (e.g., gender, race, educational background, etc.)',
      FK_TEAM: 1,
    },
    {
      id: 4,
      question: 'Employees feel they have job security at this company',
      FK_TEAM: 1,
    },
    {
      id: 5,
      question: 'The company does a good job at attracting quality team members',
      FK_TEAM: 1,
    }
  ];
  public barChartData = [{
    id: 1, // number
    label: 'label name',  // string
    value1: 1, // number
  },
    {
      id: 2, // number
      label: 'label2 name',  // string
      value1: 2, // number
  },
    {
      id: 1, // number
      label: 'label3 name',  // string
      value1: 3, // number
    } ];
  getBarData(): any[] {
    return this.barChartData;
  }
  constructor(private _http: HttpClient) { }

  getTeams(): Observable<Team[]>  {
    return this._http.get<Team[]>(this.teamsUrl).pipe(
      catchError(this.handleError('getTeams', [])));
  }
  // getCharts() {
  //   return this._http.get(this.chartUrl).pipe(
  //     catchError(this.handleError('getCharts', [])));
  // }
  getUsersOfTeam(team: number): Observable<User[]> {
    const url = `${this.usersUrl}/${team}`;
    return this._http.get<User[]>(url).pipe(
      catchError(this.handleError<User[]>(`getUsersOfTeam team=${team}`))
    );
  }
  getQuestionsOfTeam(team: number): Observable<Question[]> {
    const url = `${this.usersUrl}/${team}` + this.tmpurl;
    console.log(url);
    return this._http.get<Question[]>(url).pipe(
      catchError(this.handleError<Question[]>(`getUsersOfTeam team=${team}`))
    );
  }
  getTQues(): Question[] {
    return this.questionstmp;
  }
  addUser (user: User): Observable<User> {
    return this._http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<User>('addUser'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
