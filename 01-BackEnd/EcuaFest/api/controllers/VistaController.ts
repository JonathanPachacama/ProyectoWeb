
declare var module;
declare var sails;
declare var Usuario;

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

  listarFestividad:(req,res)=> {

    let parametros = req.allParams();

    sails.log.info("Parametros", parametros);
    Festividad
      .find()
      .exec((err, festividades) => {
        if (err) return res.negotiate(err);
        else {
          return res.view('Festividad/ListaFestividad', {
            festividades: festividades
          });
        }

      });
  },
}
