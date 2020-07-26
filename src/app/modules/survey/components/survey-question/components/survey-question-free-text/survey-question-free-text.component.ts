import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-survey-question-free-text',
  templateUrl: './survey-question-free-text.component.html',
  styleUrls: ['./survey-question-free-text.component.css']
})
export class SurveyQuestionFreeTextComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
