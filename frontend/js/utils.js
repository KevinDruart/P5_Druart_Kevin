/*-------------Transformation des TARIFS au format €uro--------------------*/

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });
