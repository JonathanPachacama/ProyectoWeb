module.exports = {
    crearGastronomia: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevaGastronomia = {
            nombreFood: parametros.nombreFood,
            descripcionFood: parametros.descripcionFood,
            imagenFood: parametros.imagenFood,
        };
        Gastronomia.create(nuevaGastronomia)
            .exec(function (error, GastronomiaCreada) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/ecuafestDetalleGastronomia");
            }
        });
    }
};
