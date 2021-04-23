/*Appel de l'API*/
const getTeddies = async function () {
    const response = await fetch(url);
    return await response.json();
}
getTeddies();

/*LISTE INDEX*/
async function listeTeddies() {
    const teddies = await getTeddies();

    /*On selectionne la section "card"*/
    let produits = document.getElementById("card");

    /*On crée l'affichage des produits sur l'index*/
    teddies.forEach((teddies) => {
        /*on utilise notre fonction Create*/
        let produitContainer = create("div", "class", "Block");
        let produitB1 = create("div", "class", "B1");
        let produitB2 = create("div", "class", "B2");
        let produitNom = create("h2", "class", "Nomproduits");
        let produitLien = create("a", "href", "produit.html?id=" + teddies._id);
        let produitPrix = create("p", "class", "Prixproduit");
        let produitImage = create("img", "src", teddies.imageUrl);

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
        produitNom.textContent = teddies.name;
        produitPrix.textContent = teddies.price / 100 + " " + "euros";
        produitLien.textContent = "Voir la description du produit.";
    });
};
listeTeddies();
