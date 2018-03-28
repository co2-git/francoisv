'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('../Base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _flex = require('../../styles/mixins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _ForkMeOnGitHub = require('./ForkMeOnGitHub');

var _ForkMeOnGitHub2 = _interopRequireDefault(_ForkMeOnGitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('img', {
  alt: 'francoisv',
  src: 'https://avatars1.githubusercontent.com/u/1662766?s=40&v=4'
});

var TopBar = function TopBar() {
  return _jsx(_Section2.default, {
    style: styles.container
  }, void 0, _ref, _jsx(_ForkMeOnGitHub2.default, {
    style: { flexGrow: 2 }
  }));
};

exports.default = TopBar;


var styles = {
  container: _extends({}, (0, _flex2.default)({}))
};