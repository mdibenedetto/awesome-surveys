
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AppSurveyStoreService } from 'src/app/core/services/survey-store.service';

@Injectable({ providedIn: 'root' })

export class SurveyGuardService implements CanActivate {
    constructor(private store: AppSurveyStoreService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.store.surveyState.isCompleted) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}