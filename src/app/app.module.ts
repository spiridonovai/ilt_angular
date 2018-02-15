import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SurveyComponent } from './survey/survey.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {DataService} from './data.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { D3Service } from 'd3-ng2-service';

const appRoutes: Routes = [
  {path: '', redirectTo: 'team', pathMatch: 'full'},
  { path: 'team', component: SelectTeamComponent },
  { path: 'user/:id',      component: SelectUserComponent },
  { path: 'team/admin-panel',      component: AdminPanelComponent },
  { path: 'survey/:id', component: SurveyComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SelectTeamComponent,
    SelectUserComponent,
    AdminPanelComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
