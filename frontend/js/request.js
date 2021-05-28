
/*--------------------Initialisation de la requete -----------------------*/
const getRequest = async (url) => {
    const response = await fetch(url);
    console.log(response.status);
    return await response.json();
}

const postRequest = async (url,options) => {
    const response = await fetch(url,options);
    console.log(response.status);
    return await response.json();
}

/*----------------------Gestion du localStorage-------------------------- */

let monPanier = JSON.parse(localStorage.getItem("produit"));
console.log(monPanier);
