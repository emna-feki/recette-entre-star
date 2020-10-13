import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DialogComponent } from './auth/signup/dialog/dialog.component';
import { AuthComponent } from './auth/auth.component';
import { BusinessComponent } from './business/business.component';
import { ProfilComponent } from './business/profil/profil.component';
import { HeaderComponent } from './business/header/header.component';
import { AcceuilComponent } from './business/acceuil/acceuil.component';
import { RecetteComponent } from './business/acceuil/recette/recette.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DialogComponent,
    AuthComponent,

    BusinessComponent,
    ProfilComponent,
    HeaderComponent,
    AcceuilComponent,
    RecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgxFlagIconCssModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
