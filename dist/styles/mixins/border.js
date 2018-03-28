'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var border = function border(options) {
  var _ref;

  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'border';
  var _options$color = options.color,
      color = _options$color === undefined ? 'black' : _options$color,
      _options$style = options.style,
      style = _options$style === undefined ? 'solid' : _options$style,
      _options$width = options.width,
      width = _options$width === undefined ? 1 : _options$width;

  return _ref = {}, _defineProperty(_ref, prefix + 'Color', color), _defineProperty(_ref, prefix + 'Style', style), _defineProperty(_ref, prefix + 'Width', width), _ref;
};

border.bottom = function (options) {
  return border(options, 'borderBottom');
};

exports.default = border;