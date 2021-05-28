/*---------------------------Liste Produits INDEX--------------------------*/

const listeTeddies = () => {
    const teddies = getRequest("http://localhost:3000/api/teddies");
    teddies
        .then((produits) => {
            produits.forEach((produit) => {
                createProduct(produit)
                console.log(produit._id);
            })
        })
        .catch((error) => {
            console.log(error);
            //appel a la fonction "errorServer"
            errorServer();
        })
}
listeTeddies();


