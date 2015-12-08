'use strict';
let cli = require('heroku-cli-util');
var api = require('request').defaults({
  json: true
});

module.exports = {
  topic: 'chartbeat',
  command: 'active',
  description: 'tells you how many people are currently on the site',
  help: 'help text for chartbeat:active',
  needsApp: true,
  needsAuth: true,
  run: cli.command(function(context, heroku) {
    return heroku.apps(context.app).info()
    .then(function(app) {
      return heroku.apps(context.app).configVars().info();
    })
    .then(function(config) {
      api.get({
        uri: `https://api.chartbeat.com/live/quickstats/v3/?apikey=${config['CHARTBEAT_API_KEY']}&host=${config['DOMAIN']}`
      }, function (err, _, response) {
        if (err) { throw err; }
        return console.error(response['people']);
      });
    })
  })
};
