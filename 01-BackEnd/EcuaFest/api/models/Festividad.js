/**
 * Festividad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreFest:{
      type:'string'
    },
    lugarFest:{
      type:'string'
    },
    mesFest:{
      type:'string'
    },
    imagenFest:{
      type:'string'
    },
    listActivityFest:{
      collection: 'Actividad', //(hijo)
      via: 'idFest' // FOREIGN KEY
    },
    listFoodFest:{
      collection: 'Gastronomia',
      via: 'idFest'
    },
    listHotelsFest:{
      collection: 'Hotel',
      via: 'idFest'
    }
  }
};

