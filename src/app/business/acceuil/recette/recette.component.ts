import { Component, Input, OnInit } from '@angular/core';
import { RecetteModel } from '../model/recette.model';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  @Input() recette: RecetteModel;
  descriptionDetailleAffiche = false;
  aimeeParUtilisateur = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleLike(recette: RecetteModel): void {
    if (!this.aimeeParUtilisateur) {
      recette.nombreDeLike++;
    } else {
      recette.nombreDeLike--;
    }
    this.aimeeParUtilisateur = !this.aimeeParUtilisateur;
  }

  patager(recette: RecetteModel): void {
    alert('share ' + recette.titre + ' not implemented yet');
  }

  afficherCommentaires(recette: RecetteModel): void {
    alert('comment ' + recette.titre + ' not implemented yet');
  }

  toggleShowDetails(): void {
    this.descriptionDetailleAffiche = !this.descriptionDetailleAffiche;
  }

}
