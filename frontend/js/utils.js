/***********************************Fonctions****************************************/
/*--------------------------fonction création d'éléments----------------------------*/
const create = (type, Qualified, nomType) => {
    let nomVariable = document.createElement(type);
    nomVariable.setAttribute(Qualified, nomType);
    return nomVariable;
}

/*---------------------Transformation des TARIFS au format €uro---------------------*/

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });

/*------------------Fonction de suppression d'article du panier----------------------*/

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

/*--------------------------- fonction error server---------------------------------*/

const errorServer = () => {
  //suppression du titre "nos produits"
  document.getElementById('title-index').remove();

  //création des elements qui afficheront un message en cas d'erreur
  let error = document.getElementById('card');
  let imgError = document.createElement('img');
  let errorMsg = document.createElement('h4');

  //Hierarchisation des elements créer
  error.appendChild(imgError);
  error.appendChild(errorMsg);
  
  // attribution des donnees
  imgError.setAttribute("src", "./images/oups.jpg");
  error.setAttribute("class", "error-msg");
  errorMsg.textContent = 'Une erreur est survenue.. Nos equipes travail a sa resolution, revenez plus tard!';
  console.log('erreur');
}


