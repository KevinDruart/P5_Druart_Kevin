
const affichageConfirmPage = () => {
const urlParams = new URLSearchParams(window.location.search);
const ticketOrderId = urlParams.get('id');
const ticketNameOrder = urlParams.get('name');
const ticketPriceOrder = urlParams.get('prix');

console.log("numero de commande" + " " + ticketOrderId);
console.log("Pour Mr ou Mme" + " " + ticketNameOrder);
console.log("Montant totale:" + " " + ticketPriceOrder);
affichageConfirm(ticketOrderId,ticketNameOrder,ticketPriceOrder);
}

affichageConfirmPage();