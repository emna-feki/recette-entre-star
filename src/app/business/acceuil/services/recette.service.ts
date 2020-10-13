import { Injectable } from '@angular/core';
import { RecetteModel } from '../model/recette.model';

@Injectable({providedIn: 'root'})
export class RecetteService {

  MOCK_RECETTES = [
    {
      id: 'aze',
      titre: 'Couscous',
      description: 'description du couscous',
      photoUrl: 'https://www.ptitchef.com/imgupl/recipe/couscous-poulet--md-12636p15781.jpg',
      nombreDeLike: 50,
      pays: 'tn',
      descriptionDetaille: 'Préparation\n' +
        'Éplucher et émincer l\'ail et l\'oignon et les faire revenir dans la cocotte avec un filet d\'huile d\'olive.\n' +
        'Ajouter les cuisses de poulet pour les faire colorer.\n' +
        'Ajouter les épices, la chair de tomates et les pois chiches, couvrir tout juste les cuisses avec le bouillon, porter à ébullition, puis baisser le feu et laisser mijoter à feu doux pendant 10 minutes.\n' +
        '\n' +
        'Faire colorer les boulettes dans une poêle et les ajouter dans le bouillon.\n' +
        '\n' +
        'Éplucher et couper les carottes et les pommes de terre en quatre. Ajouter les dans la cocotte et verser le reste du bouillon, toujours sur feu doux laisser cuire 15 minutes.\n' +
        '\n' +
        'Epépiner les courgettes et les couper en morceaux, les ajouter au bouillon, et encore 15 minutes de cuisson.\n' +
        '\n' +
        'Verser la semoule dans un plat, l\'arroser de 10 cl de bouillon et laisser reposer 10 minutes. Rajouter 10 cl de bouillon, laisser reposer 5 minutes et égrainer la semoule avec les doigts. Cuire au micro-ondes pour 1,30 minutes. Ajouter le beurre en morceaux sur dans la semoule et mélanger.\n' +
        '\n' +
        'Verser la semoule en dôme dans un plat, ajouter les cuisses de poulet et les légumes autour.\n' +
        'Mettre le bouillon dans un bol, ajouter de la harissa, mélanger. Servir aussitôt.',
    },
    {
      id: 'qsd',
      titre: 'tagliatelles',
      description: 'description du tagliatelles',
      photoUrl: 'https://img.mesrecettesfaciles.fr/wp-content/uploads/2019/01/shutterstock_341274575-1000x500.jpg',
      nombreDeLike: 40,
      pays: 'fr',
      descriptionDetaille: 'Préparation de la recette : tagliatelles aux poireaux façon carbonara\n' +
        'Coupez en 4 les poireaux dans la longueur. Passez-les sous l\'eau froide pour les laver puis coupez en fines rondelles.\n' +
        'Faites revenir les lardons dans une poêle chaude pendant 2 minutes puis ajoutez les poireaux et l\'ail pressé. Laissez cuire à feu moyen pendant 10 minutes en remuant.\n' +
        'Pendant ce temps, faites cuire les pâtes en suivant les indications de l\'emballage.\n' +
        'Ajoutez la crème et la moutarde aux poireaux, mélangez bien, poivrez et salez à votre goût. Laissez chauffer 2 minutes.\n' +
        'Servez les pâtes dans les assiettes, puis recouvrez-les avec la sauce aux poireaux et aux lardons.',
    },
    {
      id: 'wxc',
      titre: 'Gateau au chocolat',
      description: 'description du Gateau au chocolat',
      photoUrl: 'https://img.mesrecettesfaciles.fr/wp-content/uploads/2019/03/ga%CC%82teauauchocolataumiel-1000x500.jpg',
      nombreDeLike: 20,
      pays: 'fr',
      descriptionDetaille: 'Préparation de la recette : gâteau au chocolat et miel\n' +
        'Préchauffez le four à 180°C. Faites fondre le chocolat noir au bain-marie.\n' +
        'Dans un saladier, battez les oeufs avec la levure chimique et le yaourt. Incorporez le miel, le beurre fondu et la farine. Remuez. Ajoutez le chocolat fondu et mélangez bien pour obtenir une pâte lisse.\n' +
        'Beurrez un moule à gâteau, versez la pâte dedans puis enfournez pendant 30 minutes. Vérifiez la cuisson. Saupoudrez le gâteau de sucre glace et dégustez tiède ou froid.',
    }
  ] as RecetteModel[];

  getForAcceuil(): Promise<RecetteModel[]> {
    // TODO a remplacer par l'appelle du WS une fois la partie back est développée
    return Promise.resolve(this.MOCK_RECETTES);
  }

}
