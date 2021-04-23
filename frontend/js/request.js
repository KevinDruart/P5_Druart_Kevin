// URL API
const url = "http://localhost:3000/api/teddies";
const urlOrder = "http://localhost:3000/api/teddies/order";

/*fonction création d'éléments*/
function create(type, Qualified, nomType){
    let nomVariable = document.createElement(type);
    nomVariable.setAttribute(Qualified, nomType);
    return nomVariable;
}
