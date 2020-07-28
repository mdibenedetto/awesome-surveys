
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySummaryComponent } from "..";
import {
    SurveyService, AppSurveyStoreService, QuestionType, Answer
} from 'src/app/core';

import { mockState } from 'src/app/core/model/mock-state';

describe('SurveySummaryComponent', () => {

    class MockAppSurveyStoreService {

    }
    class MockSurveyService {

    }

    let component: SurveySummaryComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                SurveySummaryComponent,
                { provide: AppSurveyStoreService, useClass: MockAppSurveyStoreService },
                { provide: SurveyService, useClass: MockSurveyService },
            ]
        });

        component = TestBed.inject(SurveySummaryComponent);
    });

    it("#parseAnswer should parse the answer to a plain string or an array",
        () => {

            mockState.answers.forEach((answer) => {
                const parsedValue = component.parseAnswer(answer as Answer);
                const { question } = answer;

                if (question.type == QuestionType.FREE_TEXT
                    || question.type == QuestionType.YES_NO
                    || question.type == QuestionType.SINGLE_CHOICE) {
                    expect(typeof parsedValue == 'string').toBeTrue()
                }
                else if (question.type == QuestionType.MULTI_CHOICE) {
                    expect(typeof parsedValue == 'string').toBeTrue()
                    expect(parsedValue.split(",").length).toBeGreaterThan(0)
                }
            });

        }
    )

});

