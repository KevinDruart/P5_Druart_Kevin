/*-------------Création de la mise en page de la page panier--------------------*/

const cart = (article) => {

    //on vient cibler la balise ayant pour id cart
    let createCart = document.getElementById("cart");

    //on creer l'affichage de la page
    let title = create("h1", "class", "title");
    let cartContainer = create("div", "class", "cartContain");
    let cartProducts = create("div", "class", "cartProducts");
    let tableauPanier = create("table", "class", "tableauPanier");
    let tableauHeaderLigne = create("tr", "class", "tableauHeaderLigne");
    let tableauHeaderImage = create("th");
    let tableauHeaderNom = create("th");
    let tableauHeaderPrix = create("th");
    let cartForm = create("div", "class", "cartForm");
    let titleForm = create("p", "class", "title-Form");

    //Attributs supplémentaires

    //Hierarchisation des elements creer
    createCart.appendChild(title);
    createCart.appendChild(cartContainer);

    cartContainer.appendChild(cartProducts);
    cartProducts.appendChild(tableauPanier);
    tableauPanier.appendChild(tableauHeaderLigne);
    tableauHeaderLigne.appendChild(tableauHeaderImage);
    tableauHeaderLigne.appendChild(tableauHeaderNom);
    tableauHeaderLigne.appendChild(tableauHeaderPrix);
    cartContainer.appendChild(cartForm);
    cartForm.appendChild(titleForm);

    //Attribution des données aux élements créees
    title.textContent = "Votre panier:"
    tableauHeaderImage.textContent = "Article(s)";
    tableauHeaderNom.textContent = "Nom(s)";
    tableauHeaderPrix.textContent = "Prix";
    titleForm.textContent = "Avant de valider et payer votre commande, veuillez renseigner certaines informations:";

    let articleLigne = create("tr", "id", "articleLigne");
    let articleImage = create("img", "id", "articleImage");
    let articleNom = create("td", "id", "articleNom");
    let articlePrix = create("td", "id", "articlePrix");

    //Attributs suplémentaires
    articleImage.setAttribute("src", article.imageUrl);

    //Hiérarchisation des élements crées
    tableauPanier.appendChild(articleLigne);
    articleLigne.appendChild(articleImage);
    articleLigne.appendChild(articleNom);
    articleLigne.appendChild(articlePrix);

    //Attribution des données aux élements créees
    articleNom.textContent = article.name;
    articlePrix.textContent = article.price / 100;
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


