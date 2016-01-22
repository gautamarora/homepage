var pkg = require('../../../package');
var request = require('request');

module.exports = function(app) {
  //get package info
  app.get('/info/homepage', function(req, res) {
    res.send({
      name: pkg.name,
      version: pkg.version,
      process: {
        title: process.title,
        pid: process.pid,
        version: process.version,
        arch: process.arch,
        platform: process.platform,
        memory: process.memoryUsage()
      },
      env: {
        NODE_ENV: process.env.NODE_ENV
      }
    });
  });
  
  app.get('/', function getData(req, res) {
    res.data = {};
    var url = req.protocol + '://' + req.get('host') + '/posts';
    req.pipe(request(url)).pipe(res);
  });
};