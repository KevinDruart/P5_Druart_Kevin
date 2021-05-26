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
  else {
    console.log('email c est pas bon, vide ou pas ok regex');
    msgErrorEmail.style.display = 'contents';
    iconErrorEmail.style.backgroundColor = 'red';
    inputEmailBorder.style.border = "2px double red"
  }
}

/*------------------------Validation a l'envoi--------------------------*/
/*const formValidation = () => {
  let message = document.getElementById('message');
  let uname = document.form.lastName;
  let firstname = document.form.firstName;
  let uadd = document.form.address;
  let ucity = document.form.city;
  let uemail = document.form.email;

  if (lastName_validation(uname)) {
    if (firstName_validation(firstname, 3, 12)) {
      if (address_validation(uadd)) {
        if (city_validation(ucity)) {
          if (email_validation(uemail)) {

          }
        }
      }
    }
  }
  else {
    return false;
  }
}

//Nom
const lastName_validation = (uname) => {
  let regex = /^[A-Za-z]+$/;
  if (uname.value.match(regex)) {
    return true;
  }
  else {
    message.textContent = 'Votre nom ne doit contenir que des caracteres alphabétique';
    message.style.color = 'red';
    uname.focus();
    return false;
  }
}

//Prènom
const firstName_validation = (firstname) => {
  let regex = /^[A-Za-z]+$/;
  if (firstname.value.match(regex)) {
    return true;
  }
  else {
    message.textContent = 'Votre nom ne doit contenir que des caracteres alphabétique';
    message.style.color = 'red';
    firstname.focus();
    return false;
  }
}

//Adresse
const address_validation = (uadd) => {
  let regex = /^\d+\s[A-z]+\s[A-z]+/;
  if (uadd.value.match(regex)) {
    return true;
  }
  else {
    message.textContent = 'Votre adresse ne doit contenir que des chiffres et des lettres';
    message.style.color = 'red';
    uadd.focus();
    return false;
  }
}

//Ville
const city_validation = (ucity) => {
  let regex = /^[A-Za-z]+$/;
  if (ucity.value.match(regex)) {
    return true;
  }
  else {
    message.textContent = 'Votre ville ne doit contenir que des caractere alphabétique';
    message.style.color = 'red';
    ucity.focus();
    return false;
  }
}

//Email
const email_validation = (uemail) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  }
  else {
    message.textContent = 'Vous avez entrer une adresse mail invalide!';
    message.style.color = 'red';
    uemail.focus();
    return false;
  }
}*/

/*const envoyer = () => {
  if (uname == true && firstname == true && uadd == true && ucity == true && uemail == true) {
    document.getElementById('message').innerText = "Commande validé";
    document.getElementById('confirmer-panier').submit();
  }
  else {
    document.getElementById('message').innerText = "Le formulaire n'est pas complet";
  }
}*/

function disableSubmit(disabled) {
  if (disabled) {
    document
      .getElementById("confirmer-panier")
      .setAttribute("disabled", true);
  } else {
    document
      .getElementById("confirmer-panier")
      .removeAttribute("disabled");
  }
}

const messageValidation = () => {
  return document.getElementById("message");
}
const validateFormCart = () => {
  let buttonValider = document.getElementById("confirmer-panier");

  //REGEX
  let regexLetter = /^[a-zA-Z]+$/;
  let regexAdd = /^\d+\s[A-z]+\s[A-z]+/;
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //ecouter lors du clique sur le bouton commander
  buttonValider.addEventListener('click', (e) => {
    e.preventDefault();
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

    let testName = regexLetter.test(inputName.value);
    let testFirstname = regexLetter.test(inputFirstName.value);
    let testAddress = regexAdd.test(inputAddress.value);
    let testCity = regexLetter.test(inputCity.value);
    let testMail = regexMail.test(inputEmail.value);

    if (testName == true && testFirstname == true && testAddress == true && testCity == true && testMail == true) {
      messageValidation().innerText = "Commande valider";
      messageValidation().style.color = 'green';
      console.log("formulaire OK envoie des données");
      ticket();
    }
    else {
      messageValidation().innerText = "Commande impossible, tout les champs doivent etre rempli et valide";
      messageValidation().style.color ='red';
      console.log("ERREUR DANS LE FORMULAIRE" + testName + testFirstname + testAddress + testCity + testMail);
    }
  });
}
