import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-survey-question-choice',
  templateUrl: './survey-question-choice.component.html',
  styleUrls: ['./survey-question-choice.component.css']
})
export class SurveyQuestionChoiceComponent implements OnInit {

  @Input() question: Question;
  @Input() inputType: "radio" | "checkbox";

  constructor() { }

  ngOnInit(): void {
  }

}
