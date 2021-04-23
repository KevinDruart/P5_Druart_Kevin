/*fonction création d'éléments*/
const create = (type, Qualified, nomType) => {
    let nomVariable = document.createElement(type);
    nomVariable.setAttribute(Qualified, nomType);
    return nomVariable;
}

const createProduct = (teddy) => {
    /*On selectionne la section "card"*/
    let produits = document.getElementById("card");

    /*On crée l'affichage des produits sur l'index grâce a la fonction create*/
    let produitContainer = create("div", "class", "Block");
    let produitB1 = create("article", "class", "B1");
    let produitImage = create("img", "src", teddy.imageUrl);
    let produitB2 = create("aside", "class", "B2");
    let produitNom = create("h2", "class", "Nomproduits");
    let produitPrix = create("p", "class", "Prixproduit");
    let produitLien = create("a", "href", "produit.html?id=" + teddy._id);

    /*Attributs suplémentaires*/
    produitImage.setAttribute("alt", "image du produit");
    produitImage.setAttribute("class", "Imageproduit");

    /*on donne une hierarchie au elements*/
    produits.appendChild(produitContainer);
    produitContainer.appendChild(produitB1);
    produitContainer.appendChild(produitB2);
    produitB1.appendChild(produitImage);
    produitB2.appendChild(produitNom);
    produitB2.appendChild(produitPrix);
    produitB2.appendChild(produitLien);

    /*Attribution des données aux élements créees*/
    produitNom.textContent = teddy.name;
    produitPrix.textContent = teddy.price / 100 + " " + "euros";
    produitLien.textContent = "Voir plus";

}
