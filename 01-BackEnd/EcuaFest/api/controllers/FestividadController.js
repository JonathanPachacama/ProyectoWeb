module.exports = {
    crearFestividad: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevaFestividad = {
            nombreFest: parametros.nombreFest,
            lugarFest: parametros.lugarFest,
            mesFest: parametros.mesFest,
            imagenFest: parametros.imagenFest
        };
        Festividad.create(nuevaFestividad)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/listaFestividad");
            }
        });
    },
    listarFestividad: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Festividad
            .find()
            .exec(function (err, festividades) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('Festividad/ListaFestividad', {
                    festividades: festividades
                });
            }
        });
    },
    eliminarFestividad: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Festividad.destroy({
                id: params.id
            }).exec(function (err, festividadBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/listaFestividad");
            });
        }
        else {
            return res.badRequest();
        }
    },
    dirigiraActividad: function (req, res) {
        return res.view('Festividad/DetalleActividad');
    }
};
