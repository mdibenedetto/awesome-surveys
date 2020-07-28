import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core';

@Component({
  selector: 'app-multi-choice-question',
  template: `<label
              *ngFor="let option of question.options; let index = index"
              class="option" >
              <input
                type="checkbox" 
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
export class MultiChoiceQuestionComponent {

  @Input() question: Question;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  values: number[] = [];

  onValueChanged({ target }) {
    this.values = [
      ...this.values.filter(v => v !== target.value)
    ]

    if (target.checked) {
      this.values = [
        ...this.values, target.value
      ]
    }

    this.valueChanged.emit(this.values);
  }

}
