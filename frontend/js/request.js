
/*--------------------Initialisation de la requete -----------------------*/
const getRequest = async (url) => {
    const response = await fetch(url);
    console.log(response.status);
    return await response.json();
}

const statusCode = () => {
    let statusCodeRequest = getRequest(response.status);
    console.log(statusCodeRequest);
}
statusCode();

/*----------------------Gestion du localStorage-------------------------- */

let monPanier = JSON.parse(localStorage.getItem("produit"));
console.log(monPanier);
