'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var flex = function flex() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$direction = options.direction,
      direction = _options$direction === undefined ? 'row' : _options$direction;

  return {
    display: 'flex',
    flexDirection: direction
  };
};

exports.default = flex;