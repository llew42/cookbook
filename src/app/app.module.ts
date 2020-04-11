// COMPONENTS
import { AlertComponent } from './shared/alert/alert.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinner } from './shared/progress-spinner/progress-spinner.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './shopping-list/shopping-list-detail/shopping-list-detail.component';

// DIRECTIVES
import { DropdownDirective } from './shared/dropdown.directive';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RecipesModule } from './recipes/recipes.module';

// SERVICES
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    AuthComponent,
    DropdownDirective,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    ProgressSpinner,
    ShoppingListComponent,
    ShoppingListDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RecipesModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useClass: AlertComponent,
      multi: true,
    },
    {
      provide: MAT_DIALOG_DATA,
      useClass: AlertComponent,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
