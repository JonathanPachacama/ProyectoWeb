/**
 * Hotel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreHotel:{
      type:'string'
    },
    direccionHotel:{
      type:'string'
    },
    precioEstadia:{
      type:'string'
    },
    imagenHotel:{
      type:'string'
    },
    idFest:{
      model:"Festividad"//Modelo a Relacionar (Papa)
    }
  }
};

