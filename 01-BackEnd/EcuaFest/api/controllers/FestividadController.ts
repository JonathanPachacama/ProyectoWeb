/**
 * Created by DELL_PC on 11/8/2017.
 */
declare var module;
declare var sails;
declare var Festividad;

module.exports = {
  crearFestividad:(req,res)=>{
    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);

    let nuevaFestividad = {
      nombreFest:parametros.nombreFest,
      lugarFest:parametros.lugarFest,
      mesFest:parametros.mesFest,
      imagenFest:parametros.imagenFest
    };
    Festividad.create(nuevaFestividad)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error);
          }else{

            return res.redirect("/listaFestividad");
          }
        }
      )



  },


}
