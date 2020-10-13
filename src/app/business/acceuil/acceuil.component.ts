import { Component, OnInit } from '@angular/core';
import { RecetteService } from './services/recette.service';
import { RecetteModel } from './model/recette.model';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  recettes: Promise<RecetteModel[]>;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.recettes = this.recetteService.getForAcceuil();
  }

}
