import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

  saveAnswer(): void {

  }

  parseInputType(questionType: string): string {
    if (questionType == 'single_selection') {
      return "radio";
    }
    else if (questionType == 'multiple_selection' || questionType == 'yes_no') {
      return "checkbox";
    }
  }
}
