//On stock le prix total dans cette variable afin de l'afficher dans le tableau 
let total = 0;

/*---------------Affichage du panier utilisateur dans la page "panier"--------------*/
const cartCheckout = () => {
  //si mon panier contient 1 ou plusieurs article(s) on supprime "votre panier est vide"
  if (monPanier !== null) {
    document.getElementById('panierVide').remove();
    affichagePanier();

    //si le panier n'est pas vide alors on recupere nos input formulaires
    //nom
    let inputName = document.getElementById('lastName');
    //prenom
    let inputFirstName = document.getElementById('firstName');
    //adresse
    let inputAddress = document.getElementById('address');
    //ville
    let inputCity = document.getElementById('city');
    //email
    let inputEmail = document.getElementById('email');

    //on ajoute un evenment pour la validation des données entrer par l'utilisateur
    //evenement nom
    inputName.addEventListener('input', (event) => {
      //on appel la fonction de validation 
      validateName(event.currentTarget);
    })
    //evenement prenom
    inputFirstName.addEventListener('input', (event) => {
      //on appel la fonction de validation
      validateFirstName(event.currentTarget);
    })
    //evenement adresse
    inputAddress.addEventListener('input', (event) => {
      //on appel la fonction de validation
      validateAddress(event.currentTarget);
    })
    //evenement ville
    inputCity.addEventListener('input', (event) => {
      //on appel la fonction de validation
      validateCity(event.currentTarget);
    })
    //evenement email
    inputEmail.addEventListener('input', (event) => {
      //on appel la fonction de validation
      validateEmail(event.currentTarget);
    })
  }
  else {
    //si aucun produit dans mon panier, on cache le formulaire
    document.getElementById('form-checkout').remove();
  }

}

cartCheckout();

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
    //Envoi des données récupérées
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify(commandClient),
    }

    const sendTicket = fetch("http://localhost:3000/api/teddies/order", options)
      .then(function (response) {
        console.log(response);
        response.json()
          .then(function (text) {
            console.log(text.order_id);
            //redirection page de confirmation avec id de commande, nom et le total
            // window.location = `./confirm.html?id=${text.order_id}&name=${commandClient.contact.firstName}&prix=${total}`
          });
      });
    //vidage du localstorage
    localStorage.clear()


  });//fin addevent

}
if (monPanier !== null) {
    ticket();
}




