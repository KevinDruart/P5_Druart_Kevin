
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

    //verification recuperation des donnees
    console.log("numero de commande" + " " + ticketOrderId);
    console.log("Pour Mr ou Mme" + " " + ticketNameOrder);
    console.log("Montant totale:" + " " + ticketPriceOrder);
    //appel de la view confirm
    if ( ticketNameOrder && ticketPriceOrder !== null) {
        affichageConfirm(ticketOrderId, ticketNameOrder, ticketPriceOrder);
    }

}

affichageConfirmPage();