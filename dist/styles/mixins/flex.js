'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var flex = function flex() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$direction = options.direction,
      direction = _options$direction === undefined ? 'row' : _options$direction;

  var justifyContent = 'unset';
  var alignItems = 'unset';
  if (direction === 'row') {
    if (options.alignX === 'between') {
      justifyContent = 'space-between';
    }
    if (options.alignY === 'center') {
      alignItems = 'center';
    }
  }
  return {
    alignItems: alignItems,
    display: 'flex',
    flexDirection: direction,
    justifyContent: justifyContent
  };
};

exports.default = flex;