/*-------------Création de la mise en page de la page confirm--------------------*/
const affichageConfirm = (ticketOrderId, ticketNameOrder, ticketPriceOrder) => {
    //recuperation de la balise main ou sera injecter la view
    let confirmMain = document.getElementById('confirm');

    // création des elements de la page

    //Section haute
    let sectionHaute = create('section', 'id', 'section-haute');
    let annonce = create('div', 'class', 'annonce');
    let title = create('h1', 'id', 'title-confirm');
    let annonceGlobal = create('div', 'id', 'annonce-g');
    let imgCheck = create('i', 'class', 'fas fa-check');
    let alert = create('div', 'id', 'alert-confirm');

    //Section principale
    let sectionMain = create('section', 'id', 'section-main');
    let textConfirm = create('p', 'id', 'text-confirm');
    let ticketOrderRecap = create('div', 'id', 'ticket-order');

    //Tableau de recapitulatif commande
    let tableOrder = create('table', 'id', 'table-order');

    //Entête du tableau
    let headerTableOrder = create("thead", "class", "header-tableOrder");
    let ligneHeader = create("tr", "class", "ligneHeaderOrder");
    let orderIdColumn = create("th", "class", "order-idColumn");
    let dateColumn = create("th", "class", "dateOrderColumn");
    let totalPriceColumn = create("th", "class", "priceHeaderOrderColumn");

    //Contenu du tableau
    let orderIdLigne = create("tr");
    let orderId = create("td", "class", "order-id")
    let orderDate = create("td", "class", "order-date");
    let orderPrice = create("td", "class", "order-price");

    //recuperation de la date
    let dateNow = new Date();
    //transformation de la date actuel en date locale France
    let dateLocale = dateNow.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    //Hierarchisation

    //section haute
    confirmMain.appendChild(sectionHaute);
    sectionHaute.appendChild(annonce);
    annonce.appendChild(title);
    annonce.appendChild(annonceGlobal);
    annonceGlobal.appendChild(imgCheck);
    annonceGlobal.appendChild(alert);

    //section principale
    confirmMain.appendChild(sectionMain);
    sectionMain.appendChild(textConfirm);
    sectionMain.appendChild(ticketOrderRecap);
    ticketOrderRecap.appendChild(tableOrder);

    //tableau recap order
    tableOrder.appendChild(headerTableOrder);
    headerTableOrder.appendChild(ligneHeader);
    ligneHeader.appendChild(orderIdColumn);
    ligneHeader.appendChild(dateColumn);
    ligneHeader.appendChild(totalPriceColumn);

    //contenu tableau
    tableOrder.appendChild(orderIdLigne);
    orderIdLigne.appendChild(orderId);
    orderIdLigne.appendChild(orderDate);
    orderIdLigne.appendChild(orderPrice);

    //Attribution des donnees

    //titre de la page
    title.textContent = 'Commande confirmé';
    //alert
    alert.textContent = 'Votre commande a bien etait validé';
    textConfirm.textContent = ticketNameOrder + ", merci pour votre confiance et votre commande. Trouver ci-dessous le reçu de commande";
    //tableau recap
    orderIdColumn.textContent = "Numero de commande";
    dateColumn.textContent = "Date";
    totalPriceColumn.textContent = "Montant totale";
    orderId.textContent = ticketOrderId;
    orderDate.textContent = dateLocale;
    orderPrice.textContent = euro.format(ticketPriceOrder);

    //modification du style

    //titre de la page
    title.style.paddingLeft = '1%';
}

