/*----------------------------------Fonctions----------------------------------*/
//fonction création d'éléments
const create = (type, Qualified, nomType) => {
    let nomVariable = document.createElement(type);
    nomVariable.setAttribute(Qualified, nomType);
    return nomVariable;
}

//Transformation des TARIFS au format €uro

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });

//declaration de la variable monPanier qui stock les valeur envoyer au ou du localstorage
let monPanier = JSON.parse(localStorage.getItem("produit"));
console.log(monPanier.length);

