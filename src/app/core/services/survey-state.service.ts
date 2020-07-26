
import { Injectable } from '@angular/core';
import { Answer } from '..';
import { SurveyState } from '../model/survery';

@Injectable({ providedIn: 'root' })
export class AppSurveyStateService {


    surveyState: SurveyState;

    answerQuestion(questionId: number, questionAnswer: string): void {
        alert("answerQuestion")
        this.surveyState.answers = [
            ...this.surveyState.answers,
            { questionId, questionAnswer }
        ];
    }

    completeSurvey(): void {
        alert("completeSurvey")
        this.surveyState = { ...this.surveyState, isCompleted: true }
    }

}