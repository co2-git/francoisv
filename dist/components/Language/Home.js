'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

var _Section = require('../Base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _languages = require('../../../data/languages.json');

var _languages2 = _interopRequireDefault(_languages);

var _Icon = require('../Base/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _flex = require('../../styles/mixins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _border = require('../../styles/mixins/border');

var _border2 = _interopRequireDefault(_border);

var _fonts = require('../../styles/vars/fonts');

var fonts = _interopRequireWildcard(_fonts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx(_Icon2.default, {
  name: 'star'
});

var _ref3 = _jsx(_Icon2.default, {
  name: 'star-empty'
});

var Language = function (_PureComponent) {
  _inherits(Language, _PureComponent);

  function Language() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Language);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Language.__proto__ || Object.getPrototypeOf(Language)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _jsx(_Section2.default, {
        style: styles.container
      }, void 0, _jsx('h1', {
        style: styles.title
      }, void 0, 'Knowledge'), (0, _map2.default)(_languages2.default, function (language) {
        return _jsx(_Section2.default, {
          style: styles.language
        }, void 0, _jsx('div', {
          style: styles.languageName
        }, void 0, language.name), _jsx('div', {
          style: styles.stars
        }, void 0, (0, _map2.default)((0, _range2.default)(0, language.level), function (number) {
          return _ref2;
        }), (0, _map2.default)((0, _range2.default)(0, 5 - language.level), function (number) {
          return _ref3;
        })), _jsx('div', {}, void 0, language.years, ' years of experience'));
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Language;
}(_react.PureComponent);

exports.default = Language;


var styles = {
  container: {
    margin: 6
  },
  language: _extends({}, (0, _flex2.default)({ direction: 'row', alignY: 'center' }), (0, _border2.default)({ width: 1 }), {
    padding: 10,
    margin: '4px 0',
    borderRadius: 3
  }),
  languageName: {
    fontWeight: 'bold',
    fontFamily: fonts.family.title,
    fontSize: fonts.size.pageTitle
  },
  title: {
    fontWeight: 'bold',
    fontFamily: fonts.family.title,
    fontSize: 24
  },
  stars: {
    padding: 8
  }
};