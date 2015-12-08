'use strict';
exports.topic = {
  name: 'chartbeat',
  description: 'simple chartbeat commands'
};

exports.commands = [
  require('./commands/chartbeat.js')
];
