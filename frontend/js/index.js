/*---------------------------Liste Produits INDEX--------------------------*/

const listeTeddies = () => {
    const teddies = getRequest("http://localhost:3000/api/teddies");
    teddies
        //on a une promesse avec des donnees produits
        .then((produits) => {
            //création d'une boucle pour recuperer chaque produit un par un
            produits.forEach((produit) => {
                //on appel la view createProduct pour afficher la page index et on lui passe chaque produit
                createProduct(produit)
            })
        })
        //la promesse n'a pas abouti
        .catch((error) => {
            //appel a la fonction "errorServer"
            errorServer();
        })
}
listeTeddies();


