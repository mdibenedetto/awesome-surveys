
export const mockState = {
    "answers": [
        {
            "questionId": 1,
            "questionAnswer": "aaa",
            "question": {
                "id": 1,
                "type": "free-text",
                "title": "Dummy Title  free-text",
                "description": "DummyDummy Description free-text",
                "options": [
                    {
                        "value": "Default Free text option",
                        "label": "Free text option"
                    }
                ]
            }
        },
        {
            "questionId": 2,
            "questionAnswer": "yes",
            "question": {
                "id": 2,
                "type": "yes-no",
                "title": "Dummy Title  yes-no",
                "description": "Dummy Description yes-no",
                "options": [
                    {
                        "value": "yes",
                        "label": "Yes/No option"
                    }
                ]
            }
        },
        {
            "questionId": 3,
            "questionAnswer": "3",
            "question": {
                "id": 3,
                "type": "single-choice",
                "title": "Dummy Title  single-choice",
                "description": "Dummy Description single-choice",
                "options": [
                    {
                        "value": "1",
                        "label": "Single Option 1"
                    },
                    {
                        "value": "2",
                        "label": "Single Option 2"
                    },
                    {
                        "value": "3",
                        "label": "Single Option 3"
                    }
                ]
            }
        },
        {
            "questionId": 4,
            "questionAnswer": [
                "3",
                "1"
            ],
            "question": {
                "id": 4,
                "type": "multi-choice",
                "title": "Dummy Title  multi-choice",
                "description": "Dummy Description multi-choice",
                "options": [
                    {
                        "value": "1",
                        "label": "Multiple Option 1"
                    },
                    {
                        "value": "2",
                        "label": "Multiple Option 2"
                    },
                    {
                        "value": "3",
                        "label": "Multiple Option 3"
                    }
                ]
            }
        }
    ],
    "isCompleted": true
}