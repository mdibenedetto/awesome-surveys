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
    component: SurveySummaryComponent
  },
  {
    path: ':id',
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
  ]
})
export class SurveyModule { }
