import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyQuestionComponent } from './components/survey-question/survey-question.component';
import { SurveyQuestionChoiceComponent } from './components/survey-question/components/survey-question-choice/survey-question-choice.component';
import { YesNoQuestionComponent } from './components/survey-question/components/yes-no-question/yes-no-question.component';
import { FreeTextQuestionComponent } from './components/survey-question/components/free-text-question/free-text-question.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';

import { MultiChoiceQuestionComponent } from './components/survey-question/components/multi-choice-question/multi-choice-question.component';
import { SingleChoiceQuestionComponent } from './components/survey-question/components/single-choice-question/single-choice-question.component';
import { SurveySummaryComponent } from './components/survey-summary/survey-summary.component';



@NgModule({
  declarations: [
    SurveyFormComponent, SurveyListComponent,
    SurveyQuestionComponent, SurveyQuestionChoiceComponent,
    FreeTextQuestionComponent, YesNoQuestionComponent,
    MultiChoiceQuestionComponent, SingleChoiceQuestionComponent,
    SurveySummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SurveyListComponent,
    SurveyFormComponent
  ]
})
export class SurveyModule { }
