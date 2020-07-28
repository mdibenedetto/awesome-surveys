import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('refUserNameElement')
  txtUserName: ElementRef<HTMLInputElement>;

  errorMessage: string;

  pageTitle = 'Log In';

  userName = 'demo';
  password = 'demo';

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngAfterViewInit(): void {
    this.txtUserName.nativeElement.focus();
  }

  login(loginForm: NgForm) {

    if (loginForm && loginForm.valid) {
      const { userName, password } = loginForm.form.value;

      this.authService.login(userName.trim(), password)
        .subscribe(_ => {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/survey']);
          }
        });
    } else {
      alert('Please enter valid user name and password!');
    }
  }
}
