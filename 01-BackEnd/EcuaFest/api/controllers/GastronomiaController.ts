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
  },
  listarGastronomia:(req,res)=> {

    let parametros = req.allParams();

    sails.log.info("Parametros", parametros);
    Gastronomia
      .find()
      .exec((err, gastronomia) => {
        if (err) return res.negotiate(err);
        else {
          return res.view('Festividad/EcuaFestDetalleGastronomia', {
            gastronomia: gastronomia
          });
        }

      });
  },
  eliminarGastronomia: function (req, res) {
    var params = req.allParams();
    sails.log.info("Parametros", params);
    if (req.method == "POST" && params.id) {
      Gastronomia.destroy({
        id: params.id
      }).exec(function (err, GastronomiaBorrado) {
        if (err)
          return res.serverError(err);
        return res.redirect("/ecuafestDetalleGastronomia");
      });
    }
    else {
      return res.badRequest();
    }
  },
  editarGastronomia:(req,res)=>{

    let parametros = req.allParams();

    if(parametros.nombreFood&&
      parametros.descripcionFood&&
      parametros.imagenFood&&
      parametros.id){

      Gastronomia.update({
        id:parametros.id
      },{
        nombreFood:parametros.nombreFood,
        descripcionFood:parametros.descripcionFood,
        imagenFood:parametros.imagenFood
      })
        .exec((err,gastronomiaEditado)=>{
          if(err) return res.serverError(err);
          if(gastronomiaEditado){
            //Si encontro
            return res.redirect("/ecuafestDetalleGastronomia")
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }

  }
};
