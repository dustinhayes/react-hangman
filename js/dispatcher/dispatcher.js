var EventEmitter = require('events').EventEmitter;

var dispatcher = Object.create(EventEmitter.prototype);

module.exports = dispatcher;
