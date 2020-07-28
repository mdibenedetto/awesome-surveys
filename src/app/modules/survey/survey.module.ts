import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  SurveyQuestionComponent,
  YesNoQuestionComponent,
  FreeTextQuestionComponent,
  MultiChoiceQuestionComponent,
  SingleChoiceQuestionComponent
} from './components';

import {
  SurveyListComponent, SurveyFormComponent,
  SurveySummaryComponent
} from './pages';
import { SurveyGuardService } from './guards/survey-guard.service';
import { AuthService } from '../access/services/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: SurveyListComponent
  },
  {
    path: 'list',
    component: SurveyListComponent
  },
  {
    path: 'summary',
    canActivate: [SurveyGuardService],
    component: SurveySummaryComponent
  },
  {
    path: 'view/:id',
    component: SurveyFormComponent
  }
];

@NgModule({
  declarations: [
    SurveyFormComponent,
    SurveyListComponent,
    SurveyQuestionComponent,
    FreeTextQuestionComponent,
    YesNoQuestionComponent,
    MultiChoiceQuestionComponent,
    SingleChoiceQuestionComponent,
    SurveySummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  // providers: [AuthService, AuthGuardService]
})
export class SurveyModule { }
