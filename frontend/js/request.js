
/*--------------------Initialisation de la requete -----------------------*/
const getRequest = async (url) => {
    const response = await fetch(url);
     return await response.json();  
}

/*----------------------Gestion du localStorage-------------------------- */

let monPanier = JSON.parse(localStorage.getItem("produit"));
console.log(monPanier);
