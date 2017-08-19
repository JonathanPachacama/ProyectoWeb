declare var module;
declare var sails;
declare var Hotel;

module.exports = {

  crearHotel:(req,res)=>{
    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);

    let nuevoHotel = {

      nombreHotel:parametros.nombreHotel,
      direccionHotel:parametros.direccionHotel,
      precioEstadia:parametros.precioEstadia,
      imagenHotel:parametros.imagenHotel,
    };

    Hotel.create(nuevoHotel)
      .exec(
        (error,HotelCreado)=>{
          if(error){
            return res.serverError(error);
          }else{

            return res.redirect("/ecuafestDetalleHoteles");
          }
        }
      )
  },

  listarHotel:(req,res)=> {

    let parametros = req.allParams();

    sails.log.info("Parametros", parametros);
    Hotel
      .find()
      .exec((err, Hoteles) => {
        if (err) return res.negotiate(err);
        else {
          return res.view('Festividad/EcuafestDetalleHoteles', {
            Hoteles: Hoteles
          });
        }

      });
  },


  eliminarHotel: function (req, res) {
    var params = req.allParams();
    sails.log.info("Parametros", params);
    if (req.method == "POST" && params.id) {
      Hotel.destroy({
        id: params.id
      }).exec(function (err, hotelBorrado) {
        if (err)
          return res.serverError(err);
        return res.redirect("/ecuafestDetalleHoteles");
      });
    }
    else {
      return res.badRequest();
    }
  },

  editarHotel:(req,res)=>{

    let parametros = req.allParams();

    if(parametros.nombreHotel&&
      parametros.direccionHotel&&
      parametros.precioEstadia&&
      parametros.id){

      Hotel.update({
        id:parametros.id
      },{
        nombreHotel:parametros.nombreHotel,
        direccionHotel:parametros.direccionHotel,
        precioEstadia:parametros.precioEstadia
      })
        .exec((err,festividadEditado)=>{
          if(err) return res.serverError(err);
          if(festividadEditado){
            //Si encontro
            return res.redirect("/ecuafestDetalleHoteles")
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }




  }
}
