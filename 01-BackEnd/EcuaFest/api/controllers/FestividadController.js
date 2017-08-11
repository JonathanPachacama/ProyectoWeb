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
                return res.redirect("/");
            }
        });
    }
};
