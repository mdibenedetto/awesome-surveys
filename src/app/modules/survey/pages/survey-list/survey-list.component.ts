import { Component, OnInit } from '@angular/core';
import { SurveyService, Survey } from 'src/app/core';
import { Observable } from 'rxjs';
import { AppSurveyStoreService } from 'src/app/core/services/survey-store.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveyList: Observable<Survey[]>;

  constructor(private surveryService: SurveyService) { }

  ngOnInit(): void {
    this.surveyList = this.surveryService.findSurveyList();
  }

}
