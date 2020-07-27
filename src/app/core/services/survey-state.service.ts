
import { Injectable } from '@angular/core';

import { SurveyState, Answer } from 'src/app/core';
import { mockState } from '../model/mock-state';


@Injectable({ providedIn: 'root' })
export class AppSurveyStateService {

    surveyState: SurveyState;

    constructor() {
        this.surveyState = { ...mockState } as SurveyState;

        this.surveyState.answers = [] as Answer[];
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
