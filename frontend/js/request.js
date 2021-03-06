
/*--------------------Initialisation de la requete -----------------------*/
//requete de reception de données
const getRequest = async (url) => {
    const response = await fetch(url);
    //renvoi la reponse
    return await response.json();
}

//requete d'envoi de données
const postRequest = async (url, options) => {
    const response = await fetch(url, options);
    //verification du status de l'envoi (condition)
    if (response.status === 200, 201) {
        //sauvegarde true dans le sessionStorage key validOrder
        sessionStorage.setItem("validOrder", "true")
        //renvoie la reponse
        return await response.json();
    }
    //si la condition n'est pas bonne
    else {
        //sauvegarde false dans le sessionStorage key validOrder
        sessionStorage.setItem("validOrder", "false")
    }
}

/*----------------------Gestion du localStorage-------------------------- */
//declaration de la variable monPanier comme etant le localStorage key produit
const getMonPanier = () => {
    return JSON.parse(localStorage.getItem("produit"));
}
