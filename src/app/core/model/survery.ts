export interface Option {
    value: string;
    label: string;
}

export interface Question {
    id: number;
    type: string;
    title: string;
    description: string;
    options: Option[];
}

export interface Survey {
    id: number,
    title: string,
    questions: Question[];
}


export interface SurveyState {
    isCompleted: boolean,
    answers: Answer[]
}
export interface Answer {
    questionId: number,
    questionAnswer: object,
    question: Question
}
