
import { Injectable } from '@angular/core';

import { SurveyState as AppSurveyState, Answer } from 'src/app/core';
import { mockState } from '../model/mock-state';


@Injectable({ providedIn: 'root' })
export class AppSurveyStoreService {

    surveyState: AppSurveyState;

    constructor() {
        this.surveyState = {
            answers: [] as Answer[]
        } as AppSurveyState;
    }

    saveAnswer(answer: Answer): void {
        this.surveyState.answers = [
            ...this.surveyState.answers.filter(ans => ans.questionId != answer.questionId),
            answer
        ];
    }

    completeSurvey(): void {
        console.log("completeSurvey")
        this.surveyState = { ...this.surveyState, isCompleted: true }
    }

}
