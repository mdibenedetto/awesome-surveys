import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer, AnswerValue } from 'src/app/core';
import { AppSurveyStateService } from 'src/app/core/services/survey-state.service';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent {

  @Input() question: Question;
  @Output() saveAnswer: EventEmitter<Answer> = new EventEmitter();

  value: AnswerValue;

  save(e): void {
    e.preventDefault();

    const answer: Answer = {
      questionId: this.question.id,
      questionAnswer: this.value,
      question: this.question
    };

    this.saveAnswer.emit(answer);
  }

  valueChanged(value: AnswerValue): void {
    this.value = value;
  }

}
