
const affichagePanier = () => {
  //recuperation des produits dans le localstorage
  const monPanier = JSON.parse(localStorage.getItem("produit"));
  console.log(monPanier);
  monPanier
    .then((article) => {
      //Création d'une ligne dans le tableau pour chaque produit composant le panier
      monPanier.forEach((article) => {
        console.log(article);
        cart(article);
      });

    })
}
affichagePanier();


