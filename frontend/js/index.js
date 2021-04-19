/*On récupére la balise section "card"*/
let card = document.getElementById("card");

/*création de l'affichage de la cartes des ours*/
let produitContainer = create("div", "class", "Block");
let produitP1 = create("div", "class", "P1");
let produitP2 = create("div", "class", "P2");
let produitNom = create("h2", "class", "Nomproduits");
let produitLien = create("a", "href", "produit.html?id=" + teddies._id);
let produitPrix = create("p", "class", "Prixproduit");
let produitImage = create("img", "src", teddies.imageUrl);