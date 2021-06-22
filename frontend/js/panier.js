//On stock le prix total dans cette variable afin de l'afficher dans le tableau 
let total = 0;

/*---------------Affichage du panier utilisateur dans la page "panier"--------------*/
const cartCheckout = () => {

  //appel de la fonction qui affiche le nombre de produit dans le panier header
  numberInPanier();
  //recupération de la variable monPanier
  let monPanier = getMonPanier();
  //si mon panier contient 1 ou plusieurs article(s) on supprime "votre panier est vide"
  if (monPanier !== null) {
    //suppresion du message panier vide
    document.getElementById('panierVide').remove();
    //appel de ma view
    affichagePanier();
    //appel de ma fonction de validation a l'envoi
    validateFormCart();

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

    //on ajoute des evenments pour la validation des données entrer par l'utilisateur
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
const ticket = async () => {

  //Récupération des champs du formulaire
  //le nom
  let name = document.getElementById('lastName').value;
  //le prénom
  let firstName = document.getElementById('firstName').value;
  //l'adresse
  let address = document.getElementById('address').value;
  //la ville
  let city = document.getElementById('city').value;
  //l'adresse email
  let email = document.getElementById('email').value;

  //recupération de la variable monPanier
  let monPanier = getMonPanier();


  //Création de l'objet à envoyer, regroupant le formulaire et les articles
  const commandClient = {
    //donnees du formulaire seront stocker ici
    contact: {},
    //donnees du panier seront stocker ici
    products: [],
  }

  //Création de l'objet formulaireObjet
  commandClient.contact = {
    firstName: firstName,
    lastName: name,
    address: address,
    city: city,
    email: email,
  }

  //ajout des produit panier dans commandClient
  monPanier.forEach(produits => {
    commandClient.products.push(produits._id)

  });

  //Envoi des données récupérées
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(commandClient),
  }

  //Envoie données formulaire et recupération du numero order (orderId)
  const getTicket = async () => {
    const getOrder = await postRequest("http://localhost:3000/api/teddies/order", options);

    //Redirection vers la page confirm en passant les informations 
    window.location = `./confirm.html?id=${getOrder.orderId}&name=${getOrder.contact.lastName}&prix=${total}`

    //vidage du localstorage
    localStorage.clear();
  }
  getTicket();
}









