var core = require('@gautamarora/core');

module.exports.init = function (app, express) {
  console.log('homepage self init');
  core.registerRoutes(__dirname, 'routes', app, express); //express routes
  core.registerPartials(__dirname, 'partials', 'profile'); //handlebars partials
};