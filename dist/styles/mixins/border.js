'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var border = function border(options) {
  var _options$color = options.color,
      color = _options$color === undefined ? 'black' : _options$color,
      _options$style = options.style,
      style = _options$style === undefined ? 'solid' : _options$style,
      _options$width = options.width,
      width = _options$width === undefined ? 1 : _options$width;

  return {
    borderColor: color,
    borderStyle: style,
    borderWidth: width
  };
};

exports.default = border;