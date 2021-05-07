/*-----------------Initialisation de la requete Async---------------------*/

const getRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
}


 