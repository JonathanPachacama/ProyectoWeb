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
};
