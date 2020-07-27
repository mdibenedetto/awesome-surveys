export interface Option {
    value: string;
    label: string;
}

export interface Question {
    id: number;
    type: QuestionType;
    title: string;
    description: string;
    options: Option[];
}

export interface Survey {
    id: number,
    title: string,
    description: string,
    questions: Question[];
}

export interface SurveyState {
    isCompleted: boolean,
    answers: Answer[]
}
export interface Answer {
    questionId: number,
    questionAnswer: string | number | [],
    question: Question
}

export enum QuestionType {
    FREE_TEXT = "free-text",
    YES_NO = "yes-no",
    SINGLE_CHOICE = "single-choice",
    MULTI_CHOICE = "multi-choice"
};

export type AnswerValue = string | number | [];

