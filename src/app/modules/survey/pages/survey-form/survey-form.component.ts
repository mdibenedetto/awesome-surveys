import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    public state: AppSurveyStateService,
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const surveyId: number = this.route.snapshot.params.id;
    this.survey = this.surveyService.findSurvey(surveyId);
  }

  saveAnswer(answer: Answer): void {
    this.state.saveAnswer(answer);
  }

  completeSurvey(event): void {
    event.preventDefault();

    this.state.completeSurvey();
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