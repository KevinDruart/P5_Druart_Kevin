/***********************************Fonctions****************************************/
/*--------------------------fonction création d'éléments----------------------------*/
const create = (type, Qualified, nomType) => {
  let nomVariable = document.createElement(type);
  nomVariable.setAttribute(Qualified, nomType);
  return nomVariable;
}

/*---------------------Transformation des TARIFS au format €uro---------------------*/

const euro = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
});

/*------------------Fonction de suppression d'article du panier----------------------*/

function suppressionArticle(i) {
  console.log("suppression article i :", i);
  //suppression de l'element i du tableau;
  monPanier.splice(i, 1);
  //on vide le storage avant de le mettre à jour;  
  localStorage.clear();
  //maj du panier sans l'élément i;
  localStorage.setItem("produit", JSON.stringify(monPanier));
  window.location.reload();
  //si le panier devient vide 
  if (monPanier.length === 0) {
    videPanier();
    //Message le panier est vide
    alert('Votre panier est vide a présent')
  }
}

const videPanier = () => {
  //vide le localStorage
  localStorage.clear();

  //rafraichissement de la page
  location.reload();
}

/*-------------------------------Gestion validation ------------------------------- */
//Validation formulaire avant envoie des données au serveur
//validation nom
const validateName = (inputName) => {
  let inputNameBorder = document.getElementById('lastName');
  let msgError = document.getElementById('error-name');
  let iconError = document.querySelector('.icon-name');

  const valueName = inputName.value.trim();
  //regex letters
  const letters = /^[A-Za-z]+$/;
  if (valueName.length !== 0 && valueName.match(letters)) {
    console.log('ok quelque chose est entrer et ok regex:', valueName);
    msgError.style.display = 'none';
    iconError.style.backgroundColor = '#32CD32';
    inputNameBorder.style.border = "2px solid #32CD32"
  }
  else {
    console.log('nom c est pas bon, vide ou pas ok regex');
    msgError.style.display = 'contents';
    msgError.textContent = valueName + " " + "ne peut pas être un nom. veuillez saisir un nom valide uniquement avec des caracteres alphabétiques"
    iconError.style.backgroundColor = 'red';
    inputNameBorder.style.border = "2px double red"
  }
}


//validation prenom
const validateFirstName = (inputFirstName) => {
  let inputFirstnameBorder = document.getElementById('firstName');
  let msgErrorFirstname = document.getElementById('error-firstname');
  let iconErrorFirstname = document.querySelector('.icon-firstname');
  const valueFirstName = inputFirstName.value.trim();
  // creation regex letters
  const letters = /^[A-Za-z]+$/;

  if (valueFirstName.length !== 0 && valueFirstName.match(letters)) {
    console.log('ok prenom quelque chose est entrer et ok regex:', valueFirstName);
    msgErrorFirstname.style.display = 'none';
    iconErrorFirstname.style.backgroundColor = '#32CD32';
    inputFirstnameBorder.style.border = "2px solid #32CD32"
  }
  else {
    console.log('prenom c est pas bon, vide ou il y a des chiffres');
    msgErrorFirstname.style.display = 'contents';
    msgErrorFirstname.textContent = valueFirstName + " " + "ne peut pas être un prénom. veuillez saisir un prénom valide uniquement avec des caracteres alphabétiques"
    iconErrorFirstname.style.backgroundColor = 'red';
    inputFirstnameBorder.style.border = "2px double red"
  }
}

//validation address
const validateAddress = (inputAddress) => {
  let inputAddressBorder = document.getElementById('address');
  let msgErrorAddress = document.getElementById('error-address');
  let iconErrorAddress = document.querySelector('.icon-address');
  const valueAddress = inputAddress.value.trim();
  //creation de la regex pour adresse
  const lettersNumbers = /^\d+\s[A-z]+\s[A-z]+/;

  if (valueAddress.length !== 0 && valueAddress.match(lettersNumbers)) {
    console.log('ok adresse quelque chose est entrer et ok regex:', valueAddress);
    msgErrorAddress.style.display = 'none';
    iconErrorAddress.style.backgroundColor = '#32CD32';
    inputAddressBorder.style.border = "2px solid #32CD32"
  }
  else {
    console.log('adresse c est pas bon, vide ou pas ok regex');
    msgErrorAddress.style.display = 'contents';
    msgErrorAddress.textContent = valueAddress + " " + "n'est pas une adresse valide. Format d'adresse attendu : 25 rue origino"
    iconErrorAddress.style.backgroundColor = 'red';
    inputAddressBorder.style.border = "2px double red"
  }
}

