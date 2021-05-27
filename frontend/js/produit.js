
/*---------------------Selection du produit en fonction de id--------------------*/

const selectionProduit = () => {
  /*on recupere l'url actuel et on y extrait l'Id du produit*/
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  console.log('id produit est le ' + productId);
  const teddy = getRequest("http://localhost:3000/api/teddies/" + productId);
  teddy
    .then((data) => {
      cardProduct(data);
    })
    .catch((error) => {
      console.log('pas le bon produit');
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
  console.log(article);
  //declaration de la variable saveLocalStorage stock les valeur envoyer au localstorage
  let monPanier = JSON.parse(localStorage.getItem("produit"));
  //si des produits sont deja dans le local storage
  if (monPanier) {
    monPanier.push(article);
    localStorage.setItem("produit", JSON.stringify(monPanier));
    alert("L'article a bien été ajouté à votre panier.")
    location.reload();
  }
  //sinon
  else {
    monPanier = [];
    monPanier.push(article);
    localStorage.setItem("produit", JSON.stringify(monPanier));
    alert("L'article a bien été ajouté à votre panier.")
    location.reload();
  }

};







