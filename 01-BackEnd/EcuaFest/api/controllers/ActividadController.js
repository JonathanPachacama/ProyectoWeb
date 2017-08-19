module.exports = {
    crearActividad: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevaActividad = {
            nombreActivity: parametros.nombreActivity,
            direccionActivity: parametros.direccionActivity,
            descripcionActivity: parametros.descripcionActivity,
            fechaActivity: parametros.fechaActivity,
            imagenActivity: parametros.imagenActivity,
            idFest: parametros.idFest
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
    },
    editarActividades: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombreActivity &&
            parametros.direccionActivity &&
            parametros.descripcionActivity &&
            parametros.id) {
            Actividad.update({
                id: parametros.id
            }, {
                nombreActivity: parametros.nombreActivity,
                direccionActivity: parametros.direccionActivity,
                descripcionActivity: parametros.descripcionActivity
            })
                .exec(function (err, actividadEditado) {
                if (err)
                    return res.serverError(err);
                if (actividadEditado) {
                    //Si encontro
                    return res.redirect("/ecuafestDetalleActividades");
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    }
};
