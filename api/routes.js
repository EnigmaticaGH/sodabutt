'use strict';

const controller = require('./controller');

module.exports = function(app) {
  app.route('/api/monsters')
    .get(controller.monsters);
};