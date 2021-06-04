
/*--------------------Initialisation de la requete -----------------------*/
const getRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

const postRequest = async (url,options) => {
    const response = await fetch(url,options);
    if (response.status === 200,201) {
        sessionStorage.setItem("validOrder","true")
     return await response.json();   
    }
    else {
        sessionStorage.setItem("validOrder","false")
    }
    
}

/*----------------------Gestion du localStorage-------------------------- */

let monPanier = JSON.parse(localStorage.getItem("produit"));
