import { Injectable } from '@angular/core';
import { User } from 'src/app/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    currentUser: User;
    redirectUrl: string;
    test: string;

    isLoggedIn(): boolean {

        console.log(this.test)
        return !!this.currentUser;
    }

    // mock login
    login(userName: string, passWord: string): Observable<User> {

        if (!userName || !passWord) {
            alert('Please enter your userName and password');
            return;
        }

        this.currentUser = {
            userName: "Test User"
        } as User

        this.test = "hey hey";
        return of(this.currentUser);
    }

    logout() {
        alert("Log out")
    }

}
