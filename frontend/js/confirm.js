//verification avant affichage de la page confirm
const affichageConfirmPage = () => {
    //recuperation url
    const urlParams = new URLSearchParams(window.location.search);
    //recuperation des donnees dans url 
    //order id
    const ticketOrderId = urlParams.get('id');
    //nom client
    const ticketNameOrder = urlParams.get('name');
    //prix totale
    const ticketPriceOrder = urlParams.get('prix');
    //la validation du numero orderId
    let validUrl = sessionStorage.getItem("validOrder");

    //Si on a un nom, un prix et un orderId (condition 1)
    if (ticketNameOrder && ticketPriceOrder && ticketOrderId !== null) {
        //vérification du numero orderId (condition 2)
        if (validUrl) {
            //on appelle la view de la page confirm
            affichageConfirm(ticketOrderId, ticketNameOrder, ticketPriceOrder);

            //commande faite, reinitialisation du sessionStorage qui contient la validation orderId
            sessionStorage.clear();
        }
        //si la condition 2 n'est pas bonne 
        else {
            //appel de la view errorOrder
            errorOrder();
        }
    }
    //si la condition 1 n'est pas bonne 
    else {
        //appel de la view errorOrder
        errorOrder();
    }
}

//Appel de la verification 
affichageConfirmPage();
