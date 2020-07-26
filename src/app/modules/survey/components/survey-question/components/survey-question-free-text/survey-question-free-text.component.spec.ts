import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQuestionFreeTextComponent } from './survey-question-free-text.component';

describe('SurveyQuestionFreeTextComponent', () => {
  let component: SurveyQuestionFreeTextComponent;
  let fixture: ComponentFixture<SurveyQuestionFreeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyQuestionFreeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQuestionFreeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
