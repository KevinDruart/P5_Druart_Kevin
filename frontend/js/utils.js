/*----------------------------------Fonctions----------------------------------*/
//fonction création d'éléments
const create = (type, Qualified, nomType) => {
    let nomVariable = document.createElement(type);
    nomVariable.setAttribute(Qualified, nomType);
    return nomVariable;
}

/*Transformation des TARIFS au format €uro*/

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });

/*Fonction de suppression d'article du panier*/
function suppressionArticle (i){
  console.log("suppression article i :", i);
  //suppression de l'element i du tableau;
  monPanier.splice(i, 1); 
  //on vide le storage avant de le mettre à jour;  
  localStorage.clear(); 
  //maj du panier sans l'élément i;
  localStorage.setItem("produit", JSON.stringify(monPanier)); 
  window.location.reload();
  //si le panier devient vide 
  if (monPanier.length === 0) {
    //suppresion de la key produit dans le localstorage
    localStorage.removeItem(produit);
    //rafraichissement de la page
    location.reload();
  }
}



