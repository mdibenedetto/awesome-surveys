
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AppSurveyStoreService } from './survey-store.service';
import { Answer, Question } from '..';


describe('AppSurveyStoreService', () => {
    let service: AppSurveyStoreService;

    beforeEach(() => { service = new AppSurveyStoreService(); });

    it('#resetState should reset the state', () => {
        service.resetState()
        expect(service.surveyState).toBeDefined();
    });

    it('#saveAnswer should add an answer to the state', () => {
        const answer = {
            question: {} as Question,
            questionId: 1,
            questionAnswer: "test answer"
        } as Answer;

        expect(service.surveyState.answers.length).toBe(0);
        service.saveAnswer(answer)
        expect(service.surveyState.answers.length).toBe(1);
        expect(service.surveyState.isCompleted).toBeFalsy();
    });

    it('#completeSurvey should complete the Survey setting the state flag isCompleted = true', () => {
        service.completeSurvey()
        expect(service.surveyState.isCompleted).toBeTrue();
    });

});