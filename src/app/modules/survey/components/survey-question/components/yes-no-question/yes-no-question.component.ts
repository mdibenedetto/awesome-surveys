import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-survey-question-yes-no',
  template: ` <label class="option">
                <input type="checkbox"
                  (change)="onValueChanged($event)"
                />
                <span>{{ question.options[0].label }}</span>
              </label>`
})
export class YesNoQuestionComponent {
  @Input() question: Question;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  onValueChanged({ target }) {
    const value = target.checked ? "yes" : "no";
    this.valueChanged.emit(value);
  }

}
