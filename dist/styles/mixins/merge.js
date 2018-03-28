'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compact = require('lodash/compact');

var _compact2 = _interopRequireDefault(_compact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var merge = function merge() {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var transformed = {};
  styles.forEach(function (style) {
    Object.assign(transformed, style);
  });
  return transformed;
};

exports.default = merge;