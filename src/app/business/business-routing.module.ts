import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path: 'profil', component: ProfilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  // automatic redirect to login page
  // {path: '', pathMatch: 'full', redirectTo: 'acceuil'},
  // {path: '**', redirectTo: 'acceuil'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule {
}
