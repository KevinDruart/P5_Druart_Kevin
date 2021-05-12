

/*-------------Création de la mise en page de la page panier--------------------*/

const affichagePanier = (article, index) => {

    //on selectionne la balise "cart-info" pour y injecter nos elements
    let aside = document.getElementById("cart-info");

    //Création du tableau
    //entete tableau
    let infoCart = create("h4", "class", "d-flex justify-content-between align-items-center mb-3")
    let cartLength = create("span", "id", "contenance");
    let cartLengthNumber = create("span", "class", "badge bg-primary rounded-pill");
    //liste article
    let list = create("ul", "class", "list-group mb-3");
    //footer list
    let footerLigne = create("li", "class", "lignePrix");
    footerText = create("span");
    footerPrixTotal = create("strong");

    //Hiérarchisation des élements crées
    aside.appendChild(infoCart);
    infoCart.appendChild(cartLength);
    infoCart.appendChild(cartLengthNumber);
    aside.appendChild(list);

    //Attribution des données aux élements créees
    cartLength.textContent = "Nombre d'article(s)";
    cartLengthNumber.textContent = monPanier.length;

    //Création d'une ligne dans le tableau pour chaque produit composant le panier
    monPanier.forEach((article, index) => {
        let articleLigne = create("li", "class", "list-group-item d-flex justify-content-between lh-sm");
        let infoArticle = create("div");
        let titleArticle = create("h6", "class", "my-0");
        let articleImage = create("img", "id", "articleImage");
        let articlePrix = create("span", "class", "text-muted");

        //Attributs suplémentaires
        articleImage.setAttribute("src", article.imageUrl);

        //Hiérarchisation des élements crées
        list.appendChild(articleLigne);//ul--li
        articleLigne.appendChild(infoArticle);//li--div
        infoArticle.appendChild(titleArticle);//div--h6
        infoArticle.appendChild(articleImage)//div--img
        articleLigne.appendChild(articlePrix);//li--span

        //Attribution des données aux élements créees
        titleArticle.textContent = article.name;
        articlePrix.textContent = euro.format(article.price / 100);
    });

    //Création de la ligne du bas du tableau affichant le prix total de la commande
    list.appendChild(footerLigne);
    footerLigne.appendChild(footerText);
    footerLigne.appendChild(footerPrixTotal);

    monPanier.forEach(priceArticle => {
        total += priceArticle.price / 100;
    });

    //attribution des donnees aux elements creees
    footerText.textContent = "Total"
    footerPrixTotal.textContent = euro.format(total);
}


/*-------------Création de la mise en page de la page produit--------------------*/

const cardProduct = (data) => {

    //On vient cibler la balise ayant pour id descriptionproduit
    let descriptionProduit = document.getElementById("descriptionproduit");

    //On crée l'affichage de la description du produit séléctionné par l'utilisateur
    let descriptionContainer = create("div", "id", "Blockdescription");
    let descriptionProduitB1 = create("div", "class", "B1description order1");
    let descriptionProduitB2 = create("div", "class", "B2description order2");
    let descriptionProduitNom = create("h2", "class", "Nomdescription");
    let descriptionProduitPrix = create("p", "class", "Prixdescription");
    let descriptionProduitImage = create("img", "src", data.imageUrl);
    let descriptionProduitDescription = create("p", "class", "Descriptionproduit");
    let optionSelect = create("div", "class", "select-option order3");
    let label = create("label", "for", "option");
    let selectProduct = create("select", "id", "Option");
    let valid = create("button", "type", "button");
    valid.addEventListener('click', () => {
        ajouterAuPanier(data);
    });

    //Attributs suplémentaires
    descriptionProduitImage.setAttribute("alt", "Photo de l'ours en peluche.");
    descriptionProduitImage.setAttribute("class", "Imagedescription");
    label.setAttribute('class', 'labelselect');
    selectProduct.setAttribute("name", "option");
    valid.setAttribute("id", "panier");

    //Hiérarchisation des élements crées
    descriptionProduit.appendChild(descriptionContainer);
    descriptionContainer.appendChild(descriptionProduitB1);
    descriptionContainer.appendChild(descriptionProduitB2);
    descriptionProduitB1.appendChild(descriptionProduitImage);
    descriptionProduitB2.appendChild(descriptionProduitNom);
    descriptionProduitB2.appendChild(descriptionProduitPrix);
    descriptionProduitB2.appendChild(descriptionProduitDescription);
    descriptionContainer.appendChild(optionSelect);
    optionSelect.appendChild(label);
    optionSelect.appendChild(selectProduct);
    optionSelect.appendChild(valid);

    //Attribution des données aux élements créees
    descriptionProduitNom.textContent = data.name;
    descriptionProduitPrix.textContent = euro.format(data.price / 100);
    descriptionProduitDescription.textContent = data.description;
    label.textContent = "choissisez votre couleur"
    valid.textContent = "Ajouter au panier";

    //Options couleurs
    const selectOption = document.querySelector('#Option');
    const colors = data.colors;
    colors.forEach(element => {
        let option = create("option");
        selectOption.appendChild(option);
        option.setAttribute("class", "couleurs");
        option.textContent = element;
    });
}

/*-------------Création de la mise en page de la page index--------------------*/

const createProduct = (teddy) => {
    //On selectionne la section "card"
    let produits = document.getElementById("card");

    //On crée l'affichage des produits sur l'index grâce a la fonction create
    let produitContainer = create("div", "class", "Block");
    let produitB1 = create("article", "class", "B1");
    let produitImage = create("img", "src", teddy.imageUrl);
    let produitB2 = create("aside", "class", "B2");
    let produitNom = create("h2", "class", "Nomproduits");
    let produitPrix = create("p", "class", "Prixproduit");
    let produitLien = create("a", "href", "produit.html?id=" + teddy._id);

    //Attributs suplémentaires
    produitImage.setAttribute("alt", "image du produit");
    produitImage.setAttribute("class", "Imageproduit");

    //on donne une hierarchie au elements
    produits.appendChild(produitContainer);
    produitContainer.appendChild(produitB1);
    produitContainer.appendChild(produitB2);
    produitB1.appendChild(produitImage);
    produitB2.appendChild(produitNom);
    produitB2.appendChild(produitPrix);
    produitB2.appendChild(produitLien);

    //Attribution des données aux élements créees
    produitNom.textContent = teddy.name;
    produitPrix.textContent = euro.format(teddy.price / 100);
    produitLien.textContent = "Voir plus";
}

/*------------ajout du nombre d'article dans le panier sur la nav----------*/
//on selectionne la balise 'panier-length' pour y injecter nos elements
let panierLength = document.getElementById('panierLength');

//Attribution des données aux élements créees
panierLength.textContent = (monPanier.length);

