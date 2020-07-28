import { AuthService } from "./auth.service";
import { User } from 'src/app/core';


describe('AuthService', () => {
    let service: AuthService;
    beforeEach(() => { service = new AuthService(); });

    // it('#isLoggedIn should return real value', () => {
    //     expect(service.isLoggedIn())
    //         .toBeTrue();
    // });

    it('#login should return value from observable',
        (done: DoneFn) => {
            service.login("testUser", "pwdUser")
                .subscribe((user: User) => {

                    expect(user).toBeDefined();
                    expect(service.isLoggedIn()).toBeTrue();

                    done();
                });
        });

    it('#logout should return value from observable',
        (done: DoneFn) => {
            service.logout()
                .subscribe((user: User) => {
                    expect(user).toBeNull();
                    expect(service.isLoggedIn()).toBeFalse();
                    done();
                });
        });

});