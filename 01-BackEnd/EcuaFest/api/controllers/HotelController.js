module.exports = {
    crearHotel: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevoHotel = {
            nombreHotel: parametros.nombreHotel,
            direccionHotel: parametros.direccionHotel,
            precioEstadia: parametros.precioEstadia,
            imagenHotel: parametros.imagenHotel,
        };
        Hotel.create(nuevoHotel)
            .exec(function (error, HotelCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/ecuafestDetalleHoteles");
            }
        });
    },
    listarHotel: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Hotel
            .find()
            .exec(function (err, Hoteles) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('Festividad/EcuaFestDetalleHoteles', {
                    Hoteles: Hoteles
                });
            }
        });
    },
    eliminarHotel: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Hotel.destroy({
                id: params.id
            }).exec(function (err, hotelBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/ecuafestDetalleHoteles");
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarHoteles: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombreHotel &&
            parametros.direccionHotel &&
            parametros.precioEstadia &&
            parametros.id) {
            Hotel.update({
                id: parametros.id
            }, {
                nombreHotel: parametros.nombreHotel,
                direccionHotel: parametros.direccionHotel,
                precioEstadia: parametros.precioEstadia
            })
                .exec(function (err, festividadEditado) {
                if (err)
                    return res.serverError(err);
                if (festividadEditado) {
                    //Si encontro
                    return res.redirect("/ecuafestDetalleHoteles");
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
