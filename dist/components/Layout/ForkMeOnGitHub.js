'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _merge = require('../../styles/mixins/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForkMeOnGitHub = function ForkMeOnGitHub(_ref) {
  var style = _ref.style;
  return _jsx('a', {
    href: 'https://github.com/co2-git/francoisv',
    style: (0, _merge2.default)(styles.ribbon, style)
  }, void 0, 'View source on GitHub');
};

exports.default = ForkMeOnGitHub;


var styles = {
  ribbon: {
    border: 0,
    backgroundColor: '#999',
    color: 'white',
    textDecoration: 'none',
    padding: 5
  }
};