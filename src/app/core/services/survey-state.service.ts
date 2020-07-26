
import { Injectable } from '@angular/core';
import { Answer } from '..';
import { SurveyState } from '../model/survery';


@Injectable({ providedIn: 'root' })
export class AppSurveyStateService {


    surveyState: SurveyState;

    constructor() {
        this.surveyState = {} as SurveyState;
        this.surveyState.answers = [] as Answer[];
    }

    saveAnswer(answer: Answer): void {
        debugger
        console.log("saveAnswer")


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