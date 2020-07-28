import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import {
  AppSurveyStateService, SurveyService, Survey, Answer
}
  from 'src/app/core';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  survey: Observable<Survey>;
  totalQuestion: number;

  constructor(
    public store: AppSurveyStateService,
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    store.resetState();
  }

  ngOnInit(): void {
    const surveyId: number = this.route.snapshot.params.id;
    this.survey = this.surveyService.findSurvey(surveyId);
  }

  isSurveryFilled(survey: Survey): boolean {
    if (this.store.surveyState.answers.length == survey.questions.length) {
      return true;
    }
    return false;
  }

  saveAnswer(answer: Answer): void {
    this.store.saveAnswer(answer);
  }

  completeSurvey(event): void {
    event.preventDefault();

    this.store.completeSurvey();
    this.surveyService.submitSurvey()
      .subscribe(
        (res) => {
          if (res.status == 200) {
            this.router.navigate(['survey/summary']);
          }
          else {
            alert("The survey cannot be submitted right now. Please tru later");
          }
        }
      )
      .unsubscribe();
  }

}
