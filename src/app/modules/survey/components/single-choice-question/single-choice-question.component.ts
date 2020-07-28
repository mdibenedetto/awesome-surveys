import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-single-choice-question',
  template: `<label
              *ngFor="let option of question.options; let index = index"
              class="option" >
              <input
                 name="{{ 'question-' + question.id }}"
                type="radio" 
                value="{{ option.value }}"
                (change)="onValueChanged($event)"
              />
              <span>{{ option.label }}</span>
            </label>
            `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  `]
})
export class SingleChoiceQuestionComponent {

  @Input() question: Question;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  onValueChanged({ target }) {
    const value = target.value;
    this.valueChanged.emit(value);
  }

}
