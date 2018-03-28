'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ForkMeOnGitHub = require('./ForkMeOnGitHub');

var _ForkMeOnGitHub2 = _interopRequireDefault(_ForkMeOnGitHub);

var _TopBar = require('./TopBar');

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Section = require('../Base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _border = require('../../styles/mixins/border');

var _border2 = _interopRequireDefault(_border);

var _flex = require('../../styles/mixins/flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx(_TopBar2.default, {});

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _jsx(_Section2.default, {
        style: styles.container
      }, void 0, _ref2, _jsx('section', {
        style: styles.tabBar
      }, void 0), _jsx('section', {
        style: styles.main
      }, void 0));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_react.PureComponent);

exports.default = Home;


var styles = {
  container: {
    height: '100vh'
  },
  topBar: {
    boxSizing: 'border-box'
  },
  tabBar: {
    boxSizing: 'border-box'
  },
  main: {
    boxSizing: 'border-box',
    flexGrow: 2,
    overflow: 'auto'
  }
};