'use strict';

const monsters = require('../service/monsters');

const controllers = {
  monsters: function(req, res) {
    res.send(monsters);
  }
};

module.exports = controllers;