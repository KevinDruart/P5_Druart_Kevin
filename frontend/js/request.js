/*-----------------Initialisation de la requete Async---------------------*/

const getRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

/*const getRequest = async (url) => {
    const response = fetch(url)
        .then(() => {
            return response.json();
            console.log("ok");
        })
        .catch(() => {
            console.log("error");
            errorAPI();
        });
}*/

/*----------------------Gestion du localStorage-------------------------- */

let monPanier = JSON.parse(localStorage.getItem("produit"));
console.log(monPanier);
