import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Team, Grade, User} from './data-model';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


@Injectable()
export class DataService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  private teamsUrl = 'http://U7Dev-env.irfwwnuh3c.eu-central-1.elasticbeanstalk.com/api/member/team';
  private usersUrl = 'http://U7Dev-env.irfwwnuh3c.eu-central-1.elasticbeanstalk.com/api/users';

  constructor(private _http: HttpClient) { }

  getTeams(): Observable<Team[]>  {
    return this._http.get<Team[]>(this.teamsUrl).pipe(
      catchError(this.handleError('getTeams', [])));
  }

  getUsers(): Observable<User[]>  {
    return this._http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError('getUsers', [])));
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
