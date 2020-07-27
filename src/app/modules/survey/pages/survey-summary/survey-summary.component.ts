import { Component, OnInit } from '@angular/core';
import { AppSurveyStateService } from 'src/app/core/services/survey-state.service';
import { SurveyService } from 'src/app/core';

@Component({
  selector: 'app-survey-summary',
  template: `<pre>
                {{  state.surveyState | json }}
              </pre>
              `,

})
export class SurveySummaryComponent {

  constructor(
    public state: AppSurveyStateService,
    public survey: SurveyService
  ) {


  }

}
