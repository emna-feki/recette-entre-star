import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilComponent } from './business/profil/profil.component';
import { AcceuilComponent } from './business/acceuil/acceuil.component';
import { BusinessComponent } from './business/business.component';
import { NotConnectedGuard } from './auth/guards/not-connected.guard';
import { ConnectedGuard } from './auth/guards/connected.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [NotConnectedGuard],
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ]
  },
  {
    // path: '',
    // pathMatch: 'full',
    path: '',
    component: BusinessComponent,
    canActivate: [ConnectedGuard],
    // loadChildren: () => import('./business/business.module').then(module => module.BusinessModule)
    children: [
      {path: 'profil', component: ProfilComponent},
      {path: 'acceuil', component: AcceuilComponent},
      // automatic redirect to login page
      {path: '', pathMatch: 'full', redirectTo: 'acceuil'},
      {path: '**', redirectTo: 'acceuil'},
    ]
  },

// {path: 'profil', component: ProfilComponent},
  // {path: 'acceuil', component: AcceuilComponent},
  // // automatic redirect to login page
  // {path: '', pathMatch: 'full', redirectTo: 'auth/login'},
  // {path: '**', redirectTo: 'auth/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

