import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-survey-question-free-text',
  template: `<label>
                <span>{{ question.options[0].label }}</span>
                <textarea
                  cols="40" rows="5"
                  placeholder="{{ question.options[0].value }}"
                  (input)="onValueChanged($event)"
                ></textarea>
            </label>
            `,
  styles: [`textarea {
            resize: none;
            width: 100%;
            box-sizing: border-box;
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
