import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from '../shared/alert/alert.component';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.isLogin = false;
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

  onLogin(formData: FormGroup, formDirective: FormGroupDirective): void {
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
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.openDialog();
        this.isLoading = false;
      }
    );

    formDirective.resetForm();
    this.authForm.reset();
  }

  openDialog() {
    const dialogRef: MatDialogRef<AlertComponent> = this.dialog.open(
      AlertComponent,
      {
        width: '325px',
        data: { error: this.error },
        position: { top: '200px' },
      }
    );

    dialogRef.afterClosed().subscribe((data) => console.log(`Error ${data}`));
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
