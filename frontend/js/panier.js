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

const formCheckout = () => {
  //on selectionne les elements du formulaire
  //le nom
  let name = document.getElementById('lastName');
  let errorName = document.getElementById('errorName');
  //le prénom
  let firstName = document.getElementById('firstName');
  let errorFirstName = document.getElementById('errorFirstName');
  //l'adresse
  let address = document.getElementById('address');
  //la ville
  let city = document.getElementById('ville');
  let errorCity = document.getElementById('errorCity');
  //l'adresse email
  let email = document.getElementById('email');
  let errorEmail = document.getElementById('errorEmail');

  //on cache les messages d'erreur
  errorName.style.display = "none";
  errorFirstName.style.display = "none";
  errorCity.style.display = "none";
  errorEmail.style.display = "none";

  //on creer des expressions reguliere
  const letter = /^[a-zA-Z]+$/;
  const numberLetter = /^[0-9a-zA-Z]+$/;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //on effectue des validation avant l'envoie
  if (name.match(letter)) {
    if (firstName.match(letter)) {
      if (address.match(numberLetter)) {
        if (city.match(letter)) {
          if (email.match(mailFormat)) {
            return true;
          }

        }

      }

    }

  }

}

formCheckout();
//creation de mon objet commande Client avec les donnees du formulaire et de mon panier
const ticket = () => {
  //creation de la variable de stockage
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
  });

}
//envoie des donnees