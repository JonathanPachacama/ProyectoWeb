
declare var module;
declare var sails;
declare var Usuario;
declare var Gastronomia;
declare var Festividad;
declare var Actividad;
declare var Hotel;

module.exports = {

  login: (req, res) => {


    var parametros = req.allParams();
    if(parametros.correo&&parametros.password){
      Usuario.findOne({correo:parametros.correo})
        .exec((err, usuarioEncontrado) => {
          if (err)return res.negotiate(err,);
          if (!usuarioEncontrado) {
            return res.serverError('El usuario no existe')
          }
          else{

            if(parametros.password==usuarioEncontrado.password){
              console.log("Estas logeado");
              return res.ok('Estas logeado, aqui iria las paginas del administrador');
            }else{
              return res.serverError("Password Incorrecta")
            }

          }

        });
    }
    else{
      sails.log('Usuario eliminado');
      return res.view('Oculto/loginAdm');

    }
  },
  editarFestividad:(req,res)=>{

    let parametros = req.allParams();
    if(parametros.id){

      Festividad.findOne({
        id:parametros.id
      })
        .exec((err,festividadesEncontrado)=>{
          if(err) return res.serverError(err);

          if(festividadesEncontrado){
            //Si encontro

            return res.view('Festividad/ActualizarFestividad',{
              festividades:festividadesEncontrado
            })

          }else{
            //No encontro
            return res.redirect('/crearUsuario')
          }
        });

    }else{
      return res.redirect('/crearUsuario')
    }




  },
  editarGastronomia:(req,res)=>{

    let parametros = req.allParams();
    if(parametros.id){

      Gastronomia.findOne({
        id:parametros.id
      })
        .exec((err,gastronomiaEncontrado)=>{
          if(err) return res.serverError(err);

          if(gastronomiaEncontrado){
            //Si encontro

            return res.view('Festividad/Gastronomia/ActualizarGastronoma',{
              gastronomia:gastronomiaEncontrado
            })

          }else{
            //No encontro
            return res.redirect('/')
          }
        });

    }else{
      return res.redirect('/')
    }




  },
  editarActividades:(req,res)=>{

    let parametros = req.allParams();
    if(parametros.id){

      Actividad.findOne({
        id:parametros.id
      })
        .exec((err,actividadEncontrado)=>{
          if(err) return res.serverError(err);

          if(actividadEncontrado){
            //Si encontro

            return res.view('Festividad/Actividades/ActualizarActividad',{
              Actividades:actividadEncontrado
            })

          }else{
            //No encontro
            return res.redirect('/')
          }
        });

    }else{
      return res.redirect('/')
    }




  },
  editarHotel:(req,res)=>{

    let parametros = req.allParams();
    if(parametros.id){

      Hotel.findOne({
        id:parametros.id
      })
        .exec((err,hotelEncontrado)=>{
          if(err) return res.serverError(err);

          if(hotelEncontrado){
            //Si encontro

            return res.view('Festividad/Hoteles/ActualizarHotel',{
              Hoteles:hotelEncontrado
            })

          }else{
            //No encontro
            return res.redirect('/')
          }
        });

    }else{
      return res.redirect('/')
    }




  }
}
