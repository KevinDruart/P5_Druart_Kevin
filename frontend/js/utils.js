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
