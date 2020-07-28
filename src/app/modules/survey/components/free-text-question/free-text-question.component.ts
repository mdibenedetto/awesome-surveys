import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-survey-question-free-text',
  template: `<label>
                <span *ngIf="question.options[0].label">{{ question.options[0].label }}</span>
                <textarea
                  cols="40" rows="5"
                  placeholder="{{ question.options[0].value }}"
                  (input)="onValueChanged($event)"
                ></textarea>
            </label>
            `,
  styles: [`

          label span {
            margin-bottom: 5px;
            display: inline-block;
          }
  
          textarea {
              resize: none;
              width: 100%;
              box-sizing: border-box;
              padding: 10px;
              border-radius: 5px;
              border-color: #c5c3c3;
            } `]
})
export class FreeTextQuestionComponent {

  @Input() question: Question;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  onValueChanged({ target }) {
    const value = target.value.trim();
    this.valueChanged.emit(value);
  }


}
