import { Component } from '@angular/core';
import { AppSurveyStateService } from './core/services/survey-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AwesomeSurveys';

  constructor(public state: AppSurveyStateService) {

  }
}
