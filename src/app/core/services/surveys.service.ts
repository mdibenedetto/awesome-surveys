import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Survey, AppSurveyStoreService } from '..';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SurveyService {
    constructor(
        private state: AppSurveyStoreService,
        private httpClient: HttpClient) { }

    findSurveyList(): Observable<Survey[]> {
        const mockList = [] as Survey[];

        const description: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
            + "Quasi esse iusto repellendus quae. Illum laboriosam velit labore? Inventore eaque aspernatur necessitatibus "
            + "labore velit provident adipisci, tenetur fugiat incidunt maiores mollitia officia culpa ex ipsam perspiciatis"
            + " quos ducimus doloremque totam tempora explicabo numquam eos facere? Inventore quasi facere exercitationem assumenda,"
            + "suscipit iste numquam quaerat dolor culpa quo, ex velit, sit perferendis aut saepe laboriosam delectus."
            + " Nisi quaerat ipsam nobis aspernatur fugiat voluptate quas similique ea consequuntur! Aliquid reiciendis adipisci "
            + "dolorum fugiat deleniti quo molestiae consequatur doloribus veniam maiores, nam quia, neque voluptatum doloremque "
            + "optio cumque iste. Optio, laudantium blanditiis. Numquam, nulla.";

        for (let id = 1; id < 10; id++) {
            const survey = {
                id,
                title: "Surver " + id,
                description
            } as Survey;

            mockList.push(survey);
        }

        return of(mockList);
    }

    findSurvey(id: number): Observable<Survey> {
        const url = (id: number) => `./assets/data/mock-survery-${id}.json`;
        return this.httpClient.get<Survey>(url(id));
    }

    submitSurvey(): Observable<Response> {
        const res = {
            status: 200,
            statusText: "Success"
        } as Response;
        return of(res)
    }
}