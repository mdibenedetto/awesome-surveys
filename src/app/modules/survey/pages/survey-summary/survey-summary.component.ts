import { Component, OnInit } from '@angular/core';
import { SurveyService, Answer, QuestionType, AppSurveyStoreService } from 'src/app/core';


@Component({
  selector: 'app-survey-summary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.css']
})
export class SurveySummaryComponent {

  constructor(
    public state: AppSurveyStoreService,
    public survey: SurveyService) { }

  parseAnswer(answer: Answer): string {
    let answerValue: string;
    let { question } = answer;

    if (question.type == QuestionType.FREE_TEXT) {
      return answer.questionAnswer as string;
    }
    else if (question.type == QuestionType.YES_NO) {
      return answer.questionAnswer as string;
    }
    else if (question.type == QuestionType.SINGLE_CHOICE) {
      const option = answer.question.options.find(o => o.value == answer.questionAnswer);
      answerValue = option.label;
    }
    else if (question.type == QuestionType.MULTI_CHOICE) {
      const listAnswer = answer.questionAnswer as string[];

      answerValue = answer.question.options
        .filter(o => listAnswer.includes(o.value))
        .map(o => o.label)
        .join(",");
    }

    return answerValue;
  }

}
