/*LISTE INDEX*/
const listeTeddies = () => {
    const teddies = getRequest(url);
    teddies.then((produits) => {
        produits.forEach((produit) => {
            createProduct(produit)
        })
    })

}
listeTeddies();

