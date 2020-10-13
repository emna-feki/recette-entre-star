import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { AppModule } from '../app.module';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RouterModule } from '@angular/router';
import { RecetteComponent } from './acceuil/recette/recette.component';
import { PaysPipe } from './shared/pipes/pays.pipe';


@NgModule({
  declarations: [
    // BusinessComponent,
    // ProfilComponent,
    // HeaderComponent,
    // AcceuilComponent
    // RecetteComponent
  PaysPipe],
  imports: [
    CommonModule,
    // BusinessRoutingModule,
    AppModule,
    RouterModule
  ]
})
export class BusinessModule { }
