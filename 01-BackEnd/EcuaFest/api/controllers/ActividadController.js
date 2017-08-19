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
    },
    listarActividad: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Actividad
            .find()
            .exec(function (err, Actividades) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('Festividad/ecuafestDetalleActividades', {
                    Actividades: Actividades
                });
            }
        });
    },
    eliminarActividad: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Actividad.destroy({
                id: params.id
            }).exec(function (err, ActividadBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/ecuafestDetalleActividades");
            });
        }
        else {
            return res.badRequest();
        }
    }
};
