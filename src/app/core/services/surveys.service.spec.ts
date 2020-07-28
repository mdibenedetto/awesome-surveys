import { SurveyService, Survey } from "..";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('SurveyService', () => {
    let service: SurveyService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [SurveyService]
        });
        service = TestBed.get(SurveyService);
    });

    it('#findSurvey should return a survey with 1',
        (done: DoneFn) => {
            service.findSurvey(1).subscribe((survey: Survey) => {
                expect(survey).toBeDefined();
                expect(survey.id).toBe(1);
                done();
            })
        });

    it('#findSurveyList should return a list of survey',
        (done: DoneFn) => {
            service.findSurveyList().subscribe((list: Survey[]) => {
                expect(list).toBeDefined();
                expect(list.length).toBeGreaterThan(0);
                done();
            })
        });

    it('#submitSurvey should submit the survey successfully',
        (done: DoneFn) => {
            service.submitSurvey().subscribe((res: Response) => {
                expect(res).toBeDefined();
                expect(res.status).toBe(200);
                done();
            })
        });


});