//validation city
const validateCity = (inputCity) => {
  let inputCityBorder = document.getElementById('city');
  let msgErrorCity = document.getElementById('error-city');
  let iconErrorCity = document.querySelector('.icon-city');
  const valueCity = inputCity.value.trim();
  //création de la regex letter 
  const letters = /^[A-Za-z]+$/;
  if (valueCity.length !== 0 && valueCity.match(letters)) {
    console.log('ok ville quelque chose est entrer et ne contient pas de chiffre : ', valueCity);
    msgErrorCity.style.display = 'none';
    iconErrorCity.style.backgroundColor = '#32CD32';
    inputCityBorder.style.border = "2px solid #32CD32"
  }
  else {
    console.log('ville c est pas bon il y a rien ou il y a des chiffres');
    msgErrorCity.style.display = 'contents';
    msgErrorCity.textContent = valueCity + " " + "ne peut pas etre une ville et ce champ ne peut rester vide. Veuillez ne saisir que des caractéres alphabétique."
    iconErrorCity.style.backgroundColor = 'red';
    inputCityBorder.style.border = "2px double red";
  }
}

//Validation email
const validateEmail = (inputEmail) => {
  let inputEmailBorder = document.getElementById('email');
  let msgErrorEmail = document.getElementById('error-email');
  let iconErrorEmail = document.querySelector('.icon-email');
  const valueEmail = inputEmail.value.trim();
  //creation de la  regex mail
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //la longueur est differente de 0 et si regex ok
  if (valueEmail.length !== 0 && valueEmail.match(mailFormat)) {
    console.log('ok email quelque chose est entrer et ok regex : ', valueEmail);
    msgErrorEmail.style.display = 'none';
    iconErrorEmail.style.backgroundColor = '#32CD32';
    inputEmailBorder.style.border = "2px solid #32CD32"
  }
  //sinon on affiche qu'il y a une erreur
  else {
    console.log('email c est pas bon, vide ou pas ok regex');
    msgErrorEmail.style.display = 'contents';
    msgErrorEmail.textContent= valueEmail + " " + "ne peut pas etre un email. Format d'email attendu : contact@origino.fr"
    iconErrorEmail.style.backgroundColor = 'red';
    inputEmailBorder.style.border = "2px double red"
  }
}

/*------------------------Validation a l'envoi--------------------------*/
//récupération de l'espace message dans le html
const messageValidation = () => {
  return document.getElementById("message");
}

//Ajout d'un evenement sur le bouton commander et validation formulaire
const validateFormCart = () => {
  //récupération du bouton commander
  let buttonValider = document.getElementById("confirmer-panier");

  //Création de REGEX pour la validation
  //regex uniquement des lettre en minuscule et majuscule
  let regexLetter = /^[a-zA-Z]+$/;

  //regex adresse chiffre et lettre sans caractére spéciaux
  //exemple attendu : 23 rue origino
  let regexAdd = /^\d+\s[A-z]+\s[A-z]+/;

  //regex email chiffre lettre @ 
  //exemple attendu: contact95@origino.fr
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //Ajout d'un evenement pour ecouter lors du clique sur le bouton commander
  buttonValider.addEventListener('click', (e) => {
    //on annule le comportement par defaut du bouton
    e.preventDefault();

    //Récuperation des inputs du formulaire
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

    //Validation des valeurs saisies dans les inputs avec nos regex
    //nom
    let testName = regexLetter.test(inputName.value);
    //prenom
    let testFirstname = regexLetter.test(inputFirstName.value);
    //adresse
    let testAddress = regexAdd.test(inputAddress.value);
    //ville
    let testCity = regexLetter.test(inputCity.value);
    //email
    let testMail = regexMail.test(inputEmail.value);

    //Les condition pour que la commande soit valider
    //tout les champs doivent etre true(vrai) a notre validation ci-dessus
    if (testName == true && testFirstname == true && testAddress == true && testCity == true && testMail == true) {
      messageValidation().innerText = "Commande valider";
      messageValidation().style.color = 'green';
      console.log("formulaire OK envoie des données");

      //appel de la fonction d'envoi des donnees
      ticket();
    }
    //sinon on envoie pas les données et on affiche un message d'erreur
    else {
      messageValidation().innerText = "Commande impossible, tout les champs doivent etre rempli et valide";
      messageValidation().style.color ='red';
      console.log("ERREUR DANS LE FORMULAIRE" + testName + testFirstname + testAddress + testCity + testMail);
    }
  });
}
