import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  message: FormControl = new FormControl('Not registered?');
  authForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
    this.isLogin = false;
    console.log('Auth Form ', this.authForm.value);
  }

  onSwitchMode(): void {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
    if (!this.isLogin) {
      this.message = new FormControl('Have an account?');
    } else {
      this.message = new FormControl('Not registered?');
    }
  }

  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {
    if (!formData.valid) {
      return;
    }
    const email = this.authForm.value.email.trim();
    const password = this.authForm.value.password.trim();

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLogin) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log('Res Data ', resData);
        this.isLoading = false;
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    formDirective.resetForm();
    this.authForm.reset();
  }

  private initForm(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
      ]),
    });
  }
}
