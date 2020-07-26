import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core';
import { AppSurveyStateService } from 'src/app/core/services/survey-state.service';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent {

  @Input() question: Question;
  @Output() saveAnswer: EventEmitter<any> = new EventEmitter();

  value: object;

  save(e): void {
    e.preventDefault();

    const answer = {
      questionId: this.question.id,
      questionAnswer: this.value
    }
    this.saveAnswer.emit(answer);
  }

  valueChanged(value: object): void {
    this.value = value;
  }

}
