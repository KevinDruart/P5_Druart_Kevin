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

    //Si on a un nom, un prix et un orderId 
    if (ticketNameOrder && ticketPriceOrder && ticketOrderId !== null)  {
        //on verifie si la commande est vrai avant d'appeler la view
        validationOrder(ticketOrderId, ticketNameOrder, ticketPriceOrder);
    }
    //sinon on appel la view errorOrder
    else {
        errorOrder();
    }
}

//Verification de commande
const validationOrder = (ticketOrderId, ticketNameOrder, ticketPriceOrder) => {
    let validUrl = sessionStorage.getItem("validOrder");
    console.log(validUrl);
    //Si validOrder différent de true alors appel de la view errorOrder
    if (validUrl !== true) {
        errorOrder();
    }
    //sinon appel de la view de la page confirm
    else {
        //on appelle la view
        affichageConfirm(ticketOrderId, ticketNameOrder, ticketPriceOrder);
        //on vide le sessionStorage 
        sessionStorage.clear();
    }
}
//Appel de la page qui passe par une verification
affichageConfirmPage();
