/*on recupere l'url actuel et on y extrait l'Id du produit*/
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

console.log(productId);/*ok*/

let selectedTeddie;

const selectionProduit = () => {
  fetch(url + "/" + productId).then(function(response){
      response.json().then(function(data){
          selectedTeddie = data;

          /*On vient cibler la balise div ayant pour id Descriptionproduit*/
          let descriptionProduit = document.getElementById("descriptionproduit");

          /*On crée l'affichage de la description du produit séléctionné par l'utilisateur*/
          let descriptionContainer = create("div", "class", "Blockdescription");
          let descriptionProduitB1 = create("div", "class", "B1description");
          let descriptionProduitB2 = create("div", "class", "B2description");
          let descriptionProduitNom = create("h2", "class", "Nomdescription");
          let descriptionProduitPrix = create("p", "class", "Prixdescription");
          let descriptionProduitImage = create("img", "src", data.imageUrl);
          let descriptionProduitDescription = create("p", "class", "Descriptionproduit");
          
          /*Attributs suplémentaires*/
          descriptionProduitImage.setAttribute("alt", "Photographie de l'appareil.");
          descriptionProduitImage.setAttribute("class", "Imagedescription");

          /*Hiérarchisation des élements crées*/
          descriptionProduit.appendChild(descriptionContainer);
          descriptionContainer.appendChild(descriptionProduitB1);
          descriptionContainer.appendChild(descriptionProduitB2);
          descriptionProduitB1.appendChild(descriptionProduitImage);
          descriptionProduitB2.appendChild(descriptionProduitNom);
          descriptionProduitB2.appendChild(descriptionProduitPrix);
          descriptionProduitB2.appendChild(descriptionProduitDescription);

          /*Attribution des données aux élements créees*/
          descriptionProduitNom.textContent = data.name;
          descriptionProduitPrix.textContent = data.price / 100 + " " + "euros";
          descriptionProduitDescription.textContent = data.description;

      })
  })
}
selectionProduit();




