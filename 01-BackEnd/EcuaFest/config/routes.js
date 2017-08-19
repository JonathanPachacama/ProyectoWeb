/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /': {
    view: 'homepage'
  },
  'get /listaFestividad': 'FestividadController.listarFestividad',

  'get /ecuafestDetalleActividades': 'ActividadController.listarActividad',


  '/ecuafestDetalleGastronomia': 'Gastronomia.listarGastronomia',
  '/ecuafestDetalleHoteles': 'Hotel.listarHotel',

  '/ecuafestDetalle': {
    view: 'Festividad/EcuafestDetalleLayout'
  },

  'get /oculto':
    'VistaController.login',

  '/crearFestividad': {
    view: 'Festividad/CrearFestividad'
  },
  'get /crearFestividad':
    'FestividadController.crearFestividad',

  '/crearActividad': {
    view: 'Festividad/Actividades/CrearActividad'
  },
  'get /crearActividad':
    'ActividadController.crearActividad',

  '/crearGastronomia': {
    view: 'Festividad/Gastronomia/CrearGastronomia'
  },
  'get /crearGastronomia':
    'GastronomiaController.crearGastronomia',
  'get /editarFestividades':
    'VistaController.editarFestividad',
  'get /editarGastronomia':
    'VistaController.editarGastronomia',

  '/crearHotel': {
    view: 'Festividad/Hoteles/CrearHoteles'
  },
  'get /crearHotel':
    'HotelController.crearHotel',
  'get /editarHotel':
    'VistaController.editarHotel'
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
