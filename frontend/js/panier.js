//On stock le prix total dans cette variable afin de l'afficher dans le tableau 
let total = 0;


/*---------------Affichage du panier utilisateur dans la page "panier"--------------*/

//si mon panier contient 1 ou plusieurs article(s) on supprime "votre panier est vide"
if (monPanier !== null) {
  document.getElementById('panierVide').remove();
  affichagePanier();
  //Création de l'objet à envoyer, regroupant les donnees formulaire et les articles commander

  const commandeClient = {
    contact: {},
    products: [],
  }

  document.getElementById("form").addEventListener("submit", (e) => {
    //annule le role par defaut(changement de page)
    e.preventDefault();

    //Avant d'envoyer le formulaire, vérification que le panier n'est pas vide.
    if (monPanier.length == 0) {

      alert("Attention, votre panier est vide.");
    }
    else {
      //Récupération des champs
      let lastName = document.getElementById("lastName").value;
      let firstName = document.getElementById("firstName").value;
      let email = document.getElementById("email").value;
      let adress = document.getElementById("adress").value;
      let ville = document.getElementById("ville").value;


    }
  })

  //Création de l'objet formulaireObjet

  commandeClient.contact = {
    lastName: lastName,
    firstName: firstName,
    email: email,


  }
  //Création de la liste des articles commander
  //Envoi des données récupérées a la page confirmation
}
else {
  //si aucun produit dans mon panier, on cache le formulaire
  document.getElementById('form-checkout').remove();
}




/*------------------Vérification des données du formulaire------------------------- */
// recupere tout ce qui est dans 'needs-validation'
var forms = document.querySelectorAll('.needs-validation')

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
  })

/*---------------------------------FORMULAIRE-------------------------------------*/


