import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyQuestionComponent } from './components/survey-question/survey-question.component';
import { SurveyQuestionChoiceComponent } from './components/survey-question/components/survey-question-choice/survey-question-choice.component';
import { SurveyQuestionFreeTextComponent } from './components/survey-question/components/survey-question-free-text/survey-question-free-text.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';



@NgModule({
  declarations: [SurveyFormComponent, SurveyListComponent, SurveyQuestionComponent, SurveyQuestionChoiceComponent, SurveyQuestionFreeTextComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SurveyListComponent,
    SurveyFormComponent
  ]
})
export class SurveyModule { }
