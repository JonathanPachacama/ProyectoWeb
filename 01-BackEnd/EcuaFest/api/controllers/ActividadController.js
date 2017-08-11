module.exports = {
    crearActividad: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevaActividad = {
            nombreActivity: parametros.nombreActivity,
            direccionActivity: parametros.direccionActivity,
            descripcionActivity: parametros.descripcionActivity,
            fechaActivity: parametros.fechaActivity,
            imagenActivity: parametros.imagenActivity
        };
        Actividad.create(nuevaActividad)
            .exec(function (error, ActividadCreada) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/ecuafestDetalleActividades");
            }
        });
    }
};
