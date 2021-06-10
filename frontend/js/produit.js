
/*---------------------Selection du produit en fonction de id--------------------*/

const selectionProduit = () => {
  //appel de la fonction qui affiche le nombre de produit dans le panier header
  numberInPanier();
  //on recupere l'url actuel 
  const urlParams = new URLSearchParams(window.location.search);
  //recuperation de l'id produit dans l'url
  const productId = urlParams.get('id');
  //on appel notre requete getRequest, on passe l'url et l'id produit
  const teddy = getRequest("http://localhost:3000/api/teddies/" + productId);
  teddy
  //on a une promesse de données
    .then((data) => {
      //on appel la view cardProduct pour afficher la page du produit et on lui passe les donnees du produit 
      cardProduct(data);
    })
    //la promesse ne revient pas
    .catch((error) => {
      //On selectionne la section "descriptionproduit"
      let errors = document.getElementById("error");

      //on creer l'affichage de la page
      let errorContainer = create("div", "class", "Block");
      let errorMessage = create("h2", "class", "error-product");

      //Hiérarchisation des élements crées
      errors.appendChild(errorContainer);
      errorContainer.appendChild(errorMessage);

      //Attribution des données aux élements créees
      errorMessage.textContent = "Ce produit n'est pas répertorié dans notre catalogue ou n'est plus disponible";

      document.getElementById('descriptionproduit').remove();

    });
}
selectionProduit();


/*------------------------Ajouter un article au panier---------------------------*/

const ajouterAuPanier = (article) => {
  //declaration de la variable saveLocalStorage stock les valeur envoyer au localstorage
  let monPanier = JSON.parse(localStorage.getItem("produit"));
  //si des produits sont deja dans le local storage (condition)
  if (monPanier) {
    //on ajoute l'article au panier
    monPanier.push(article);
    //on l'ajoute dans le localStorage au format json
    localStorage.setItem("produit", JSON.stringify(monPanier));
    //confirmation de l'ajout produit au panier
    alert("L'article a bien été ajouté à votre panier.")
    //actualisation de la page
    location.reload();
  }
  //la condition n'est pas bonne
  else {
    //on creer monPanier
    monPanier = [];
    //on y ajoute l'article
    monPanier.push(article);
    //on ajoute dans le localStorage au format json
    localStorage.setItem("produit", JSON.stringify(monPanier));
    //confirmation de l'ajout produit au panier
    alert("L'article a bien été ajouté à votre panier.")
    //actualisation de la page
    location.reload();
  }
};







