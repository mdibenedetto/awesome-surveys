import { Injectable } from '@angular/core';
import { User } from 'src/app/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser: User;
    redirectUrl: string;

    isLoggedIn(): boolean {
        if (this.currentUser) {
            return true;
        }
        else {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                this.currentUser = JSON.parse(storedUser);
                return true
            }
        }

        return false;
    }

    // mock login
    login(userName: string, passWord: string): Observable<User> {

        if (!userName || !passWord) {
            alert('Please enter your userName and password');
            return null;
        }

        this.currentUser = {
            userName: "Test User"
        } as User

        localStorage.setItem("user", JSON.stringify(this.currentUser));
        return of(this.currentUser);
    }

    logout(): Observable<User> {
        this.currentUser = null
        localStorage.removeItem("user");
        return of(this.currentUser);
    }

}
