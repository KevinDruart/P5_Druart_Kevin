/*---------------------erreur de connexion API affichage----------------------- */
const errorAPI = () => {
    //on selectionne la balise "cache-error"
    let cacheError = document.getElementById("cache-error");
    console.log(cacheError);

    //on change le titre pour prevenir d'une erreur 
    cacheError.textContent = "Une erreur est survenu et rend notre site indisponible, nos equipes travaille sur le probleme. Veuillez nous en excuser, nous vous recommandons de revenir plus tard";

    //on regle le design
    cacheError.style.fontSize = '1em';
}

/*-------------Création de la mise en page de la page panier--------------------*/

const affichagePanier = (article, index) => {

    //on selectionne la balise "cart-info" pour y injecter nos elements
    let aside = document.getElementById("cart-info");

    //Recap panier rapide 
    let infoCart = create("h4", "class", "titlePanier")
    let cartLength = create("span", "id", "contenance");
    let cartLengthNumber = create("span", "class", "badge bg-primary rounded-pill");

    //Hierarchisation
    aside.appendChild(infoCart);
    infoCart.appendChild(cartLength);
    infoCart.appendChild(cartLengthNumber);

    //Attribution des données aux élements créees
    cartLength.textContent = "Nombre d'article(s)";
    cartLengthNumber.textContent = monPanier.length;

    //Création du tableau
    let list = create("table", "class", "tableau");

    //on creer l'entête du tableau
    let headerTableau = create("thead", "class", "header-table");

    let ligneHeader = create("tr", "class", "ligneHeader");

    let imgProductHeader = create("th", "class", "imgHeader column1");
    let nameProductHeader = create("th", "class", "nameHeader column2");
    let priceProductHeader = create("th", "class", "priceHeader column3");
    let actionHeader = create("th", "class", "actionHeader column4");

    //Hiérarchisation des élements de l'entête du tableau
    aside.appendChild(list);
    list.appendChild(headerTableau);
    headerTableau.appendChild(ligneHeader);
    ligneHeader.appendChild(imgProductHeader);
    ligneHeader.appendChild(nameProductHeader);
    ligneHeader.appendChild(priceProductHeader);
    ligneHeader.appendChild(actionHeader);

    //Attribution données au elements de l'entête
    imgProductHeader.textContent = "Image";
    nameProductHeader.textContent = "Produit";
    priceProductHeader.textContent = "Prix";
    actionHeader.textContent = "Supprimer";


    //corps du tableau 
    let articleLigne = create("tbody", "class", "corpsTableau");


    //Création d'une ligne dans le tableau pour chaque produit composant le panier
    monPanier.forEach((article, index) => {
        let infoArticle = create("tr");
        let articleImageBox = create("td", "class", "imgArticle column1")
        let articleImage = create("img", "class", "articleImage");
        let titleArticle = create("td", "class", "nameArticle column2");
        let articlePrix = create("td", "class", "articlePrice column3");
        let arcticleActionBox = create("td", "class", "arcticleAction column4")
        let articleAction = create("i", "id", index);

        //Attributs suplémentaires
        articleImage.setAttribute("src", article.imageUrl);
        articleAction.setAttribute("alt", "Retirer l'article du panier.");
        articleAction.setAttribute("class", "fas fa-trash-alt"); //Logo poubelle pour supprimer l'article du panier.

        /*Suppression de l'article en cliquant sur la poubelle*/
        articleAction.addEventListener("click", function (event) {
            suppressionArticle(event.target.id);
        });

        //Hiérarchisation des élements crées
        list.appendChild(articleLigne);
        articleLigne.appendChild(infoArticle);
        infoArticle.appendChild(articleImageBox);
        articleImageBox.appendChild(articleImage);
        infoArticle.appendChild(titleArticle);
        infoArticle.appendChild(articlePrix);
        infoArticle.appendChild(arcticleActionBox);
        arcticleActionBox.appendChild(articleAction);

        //Attribution des données aux élements créees
        titleArticle.textContent = article.name;
        articlePrix.textContent = euro.format(article.price / 100);
    });

    //Création de la ligne du pied de tableau affichant le prix total de la commande
    let footerLigne = create("tfoot", "class", "lignePrix");
    let footerText = create("td", "class", "total column1");
    let footerPrixTotal = create("td", "class", "prix-total");
    let space = create("td")
    let deletePanierBox = create("td", "class", "deletePanierBox");
    let deletePanier = create("button", "id", "deletePanier");

    //Attribut supplémentaires
    deletePanier.setAttribute("class", "btn btn-outline-danger rounded-pill");

    //Hierarchisation
    list.appendChild(footerLigne);
    footerLigne.appendChild(footerText);
    footerLigne.appendChild(footerPrixTotal);
    footerLigne.appendChild(space);
    footerLigne.appendChild(deletePanierBox);
    deletePanierBox.appendChild(deletePanier);
    /*Suppression de l'article en cliquant sur la poubelle*/
    deletePanier.addEventListener("click", (e) => {
        //annule l'action par defaut
        e.preventDefault();
        //vide le localStorage
        localStorage.clear();
        //confirmation que le panier a bien etait vider
        alert('le panier a bien etait vider!')
        //rafraichissement de la page
        location.reload();
    });

    monPanier.forEach(priceArticle => {
        total += priceArticle.price / 100;
    });

    //attribution des donnees aux elements creees
    footerText.textContent = "Total"
    footerPrixTotal.textContent = euro.format(total);
    deletePanier.textContent = "Vider";

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

