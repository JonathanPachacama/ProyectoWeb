declare var module;
declare var sails;
declare var Actividad;

module.exports = {

  crearActividad:(req,res)=>{
    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);

    let nuevaActividad = {

      nombreActivity:parametros.nombreActivity,
      direccionActivity:parametros.direccionActivity,
      descripcionActivity:parametros.descripcionActivity,
      fechaActivity:parametros.fechaActivity,
      imagenActivity:parametros.imagenActivity
    };

    Actividad.create(nuevaActividad)
      .exec(
        (error,ActividadCreada)=>{
          if(error){
            return res.serverError(error);
          }else{

            return res.redirect("/ecuafestDetalleActividades");
          }
        }
      )
  }
}
