import { Component, OnInit, Input } from '@angular/core';
import { SurveyService, Survey, Answer } from 'src/app/core';
import { Observable } from 'rxjs';
import { AppSurveyStateService } from 'src/app/core/services/survey-state.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  @Input() surveyId: number;
  @Input() state: AppSurveyStateService;

  survey: Observable<Survey>;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.survey = this.surveyService.findSurvey(this.surveyId);
  }

  saveAnswer(answer: Answer): void {
    debugger
    this.state.saveAnswer(answer);
  }

  completeSurvey(event): void {
    event.preventDefault();
    this.state.completeSurvey();
  }

}
