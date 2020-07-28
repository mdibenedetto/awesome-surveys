
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { AuthService } from '../../access/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate, CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router) { }

    canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
        return this.checkLoggedIn(route.path);
    }

    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLoggedIn(state.url);
    }

    checkLoggedIn(url): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}