module.exports = {
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({ correo: parametros.correo })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        return res.ok('Estas logeado, aqui iria las paginas del administrador');
                    }
                    else {
                        return res.serverError("Password Incorrecta");
                    }
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.view('Oculto/loginAdm');
        }
    },
    editarFestividad: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Festividad.findOne({
                id: parametros.id
            })
                .exec(function (err, festividadesEncontrado) {
                if (err)
                    return res.serverError(err);
                if (festividadesEncontrado) {
                    //Si encontro
                    return res.view('Festividad/ActualizarFestividad', {
                        festividades: festividadesEncontrado
                    });
                }
                else {
                    //No encontro
                    return res.redirect('/crearUsuario');
                }
            });
        }
        else {
            return res.redirect('/crearUsuario');
        }
    }
};
