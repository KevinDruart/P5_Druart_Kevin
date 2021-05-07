/*-------------Récupération de tout les produits dans localstorage---------------*/
/*const cartAdd = () => {
  const monPanier = JSON.parse(localStorage.getItem("produit"));
  console.log(monPanier);
  monPanier
    .then (())
  cart(produit);
}
cartAdd();*/
const client = () => {
const panierClient = new promise((resolve, reject) => {
  const monPanier = JSON.parse(localStorage.getItem("produit"));
  console.log(monPanier);
  resolve(produit);

});

panierClient.then ((value) => {
  console.log(value);
});

console.log(panierClient);
}

/*
const cartAdd = () => {
  //declaration de la variable saveLocalStorage stock les valeur envoyer au localstorage
  let monPanier = JSON.parse(localStorage.getItem("produit"));
  console.log(monPanier);
  cart(monPanier);
}
cartAdd();*/





