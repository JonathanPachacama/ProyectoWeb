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
  },

  listarActividad:(req,res)=> {

    let parametros = req.allParams();

    sails.log.info("Parametros", parametros);
    Actividad
      .find()
      .exec((err, Actividades) => {
        if (err) return res.negotiate(err);
        else {
          return res.view('Festividad/ecuafestDetalleActividades', {
            Actividades: Actividades
          });
        }

      });
  },
  eliminarActividad: function (req, res) {
    var params = req.allParams();
    sails.log.info("Parametros", params);
    if (req.method == "POST" && params.id) {
      Actividad.destroy({
        id: params.id
      }).exec(function (err, ActividadBorrado) {
        if (err)
          return res.serverError(err);
        return res.redirect("/ecuafestDetalleActividades");
      });
    }
    else {
      return res.badRequest();
    }
  }
}
