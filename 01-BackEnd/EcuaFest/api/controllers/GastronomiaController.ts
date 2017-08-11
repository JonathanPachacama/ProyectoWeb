declare var module;
declare var sails;
declare var Gastronomia;

module.exports = {

  crearGastronomia:(req,res)=>{
    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);

    let nuevaGastronomia = {

      nombreFood:parametros.nombreFood,
      descripcionFood:parametros.descripcionFood,
      imagenFood:parametros.imagenFood,

    };

    Gastronomia.create(nuevaGastronomia)
      .exec(
        (error,GastronomiaCreada)=>{
          if(error){
            return res.serverError(error);
          }else{

            return res.redirect("/ecuafestDetalleGastronomia");
          }
        }
      )
  }
}
