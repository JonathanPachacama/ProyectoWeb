/**
 * Actividad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreActivity:{
      type:'string'
    },
    direccionActivity:{
      type:'string'
    },
    descripcionActivity:{
      type:'string'
    },
    fechaActivity:{
      type:'date'
    },
    imagenActivity:{
      type:'string'
    },
    idFest:{
      model:"Festividad"//Modelo a Relacionar (Papa)
    }

  }
};

