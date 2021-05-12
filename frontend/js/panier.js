

//On stock le prix total dans cette variable afin de l'afficher dans le tableau 
let total = 0; 

/*Affichage du panier utilisateur dans la page "panier"*/
  //si mon panier contient 1 ou plusieurs article(s) on supprime "votre panier est vide"
  if (monPanier.length > 0) {
    document.getElementById('panierVide').remove();
    affichagePanier();
  }