/*----------------------Affichage de la view de la page panier-------------------------- */
const affichagePanier = (article, index) => {
    //selection des message erreur du formulaire
    let msgErrorName = document.getElementById('error-name');
    let msgErrorFirstname = document.getElementById('error-firstname');
    let msgErrorAddress = document.getElementById('error-address');
    let msgErrorCity = document.getElementById('error-city');
    let msgErrorEmail = document.getElementById('error-email');

    //on cache les message eurreur formulaire par défaut
    msgErrorName.style.display = 'none';
    msgErrorFirstname.style.display = 'none';
    msgErrorAddress.style.display = 'none';
    msgErrorCity.style.display = 'none';
    msgErrorEmail.style.display = 'none';

    //on selectionne la balise "cart-info" pour y injecter nos elements
    let aside = document.getElementById("cart-info");

    //Recap panier rapide 
    let infoCart = create("h4", "class", "titlePanier")
    let cartLength = create("span", "id", "contenance");
    let cartLengthNumber = create("span", "class", "badge bg-primary rounded-pill");
    let monPanier = getMonPanier();

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

    let imgProductHeader = create("th", "class", "imgHeader");
    let nameProductHeader = create("th", "class", "nameHeader");
    let priceProductHeader = create("th", "class", "priceHeader");
    let actionHeader = create("th", "class", "actionHeader");

    //Attributs supplémentaire
    ligneHeader.setAttribute("scope", "row");
    imgProductHeader.setAttribute("scope", "col");
    nameProductHeader.setAttribute("scope", "col");
    priceProductHeader.setAttribute("scope", "col");
    actionHeader.setAttribute("scope", "col");

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
        let infoArticle = create("tr", "class", "infoArticle");
        let articleImageBox = create("td", "class", "imgArticle")
        let articleImage = create("img", "class", "articleImage");
        let titleArticle = create("td", "class", "nameArticle");
        let articlePrix = create("td", "class", "articlePrice");
        let arcticleActionBox = create("td", "class", "arcticleAction")
        let articleAction = create("span", "id", index);

        //Attributs suplémentaires
        infoArticle.setAttribute("scope", "row");
        articleImage.setAttribute("src", article.imageUrl);
        articleImage.setAttribute("alt", "image produit");
        articleAction.setAttribute("title", "Retirer l'article du panier.");
        articleAction.setAttribute("class", "fas fa-trash-alt"); //Logo poubelle pour supprimer l'article du panier.

        //Modification visuel du style
        articleAction.style.cursor = "pointer";

        /*Suppression de l'article en cliquant sur la poubelle*/
        //ajout d'un evenement pour ecouter le click
        articleAction.addEventListener("click", function (event) {
            //au click on supprime du panier l'élement en question
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
    let footerContainer = create("tr", "class", "footer-container");
    let footerText = create("th", "class", "total column1");
    let footerPrixTotal = create("td", "class", "prix-total");
    let space = create("td", "class", "space")
    let deletePanierBox = create("td", "class", "deletePanierBox");
    let deletePanier = create("button", "id", "deletePanier");

    //Attribut supplémentaires
    footerContainer.setAttribute("scope", "row");
    deletePanier.setAttribute("class", "btn btn-outline-danger rounded-pill");
    deletePanier.setAttribute("title", "vider mon panier");

    //Hierarchisation
    list.appendChild(footerLigne);
    footerLigne.appendChild(footerContainer);
    footerContainer.appendChild(footerText);
    footerContainer.appendChild(footerPrixTotal);
    footerContainer.appendChild(space);
    footerContainer.appendChild(deletePanierBox);
    deletePanierBox.appendChild(deletePanier);

    //ajout d'un evenement pour ecouter le click
    deletePanier.addEventListener("click", (e) => {
        //annule l'action par defaut
        e.preventDefault();
        //au click on appel la fonction videPanier pour vider le panier
        videPanier();
        //confirmation que le panier a bien etait vider
        alert('le panier a bien etait vider!')
    });
    //réalisation d'une boucle pour recuperer chaque prix de chaque produit dans le panier
    monPanier.forEach(priceArticle => {
        //somme de tout les produit 
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
    let descriptionProduitNom = create("h2", "class", "Nomdescription");
    let descriptionContainer = create("div", "id", "Blockdescription");
    let descriptionProduitB1 = create("div", "class", "B1description order1");
    let descriptionProduitB2 = create("div", "class", "B2description order2");

    let descriptionProduitPrix = create("p", "class", "Prixdescription");
    let descriptionProduitImage = create("img", "src", data.imageUrl);
    let descriptionProduitDescription = create("p", "class", "Descriptionproduit");
    let optionSelect = create("div", "class", "select-option order3");
    let label = create("label", "for", "Option");
    let selectProduct = create("select", "id", "Option");
    let valid = create("button", "type", "button");

    //ajout d'un evenement pour ecouter le click
    valid.addEventListener('click', () => {
        //au click on appel la fonction ajouterAuPanier et on lui passe les datas
        ajouterAuPanier(data);
    });

    //Attributs suplémentaires
    descriptionProduitImage.setAttribute("alt", "Photo de l'ours en peluche.");
    descriptionProduitImage.setAttribute("class", "Imagedescription");
    label.setAttribute('class', 'labelselect');
    selectProduct.setAttribute("name", "option");
    valid.setAttribute("id", "panier");

    //Hiérarchisation des élements crées    
    descriptionProduit.appendChild(descriptionProduitNom);
    descriptionProduit.appendChild(descriptionContainer);
    descriptionContainer.appendChild(descriptionProduitB1);
    descriptionContainer.appendChild(descriptionProduitB2);
    descriptionProduitB1.appendChild(descriptionProduitImage);
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
    let produitB1 = create("div", "class", "B1");
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

/*----------------------Gestion affichage si erreur du serveur---------------------*/
const errorServer = () => {

    //suppression du titre "nos produits"
    document.getElementById('title-index').remove();

    //création des elements qui afficheront un message en cas d'erreur
    let error = document.getElementById('card');
    let imgError = document.createElement('img');
    let errorMsg = document.createElement('h4');

    //Hierarchisation des elements créer
    error.appendChild(imgError);
    error.appendChild(errorMsg);

    //Attributs supplémentaires
    imgError.setAttribute("src", "./images/oups.jpg");
    error.setAttribute("class", "error-msg");

    // attribution des donnees
    errorMsg.textContent = 'Une erreur est survenue.. Nos equipes travail a sa resolution, revenez plus tard!';

    //style
    error.style.textAlign = 'center';
    imgError.style.width = '100%';
}

/*---------------------Gestion erreur affichage commande ------------------------ */
const errorOrder = () => {

    //création des elements qui afficheront un message en cas d'erreur
    let errorOrder = document.getElementById('confirm');
    let imgError = document.createElement('img');
    let errorOrderMsg = document.createElement('h4');

    //Hierarchisation des elements créer
    errorOrder.appendChild(imgError);
    errorOrder.appendChild(errorOrderMsg);

    //Attributs supplémentaires
    imgError.setAttribute("src", "./images/oups.jpg");


    // attribution des donnees
    errorOrderMsg.textContent = 'Aucune commande trouver';

    //style
    errorOrder.style.textAlign = 'center';
    imgError.style.width = '100%';
}

/*------------ajout du nombre d'article dans le panier sur la nav----------*/

const numberInPanier = () => {
    //recupération de la variable monPanier
    let monPanier = getMonPanier();
    //si monPanier n'est pas vide
    if (monPanier !== null) {
        //on selectionne la balise 'panier-length' pour y injecter nos elements
        let panierLength = document.querySelector("#panierLength");
        //Attribution des données aux élements selectionner
        panierLength.textContent = monPanier.length;
    }
    //si il est vide
    else {
        //Attribution des données aux élements selectionner
        panierLength.textContent = "0";
    }
}


