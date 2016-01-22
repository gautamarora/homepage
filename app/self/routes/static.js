var path = require('path');

module.exports = function(app, express) {
  var normalizedPath = path.join(__dirname, '..', '..', '..', 'static');
  app.use('/homepage/static', express.static(normalizedPath));
};