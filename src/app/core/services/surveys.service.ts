import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Survey } from '..';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SurveyService {

    url = (id: number) => `./assets/data/mock-survery-${id}.json`;

    constructor(private httpClient: HttpClient) { }

    findAllSurveys(): Observable<Survey[]> {
        return this.httpClient.get<Survey[]>(this.url(0));
    }

    findSurvey(id: number): Observable<Survey> {
        return this.httpClient.get<Survey>(this.url(id));
    }
}