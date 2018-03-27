"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForkMeOnGitHub = function ForkMeOnGitHub() {
  return _jsx("a", {
    href: "https://github.com/co2-git/francoisv"
  }, void 0, _jsx("img", {
    style: styles.image,
    src: "https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png",
    alt: "Fork me on GitHub"
  }));
};

exports.default = ForkMeOnGitHub;


var styles = {
  image: {
    border: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
};