import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  userData = {
    nom: '',
    email: '',
    motDePasse: ''
  };

  submitForm() {
    // Ajoutez ici la logique pour traiter les données du formulaire
    console.log(this.userData);
    // Réinitialisez le formulaire après la soumission
    this.userData = {
      nom: '',
      email: '',
      motDePasse: ''
    };
  }
}
