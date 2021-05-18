//On stock le prix total dans cette variable afin de l'afficher dans le tableau 
let total = 0;

/*---------------Affichage du panier utilisateur dans la page "panier"--------------*/
const cartCheckout = () => {
  //si mon panier contient 1 ou plusieurs article(s) on supprime "votre panier est vide"
  if (monPanier !== null) {
    document.getElementById('panierVide').remove();
    affichagePanier();
  }
  else {
    //si aucun produit dans mon panier, on cache le formulaire
    document.getElementById('form-checkout').remove();
  }
}
cartCheckout();

/*------------------ Vérification des données du formulaire via le navigateur ------------------------- */
const verifNavigator = () => {
  // recupere tout ce qui est dans 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation')

  // boucle de verification des données formulaire et event de soumission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    });
}
/*---------------------------------FORMULAIRE-------------------------------------*/

//creation de mon objet commande Client avec les donnees du formulaire et de mon panier
const ticket = () => {
  ////Création de l'objet à envoyer, regroupant le formulaire et les articles
  const commandClient = {
    //donnees du formulaire seront stocker ici
    contact: {},
    //donnees du panier seront stocker ici
    product: [],
  }
  //recupération du input submit afin de recuperer les données
  document.getElementById("form").addEventListener("submit", (e) => {
    //annule le role par defaut(changement de page)
    e.preventDefault();
    //procede a une validation via les navigateurs 
    verifNavigator();
    //Avant d'envoyer un formulaire, vérification que le panier n'est pas vide.
    if (monPanier.length == 0) {
      alert("Attention, votre panier est vide.");
    }
    else {

      //Récupération des champs du formulaire
      //le nom
      let name = document.getElementById('lastName').value;
      //le prénom
      let firstName = document.getElementById('firstName').value;
      //l'adresse
      let address = document.getElementById('address').value;
      //la ville
      let city = document.getElementById('ville').value;
      //l'adresse email
      let email = document.getElementById('email').value;

      //Création de l'objet formulaireObjet
      commandClient.contact = {
        firstName: firstName,
        lastName: name,
        address: address,
        city: city,
        email: email,
      }
      console.log(commandClient.contact);
      //ajout des produit panier dans commandClient
      monPanier.forEach(produits => {
        commandClient.product.push(produits._id)

      });
      console.log(commandClient);
    }
    //on defini des options et methode d'envoi, le serveur attend du JSON
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify(commandClient),
    }

    const sendTicket = getRequest("http://localhost:3000/api/teddies/" + "order", options);
    sendTicket
      .then((response) => {
        response.json()
          .then((text) => {
            console.log(text.orderId);
            window.location = `./confirmation.html?id=${text.orderId}&name=${firstName}&prix=${total}`
          });
      });
    localStorage.clear()
  })
}
ticket();

//envoie des donnees