import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQuestionChoiceComponent } from './survey-question-choice.component';

describe('SurveyChoiceListComponent', () => {
  let component: SurveyQuestionChoiceComponent;
  let fixture: ComponentFixture<SurveyQuestionChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyQuestionChoiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQuestionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
