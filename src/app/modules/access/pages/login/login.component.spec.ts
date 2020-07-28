import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core';
import { of, Observable } from 'rxjs';

describe('LoginComponent', () => {


  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        {
          provide: AuthService, useValue: {
            login: (userName, passWord): Observable<User> => of({ userName, passWord } as User)
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('created a form with username and password input and login button', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const txtUserName = fixture.debugElement.nativeElement.querySelector('#txtUserName');
    expect(txtUserName).toBeDefined();

    const txtPassword = fixture.debugElement.nativeElement.querySelector('#txtPassword');
    expect(txtPassword).toBeDefined();

    const btnLogin = fixture.debugElement.nativeElement.querySelector('#btnLogin');
    expect(btnLogin).toBeDefined();
  });


  it('Display Username Error Msg when Username is blank', () => {
    component.userName = "user";
    component.password = "pwd";

    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('#btnLogin');
    button.click();
    fixture.detectChanges();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/survey']);

    // setTimeout(() => {
    //   spyOn(window, "alert");
    //   expect(window.alert).toHaveBeenCalled();
    // }, 100);
  })


});
