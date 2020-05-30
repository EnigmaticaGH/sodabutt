const { readFileSync } = require('fs');

let file = readFileSync('./assets/monsters.json', 'utf8');
module.exports = file;