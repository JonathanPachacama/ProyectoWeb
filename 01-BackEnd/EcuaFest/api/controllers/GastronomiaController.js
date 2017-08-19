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
    },
    listarGastronomia: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Gastronomia
            .find()
            .exec(function (err, gastronomia) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('Festividad/EcuaFestDetalleGastronomia', {
                    gastronomia: gastronomia
                });
            }
        });
    },
    eliminarGastronomia: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Gastronomia.destroy({
                id: params.id
            }).exec(function (err, GastronomiaBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/ecuafestDetalleGastronomia");
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarGastronomia: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombreFood &&
            parametros.descripcionFood &&
            parametros.imagenFood &&
            parametros.id) {
            Gastronomia.update({
                id: parametros.id
            }, {
                nombreFood: parametros.nombreFood,
                descripcionFood: parametros.descripcionFood,
                imagenFood: parametros.imagenFood
            })
                .exec(function (err, gastronomiaEditado) {
                if (err)
                    return res.serverError(err);
                if (gastronomiaEditado) {
                    //Si encontro
                    return res.redirect("/ecuafestDetalleGastronomia");
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
