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
  if (valueName.length !== 0) {
    console.log('ok quelque chose est entrer', valueName);
    msgError.style.display = 'none';
    iconError.style.backgroundColor = '#008CBA';
    const letters = /^[A-Za-z]+$/;
    if (valueName.match(letters)) {
      console.log('ok nom ce sont que des lettres');
      msgError.style.display = 'none';
      iconError.style.backgroundColor = '#32CD32';
      inputNameBorder.style.border = "2px solid #32CD32"
    }
    else {
      console.log('nom c est pas bon il y a des chiffres');
      msgError.style.display = 'contents';
      iconError.style.backgroundColor = 'red';
      inputNameBorder.style.border = "2px double red"
    }
  }
  else {
    console.log('nom c est pas bon vide');
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
  if (valueFirstName.length !== 0) {
    console.log('ok prenom quelque chose est entrer', valueFirstName);
    msgErrorFirstname.style.display = 'none';
    iconErrorFirstname.style.backgroundColor = '#008CBA';
    const letters = /^[A-Za-z]+$/;
    if (valueFirstName.match(letters)) {
      console.log('ok prenom que des lettres');
      msgErrorFirstname.style.display = 'none';
      iconErrorFirstname.style.backgroundColor = '#32CD32';
      inputFirstnameBorder.style.border = "2px solid #32CD32"
    }
    else {
      console.log('prenom c est pas bon il y a des chiffres');
      msgErrorFirstname.style.display = 'contents';
      iconErrorFirstname.style.backgroundColor = 'red';
      inputFirstnameBorder.style.border = "2px double red"
    }
  }
  else {
    console.log('prenom c est pas bon vide');
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
  if (valueAddress.length !== 0) {
    console.log('ok adresse quelque chose est entrer', valueAddress);
    msgErrorAddress.style.display = 'none';
    iconErrorAddress.style.backgroundColor = '#008CBA';

    const lettersNumbers = /^\d+\s[A-z]+\s[A-z]+/;
    if (valueAddress.match(lettersNumbers)) {
      console.log('ok adress regex');
      msgErrorAddress.style.display = 'none';
      iconErrorAddress.style.backgroundColor = '#32CD32';
      inputAddressBorder.style.border = "2px solid #32CD32"
    }
    else {
      console.log('adresse c est pas bon regex');
      msgErrorAddress.style.display = 'contents';
      iconErrorAddress.style.backgroundColor = 'red';
      inputAddressBorder.style.border = "2px double red"
    }
  }
  else {
    console.log('adresse c est pas bon vide');
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
  if (valueCity.length !== 0) {
    console.log('ok ville quelque chose est entrer', valueCity);
    msgErrorCity.style.display = 'none';
    iconErrorCity.style.backgroundColor = '#008CBA';
    const letters = /^[A-Za-z]+$/;
    if (valueCity.match(letters)) {
      console.log('ok ville que des lettres');
      msgErrorCity.style.display = 'none';
      iconErrorCity.style.backgroundColor = '#32CD32';
      inputCityBorder.style.border = "2px solid #32CD32"
    }
    else {
      console.log('ville c est pas bon il y a des chiffres');
      msgErrorCity.style.display = 'contents';
      iconErrorCity.style.backgroundColor = 'red';
      inputCityBorder.style.border = "2px double red";
    }
  }
  else {
    console.log('ville c est pas bon vide');
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
  if (valueEmail.length !== 0) {
    console.log('ok email quelque chose est entrer', valueEmail);
    msgErrorEmail.style.display = 'none';
    iconErrorEmail.style.backgroundColor = '#008CBA';
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valueEmail.match(mailFormat)) {
      console.log('ok email regex');
      msgErrorEmail.style.display = 'none';
      iconErrorEmail.style.backgroundColor = '#32CD32';
      inputEmailBorder.style.border = "2px solid #32CD32"
    }
    else {
      console.log('email c est pas bon regex');
      msgErrorEmail.style.display = 'contents';
      iconErrorEmail.style.backgroundColor = 'red';
      inputEmailBorder.style.border = "2px double red"
    }
  }
  else {
    console.log('email c est pas bon vide');
    msgErrorEmail.style.display = 'contents';
    iconErrorEmail.style.backgroundColor = 'red';
    inputEmailBorder.style.border = "2px double red"
  }

}

/*------------------------Validation a l'envoi--------------------------*/
const formValidation = () => {  
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
  return false;

}

const lastName_validation = (uname) => {
  let regex = /^[A-Za-z]+$/;
  if (uname.value.match(regex)) {
    return true;
  }
  else {
    alert('Votre nom ne doit contenir que des caractere alphabétique');
    uname.focus();
    return false;
  }
}
const firstName_validation = (firstname) => {
  let regex = /^[A-Za-z]+$/;
  if (firstname.value.match(regex)) {
    return true;
  }
  else {
    alert('Votre prenom ne doit contenir que des caractere alphabétique');
    firstname.focus();
    return false;
  }
}


const address_validation = (uadd) => {
  let regex = /^\d+\s[A-z]+\s[A-z]+/;
  if (uadd.value.match(regex)) {
    return true;
  }
  else {
    alert('Votre adresse ne doit contenir que des chiffres et des lettres');
    uadd.focus();
    return false;
  }
}
const city_validation = (ucity) => {
  let regex = /^[A-Za-z]+$/;
  if (ucity.value.match(regex)) {
    return true;
  }
  else {
    alert('Votre ville ne doit contenir que des caractere alphabétique');
    ucity.focus();
    return false;
  }
}

const email_validation = (uemail) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  }
  else {
    alert("Vous avez entrer une adresse mail invalide!");
    uemail.focus();
    return false;
  }
}
