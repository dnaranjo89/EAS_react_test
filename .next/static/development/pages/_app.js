(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./EasTheme.jsx":
/*!**********************!*\
  !*** ./EasTheme.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Example of theme creation
// https://github.com/mui-org/material-ui/issues/1915#issuecomment-310849153
// Default theme: https://material-ui.com/customization/default-theme/

var fontFamilySecondary = '"Fredoka One", -apple-system, BlinkMacSystemFont, "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica", "Arial", sans-serif';
var fontFamilyPrimary = '"Montserrat", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica", "Arial", sans-serif';
var baseTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  typography: {
    useNextVariants: true,
    fontFamily: fontFamilyPrimary
  },
  palette: {
    primary: {
      main: '#4caf50',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        'text-transform': 'inherit'
      }
    }
  }
});
var fontHeader = {
  color: baseTheme.palette.primary.main,
  fontFamily: fontFamilySecondary
};
var fontHeaderSecondary = {
  color: baseTheme.palette.text.primary,
  fontFamily: fontFamilyPrimary
};

var theme = _objectSpread({}, baseTheme, {
  typography: _objectSpread({}, baseTheme.typography, {
    h1: _objectSpread({}, baseTheme.typography.h1, {}, fontHeader, {
      fontSize: '2.125rem',
      lineHeight: '2.5rem'
    }),
    h2: _objectSpread({}, baseTheme.typography.h2, {}, fontHeader, {
      fontSize: '1.625rem',
      lineHeight: '1.875rem'
    }),
    h3: _objectSpread({}, baseTheme.typography.h3, {}, fontHeader, {
      fontSize: '1.125rem',
      lineHeight: '1.3125rem'
    }),
    h4: _objectSpread({}, baseTheme.typography.h4, {}, fontHeader),
    h5: _objectSpread({}, baseTheme.typography.h5, {}, fontHeaderSecondary),
    h6: _objectSpread({}, baseTheme.typography.h6, {}, fontHeaderSecondary),
    subtitle1: _objectSpread({}, baseTheme.typography.subtitle1, {
      color: baseTheme.palette.text.secondary,
      fontSize: '.875rem'
    }),
    body2: _objectSpread({}, baseTheme.typography.body2, {
      lineHeight: '1.5rem'
    })
  })
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./config sync recursive ^\\.\\/.*$":
/*!******************************!*\
  !*** ./config sync ^\.\/.*$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./config": "./config/config.js",
	"./config.js": "./config/config.js",
	"./development": "./config/development.js",
	"./development.js": "./config/development.js",
	"./local": "./config/local.js",
	"./local.js": "./config/local.js",
	"./production": "./config/production.js",
	"./production.js": "./config/production.js",
	"./test": "./config/test.js",
	"./test.js": "./config/test.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./config sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-disable no-console */

/* eslint-disable no-underscore-dangle */
var isServer = !( true && window.document);
var config = {};
/** ****************
 * Possible environments:
 * - production (deployed app, both in the prod and dev server)
 * - local (running locally)
 * - test (running battery tests)
 **************** */

var environment;

if (process.env.REACT_APP_ENV) {
  environment = process.env.REACT_APP_ENV;
} else if (true) {
  // NODE_ENV is set to development when running the react development server,
  // that way we don't need to set the REACT_APP_ENV env variable locally
  environment = 'local';
}

if (process.env.REACT_APP_COMMIT) {
  var deployedCommit = process.env.REACT_APP_COMMIT;
  console.log(deployedCommit);
}

if (environment) {
  try {
    if (['production', 'test'].indexOf(environment) < 0) {
      console.log("Loading application config for environment: ".concat(environment));
    }

    var baseConfig = {
      OGImagesFullDomain: 'https://echaloasuerte.com',
      environment: environment,
      isServer: isServer,
      sentryDsn: 'https://bebd8f08ca1e44b0bd2b2d5f352332f4@sentry.io/1247679'
    };

    var environmentConfig = __webpack_require__("./config sync recursive ^\\.\\/.*$")("./".concat(environment)).default; // eslint-disable-line 


    config = Object.assign({}, baseConfig, environmentConfig); // Disable logs and events when rendering in server

    config.googleAnalyticsEnabled = !isServer && config.googleAnalyticsEnabled;
    config.mixpanelEnabled = !isServer && config.mixpanelEnabled;
    config.sentryEnabled = !isServer && config.sentryEnabled;
  } catch (e) {
    console.error('No application config could be found.', e);
  }
} else {
  console.error('No environment specified. Please set the REACT_APP_ENV environment variable');
}

module.exports = config;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./config/development.js":
/*!*******************************!*\
  !*** ./config/development.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  indexPages: false,
  googleAnalyticsID: 'UA-62791775-3',
  mixpanelID: '5ad8df79215a2cd8df2c93a126dcaa23',
  mixpanelDebug: true,
  hotjarEnabled: true,
  googleAnalyticsEnabled: true,
  mixpanelEnabled: true,
  sentryEnabled: true,
  APIBasePath: '/api',
  facebookAppId: '239321593490183'
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./config/local.js":
/*!*************************!*\
  !*** ./config/local.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  indexPages: false,
  googleAnalyticsID: 'UA-62791775-3',
  mixpanelID: '5ad8df79215a2cd8df2c93a126dcaa23',
  mixpanelDebug: false,
  hotjarEnabled: true,
  googleAnalyticsEnabled: true,
  mixpanelEnabled: true,
  sentryEnabled: false,
  APIBasePath: 'http://127.0.0.1:8000/api',
  facebookAppId: '258744194669921'
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./config/production.js":
/*!******************************!*\
  !*** ./config/production.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  indexPages: true,
  googleAnalyticsID: 'UA-62791775-2',
  mixpanelID: '25bd9d326ae0254f31deec3ae4ce1dd0',
  mixpanelDebug: true,
  hotjarEnabled: true,
  googleAnalyticsEnabled: true,
  mixpanelEnabled: true,
  sentryEnabled: true,
  APIBasePath: '/api',
  facebookAppId: '239321593490183'
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./config/test.js":
/*!************************!*\
  !*** ./config/test.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  indexPages: false,
  googleAnalyticsID: 'UA-XXXXX-Y',
  mixpanelID: 'fake-mixpanel-id',
  mixpanelDebug: false,
  hotjarEnabled: false,
  googleAnalyticsEnabled: true,
  // We keep mixpanel disabled as it's causing problems with cypress.clock()
  // More details on https://github.com/etcaterva/eas-frontend/issues/122
  mixpanelEnabled: false,
  sentryEnabled: false,
  APIBasePath: 'http://unexisting-domain.com/api',
  facebookAppId: '00000000000'
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/davidnaranjo/eas/eas-frontend/lib/with-redux-store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (false) {} // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_10__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function getInitialState(appContext) {
  var userAgent = _config_config__WEBPACK_IMPORTED_MODULE_11___default.a.isServer ? appContext.ctx.req.headers['user-agent'] : window.navigator.userAgent;
  var deviceType = ua_parser_js__WEBPACK_IMPORTED_MODULE_9___default()(userAgent).device.type;
  console.log('userAgent', userAgent);
  console.log('deviceType', deviceType);
  var isMobile = deviceType === 'mobile';
  return {
    userRequest: {
      deviceType: deviceType,
      isMobile: isMobile
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AppWithRedux, _React$Component);

      function AppWithRedux() {
        Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AppWithRedux);

        return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWithRedux).apply(this, arguments));
      }

      Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppWithRedux, [{
        key: "render",
        value: function render() {
          var initialReduxState = this.props.initialReduxState;
          return __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props, {
            store: getOrCreateStore(initialReduxState),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }));
        }
      }], [{
        key: "getInitialProps",
        value: function getInitialProps(appContext) {
          var initialState, store;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Get or Create the store with `undefined` as initialState
                  // This allows you to set a custom default initialState
                  initialState = getInitialState(appContext);
                  store = getOrCreateStore(initialState); // Provide the store to getInitialProps of pages

                  appContext.ctx.store = store;
                  _context.t0 = _objectSpread;
                  _context.t1 = {};

                  if (!App.getInitialProps) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 8;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(App.getInitialProps(appContext));

                case 8:
                  _context.t2 = _context.sent;
                  _context.next = 12;
                  break;

                case 11:
                  _context.t2 = {};

                case 12:
                  _context.t3 = _context.t2;
                  _context.t4 = {
                    initialReduxState: store.getState()
                  };
                  return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t3, _context.t4));

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          });
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
  );
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");





var useStyles = Object(_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: 'bolder'
      },
      body: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        margin: 0,
        // Remove the margin in all browsers.
        color: theme.palette.text.primary
      }, theme.typography.body2, {
        backgroundColor: theme.palette.background.default,
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white
        },
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
}, {
  name: 'MuiCssBaseline'
});
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children;
  useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children);
}

 true ? CssBaseline.propTypes = {
  /**
   * You can wrap a node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
} : undefined;

if (true) {
  // eslint-disable-next-line
  CssBaseline['propTypes' + ''] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["exactProp"])(CssBaseline.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (CssBaseline);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CssBaseline__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return decomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return recomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/*! exports provided: keys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBreakpoints; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMixins; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, breakpoints.up('sm'), Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = Object(_createPalette__WEBPACK_IMPORTED_MODULE_5__["default"])(paletteInput);
  var breakpoints = Object(_createBreakpoints__WEBPACK_IMPORTED_MODULE_3__["default"])(breakpointsInput);
  var spacing = Object(_createSpacing__WEBPACK_IMPORTED_MODULE_9__["default"])(spacingInput);
  var muiTheme = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: Object(_createMixins__WEBPACK_IMPORTED_MODULE_4__["default"])(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__["default"],
    typography: Object(_createTypography__WEBPACK_IMPORTED_MODULE_6__["default"])(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_8__["default"],
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__["default"],
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: the `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

/* harmony default export */ __webpack_exports__["default"] = (createMuiTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/*! exports provided: light, dark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPalette; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");









var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"][50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"][800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["lighten"])(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["darken"])(intent.main, tonalOffset * 1.5);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][700]
  } : _palette$error,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    if (!background) {
      throw new TypeError("Material-UI: missing background argument in getContrastText(".concat(background, ")."));
    }

    var contrastText = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["getContrastRatio"])(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (true) {
      if (!color.main) {
        throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "The color object needs to have a `main` property or a `".concat(mainShade, "` property.")].join('\n'));
      }
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  }

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: the palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"],
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"],
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: contrastThreshold,
    // Take a background color and return the color of the text to maximize the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSpacing; });
var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/design/layout/understanding-layout.html#pixel-density


  var transform;

  if (typeof spacingInput === 'function') {
    transform = spacingInput;
  } else {
    if (true) {
      if (typeof spacingInput !== 'number') {
        console.error(["Material-UI: the `theme.spacing` value (".concat(spacingInput, ") is invalid."), 'It should be a number or a function.'].join('\n'));
      }
    }

    transform = function transform(factor) {
      if (true) {
        if (typeof factor !== 'number') {
          console.error("Expected spacing argument to be a number, got ".concat(factor));
        }
      }

      return spacingInput * factor;
    };
  }

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (factor) {
      var output = transform(factor);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTypography; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, {}, casing, {}, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: round,
    // TODO To remove in v5?
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/*! exports provided: alignProperty, fontGrid, responsiveProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignProperty", function() { return alignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontGrid", function() { return fontGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveProperty", function() { return responsiveProperty; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");

var defaultTheme = Object(_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten, createMuiTheme, createStyles, makeStyles, responsiveFontSizes, styled, easing, duration, formatMs, isString, isNumber, useTheme, withStyles, withTheme, createGenerateClassName, jssPreset, ServerStyleSheets, StylesProvider, MuiThemeProvider, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["decomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["recomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getContrastRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getLuminance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["emphasize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["fade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["darken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["lighten"]; });

/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsiveFontSizes", function() { return _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _transitions__WEBPACK_IMPORTED_MODULE_6__["easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return _transitions__WEBPACK_IMPORTED_MODULE_6__["duration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMs", function() { return _transitions__WEBPACK_IMPORTED_MODULE_6__["formatMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _transitions__WEBPACK_IMPORTED_MODULE_6__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _transitions__WEBPACK_IMPORTED_MODULE_6__["isNumber"]; });

/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["createGenerateClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["jssPreset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["ServerStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["StylesProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiThemeProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"]; });













/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return responsiveFontSizes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var convert_css_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! convert-css-length */ "./node_modules/convert-css-length/dist/index.esm.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");




function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}

function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, themeInput);

  theme.typography = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = Object(convert_css_length__WEBPACK_IMPORTED_MODULE_1__["default"])(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error(["Material-UI: unsupported non-unitless line height with grid alignment.", 'Use unitless line heights instead.'].join('\n'));
    }

    if (!isUnitless(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["alignProperty"])({
          size: value,
          grid: Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["fontGrid"])({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {}, Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["responsiveProperty"])({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(Component);
  return function (style, options) {
    return componentCreator(style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, options));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/*! exports provided: easing, duration, formatMs, isString, isNumber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMs", function() { return formatMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
var formatMs = function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
};
var isString = function isString(value) {
  return typeof value === 'string';
};
var isNumber = function isNumber(value) {
  return !isNaN(parseFloat(value));
};
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["duration", "easing", "delay"]);

    if (true) {
      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]"));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


function useTheme() {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["useTheme"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"];
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"])({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");








var ServerStyleSheets =
/*#__PURE__*/
function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ServerStyleSheets);

    this.options = options;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_4__["SheetsRegistry"](); // A new class name generator

      var generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__["default"])();
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StylesProvider__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('style', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();

/* harmony default export */ __webpack_exports__["default"] = (ServerStyleSheets);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js ***!
  \*******************************************************************************/
/*! exports provided: sheetsManager, StylesContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return sheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return StylesContext; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jssPreset */ "./node_modules/@material-ui/styles/esm/jssPreset/index.js");







 // Default JSS instance.

var jss = Object(jss__WEBPACK_IMPORTED_MODULE_6__["create"])(Object(_jssPreset__WEBPACK_IMPORTED_MODULE_7__["default"])()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;

function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(StylesContext);

  var context = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (true) {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: you need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: you cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: you cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = Object(jss__WEBPACK_IMPORTED_MODULE_6__["create"])({
      plugins: Object(_jssPreset__WEBPACK_IMPORTED_MODULE_7__["default"])().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StylesContext.Provider, {
    value: context
  }, children);
}

 true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * JSS's instance.
   */
  jss: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  serverGenerateClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;

if (true) {
   true ? StylesProvider.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["exactProp"])(StylesProvider.propTypes) : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (StylesProvider);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/StylesProvider/index.js ***!
  \**********************************************************************/
/*! exports provided: default, sheetsManager, StylesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["StylesContext"]; });




/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme/ThemeContext */ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested */ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (true) {
      if (!mergedTheme) {
        console.error(['Material-UI: you should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerTheme, {}, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();

  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['Material-UI: you are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  var theme = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_6__["default"]] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: theme
  }, children);
}

 true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired
} : undefined;

if (true) {
   true ? ThemeProvider.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["exactProp"])(ThemeProvider.propTypes) : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ThemeProvider/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ __webpack_exports__["default"] = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGenerateClassName; });
/* harmony import */ var _ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ThemeProvider/nested */ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;
  return function (rule, styleSheet) {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[_ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__["default"]] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(ruleCounter);
    }

    if (false) {}

    var suffix = "".concat(rule.key, "-").concat(ruleCounter); // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createStyles/createStyles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createStyles/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createStyles/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _noopTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noopTheme */ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");





function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: the `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === _noopTheme__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: the `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getStylesCreator);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getStylesCreator/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};
/* harmony default export */ __webpack_exports__["default"] = (noopTheme);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/* harmony default export */ __webpack_exports__["default"] = (getThemeProps);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getThemeProps/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/index.js ***!
  \*******************************************************/
/*! exports provided: createGenerateClassName, createStyles, getThemeProps, jssPreset, makeStyles, mergeClasses, ServerStyleSheets, styled, StylesProvider, sheetsManager, StylesContext, ThemeProvider, useTheme, withStyles, withTheme, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemeProps", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/styles/esm/jssPreset/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeClasses", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/styles/esm/styled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["StylesContext"]; });

/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/styles/esm/ThemeProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/styles/esm/withTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["withThemeCreator"]; });

/** @license Material-UI v4.7.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */

/* Warning if there are several instances of @material-ui/styles */

if ( true && typeof window !== 'undefined') {
  _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] = _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] || 0;

  if (_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@material-ui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://material-ui.com/r/styles-instance-warning for more info.'].join('\n'));
  }

  _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] += 1;
}




























/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/jssPreset/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js");






 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [Object(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__["default"])(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : Object(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__["default"])()]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPreset);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js ***!
  \*************************************************************************/
/*! exports provided: increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mergeClasses */ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony import */ var _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiKeyStore */ "./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _indexCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indexCounter */ "./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js");
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../getStylesCreator */ "./node_modules/@material-ui/styles/esm/getStylesCreator/index.js");
/* harmony import */ var _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../getStylesCreator/noopTheme */ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");












function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_4__["default"])({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stylesCreator.options, {}, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = Object(jss__WEBPACK_IMPORTED_MODULE_3__["getDynamicStyles"])(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      link: true
    }, options));
    dynamicSheet.update(props).attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_4__["default"])({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_10__["default"] : _options$defaultTheme,
      stylesOptions2 = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = Object(_getStylesCreator__WEBPACK_IMPORTED_MODULE_9__["default"])(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: Object(_indexCounter__WEBPACK_IMPORTED_MODULE_8__["increment"])(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;

    var stylesOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_StylesProvider__WEBPACK_IMPORTED_MODULE_7__["StylesContext"]), {}, stylesOptions2);

    var instance = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    var shouldUpdate = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    return getClasses(instance.current, props.classes, Component);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (multiKeyStore);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/mergeClasses/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");



function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: the value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

/* harmony default export */ __webpack_exports__["default"] = (mergeClasses);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/styled/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/styled/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/styles/esm/styled/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _styled__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/styled/styled.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/styled/styled.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");









function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["name"]);

    if ( true && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FinalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        className: className
      }, spread), children);
    });
     true ? StyledComponent.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      /**
       * A render function or node.
       */
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

      /**
       * @ignore
       */
      className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

      /**
       * If `true`, the component will recycle it's children DOM element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, function (props) {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType
    }, propTypes) : undefined;

    if (true) {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ThemeContext.displayName = 'ThemeContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/useTheme/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/useTheme/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");


function useTheme() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withStyles/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withStyles/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withStyles/withStyles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getThemeProps */ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");








 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["defaultTheme", "withTheme", "name"]);

    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "innerRef"]);

      var classes = useStyles(props);
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])() || defaultTheme;

        if (name) {
          more = Object(_getThemeProps__WEBPACK_IMPORTED_MODULE_7__["default"])({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
     true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return null; // return new Error(
        //   'Material-UI: the `innerRef` prop is deprecated and will be removed in v5. ' +
        //     'Refs are now automatically forwarded to the inner component.',
        // );
      })
    } : undefined; // The wrapper receives only user supplied props, which could be a subset of
    // the actual props Component might receive due to merging with defaultProps.
    // So copying it here would give us the same result in the wrapper as well.

    WithStyles.defaultProps = Component.defaultProps;

    if (true) {
      WithStyles.displayName = "WithStyles(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }

    return WithStyles;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withTheme/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withTheme/index.js ***!
  \*****************************************************************/
/*! exports provided: default, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/styles/esm/withTheme/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"]; });




/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withTheme/withTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withTheme/withTheme.js ***!
  \*********************************************************************/
/*! exports provided: withThemeCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return withThemeCreator; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");







function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {
    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["innerRef"]);

      var theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });
     true ? WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return new Error('Material-UI: the `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
      })
    } : undefined;

    if (true) {
      WithTheme.displayName = "WithTheme(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/chainPropTypes.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/chainPropTypes.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainPropTypes; });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/deepmerge.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/deepmerge.js ***!
  \**********************************************************/
/*! exports provided: isObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepmerge; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function isObject(item) {
  return item && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(item) === 'object' && !Array.isArray(item);
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target) : target;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/elementAcceptingRef.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  var element = props[propName];
  var safePropName = propFullName || propName;

  if (element == null) {
    return null;
  }

  var warningHint;
  var elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

var elementAcceptingRef = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, acceptingRef);
elementAcceptingRef.isRequired = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element.isRequired, acceptingRef);
/* harmony default export */ __webpack_exports__["default"] = (elementAcceptingRef);

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  var warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["elementType"], elementTypeAcceptingRef));

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/exactProp.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/exactProp.js ***!
  \**********************************************************/
/*! exports provided: specialProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialProperty", function() { return specialProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exactProp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (false) {}

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, propTypes, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/getDisplayName.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/getDisplayName.js ***!
  \***************************************************************/
/*! exports provided: getFunctionName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDisplayName; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);

 // Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(Component) === 'object') {
    switch (Component.$$typeof) {
      case react_is__WEBPACK_IMPORTED_MODULE_1__["ForwardRef"]:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      default:
        return undefined;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/index.js ***!
  \******************************************************/
/*! exports provided: chainPropTypes, deepmerge, elementAcceptingRef, elementTypeAcceptingRef, exactProp, getDisplayName, ponyfillGlobal, refType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainPropTypes", function() { return _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepmerge */ "./node_modules/@material-ui/utils/esm/deepmerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepmerge", function() { return _deepmerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementAcceptingRef */ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAcceptingRef", function() { return _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementTypeAcceptingRef */ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementTypeAcceptingRef", function() { return _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exactProp */ "./node_modules/@material-ui/utils/esm/exactProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exactProp", function() { return _exactProp__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDisplayName */ "./node_modules/@material-ui/utils/esm/getDisplayName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return _getDisplayName__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ponyfillGlobal */ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _refType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refType */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refType", function() { return _refType__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/** @license Material-UI v4.7.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */









/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/ponyfillGlobal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
/* harmony default export */ __webpack_exports__["default"] = (typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')());

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/refType.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/refType.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var refType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]);
/* harmony default export */ __webpack_exports__["default"] = (refType);

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (!!mix.push) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/convert-css-length/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/convert-css-length/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var e=function(e){return parseFloat(e)};/* harmony default export */ __webpack_exports__["default"] = (function(r){return null==r&&(r=r),function(n,t,i,f){null==i&&(i=r),null==f&&(f=i);var l=String(n).match(/[\d.\-\+]*\s*(.*)/)[1]||"";if(l===t)return n;var u=e(n);if("px"!==l)if("em"===l)u=e(n)*e(i);else if("rem"===l)u=e(n)*e(r);else{if("ex"!==l)return n;u=e(n)*e(i)*2}var a=u;if("px"!==t)if("em"===t)a=u/e(f);else if("rem"===t)a=u/e(r);else{if("ex"!==t)return n;a=u/e(f)/2}return parseFloat(a.toFixed(5))+t}});
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/dist/css-vendor.esm.js ***!
  \********************************************************/
/*! exports provided: prefix, supportedKeyframes, supportedProperty, supportedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedKeyframes", function() { return supportedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedProperty", function() { return supportedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedValue", function() { return supportedValue; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"] && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    if (options[prop]) {
      return "" + value + options[prop];
    }

    if (units[prop]) {
      return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__["RuleList"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssGlobal);


/***/ }),

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : undefined;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      index: options.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssNested);


/***/ }),

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_0__["createRule"])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var prop in fnValues) {
          styleRule.prop(prop, fnValues[prop](data), options);
        }
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/dist/css-vendor.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedKeyframes"])(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedProperty"])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$$1 = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(supportedProp, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value));
      if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(prop, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/jss/dist/jss.esm.js":
/*!******************************************!*\
  !*** ./node_modules/jss/dist/jss.esm.js ***!
  \******************************************/
/*! exports provided: default, hasCSSTOMSupport, create, getDynamicStyles, toCssValue, createRule, SheetsRegistry, SheetsManager, RuleList, sheets, createGenerateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCSSTOMSupport", function() { return hasCSSTOMSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDynamicStyles", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssValue", function() { return toCssValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return SheetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsManager", function() { return SheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleList", function() { return RuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheets", function() { return sheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return createGenerateId; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown rule " + name) : undefined;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : undefined;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.key + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.key + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Bad keyframes name " + key) : undefined;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : undefined;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.key, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.key, this.style, options);
  };

  return FontFaceRule;
}();
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(key, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped
    }, ruleOptions); // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // For e.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
  }
  /**
   * Register a rule in `.map` and `.classes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.onUpdate(data, this.get(name), options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.onUpdate(data, this.index[index], options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins$$1 = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown hook \"" + name + "\".") : undefined;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : undefined;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : undefined;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : undefined;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Insertion point is not in the DOM.') : undefined;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] " + err.message) : undefined;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.0.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__["default"] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   */
  ;

  _proto.createRule = function createRule$$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins$$1[_key] = arguments[_key];
    }

    plugins$$1.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var index = create();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/mixpanel-browser/dist/mixpanel.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/mixpanel-browser/dist/mixpanel.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Config = {
    DEBUG: false,
    LIB_VERSION: '2.31.0'
};

// since es6 imports are static and we run unit tests from the console, window won't be defined when importing this file
var window$1;
if (typeof(window) === 'undefined') {
    var loc = {
        hostname: ''
    };
    window$1 = {
        navigator: { userAgent: '' },
        document: {
            location: loc,
            referrer: ''
        },
        screen: { width: 0, height: 0 },
        location: loc
    };
} else {
    window$1 = window;
}

/*
 * Saved references to long variable names, so that closure compiler can
 * minimize file size.
 */

var ArrayProto = Array.prototype;
var FuncProto = Function.prototype;
var ObjProto = Object.prototype;
var slice = ArrayProto.slice;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
var windowConsole = window$1.console;
var navigator$1 = window$1.navigator;
var document$1 = window$1.document;
var windowOpera = window$1.opera;
var screen = window$1.screen;
var userAgent = navigator$1.userAgent;
var nativeBind = FuncProto.bind;
var nativeForEach = ArrayProto.forEach;
var nativeIndexOf = ArrayProto.indexOf;
var nativeIsArray = Array.isArray;
var breaker = {};
var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;

var _ = {
    trim: function(str) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
};

// Console override
var console$1 = {
    /** @type {function(...*)} */
    log: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            try {
                windowConsole.log.apply(windowConsole, arguments);
            } catch (err) {
                _.each(arguments, function(arg) {
                    windowConsole.log(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */
    error: function() {
        if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = ['Mixpanel error:'].concat(_.toArray(arguments));
            try {
                windowConsole.error.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.error(arg);
                });
            }
        }
    },
    /** @type {function(...*)} */
    critical: function() {
        if (!_.isUndefined(windowConsole) && windowConsole) {
            var args = ['Mixpanel error:'].concat(_.toArray(arguments));
            try {
                windowConsole.error.apply(windowConsole, args);
            } catch (err) {
                _.each(args, function(arg) {
                    windowConsole.error(arg);
                });
            }
        }
    }
};


// UNDERSCORE
// Embed part of the Underscore Library
_.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func, slice.call(arguments, 1));
    }
    if (!_.isFunction(func)) {
        throw new TypeError();
    }
    args = slice.call(arguments, 2);
    bound = function() {
        if (!(this instanceof bound)) {
            return func.apply(context, args.concat(slice.call(arguments)));
        }
        var ctor = {};
        ctor.prototype = func.prototype;
        var self = new ctor();
        ctor.prototype = null;
        var result = func.apply(self, args.concat(slice.call(arguments)));
        if (Object(result) === result) {
            return result;
        }
        return self;
    };
    return bound;
};

_.bind_instance_methods = function(obj) {
    for (var func in obj) {
        if (typeof(obj[func]) === 'function') {
            obj[func] = _.bind(obj[func], obj);
        }
    }
};

/**
 * @param {*=} obj
 * @param {function(...*)=} iterator
 * @param {Object=} context
 */
_.each = function(obj, iterator, context) {
    if (obj === null || obj === undefined) {
        return;
    }
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
                return;
            }
        }
    } else {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                if (iterator.call(context, obj[key], key, obj) === breaker) {
                    return;
                }
            }
        }
    }
};

_.escapeHTML = function(s) {
    var escaped = s;
    if (escaped && _.isString(escaped)) {
        escaped = escaped
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
    return escaped;
};

_.extend = function(obj) {
    _.each(slice.call(arguments, 1), function(source) {
        for (var prop in source) {
            if (source[prop] !== void 0) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
};

_.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
};

// from a comment on http://dbj.org/dbj/?p=286
// fails on only one very rare and deliberate custom object:
// var bomb = { toString : undefined, valueOf: function(o) { return "function BOMBA!"; }};
_.isFunction = function(f) {
    try {
        return /^\s*\bfunction\b/.test(f);
    } catch (x) {
        return false;
    }
};

_.isArguments = function(obj) {
    return !!(obj && hasOwnProperty.call(obj, 'callee'));
};

_.toArray = function(iterable) {
    if (!iterable) {
        return [];
    }
    if (iterable.toArray) {
        return iterable.toArray();
    }
    if (_.isArray(iterable)) {
        return slice.call(iterable);
    }
    if (_.isArguments(iterable)) {
        return slice.call(iterable);
    }
    return _.values(iterable);
};

_.keys = function(obj) {
    var results = [];
    if (obj === null) {
        return results;
    }
    _.each(obj, function(value, key) {
        results[results.length] = key;
    });
    return results;
};

_.values = function(obj) {
    var results = [];
    if (obj === null) {
        return results;
    }
    _.each(obj, function(value) {
        results[results.length] = value;
    });
    return results;
};

_.identity = function(value) {
    return value;
};

_.include = function(obj, target) {
    var found = false;
    if (obj === null) {
        return found;
    }
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
        return obj.indexOf(target) != -1;
    }
    _.each(obj, function(value) {
        if (found || (found = (value === target))) {
            return breaker;
        }
    });
    return found;
};

_.includes = function(str, needle) {
    return str.indexOf(needle) !== -1;
};

// Underscore Addons
_.inherit = function(subclass, superclass) {
    subclass.prototype = new superclass();
    subclass.prototype.constructor = subclass;
    subclass.superclass = superclass.prototype;
    return subclass;
};

_.isObject = function(obj) {
    return (obj === Object(obj) && !_.isArray(obj));
};

_.isEmptyObject = function(obj) {
    if (_.isObject(obj)) {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
};

_.isUndefined = function(obj) {
    return obj === void 0;
};

_.isString = function(obj) {
    return toString.call(obj) == '[object String]';
};

_.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
};

_.isNumber = function(obj) {
    return toString.call(obj) == '[object Number]';
};

_.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
};

_.encodeDates = function(obj) {
    _.each(obj, function(v, k) {
        if (_.isDate(v)) {
            obj[k] = _.formatDate(v);
        } else if (_.isObject(v)) {
            obj[k] = _.encodeDates(v); // recurse
        }
    });
    return obj;
};

_.timestamp = function() {
    Date.now = Date.now || function() {
        return +new Date;
    };
    return Date.now();
};

_.formatDate = function(d) {
    // YYYY-MM-DDTHH:MM:SS in UTC
    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
    return d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds());
};

_.safewrap = function(f) {
    return function() {
        try {
            return f.apply(this, arguments);
        } catch (e) {
            console$1.critical('Implementation error. Please turn on debug and contact support@mixpanel.com.');
            if (Config.DEBUG){
                console$1.critical(e);
            }
        }
    };
};

_.safewrap_class = function(klass, functions) {
    for (var i = 0; i < functions.length; i++) {
        klass.prototype[functions[i]] = _.safewrap(klass.prototype[functions[i]]);
    }
};

_.safewrap_instance_methods = function(obj) {
    for (var func in obj) {
        if (typeof(obj[func]) === 'function') {
            obj[func] = _.safewrap(obj[func]);
        }
    }
};

_.strip_empty_properties = function(p) {
    var ret = {};
    _.each(p, function(v, k) {
        if (_.isString(v) && v.length > 0) {
            ret[k] = v;
        }
    });
    return ret;
};

/*
 * this function returns a copy of object after truncating it.  If
 * passed an Array or Object it will iterate through obj and
 * truncate all the values recursively.
 */
_.truncate = function(obj, length) {
    var ret;

    if (typeof(obj) === 'string') {
        ret = obj.slice(0, length);
    } else if (_.isArray(obj)) {
        ret = [];
        _.each(obj, function(val) {
            ret.push(_.truncate(val, length));
        });
    } else if (_.isObject(obj)) {
        ret = {};
        _.each(obj, function(val, key) {
            ret[key] = _.truncate(val, length);
        });
    } else {
        ret = obj;
    }

    return ret;
};

_.JSONEncode = (function() {
    return function(mixed_val) {
        var value = mixed_val;
        var quote = function(string) {
            var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; // eslint-disable-line no-control-regex
            var meta = { // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };

            escapable.lastIndex = 0;
            return escapable.test(string) ?
                '"' + string.replace(escapable, function(a) {
                    var c = meta[a];
                    return typeof c === 'string' ? c :
                        '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' :
                '"' + string + '"';
        };

        var str = function(key, holder) {
            var gap = '';
            var indent = '    ';
            var i = 0; // The loop counter.
            var k = ''; // The member key.
            var v = ''; // The member value.
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[key];

            // If the value has a toJSON method, call it to obtain a replacement value.
            if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }

            // What happens next depends on the value's type.
            switch (typeof value) {
                case 'string':
                    return quote(value);

                case 'number':
                    // JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : 'null';

                case 'boolean':
                case 'null':
                    // If the value is a boolean or null, convert it to a string. Note:
                    // typeof null does not produce 'null'. The case is included here in
                    // the remote chance that this gets fixed someday.

                    return String(value);

                case 'object':
                    // If the type is 'object', we might be dealing with an object or an array or
                    // null.
                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
                    // so watch out for that case.
                    if (!value) {
                        return 'null';
                    }

                    // Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];

                    // Is the value an array?
                    if (toString.apply(value) === '[object Array]') {
                        // The value is an array. Stringify every element. Use null as a placeholder
                        // for non-JSON values.

                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }

                        // Join all of the elements together, separated with commas, and wrap them in
                        // brackets.
                        v = partial.length === 0 ? '[]' :
                            gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                            mind + ']' :
                                '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }

                    // Iterate through all of the keys in the object.
                    for (k in value) {
                        if (hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }

                    // Join all of the member texts together, separated with commas,
                    // and wrap them in braces.
                    v = partial.length === 0 ? '{}' :
                        gap ? '{' + partial.join(',') + '' +
                        mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        };

        // Make a fake root object containing our value under the key of ''.
        // Return the result of stringifying the value.
        return str('', {
            '': value
        });
    };
})();

/**
 * From https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
 * Slightly modified to throw a real Error rather than a POJO
 */
_.JSONDecode = (function() {
    var at, // The index of the current character
        ch, // The current character
        escapee = {
            '"': '"',
            '\\': '\\',
            '/': '/',
            'b': '\b',
            'f': '\f',
            'n': '\n',
            'r': '\r',
            't': '\t'
        },
        text,
        error = function(m) {
            var e = new SyntaxError(m);
            e.at = at;
            e.text = text;
            throw e;
        },
        next = function(c) {
            // If a c parameter is provided, verify that it matches the current character.
            if (c && c !== ch) {
                error('Expected \'' + c + '\' instead of \'' + ch + '\'');
            }
            // Get the next character. When there are no more characters,
            // return the empty string.
            ch = text.charAt(at);
            at += 1;
            return ch;
        },
        number = function() {
            // Parse a number value.
            var number,
                string = '';

            if (ch === '-') {
                string = '-';
                next('-');
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
            if (ch === '.') {
                string += '.';
                while (next() && ch >= '0' && ch <= '9') {
                    string += ch;
                }
            }
            if (ch === 'e' || ch === 'E') {
                string += ch;
                next();
                if (ch === '-' || ch === '+') {
                    string += ch;
                    next();
                }
                while (ch >= '0' && ch <= '9') {
                    string += ch;
                    next();
                }
            }
            number = +string;
            if (!isFinite(number)) {
                error('Bad number');
            } else {
                return number;
            }
        },

        string = function() {
            // Parse a string value.
            var hex,
                i,
                string = '',
                uffff;
            // When parsing for string values, we must look for " and \ characters.
            if (ch === '"') {
                while (next()) {
                    if (ch === '"') {
                        next();
                        return string;
                    }
                    if (ch === '\\') {
                        next();
                        if (ch === 'u') {
                            uffff = 0;
                            for (i = 0; i < 4; i += 1) {
                                hex = parseInt(next(), 16);
                                if (!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            string += String.fromCharCode(uffff);
                        } else if (typeof escapee[ch] === 'string') {
                            string += escapee[ch];
                        } else {
                            break;
                        }
                    } else {
                        string += ch;
                    }
                }
            }
            error('Bad string');
        },
        white = function() {
            // Skip whitespace.
            while (ch && ch <= ' ') {
                next();
            }
        },
        word = function() {
            // true, false, or null.
            switch (ch) {
                case 't':
                    next('t');
                    next('r');
                    next('u');
                    next('e');
                    return true;
                case 'f':
                    next('f');
                    next('a');
                    next('l');
                    next('s');
                    next('e');
                    return false;
                case 'n':
                    next('n');
                    next('u');
                    next('l');
                    next('l');
                    return null;
            }
            error('Unexpected "' + ch + '"');
        },
        value, // Placeholder for the value function.
        array = function() {
            // Parse an array value.
            var array = [];

            if (ch === '[') {
                next('[');
                white();
                if (ch === ']') {
                    next(']');
                    return array; // empty array
                }
                while (ch) {
                    array.push(value());
                    white();
                    if (ch === ']') {
                        next(']');
                        return array;
                    }
                    next(',');
                    white();
                }
            }
            error('Bad array');
        },
        object = function() {
            // Parse an object value.
            var key,
                object = {};

            if (ch === '{') {
                next('{');
                white();
                if (ch === '}') {
                    next('}');
                    return object; // empty object
                }
                while (ch) {
                    key = string();
                    white();
                    next(':');
                    if (Object.hasOwnProperty.call(object, key)) {
                        error('Duplicate key "' + key + '"');
                    }
                    object[key] = value();
                    white();
                    if (ch === '}') {
                        next('}');
                        return object;
                    }
                    next(',');
                    white();
                }
            }
            error('Bad object');
        };

    value = function() {
        // Parse a JSON value. It could be an object, an array, a string,
        // a number, or a word.
        white();
        switch (ch) {
            case '{':
                return object();
            case '[':
                return array();
            case '"':
                return string();
            case '-':
                return number();
            default:
                return ch >= '0' && ch <= '9' ? number() : word();
        }
    };

    // Return the json_parse function. It will have access to all of the
    // above functions and variables.
    return function(source) {
        var result;

        text = source;
        at = 0;
        ch = ' ';
        result = value();
        white();
        if (ch) {
            error('Syntax error');
        }

        return result;
    };
})();

_.base64Encode = function(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data = _.utf8Encode(data);

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
            break;
        case 2:
            enc = enc.slice(0, -1) + '=';
            break;
    }

    return enc;
};

_.utf8Encode = function(string) {
    string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    var utftext = '',
        start,
        end;
    var stringl = 0,
        n;

    start = end = 0;
    stringl = string.length;

    for (n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if ((c1 > 127) && (c1 < 2048)) {
            enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
        } else {
            enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.substring(start, string.length);
    }

    return utftext;
};

_.UUID = (function() {

    // Time/ticks information
    // 1*new Date() is a cross browser version of Date.now()
    var T = function() {
        var d = 1 * new Date(),
            i = 0;

        // this while loop figures how many browser ticks go by
        // before 1*new Date() returns a new number, ie the amount
        // of ticks that go by per millisecond
        while (d == 1 * new Date()) {
            i++;
        }

        return d.toString(16) + i.toString(16);
    };

    // Math.Random entropy
    var R = function() {
        return Math.random().toString(16).replace('.', '');
    };

    // User agent entropy
    // This function takes the user agent string, and then xors
    // together each sequence of 8 bytes.  This produces a final
    // sequence of 8 bytes which it returns as hex.
    var UA = function() {
        var ua = userAgent,
            i, ch, buffer = [],
            ret = 0;

        function xor(result, byte_array) {
            var j, tmp = 0;
            for (j = 0; j < byte_array.length; j++) {
                tmp |= (buffer[j] << j * 8);
            }
            return result ^ tmp;
        }

        for (i = 0; i < ua.length; i++) {
            ch = ua.charCodeAt(i);
            buffer.unshift(ch & 0xFF);
            if (buffer.length >= 4) {
                ret = xor(ret, buffer);
                buffer = [];
            }
        }

        if (buffer.length > 0) {
            ret = xor(ret, buffer);
        }

        return ret.toString(16);
    };

    return function() {
        var se = (screen.height * screen.width).toString(16);
        return (T() + '-' + R() + '-' + UA() + '-' + se + '-' + T());
    };
})();

// _.isBlockedUA()
// This is to block various web spiders from executing our JS and
// sending false tracking data
_.isBlockedUA = function(ua) {
    if (/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(ua)) {
        return true;
    }
    return false;
};

/**
 * @param {Object=} formdata
 * @param {string=} arg_separator
 */
_.HTTPBuildQuery = function(formdata, arg_separator) {
    var use_val, use_key, tmp_arr = [];

    if (_.isUndefined(arg_separator)) {
        arg_separator = '&';
    }

    _.each(formdata, function(val, key) {
        use_val = encodeURIComponent(val.toString());
        use_key = encodeURIComponent(key);
        tmp_arr[tmp_arr.length] = use_key + '=' + use_val;
    });

    return tmp_arr.join(arg_separator);
};

_.getQueryParam = function(url, param) {
    // Expects a raw URL

    param = param.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regexS = '[\\?&]' + param + '=([^&#]*)',
        regex = new RegExp(regexS),
        results = regex.exec(url);
    if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) {
        return '';
    } else {
        return decodeURIComponent(results[1]).replace(/\+/g, ' ');
    }
};

_.getHashParam = function(hash, param) {
    var matches = hash.match(new RegExp(param + '=([^&]*)'));
    return matches ? matches[1] : null;
};

// _.cookie
// Methods partially borrowed from quirksmode.org/js/cookies.html
_.cookie = {
    get: function(name) {
        var nameEQ = name + '=';
        var ca = document$1.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
        return null;
    },

    parse: function(name) {
        var cookie;
        try {
            cookie = _.JSONDecode(_.cookie.get(name)) || {};
        } catch (err) {
            // noop
        }
        return cookie;
    },

    set_seconds: function(name, value, seconds, cross_subdomain, is_secure) {
        var cdomain = '',
            expires = '',
            secure = '';

        if (cross_subdomain) {
            var matches = document$1.location.hostname.match(DOMAIN_MATCH_REGEX),
                domain = matches ? matches[0] : '';

            cdomain = ((domain) ? '; domain=.' + domain : '');
        }

        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        if (is_secure) {
            secure = '; secure';
        }

        document$1.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
    },

    set: function(name, value, days, cross_subdomain, is_secure) {
        var cdomain = '', expires = '', secure = '';

        if (cross_subdomain) {
            var matches = document$1.location.hostname.match(DOMAIN_MATCH_REGEX),
                domain = matches ? matches[0] : '';

            cdomain   = ((domain) ? '; domain=.' + domain : '');
        }

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        if (is_secure) {
            secure = '; secure';
        }

        var new_cookie_val = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
        document$1.cookie = new_cookie_val;
        return new_cookie_val;
    },

    remove: function(name, cross_subdomain) {
        _.cookie.set(name, '', -1, cross_subdomain);
    }
};

// _.localStorage
var _localStorage_supported = null;
_.localStorage = {
    is_supported: function() {
        if (_localStorage_supported !== null) {
            return _localStorage_supported;
        }

        var supported = true;
        try {
            var key = '__mplssupport__',
                val = 'xyz';
            _.localStorage.set(key, val);
            if (_.localStorage.get(key) !== val) {
                supported = false;
            }
            _.localStorage.remove(key);
        } catch (err) {
            supported = false;
        }
        if (!supported) {
            console$1.error('localStorage unsupported; falling back to cookie store');
        }

        _localStorage_supported = supported;
        return supported;
    },

    error: function(msg) {
        console$1.error('localStorage error: ' + msg);
    },

    get: function(name) {
        try {
            return window.localStorage.getItem(name);
        } catch (err) {
            _.localStorage.error(err);
        }
        return null;
    },

    parse: function(name) {
        try {
            return _.JSONDecode(_.localStorage.get(name)) || {};
        } catch (err) {
            // noop
        }
        return null;
    },

    set: function(name, value) {
        try {
            window.localStorage.setItem(name, value);
        } catch (err) {
            _.localStorage.error(err);
        }
    },

    remove: function(name) {
        try {
            window.localStorage.removeItem(name);
        } catch (err) {
            _.localStorage.error(err);
        }
    }
};

_.register_event = (function() {
    // written by Dean Edwards, 2005
    // with input from Tino Zijdel - crisp@xs4all.nl
    // with input from Carl Sverre - mail@carlsverre.com
    // with input from Mixpanel
    // http://dean.edwards.name/weblog/2005/10/add-event/
    // https://gist.github.com/1930440

    /**
     * @param {Object} element
     * @param {string} type
     * @param {function(...*)} handler
     * @param {boolean=} oldSchool
     * @param {boolean=} useCapture
     */
    var register_event = function(element, type, handler, oldSchool, useCapture) {
        if (!element) {
            console$1.error('No valid element provided to register_event');
            return;
        }

        if (element.addEventListener && !oldSchool) {
            element.addEventListener(type, handler, !!useCapture);
        } else {
            var ontype = 'on' + type;
            var old_handler = element[ontype]; // can be undefined
            element[ontype] = makeHandler(element, handler, old_handler);
        }
    };

    function makeHandler(element, new_handler, old_handlers) {
        var handler = function(event) {
            event = event || fixEvent(window.event);

            // this basically happens in firefox whenever another script
            // overwrites the onload callback and doesn't pass the event
            // object to previously defined callbacks.  All the browsers
            // that don't define window.event implement addEventListener
            // so the dom_loaded handler will still be fired as usual.
            if (!event) {
                return undefined;
            }

            var ret = true;
            var old_result, new_result;

            if (_.isFunction(old_handlers)) {
                old_result = old_handlers(event);
            }
            new_result = new_handler.call(element, event);

            if ((false === old_result) || (false === new_result)) {
                ret = false;
            }

            return ret;
        };

        return handler;
    }

    function fixEvent(event) {
        if (event) {
            event.preventDefault = fixEvent.preventDefault;
            event.stopPropagation = fixEvent.stopPropagation;
        }
        return event;
    }
    fixEvent.preventDefault = function() {
        this.returnValue = false;
    };
    fixEvent.stopPropagation = function() {
        this.cancelBubble = true;
    };

    return register_event;
})();


var TOKEN_MATCH_REGEX = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');

_.dom_query = (function() {
    /* document.getElementsBySelector(selector)
    - returns an array of element objects from the current document
    matching the CSS selector. Selectors can contain element names,
    class names and ids and can be nested. For example:

    elements = document.getElementsBySelector('div#main p a.external')

    Will return an array of all 'a' elements with 'external' in their
    class attribute that are contained inside 'p' elements that are
    contained inside the 'div' element which has id="main"

    New in version 0.4: Support for CSS2 and CSS3 attribute selectors:
    See http://www.w3.org/TR/css3-selectors/#attribute-selectors

    Version 0.4 - Simon Willison, March 25th 2003
    -- Works in Phoenix 0.5, Mozilla 1.3, Opera 7, Internet Explorer 6, Internet Explorer 5 on Windows
    -- Opera 7 fails

    Version 0.5 - Carl Sverre, Jan 7th 2013
    -- Now uses jQuery-esque `hasClass` for testing class name
    equality.  This fixes a bug related to '-' characters being
    considered not part of a 'word' in regex.
    */

    function getAllChildren(e) {
        // Returns all children of element. Workaround required for IE5/Windows. Ugh.
        return e.all ? e.all : e.getElementsByTagName('*');
    }

    var bad_whitespace = /[\t\r\n]/g;

    function hasClass(elem, selector) {
        var className = ' ' + selector + ' ';
        return ((' ' + elem.className + ' ').replace(bad_whitespace, ' ').indexOf(className) >= 0);
    }

    function getElementsBySelector(selector) {
        // Attempt to fail gracefully in lesser browsers
        if (!document$1.getElementsByTagName) {
            return [];
        }
        // Split selector in to tokens
        var tokens = selector.split(' ');
        var token, bits, tagName, found, foundCount, i, j, k, elements, currentContextIndex;
        var currentContext = [document$1];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i].replace(/^\s+/, '').replace(/\s+$/, '');
            if (token.indexOf('#') > -1) {
                // Token is an ID selector
                bits = token.split('#');
                tagName = bits[0];
                var id = bits[1];
                var element = document$1.getElementById(id);
                if (!element || (tagName && element.nodeName.toLowerCase() != tagName)) {
                    // element not found or tag with that ID not found, return false
                    return [];
                }
                // Set currentContext to contain just this element
                currentContext = [element];
                continue; // Skip to next token
            }
            if (token.indexOf('.') > -1) {
                // Token contains a class selector
                bits = token.split('.');
                tagName = bits[0];
                var className = bits[1];
                if (!tagName) {
                    tagName = '*';
                }
                // Get elements matching tag, filter them for class selector
                found = [];
                foundCount = 0;
                for (j = 0; j < currentContext.length; j++) {
                    if (tagName == '*') {
                        elements = getAllChildren(currentContext[j]);
                    } else {
                        elements = currentContext[j].getElementsByTagName(tagName);
                    }
                    for (k = 0; k < elements.length; k++) {
                        found[foundCount++] = elements[k];
                    }
                }
                currentContext = [];
                currentContextIndex = 0;
                for (j = 0; j < found.length; j++) {
                    if (found[j].className &&
                        _.isString(found[j].className) && // some SVG elements have classNames which are not strings
                        hasClass(found[j], className)
                    ) {
                        currentContext[currentContextIndex++] = found[j];
                    }
                }
                continue; // Skip to next token
            }
            // Code to deal with attribute selectors
            var token_match = token.match(TOKEN_MATCH_REGEX);
            if (token_match) {
                tagName = token_match[1];
                var attrName = token_match[2];
                var attrOperator = token_match[3];
                var attrValue = token_match[4];
                if (!tagName) {
                    tagName = '*';
                }
                // Grab all of the tagName elements within current context
                found = [];
                foundCount = 0;
                for (j = 0; j < currentContext.length; j++) {
                    if (tagName == '*') {
                        elements = getAllChildren(currentContext[j]);
                    } else {
                        elements = currentContext[j].getElementsByTagName(tagName);
                    }
                    for (k = 0; k < elements.length; k++) {
                        found[foundCount++] = elements[k];
                    }
                }
                currentContext = [];
                currentContextIndex = 0;
                var checkFunction; // This function will be used to filter the elements
                switch (attrOperator) {
                    case '=': // Equality
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName) == attrValue);
                        };
                        break;
                    case '~': // Match one of space seperated words
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).match(new RegExp('\\b' + attrValue + '\\b')));
                        };
                        break;
                    case '|': // Match start with value followed by optional hyphen
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).match(new RegExp('^' + attrValue + '-?')));
                        };
                        break;
                    case '^': // Match starts with value
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).indexOf(attrValue) === 0);
                        };
                        break;
                    case '$': // Match ends with value - fails with "Warning" in Opera 7
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length);
                        };
                        break;
                    case '*': // Match ends with value
                        checkFunction = function(e) {
                            return (e.getAttribute(attrName).indexOf(attrValue) > -1);
                        };
                        break;
                    default:
                        // Just test for existence of attribute
                        checkFunction = function(e) {
                            return e.getAttribute(attrName);
                        };
                }
                currentContext = [];
                currentContextIndex = 0;
                for (j = 0; j < found.length; j++) {
                    if (checkFunction(found[j])) {
                        currentContext[currentContextIndex++] = found[j];
                    }
                }
                // alert('Attribute Selector: '+tagName+' '+attrName+' '+attrOperator+' '+attrValue);
                continue; // Skip to next token
            }
            // If we get here, token is JUST an element (not a class or ID selector)
            tagName = token;
            found = [];
            foundCount = 0;
            for (j = 0; j < currentContext.length; j++) {
                elements = currentContext[j].getElementsByTagName(tagName);
                for (k = 0; k < elements.length; k++) {
                    found[foundCount++] = elements[k];
                }
            }
            currentContext = found;
        }
        return currentContext;
    }

    return function(query) {
        if (_.isElement(query)) {
            return [query];
        } else if (_.isObject(query) && !_.isUndefined(query.length)) {
            return query;
        } else {
            return getElementsBySelector.call(this, query);
        }
    };
})();

_.info = {
    campaignParams: function() {
        var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
            kw = '',
            params = {};
        _.each(campaign_keywords, function(kwkey) {
            kw = _.getQueryParam(document$1.URL, kwkey);
            if (kw.length) {
                params[kwkey] = kw;
            }
        });

        return params;
    },

    searchEngine: function(referrer) {
        if (referrer.search('https?://(.*)google.([^/?]*)') === 0) {
            return 'google';
        } else if (referrer.search('https?://(.*)bing.com') === 0) {
            return 'bing';
        } else if (referrer.search('https?://(.*)yahoo.com') === 0) {
            return 'yahoo';
        } else if (referrer.search('https?://(.*)duckduckgo.com') === 0) {
            return 'duckduckgo';
        } else {
            return null;
        }
    },

    searchInfo: function(referrer) {
        var search = _.info.searchEngine(referrer),
            param = (search != 'yahoo') ? 'q' : 'p',
            ret = {};

        if (search !== null) {
            ret['$search_engine'] = search;

            var keyword = _.getQueryParam(referrer, param);
            if (keyword.length) {
                ret['mp_keyword'] = keyword;
            }
        }

        return ret;
    },

    /**
     * This function detects which browser is running this script.
     * The order of the checks are important since many user agents
     * include key words used in later checks.
     */
    browser: function(user_agent, vendor, opera) {
        vendor = vendor || ''; // vendor is undefined for at least IE9
        if (opera || _.includes(user_agent, ' OPR/')) {
            if (_.includes(user_agent, 'Mini')) {
                return 'Opera Mini';
            }
            return 'Opera';
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
            return 'BlackBerry';
        } else if (_.includes(user_agent, 'IEMobile') || _.includes(user_agent, 'WPDesktop')) {
            return 'Internet Explorer Mobile';
        } else if (_.includes(user_agent, 'Edge')) {
            return 'Microsoft Edge';
        } else if (_.includes(user_agent, 'FBIOS')) {
            return 'Facebook Mobile';
        } else if (_.includes(user_agent, 'Chrome')) {
            return 'Chrome';
        } else if (_.includes(user_agent, 'CriOS')) {
            return 'Chrome iOS';
        } else if (_.includes(user_agent, 'UCWEB') || _.includes(user_agent, 'UCBrowser')) {
            return 'UC Browser';
        } else if (_.includes(user_agent, 'FxiOS')) {
            return 'Firefox iOS';
        } else if (_.includes(vendor, 'Apple')) {
            if (_.includes(user_agent, 'Mobile')) {
                return 'Mobile Safari';
            }
            return 'Safari';
        } else if (_.includes(user_agent, 'Android')) {
            return 'Android Mobile';
        } else if (_.includes(user_agent, 'Konqueror')) {
            return 'Konqueror';
        } else if (_.includes(user_agent, 'Firefox')) {
            return 'Firefox';
        } else if (_.includes(user_agent, 'MSIE') || _.includes(user_agent, 'Trident/')) {
            return 'Internet Explorer';
        } else if (_.includes(user_agent, 'Gecko')) {
            return 'Mozilla';
        } else {
            return '';
        }
    },

    /**
     * This function detects which browser version is running this script,
     * parsing major and minor version (e.g., 42.1). User agent strings from:
     * http://www.useragentstring.com/pages/useragentstring.php
     */
    browserVersion: function(userAgent, vendor, opera) {
        var browser = _.info.browser(userAgent, vendor, opera);
        var versionRegexs = {
            'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
            'Microsoft Edge': /Edge\/(\d+(\.\d+)?)/,
            'Chrome': /Chrome\/(\d+(\.\d+)?)/,
            'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
            'UC Browser' : /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            'Safari': /Version\/(\d+(\.\d+)?)/,
            'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
            'Opera': /(Opera|OPR)\/(\d+(\.\d+)?)/,
            'Firefox': /Firefox\/(\d+(\.\d+)?)/,
            'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
            'Konqueror': /Konqueror:(\d+(\.\d+)?)/,
            'BlackBerry': /BlackBerry (\d+(\.\d+)?)/,
            'Android Mobile': /android\s(\d+(\.\d+)?)/,
            'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
            'Mozilla': /rv:(\d+(\.\d+)?)/
        };
        var regex = versionRegexs[browser];
        if (regex === undefined) {
            return null;
        }
        var matches = userAgent.match(regex);
        if (!matches) {
            return null;
        }
        return parseFloat(matches[matches.length - 2]);
    },

    os: function() {
        var a = userAgent;
        if (/Windows/i.test(a)) {
            if (/Phone/.test(a) || /WPDesktop/.test(a)) {
                return 'Windows Phone';
            }
            return 'Windows';
        } else if (/(iPhone|iPad|iPod)/.test(a)) {
            return 'iOS';
        } else if (/Android/.test(a)) {
            return 'Android';
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
            return 'BlackBerry';
        } else if (/Mac/i.test(a)) {
            return 'Mac OS X';
        } else if (/Linux/.test(a)) {
            return 'Linux';
        } else if (/CrOS/.test(a)) {
            return 'Chrome OS';
        } else {
            return '';
        }
    },

    device: function(user_agent) {
        if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) {
            return 'Windows Phone';
        } else if (/iPad/.test(user_agent)) {
            return 'iPad';
        } else if (/iPod/.test(user_agent)) {
            return 'iPod Touch';
        } else if (/iPhone/.test(user_agent)) {
            return 'iPhone';
        } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
            return 'BlackBerry';
        } else if (/Android/.test(user_agent)) {
            return 'Android';
        } else {
            return '';
        }
    },

    referringDomain: function(referrer) {
        var split = referrer.split('/');
        if (split.length >= 3) {
            return split[2];
        }
        return '';
    },

    properties: function() {
        return _.extend(_.strip_empty_properties({
            '$os': _.info.os(),
            '$browser': _.info.browser(userAgent, navigator$1.vendor, windowOpera),
            '$referrer': document$1.referrer,
            '$referring_domain': _.info.referringDomain(document$1.referrer),
            '$device': _.info.device(userAgent)
        }), {
            '$current_url': window$1.location.href,
            '$browser_version': _.info.browserVersion(userAgent, navigator$1.vendor, windowOpera),
            '$screen_height': screen.height,
            '$screen_width': screen.width,
            'mp_lib': 'web',
            '$lib_version': Config.LIB_VERSION,
            'time': _.timestamp() / 1000 // epoch time in seconds
        });
    },

    people_properties: function() {
        return _.extend(_.strip_empty_properties({
            '$os': _.info.os(),
            '$browser': _.info.browser(userAgent, navigator$1.vendor, windowOpera)
        }), {
            '$browser_version': _.info.browserVersion(userAgent, navigator$1.vendor, windowOpera)
        });
    },

    pageviewInfo: function(page) {
        return _.strip_empty_properties({
            'mp_page': page,
            'mp_referrer': document$1.referrer,
            'mp_browser': _.info.browser(userAgent, navigator$1.vendor, windowOpera),
            'mp_platform': _.info.os()
        });
    }
};

// EXPORTS (for closure compiler)
_['toArray']            = _.toArray;
_['isObject']           = _.isObject;
_['JSONEncode']         = _.JSONEncode;
_['JSONDecode']         = _.JSONDecode;
_['isBlockedUA']        = _.isBlockedUA;
_['isEmptyObject']      = _.isEmptyObject;
_['info']               = _.info;
_['info']['device']     = _.info.device;
_['info']['browser']    = _.info.browser;
_['info']['properties'] = _.info.properties;

/*
 * Get the className of an element, accounting for edge cases where element.className is an object
 * @param {Element} el - element to get the className of
 * @returns {string} the element's class
 */
function getClassName(el) {
    switch(typeof el.className) {
        case 'string':
            return el.className;
        case 'object': // handle cases where className might be SVGAnimatedString or some other type
            return el.className.baseVal || el.getAttribute('class') || '';
        default: // future proof
            return '';
    }
}

/*
 * Get the direct text content of an element, protecting against sensitive data collection.
 * Concats textContent of each of the element's text node children; this avoids potential
 * collection of sensitive data that could happen if we used element.textContent and the
 * element had sensitive child elements, since element.textContent includes child content.
 * Scrubs values that look like they could be sensitive (i.e. cc or ssn number).
 * @param {Element} el - element to get the text of
 * @returns {string} the element's direct text content
 */
function getSafeText(el) {
    var elText = '';

    if (shouldTrackElement(el) && el.childNodes && el.childNodes.length) {
        _.each(el.childNodes, function(child) {
            if (isTextNode(child) && child.textContent) {
                elText += _.trim(child.textContent)
                    // scrub potentially sensitive values
                    .split(/(\s+)/).filter(shouldTrackValue).join('')
                    // normalize whitespace
                    .replace(/[\r\n]/g, ' ').replace(/[ ]+/g, ' ')
                    // truncate
                    .substring(0, 255);
            }
        });
    }

    return _.trim(elText);
}

/*
 * Check whether an element has nodeType Node.ELEMENT_NODE
 * @param {Element} el - element to check
 * @returns {boolean} whether el is of the correct nodeType
 */
function isElementNode(el) {
    return el && el.nodeType === 1; // Node.ELEMENT_NODE - use integer constant for browser portability
}

/*
 * Check whether an element is of a given tag type.
 * Due to potential reference discrepancies (such as the webcomponents.js polyfill),
 * we want to match tagNames instead of specific references because something like
 * element === document.body won't always work because element might not be a native
 * element.
 * @param {Element} el - element to check
 * @param {string} tag - tag name (e.g., "div")
 * @returns {boolean} whether el is of the given tag type
 */
function isTag(el, tag) {
    return el && el.tagName && el.tagName.toLowerCase() === tag.toLowerCase();
}

/*
 * Check whether an element has nodeType Node.TEXT_NODE
 * @param {Element} el - element to check
 * @returns {boolean} whether el is of the correct nodeType
 */
function isTextNode(el) {
    return el && el.nodeType === 3; // Node.TEXT_NODE - use integer constant for browser portability
}

/*
 * Check whether a DOM event should be "tracked" or if it may contain sentitive data
 * using a variety of heuristics.
 * @param {Element} el - element to check
 * @param {Event} event - event to check
 * @returns {boolean} whether the event should be tracked
 */
function shouldTrackDomEvent(el, event) {
    if (!el || isTag(el, 'html') || !isElementNode(el)) {
        return false;
    }
    var tag = el.tagName.toLowerCase();
    switch (tag) {
        case 'html':
            return false;
        case 'form':
            return event.type === 'submit';
        case 'input':
            if (['button', 'submit'].indexOf(el.getAttribute('type')) === -1) {
                return event.type === 'change';
            } else {
                return event.type === 'click';
            }
        case 'select':
        case 'textarea':
            return event.type === 'change';
        default:
            return event.type === 'click';
    }
}

/*
 * Check whether a DOM element should be "tracked" or if it may contain sentitive data
 * using a variety of heuristics.
 * @param {Element} el - element to check
 * @returns {boolean} whether the element should be tracked
 */
function shouldTrackElement(el) {
    for (var curEl = el; curEl.parentNode && !isTag(curEl, 'body'); curEl = curEl.parentNode) {
        var classes = getClassName(curEl).split(' ');
        if (_.includes(classes, 'mp-sensitive') || _.includes(classes, 'mp-no-track')) {
            return false;
        }
    }

    if (_.includes(getClassName(el).split(' '), 'mp-include')) {
        return true;
    }

    // don't send data from inputs or similar elements since there will always be
    // a risk of clientside javascript placing sensitive data in attributes
    if (
        isTag(el, 'input') ||
        isTag(el, 'select') ||
        isTag(el, 'textarea') ||
        el.getAttribute('contenteditable') === 'true'
    ) {
        return false;
    }

    // don't include hidden or password fields
    var type = el.type || '';
    if (typeof type === 'string') { // it's possible for el.type to be a DOM element if el is a form with a child input[name="type"]
        switch(type.toLowerCase()) {
            case 'hidden':
                return false;
            case 'password':
                return false;
        }
    }

    // filter out data from fields that look like sensitive fields
    var name = el.name || el.id || '';
    if (typeof name === 'string') { // it's possible for el.name or el.id to be a DOM element if el is a form with a child input[name="name"]
        var sensitiveNameRegex = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;
        if (sensitiveNameRegex.test(name.replace(/[^a-zA-Z0-9]/g, ''))) {
            return false;
        }
    }

    return true;
}

/*
 * Check whether a string value should be "tracked" or if it may contain sentitive data
 * using a variety of heuristics.
 * @param {string} value - string value to check
 * @returns {boolean} whether the element should be tracked
 */
function shouldTrackValue(value) {
    if (value === null || _.isUndefined(value)) {
        return false;
    }

    if (typeof value === 'string') {
        value = _.trim(value);

        // check to see if input value looks like a credit card number
        // see: https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html
        var ccRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
        if (ccRegex.test((value || '').replace(/[- ]/g, ''))) {
            return false;
        }

        // check to see if input value looks like a social security number
        var ssnRegex = /(^\d{3}-?\d{2}-?\d{4}$)/;
        if (ssnRegex.test(value)) {
            return false;
        }
    }

    return true;
}

var autotrack = {
    _initializedTokens: [],

    _previousElementSibling: function(el) {
        if (el.previousElementSibling) {
            return el.previousElementSibling;
        } else {
            do {
                el = el.previousSibling;
            } while (el && !isElementNode(el));
            return el;
        }
    },

    _loadScript: function(scriptUrlToLoad, callback) {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = scriptUrlToLoad;
        scriptTag.onload = callback;

        var scripts = document.getElementsByTagName('script');
        if (scripts.length > 0) {
            scripts[0].parentNode.insertBefore(scriptTag, scripts[0]);
        } else {
            document.body.appendChild(scriptTag);
        }
    },

    _getPropertiesFromElement: function(elem) {
        var props = {
            'classes': getClassName(elem).split(' '),
            'tag_name': elem.tagName.toLowerCase()
        };

        if (shouldTrackElement(elem)) {
            _.each(elem.attributes, function(attr) {
                if (shouldTrackValue(attr.value)) {
                    props['attr__' + attr.name] = attr.value;
                }
            });
        }

        var nthChild = 1;
        var nthOfType = 1;
        var currentElem = elem;
        while (currentElem = this._previousElementSibling(currentElem)) { // eslint-disable-line no-cond-assign
            nthChild++;
            if (currentElem.tagName === elem.tagName) {
                nthOfType++;
            }
        }
        props['nth_child'] = nthChild;
        props['nth_of_type'] = nthOfType;

        return props;
    },

    _getDefaultProperties: function(eventType) {
        return {
            '$event_type': eventType,
            '$ce_version': 1,
            '$host': window.location.host,
            '$pathname': window.location.pathname
        };
    },

    _extractCustomPropertyValue: function(customProperty) {
        var propValues = [];
        _.each(document.querySelectorAll(customProperty['css_selector']), function(matchedElem) {
            var value;

            if (['input', 'select'].indexOf(matchedElem.tagName.toLowerCase()) > -1) {
                value = matchedElem['value'];
            } else if (matchedElem['textContent']) {
                value = matchedElem['textContent'];
            }

            if (shouldTrackValue(value)) {
                propValues.push(value);
            }
        });
        return propValues.join(', ');
    },

    _getCustomProperties: function(targetElementList) {
        var props = {};
        _.each(this._customProperties, function(customProperty) {
            _.each(customProperty['event_selectors'], function(eventSelector) {
                var eventElements = document.querySelectorAll(eventSelector);
                _.each(eventElements, function(eventElement) {
                    if (_.includes(targetElementList, eventElement) && shouldTrackElement(eventElement)) {
                        props[customProperty['name']] = this._extractCustomPropertyValue(customProperty);
                    }
                }, this);
            }, this);
        }, this);
        return props;
    },

    _getEventTarget: function(e) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/target#Compatibility_notes
        if (typeof e.target === 'undefined') {
            return e.srcElement;
        } else {
            return e.target;
        }
    },

    _trackEvent: function(e, instance) {
        /*** Don't mess with this code without running IE8 tests on it ***/
        var target = this._getEventTarget(e);
        if (isTextNode(target)) { // defeat Safari bug (see: http://www.quirksmode.org/js/events_properties.html)
            target = target.parentNode;
        }

        if (shouldTrackDomEvent(target, e)) {
            var targetElementList = [target];
            var curEl = target;
            while (curEl.parentNode && !isTag(curEl, 'body')) {
                targetElementList.push(curEl.parentNode);
                curEl = curEl.parentNode;
            }

            var elementsJson = [];
            var href, explicitNoTrack = false;
            _.each(targetElementList, function(el) {
                var shouldTrackEl = shouldTrackElement(el);

                // if the element or a parent element is an anchor tag
                // include the href as a property
                if (el.tagName.toLowerCase() === 'a') {
                    href = el.getAttribute('href');
                    href = shouldTrackEl && shouldTrackValue(href) && href;
                }

                // allow users to programatically prevent tracking of elements by adding class 'mp-no-track'
                var classes = getClassName(el).split(' ');
                if (_.includes(classes, 'mp-no-track')) {
                    explicitNoTrack = true;
                }

                elementsJson.push(this._getPropertiesFromElement(el));
            }, this);

            if (explicitNoTrack) {
                return false;
            }

            // only populate text content from target element (not parents)
            // to prevent text within a sensitive element from being collected
            // as part of a parent's el.textContent
            var elementText;
            var safeElementText = getSafeText(target);
            if (safeElementText && safeElementText.length) {
                elementText = safeElementText;
            }

            var props = _.extend(
                this._getDefaultProperties(e.type),
                {
                    '$elements':  elementsJson,
                    '$el_attr__href': href,
                    '$el_text': elementText
                },
                this._getCustomProperties(targetElementList)
            );

            instance.track('$web_event', props);
            return true;
        }
    },

    // only reason is to stub for unit tests
    // since you can't override window.location props
    _navigate: function(href) {
        window.location.href = href;
    },

    _addDomEventHandlers: function(instance) {
        var handler = _.bind(function(e) {
            e = e || window.event;
            this._trackEvent(e, instance);
        }, this);
        _.register_event(document, 'submit', handler, false, true);
        _.register_event(document, 'change', handler, false, true);
        _.register_event(document, 'click', handler, false, true);
    },

    _customProperties: {},
    init: function(instance) {
        if (!(document && document.body)) {
            console.log('document not ready yet, trying again in 500 milliseconds...');
            var that = this;
            setTimeout(function() { that.init(instance); }, 500);
            return;
        }

        var token = instance.get_config('token');
        if (this._initializedTokens.indexOf(token) > -1) {
            console.log('autotrack already initialized for token "' + token + '"');
            return;
        }
        this._initializedTokens.push(token);

        if (!this._maybeLoadEditor(instance)) { // don't autotrack actions when the editor is enabled
            var parseDecideResponse = _.bind(function(response) {
                if (response && response['config'] && response['config']['enable_collect_everything'] === true) {

                    if (response['custom_properties']) {
                        this._customProperties = response['custom_properties'];
                    }

                    instance.track('$web_event', _.extend({
                        '$title': document.title
                    }, this._getDefaultProperties('pageview')));

                    this._addDomEventHandlers(instance);

                } else {
                    instance['__autotrack_enabled'] = false;
                }
            }, this);

            instance._send_request(
                instance.get_config('api_host') + '/decide/', {
                    'verbose': true,
                    'version': '1',
                    'lib': 'web',
                    'token': token
                },
                instance._prepare_callback(parseDecideResponse)
            );
        }
    },

    _editorParamsFromHash: function(instance, hash) {
        var editorParams;
        try {
            var state = _.getHashParam(hash, 'state');
            state = JSON.parse(decodeURIComponent(state));
            var expiresInSeconds = _.getHashParam(hash, 'expires_in');
            editorParams = {
                'accessToken': _.getHashParam(hash, 'access_token'),
                'accessTokenExpiresAt': (new Date()).getTime() + (Number(expiresInSeconds) * 1000),
                'bookmarkletMode': !!state['bookmarkletMode'],
                'projectId': state['projectId'],
                'projectOwnerId': state['projectOwnerId'],
                'projectToken': state['token'],
                'readOnly': state['readOnly'],
                'userFlags': state['userFlags'],
                'userId': state['userId']
            };
            window.sessionStorage.setItem('editorParams', JSON.stringify(editorParams));

            if (state['desiredHash']) {
                window.location.hash = state['desiredHash'];
            } else if (window.history) {
                history.replaceState('', document.title, window.location.pathname + window.location.search); // completely remove hash
            } else {
                window.location.hash = ''; // clear hash (but leaves # unfortunately)
            }
        } catch (e) {
            console.error('Unable to parse data from hash', e);
        }
        return editorParams;
    },

    /**
     * To load the visual editor, we need an access token and other state. That state comes from one of three places:
     * 1. In the URL hash params if the customer is using an old snippet
     * 2. From session storage under the key `_mpcehash` if the snippet already parsed the hash
     * 3. From session storage under the key `editorParams` if the editor was initialized on a previous page
     */
    _maybeLoadEditor: function(instance) {
        try {
            var parseFromUrl = false;
            if (_.getHashParam(window.location.hash, 'state')) {
                var state = _.getHashParam(window.location.hash, 'state');
                state = JSON.parse(decodeURIComponent(state));
                parseFromUrl = state['action'] === 'mpeditor';
            }
            var parseFromStorage = !!window.sessionStorage.getItem('_mpcehash');
            var editorParams;

            if (parseFromUrl) { // happens if they are initializing the editor using an old snippet
                editorParams = this._editorParamsFromHash(instance, window.location.hash);
            } else if (parseFromStorage) { // happens if they are initialized the editor and using the new snippet
                editorParams = this._editorParamsFromHash(instance, window.sessionStorage.getItem('_mpcehash'));
                window.sessionStorage.removeItem('_mpcehash');
            } else { // get credentials from sessionStorage from a previous initialzation
                editorParams = JSON.parse(window.sessionStorage.getItem('editorParams') || '{}');
            }

            if (editorParams['projectToken'] && instance.get_config('token') === editorParams['projectToken']) {
                this._loadEditor(instance, editorParams);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },

    _loadEditor: function(instance, editorParams) {
        if (!window['_mpEditorLoaded']) { // only load the codeless event editor once, even if there are multiple instances of MixpanelLib
            window['_mpEditorLoaded'] = true;
            var editorUrl = instance.get_config('app_host')
              + '/js-bundle/reports/collect-everything/editor.js?_ts='
              + (new Date()).getTime();
            this._loadScript(editorUrl, function() {
                window['mp_load_editor'](editorParams);
            });
            return true;
        }
        return false;
    },

    // this is a mechanism to ramp up CE with no server-side interaction.
    // when CE is active, every page load results in a decide request. we
    // need to gently ramp this up so we don't overload decide. this decides
    // deterministically if CE is enabled for this project by modding the char
    // value of the project token.
    enabledForProject: function(token, numBuckets, numEnabledBuckets) {
        numBuckets = !_.isUndefined(numBuckets) ? numBuckets : 10;
        numEnabledBuckets = !_.isUndefined(numEnabledBuckets) ? numEnabledBuckets : 10;
        var charCodeSum = 0;
        for (var i = 0; i < token.length; i++) {
            charCodeSum += token.charCodeAt(i);
        }
        return (charCodeSum % numBuckets) < numEnabledBuckets;
    },

    isBrowserSupported: function() {
        return _.isFunction(document.querySelectorAll);
    }
};

_.bind_instance_methods(autotrack);
_.safewrap_instance_methods(autotrack);

/**
 * DomTracker Object
 * @constructor
 */
var DomTracker = function() {};


// interface
DomTracker.prototype.create_properties = function() {};
DomTracker.prototype.event_handler = function() {};
DomTracker.prototype.after_track_handler = function() {};

DomTracker.prototype.init = function(mixpanel_instance) {
    this.mp = mixpanel_instance;
    return this;
};

/**
 * @param {Object|string} query
 * @param {string} event_name
 * @param {Object=} properties
 * @param {function=} user_callback
 */
DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
    var that = this;
    var elements = _.dom_query(query);

    if (elements.length === 0) {
        console$1.error('The DOM query (' + query + ') returned 0 elements');
        return;
    }

    _.each(elements, function(element) {
        _.register_event(element, this.override_event, function(e) {
            var options = {};
            var props = that.create_properties(properties, this);
            var timeout = that.mp.get_config('track_links_timeout');

            that.event_handler(e, this, options);

            // in case the mixpanel servers don't get back to us in time
            window.setTimeout(that.track_callback(user_callback, props, options, true), timeout);

            // fire the tracking event
            that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
        });
    }, this);

    return true;
};

/**
 * @param {function} user_callback
 * @param {Object} props
 * @param {boolean=} timeout_occured
 */
DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
    timeout_occured = timeout_occured || false;
    var that = this;

    return function() {
        // options is referenced from both callbacks, so we can have
        // a 'lock' of sorts to ensure only one fires
        if (options.callback_fired) { return; }
        options.callback_fired = true;

        if (user_callback && user_callback(timeout_occured, props) === false) {
            // user can prevent the default functionality by
            // returning false from their callback
            return;
        }

        that.after_track_handler(props, options, timeout_occured);
    };
};

DomTracker.prototype.create_properties = function(properties, element) {
    var props;

    if (typeof(properties) === 'function') {
        props = properties(element);
    } else {
        props = _.extend({}, properties);
    }

    return props;
};

/**
 * LinkTracker Object
 * @constructor
 * @extends DomTracker
 */
var LinkTracker = function() {
    this.override_event = 'click';
};
_.inherit(LinkTracker, DomTracker);

LinkTracker.prototype.create_properties = function(properties, element) {
    var props = LinkTracker.superclass.create_properties.apply(this, arguments);

    if (element.href) { props['url'] = element.href; }

    return props;
};

LinkTracker.prototype.event_handler = function(evt, element, options) {
    options.new_tab = (
        evt.which === 2 ||
        evt.metaKey ||
        evt.ctrlKey ||
        element.target === '_blank'
    );
    options.href = element.href;

    if (!options.new_tab) {
        evt.preventDefault();
    }
};

LinkTracker.prototype.after_track_handler = function(props, options) {
    if (options.new_tab) { return; }

    setTimeout(function() {
        window.location = options.href;
    }, 0);
};

/**
 * FormTracker Object
 * @constructor
 * @extends DomTracker
 */
var FormTracker = function() {
    this.override_event = 'submit';
};
_.inherit(FormTracker, DomTracker);

FormTracker.prototype.event_handler = function(evt, element, options) {
    options.element = element;
    evt.preventDefault();
};

FormTracker.prototype.after_track_handler = function(props, options) {
    setTimeout(function() {
        options.element.submit();
    }, 0);
};

/**
 * A function used to track a Mixpanel event (e.g. MixpanelLib.track)
 * @callback trackFunction
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 */

/** Public **/

var GDPR_DEFAULT_PERSISTENCE_PREFIX = '__mp_opt_in_out_';

/**
 * Opt the user in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */
function optIn(token, options) {
    _optInOut(true, token, options);
}

/**
 * Opt the user out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-out cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-out cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-out cookie is set as secure or not
 */
function optOut(token, options) {
    _optInOut(false, token, options);
}

/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} whether the user has opted in to the given opt type
 */
function hasOptedIn(token, options) {
    return _getStorageValue(token, options) === '1';
}

/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} whether the user has opted out of the given opt type
 */
function hasOptedOut(token, options) {
    if (_hasDoNotTrackFlagOn(options)) {
        return true;
    }
    return _getStorageValue(token, options) === '0';
}

/**
 * Wrap a MixpanelLib method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function addOptOutCheckMixpanelLib(method) {
    return _addOptOutCheck(method, function(name) {
        return this.get_config(name);
    });
}

/**
 * Wrap a MixpanelPeople method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function addOptOutCheckMixpanelPeople(method) {
    return _addOptOutCheck(method, function(name) {
        return this._get_config(name);
    });
}

/**
 * Wrap a MixpanelGroup method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function addOptOutCheckMixpanelGroup(method) {
    return _addOptOutCheck(method, function(name) {
        return this._get_config(name);
    });
}

/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for the given token
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */
function clearOptInOut(token, options) {
    options = options || {};
    _getStorage(options).remove(_getStorageKey(token, options), !!options.crossSubdomainCookie);
}

/** Private **/

/**
 * Get storage util
 * @param {Object} [options]
 * @param {string} [options.persistenceType]
 * @returns {object} either _.cookie or _.localstorage
 */
function _getStorage(options) {
    options = options || {};
    return options.persistenceType === 'localStorage' ? _.localStorage : _.cookie;
}

/**
 * Get the name of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the name of the cookie for the given opt type
 */
function _getStorageKey(token, options) {
    options = options || {};
    return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
}

/**
 * Get the value of the cookie that is used for the given opt type (tracking, cookie, etc.)
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @returns {string} the value of the cookie for the given opt type
 */
function _getStorageValue(token, options) {
    return _getStorage(options).get(_getStorageKey(token, options));
}

/**
 * Check whether the user has set the DNT/doNotTrack setting to true in their browser
 * @param {Object} [options]
 * @param {string} [options.window] - alternate window object to check; used to force various DNT settings in browser tests
 * @returns {boolean} whether the DNT setting is true
 */
function _hasDoNotTrackFlagOn(options) {
    var win = (options && options.window) || window$1;
    var nav = win['navigator'] || {};
    var hasDntOn = false;

    _.each([
        nav['doNotTrack'], // standard
        nav['msDoNotTrack'],
        win['doNotTrack']
    ], function(dntValue) {
        if (_.includes([true, 1, '1', 'yes'], dntValue)) {
            hasDntOn = true;
        }
    });

    return hasDntOn;
}

/**
 * Set cookie/localstorage for the user indicating that they are opted in or out for the given opt type
 * @param {boolean} optValue - whether to opt the user in or out for the given opt type
 * @param {string} token - Mixpanel project tracking token
 * @param {Object} [options]
 * @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
 * @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
 * @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
 * @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
 * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
 * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
 */
function _optInOut(optValue, token, options) {
    if (!_.isString(token) || !token.length) {
        console.error('gdpr.' + (optValue ? 'optIn' : 'optOut') + ' called with an invalid token');
        return;
    }

    options = options || {};

    _getStorage(options).set(
        _getStorageKey(token, options),
        optValue ? 1 : 0,
        _.isNumber(options.cookieExpiration) ? options.cookieExpiration : null,
        !!options.crossSubdomainCookie,
        !!options.secureCookie
    );

    if (options.track && optValue) { // only track event if opting in (optValue=true)
        options.track(options.trackEventName || '$opt_in', options.trackProperties);
    }
}

/**
 * Wrap a method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
 * If the user has opted out, return early instead of executing the method.
 * If a callback argument was provided, execute it passing the 0 error code.
 * @param {function} method - wrapped method to be executed if the user has not opted out
 * @param {function} getConfigValue - getter function for the Mixpanel API token and other options to be used with opt-out check
 * @returns {*} the result of executing method OR undefined if the user has opted out
 */
function _addOptOutCheck(method, getConfigValue) {
    return function() {
        var optedOut = false;

        try {
            var token = getConfigValue.call(this, 'token');
            var persistenceType = getConfigValue.call(this, 'opt_out_tracking_persistence_type');
            var persistencePrefix = getConfigValue.call(this, 'opt_out_tracking_cookie_prefix');
            var win = getConfigValue.call(this, 'window'); // used to override window during browser tests

            if (token) { // if there was an issue getting the token, continue method execution as normal
                optedOut = hasOptedOut(token, {
                    persistenceType: persistenceType,
                    persistencePrefix: persistencePrefix,
                    window: win
                });
            }
        } catch(err) {
            console.error('Unexpected error when checking tracking opt-out status: ' + err);
        }

        if (!optedOut) {
            return method.apply(this, arguments);
        }

        var callback = arguments[arguments.length - 1];
        if (typeof(callback) === 'function') {
            callback(0);
        }

        return;
    };
}

/** @const */ var SET_ACTION      = '$set';
/** @const */ var SET_ONCE_ACTION = '$set_once';
/** @const */ var UNSET_ACTION    = '$unset';
/** @const */ var ADD_ACTION      = '$add';
/** @const */ var APPEND_ACTION   = '$append';
/** @const */ var UNION_ACTION    = '$union';
/** @const */ var REMOVE_ACTION   = '$remove';
/** @const */ var DELETE_ACTION   = '$delete';

// Common internal methods for mixpanel.people and mixpanel.group APIs.
// These methods shouldn't involve network I/O.
var apiActions = {
    set_action: function(prop, to) {
        var data = {};
        var $set = {};
        if (_.isObject(prop)) {
            _.each(prop, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $set[k] = v;
                }
            }, this);
        } else {
            $set[prop] = to;
        }

        data[SET_ACTION] = $set;
        return data;
    },

    unset_action: function(prop) {
        var data = {};
        var $unset = [];
        if (!_.isArray(prop)) {
            prop = [prop];
        }

        _.each(prop, function(k) {
            if (!this._is_reserved_property(k)) {
                $unset.push(k);
            }
        }, this);

        data[UNSET_ACTION] = $unset;
        return data;
    },

    set_once_action: function(prop, to) {
        var data = {};
        var $set_once = {};
        if (_.isObject(prop)) {
            _.each(prop, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $set_once[k] = v;
                }
            }, this);
        } else {
            $set_once[prop] = to;
        }
        data[SET_ONCE_ACTION] = $set_once;
        return data;
    },

    union_action: function(list_name, values) {
        var data = {};
        var $union = {};
        if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $union[k] = _.isArray(v) ? v : [v];
                }
            }, this);
        } else {
            $union[list_name] = _.isArray(values) ? values : [values];
        }
        data[UNION_ACTION] = $union;
        return data;
    },

    append_action: function(list_name, value) {
        var data = {};
        var $append = {};
        if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $append[k] = v;
                }
            }, this);
        } else {
            $append[list_name] = value;
        }
        data[APPEND_ACTION] = $append;
        return data;
    },

    remove_action: function(list_name, value) {
        var data = {};
        var $remove = {};
        if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    $remove[k] = v;
                }
            }, this);
        } else {
            $remove[list_name] = value;
        }
        data[REMOVE_ACTION] = $remove;
        return data;
    },

    delete_action: function() {
        var data = {};
        data[DELETE_ACTION] = '';
        return data;
    }
};

/**
 * Mixpanel Group Object
 * @constructor
 */
var MixpanelGroup = function() {};

_.extend(MixpanelGroup.prototype, apiActions);

MixpanelGroup.prototype._init = function(mixpanel_instance, group_key, group_id) {
    this._mixpanel = mixpanel_instance;
    this._group_key = group_key;
    this._group_id = group_id;
};

/**
 * Set properties on a group.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, dates, or lists
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
    var data = this.set_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    return this._send_request(data, callback);
});

/**
 * Set properties on a group, only if they do not yet exist.
 * This will not overwrite previous group property values, unlike
 * group.set().
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').set_once('Location', '405 Howard');
 *
 *     // or set multiple properties at once
 *     mixpanel.get_group('company', 'mixpanel').set_once({
 *          'Location': '405 Howard',
 *          'Founded' : 2009,
 *     });
 *     // properties can be strings, integers, lists or dates
 *
 * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
 * @param {*} [to] A value to set on the given property name
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
    var data = this.set_once_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    return this._send_request(data, callback);
});

/**
 * Unset properties on a group permanently.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').unset('Founded');
 *
 * @param {String} prop The name of the property.
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function(prop, callback) {
    var data = this.unset_action(prop);
    return this._send_request(data, callback);
});

/**
 * Merge a given list with a list-valued group property, excluding duplicate values.
 *
 * ### Usage:
 *
 *     // merge a value to a list, creating it if needed
 *     mixpanel.get_group('company', 'mixpanel').union('Location', ['San Francisco', 'London']);
 *
 * @param {String} list_name Name of the property.
 * @param {Array} values Values to merge with the given property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function(list_name, values, callback) {
    if (_.isObject(list_name)) {
        callback = values;
    }
    var data = this.union_action(list_name, values);
    return this._send_request(data, callback);
});

/**
 * Permanently delete a group.
 *
 * ### Usage:
 *     mixpanel.get_group('company', 'mixpanel').delete();
 */
MixpanelGroup.prototype['delete'] = addOptOutCheckMixpanelGroup(function(callback) {
    var data = this.delete_action();
    return this._send_request(data, callback);
});

/**
 * Remove a property from a group. The value will be ignored if doesn't exist.
 *
 * ### Usage:
 *
 *     mixpanel.get_group('company', 'mixpanel').remove('Location', 'London');
 *
 * @param {String} list_name Name of the property.
 * @param {Object} value Value to remove from the given group property
 * @param {Function} [callback] If provided, the callback will be called after the tracking event
 */
MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function(list_name, value, callback) {
    var data = this.remove_action(list_name, value);
    return this._send_request(data, callback);
});

MixpanelGroup.prototype._send_request = function(data, callback) {
    data['$group_key'] = this._group_key;
    data['$group_id'] = this._group_id;
    data['$token'] = this._get_config('token');

    var date_encoded_data = _.encodeDates(data);
    var truncated_data    = _.truncate(date_encoded_data, 255);
    var json_data         = _.JSONEncode(date_encoded_data);
    var encoded_data      = _.base64Encode(json_data);

    console$1.log(data);
    this._mixpanel._send_request(
        this._mixpanel.get_config('api_host') + '/groups/',
        {'data': encoded_data},
        this._mixpanel._prepare_callback(callback, truncated_data)
    );

    return truncated_data;
};

MixpanelGroup.prototype._is_reserved_property = function(prop) {
    return prop === '$group_key' || prop === '$group_id';
};

MixpanelGroup.prototype._get_config = function(conf) {
    return this._mixpanel.get_config(conf);
};

MixpanelGroup.prototype.toString = function() {
    return this._mixpanel.toString() + '.group.' + this._group_key + '.' + this._group_id;
};

// MixpanelGroup Exports
MixpanelGroup.prototype['remove']   = MixpanelGroup.prototype.remove;
MixpanelGroup.prototype['set']      = MixpanelGroup.prototype.set;
MixpanelGroup.prototype['set_once'] = MixpanelGroup.prototype.set_once;
MixpanelGroup.prototype['union']    = MixpanelGroup.prototype.union;
MixpanelGroup.prototype['unset']    = MixpanelGroup.prototype.unset;
MixpanelGroup.prototype['toString'] = MixpanelGroup.prototype.toString;

/*
 * Constants
 */
/** @const */ var SET_QUEUE_KEY          = '__mps';
/** @const */ var SET_ONCE_QUEUE_KEY     = '__mpso';
/** @const */ var UNSET_QUEUE_KEY        = '__mpus';
/** @const */ var ADD_QUEUE_KEY          = '__mpa';
/** @const */ var APPEND_QUEUE_KEY       = '__mpap';
/** @const */ var REMOVE_QUEUE_KEY       = '__mpr';
/** @const */ var UNION_QUEUE_KEY        = '__mpu';
// This key is deprecated, but we want to check for it to see whether aliasing is allowed.
/** @const */ var PEOPLE_DISTINCT_ID_KEY = '$people_distinct_id';
/** @const */ var ALIAS_ID_KEY           = '__alias';
/** @const */ var CAMPAIGN_IDS_KEY       = '__cmpns';
/** @const */ var EVENT_TIMERS_KEY       = '__timers';
/** @const */ var RESERVED_PROPERTIES = [
    SET_QUEUE_KEY,
    SET_ONCE_QUEUE_KEY,
    UNSET_QUEUE_KEY,
    ADD_QUEUE_KEY,
    APPEND_QUEUE_KEY,
    REMOVE_QUEUE_KEY,
    UNION_QUEUE_KEY,
    PEOPLE_DISTINCT_ID_KEY,
    ALIAS_ID_KEY,
    CAMPAIGN_IDS_KEY,
    EVENT_TIMERS_KEY
];

/**
 * Mixpanel Persistence Object
 * @constructor
 */
var MixpanelPersistence = function(config) {
    this['props'] = {};
    this.campaign_params_saved = false;

    if (config['persistence_name']) {
        this.name = 'mp_' + config['persistence_name'];
    } else {
        this.name = 'mp_' + config['token'] + '_mixpanel';
    }

    var storage_type = config['persistence'];
    if (storage_type !== 'cookie' && storage_type !== 'localStorage') {
        console$1.critical('Unknown persistence type ' + storage_type + '; falling back to cookie');
        storage_type = config['persistence'] = 'cookie';
    }

    if (storage_type === 'localStorage' && _.localStorage.is_supported()) {
        this.storage = _.localStorage;
    } else {
        this.storage = _.cookie;
    }

    this.load();
    this.update_config(config);
    this.upgrade(config);
    this.save();
};

MixpanelPersistence.prototype.properties = function() {
    var p = {};
    // Filter out reserved properties
    _.each(this['props'], function(v, k) {
        if (!_.include(RESERVED_PROPERTIES, k)) {
            p[k] = v;
        }
    });
    return p;
};

MixpanelPersistence.prototype.load = function() {
    if (this.disabled) { return; }

    var entry = this.storage.parse(this.name);

    if (entry) {
        this['props'] = _.extend({}, entry);
    }
};

MixpanelPersistence.prototype.upgrade = function(config) {
    var upgrade_from_old_lib = config['upgrade'],
        old_cookie_name,
        old_cookie;

    if (upgrade_from_old_lib) {
        old_cookie_name = 'mp_super_properties';
        // Case where they had a custom cookie name before.
        if (typeof(upgrade_from_old_lib) === 'string') {
            old_cookie_name = upgrade_from_old_lib;
        }

        old_cookie = this.storage.parse(old_cookie_name);

        // remove the cookie
        this.storage.remove(old_cookie_name);
        this.storage.remove(old_cookie_name, true);

        if (old_cookie) {
            this['props'] = _.extend(
                this['props'],
                old_cookie['all'],
                old_cookie['events']
            );
        }
    }

    if (!config['cookie_name'] && config['name'] !== 'mixpanel') {
        // special case to handle people with cookies of the form
        // mp_TOKEN_INSTANCENAME from the first release of this library
        old_cookie_name = 'mp_' + config['token'] + '_' + config['name'];
        old_cookie = this.storage.parse(old_cookie_name);

        if (old_cookie) {
            this.storage.remove(old_cookie_name);
            this.storage.remove(old_cookie_name, true);

            // Save the prop values that were in the cookie from before -
            // this should only happen once as we delete the old one.
            this.register_once(old_cookie);
        }
    }

    if (this.storage === _.localStorage) {
        old_cookie = _.cookie.parse(this.name);

        _.cookie.remove(this.name);
        _.cookie.remove(this.name, true);

        if (old_cookie) {
            this.register_once(old_cookie);
        }
    }
};

MixpanelPersistence.prototype.save = function() {
    if (this.disabled) { return; }
    this._expire_notification_campaigns();
    this.storage.set(
        this.name,
        _.JSONEncode(this['props']),
        this.expire_days,
        this.cross_subdomain,
        this.secure
    );
};

MixpanelPersistence.prototype.remove = function() {
    // remove both domain and subdomain cookies
    this.storage.remove(this.name, false);
    this.storage.remove(this.name, true);
};

// removes the storage entry and deletes all loaded data
// forced name for tests
MixpanelPersistence.prototype.clear = function() {
    this.remove();
    this['props'] = {};
};

/**
* @param {Object} props
* @param {*=} default_value
* @param {number=} days
*/
MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
    if (_.isObject(props)) {
        if (typeof(default_value) === 'undefined') { default_value = 'None'; }
        this.expire_days = (typeof(days) === 'undefined') ? this.default_expiry : days;

        _.each(props, function(val, prop) {
            if (!this['props'].hasOwnProperty(prop) || this['props'][prop] === default_value) {
                this['props'][prop] = val;
            }
        }, this);

        this.save();

        return true;
    }
    return false;
};

/**
* @param {Object} props
* @param {number=} days
*/
MixpanelPersistence.prototype.register = function(props, days) {
    if (_.isObject(props)) {
        this.expire_days = (typeof(days) === 'undefined') ? this.default_expiry : days;

        _.extend(this['props'], props);

        this.save();

        return true;
    }
    return false;
};

MixpanelPersistence.prototype.unregister = function(prop) {
    if (prop in this['props']) {
        delete this['props'][prop];
        this.save();
    }
};

MixpanelPersistence.prototype._expire_notification_campaigns = _.safewrap(function() {
    var campaigns_shown = this['props'][CAMPAIGN_IDS_KEY],
        EXPIRY_TIME = Config.DEBUG ? 60 * 1000 : 60 * 60 * 1000; // 1 minute (Config.DEBUG) / 1 hour (PDXN)
    if (!campaigns_shown) {
        return;
    }
    for (var campaign_id in campaigns_shown) {
        if (1 * new Date() - campaigns_shown[campaign_id] > EXPIRY_TIME) {
            delete campaigns_shown[campaign_id];
        }
    }
    if (_.isEmptyObject(campaigns_shown)) {
        delete this['props'][CAMPAIGN_IDS_KEY];
    }
});

MixpanelPersistence.prototype.update_campaign_params = function() {
    if (!this.campaign_params_saved) {
        this.register_once(_.info.campaignParams());
        this.campaign_params_saved = true;
    }
};

MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
    this.register(_.info.searchInfo(referrer));
};

// EXPORTED METHOD, we test this directly.
MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
    // If referrer doesn't exist, we want to note the fact that it was type-in traffic.
    this.register_once({
        '$initial_referrer': referrer || '$direct',
        '$initial_referring_domain': _.info.referringDomain(referrer) || '$direct'
    }, '');
};

MixpanelPersistence.prototype.get_referrer_info = function() {
    return _.strip_empty_properties({
        '$initial_referrer': this['props']['$initial_referrer'],
        '$initial_referring_domain': this['props']['$initial_referring_domain']
    });
};

// safely fills the passed in object with stored properties,
// does not override any properties defined in both
// returns the passed in object
MixpanelPersistence.prototype.safe_merge = function(props) {
    _.each(this['props'], function(val, prop) {
        if (!(prop in props)) {
            props[prop] = val;
        }
    });

    return props;
};

MixpanelPersistence.prototype.update_config = function(config) {
    this.default_expiry = this.expire_days = config['cookie_expiration'];
    this.set_disabled(config['disable_persistence']);
    this.set_cross_subdomain(config['cross_subdomain_cookie']);
    this.set_secure(config['secure_cookie']);
};

MixpanelPersistence.prototype.set_disabled = function(disabled) {
    this.disabled = disabled;
    if (this.disabled) {
        this.remove();
    } else {
        this.save();
    }
};

MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
    if (cross_subdomain !== this.cross_subdomain) {
        this.cross_subdomain = cross_subdomain;
        this.remove();
        this.save();
    }
};

MixpanelPersistence.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain;
};

MixpanelPersistence.prototype.set_secure = function(secure) {
    if (secure !== this.secure) {
        this.secure = secure ? true : false;
        this.remove();
        this.save();
    }
};

MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
    var q_key = this._get_queue_key(queue),
        q_data = data[queue],
        set_q = this._get_or_create_queue(SET_ACTION),
        set_once_q = this._get_or_create_queue(SET_ONCE_ACTION),
        unset_q = this._get_or_create_queue(UNSET_ACTION),
        add_q = this._get_or_create_queue(ADD_ACTION),
        union_q = this._get_or_create_queue(UNION_ACTION),
        remove_q = this._get_or_create_queue(REMOVE_ACTION, []),
        append_q = this._get_or_create_queue(APPEND_ACTION, []);

    if (q_key === SET_QUEUE_KEY) {
        // Update the set queue - we can override any existing values
        _.extend(set_q, q_data);
        // if there was a pending increment, override it
        // with the set.
        this._pop_from_people_queue(ADD_ACTION, q_data);
        // if there was a pending union, override it
        // with the set.
        this._pop_from_people_queue(UNION_ACTION, q_data);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === SET_ONCE_QUEUE_KEY) {
        // only queue the data if there is not already a set_once call for it.
        _.each(q_data, function(v, k) {
            if (!(k in set_once_q)) {
                set_once_q[k] = v;
            }
        });
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === UNSET_QUEUE_KEY) {
        _.each(q_data, function(prop) {

            // undo previously-queued actions on this key
            _.each([set_q, set_once_q, add_q, union_q], function(enqueued_obj) {
                if (prop in enqueued_obj) {
                    delete enqueued_obj[prop];
                }
            });
            _.each(append_q, function(append_obj) {
                if (prop in append_obj) {
                    delete append_obj[prop];
                }
            });

            unset_q[prop] = true;

        });
    } else if (q_key === ADD_QUEUE_KEY) {
        _.each(q_data, function(v, k) {
            // If it exists in the set queue, increment
            // the value
            if (k in set_q) {
                set_q[k] += v;
            } else {
                // If it doesn't exist, update the add
                // queue
                if (!(k in add_q)) {
                    add_q[k] = 0;
                }
                add_q[k] += v;
            }
        }, this);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === UNION_QUEUE_KEY) {
        _.each(q_data, function(v, k) {
            if (_.isArray(v)) {
                if (!(k in union_q)) {
                    union_q[k] = [];
                }
                // We may send duplicates, the server will dedup them.
                union_q[k] = union_q[k].concat(v);
            }
        });
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    } else if (q_key === REMOVE_QUEUE_KEY) {
        remove_q.push(q_data);
        this._pop_from_people_queue(APPEND_ACTION, q_data);
    } else if (q_key === APPEND_QUEUE_KEY) {
        append_q.push(q_data);
        this._pop_from_people_queue(UNSET_ACTION, q_data);
    }

    console$1.log('MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):');
    console$1.log(data);

    this.save();
};

MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
    var q = this._get_queue(queue);
    if (!_.isUndefined(q)) {
        _.each(data, function(v, k) {
            if (queue === APPEND_ACTION || queue === REMOVE_ACTION) {
                // list actions: only remove if both k+v match
                // e.g. remove should not override append in a case like
                // append({foo: 'bar'}); remove({foo: 'qux'})
                _.each(q, function(queued_action) {
                    if (queued_action[k] === v) {
                        delete queued_action[k];
                    }
                });
            } else {
                delete q[k];
            }
        }, this);

        this.save();
    }
};

MixpanelPersistence.prototype._get_queue_key = function(queue) {
    if (queue === SET_ACTION) {
        return SET_QUEUE_KEY;
    } else if (queue === SET_ONCE_ACTION) {
        return SET_ONCE_QUEUE_KEY;
    } else if (queue === UNSET_ACTION) {
        return UNSET_QUEUE_KEY;
    } else if (queue === ADD_ACTION) {
        return ADD_QUEUE_KEY;
    } else if (queue === APPEND_ACTION) {
        return APPEND_QUEUE_KEY;
    } else if (queue === REMOVE_ACTION) {
        return REMOVE_QUEUE_KEY;
    } else if (queue === UNION_ACTION) {
        return UNION_QUEUE_KEY;
    } else {
        console$1.error('Invalid queue:', queue);
    }
};

MixpanelPersistence.prototype._get_queue = function(queue) {
    return this['props'][this._get_queue_key(queue)];
};
MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
    var key = this._get_queue_key(queue);
    default_val = _.isUndefined(default_val) ? {} : default_val;

    return this['props'][key] || (this['props'][key] = default_val);
};

MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
    var timers = this['props'][EVENT_TIMERS_KEY] || {};
    timers[event_name] = timestamp;
    this['props'][EVENT_TIMERS_KEY] = timers;
    this.save();
};

MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
    var timers = this['props'][EVENT_TIMERS_KEY] || {};
    var timestamp = timers[event_name];
    if (!_.isUndefined(timestamp)) {
        delete this['props'][EVENT_TIMERS_KEY][event_name];
        this.save();
    }
    return timestamp;
};

/*
 * This file is a js implementation for a subset in eval_node.c
 */

/*
 * Constants
 */
// Metadata keys
/** @const */   var OPERATOR_KEY                  = 'operator';
/** @const */   var PROPERTY_KEY                  = 'property';
/** @const */   var WINDOW_KEY                    = 'window';
/** @const */   var UNIT_KEY                      = 'unit';
/** @const */   var VALUE_KEY                     = 'value';
/** @const */   var HOUR_KEY                      = 'hour';
/** @const */   var DAY_KEY                       = 'day';
/** @const */   var WEEK_KEY                      = 'week';
/** @const */   var MONTH_KEY                     = 'month';

// Operands
/** @const */   var EVENT_PROPERTY         = 'event';
/** @const */   var LITERAL_PROPERTY       = 'literal';

// Binary Operators
/** @const */   var AND_OPERATOR           = 'and';
/** @const */   var OR_OPERATOR            = 'or';
/** @const */   var IN_OPERATOR            = 'in';
/** @const */   var NOT_IN_OPERATOR        = 'not in';
/** @const */   var PLUS_OPERATOR          = '+';
/** @const */   var MINUS_OPERATOR         = '-';
/** @const */   var MUL_OPERATOR           = '*';
/** @const */   var DIV_OPERATOR           = '/';
/** @const */   var MOD_OPERATOR           = '%';
/** @const */   var EQUALS_OPERATOR        = '==';
/** @const */   var NOT_EQUALS_OPERATOR    = '!=';
/** @const */   var GREATER_OPERATOR       = '>';
/** @const */   var LESS_OPERATOR          = '<';
/** @const */   var GREATER_EQUAL_OPERATOR = '>=';
/** @const */   var LESS_EQUAL_OPERATOR    = '<=';

// Typecast Operators
/** @const */   var BOOLEAN_OPERATOR       = 'boolean';
/** @const */   var DATETIME_OPERATOR      = 'datetime';
/** @const */   var LIST_OPERATOR          = 'list';
/** @const */   var NUMBER_OPERATOR        = 'number';
/** @const */   var STRING_OPERATOR        = 'string';

// Unary Operators
/** @const */   var NOT_OPERATOR           = 'not';
/** @const */   var DEFINED_OPERATOR       = 'defined';
/** @const */   var NOT_DEFINED_OPERATOR   = 'not defined';

// Special literals
/** @const */   var NOW_LITERAL            = 'now';

// Type cast functions
function toNumber(value) {
    if (value === null) {
        return null;
    }

    switch (typeof(value)) {
        case 'object':
            if (_.isDate(value) && value.getTime() >= 0) {
                return value.getTime();
            }
            return null;
        case 'boolean':
            return Number(value);
        case 'number':
            return value;
        case 'string':
            value = Number(value);
            if (!isNaN(value)) {
                return value;
            }
            return 0;
    }
    return null;
}

function evaluateNumber(op, properties) {
    if (!op['operator'] || op['operator'] !== NUMBER_OPERATOR || !op['children'] || op['children'].length !== 1) {
        throw ('Invalid cast operator: number ' + op);
    }

    return toNumber(evaluateSelector(op['children'][0], properties));
}

function toBoolean(value) {
    if (value === null) {
        return false;
    }

    switch (typeof value) {
        case 'boolean':
            return value;
        case 'number':
            return value !== 0.0;
        case 'string':
            return value.length > 0;
        case 'object':
            if (_.isArray(value) && value.length > 0) {
                return true;
            }
            if (_.isDate(value) && value.getTime() > 0) {
                return true;
            }
            if (_.isObject(value) && !_.isEmptyObject(value)) {
                return true;
            }
            return false;
    }
    return false;
}

function evaluateBoolean(op, properties) {
    if (!op['operator'] || op['operator'] !== BOOLEAN_OPERATOR || !op['children'] || op['children'].length !== 1) {
        throw ('Invalid cast operator: boolean ' + op);
    }

    return toBoolean(evaluateSelector(op['children'][0], properties));
}

function evaluateDateTime(op, properties) {
    if (!op['operator'] || op['operator'] !== DATETIME_OPERATOR || !op['children'] || op['children'].length !== 1) {
        throw ('Invalid cast operator: datetime ' + op);
    }

    var v = evaluateSelector(op['children'][0], properties);
    if (v === null) {
        return null;
    }

    switch (typeof(v)) {
        case 'number':
        case 'string':
            var d = new Date(v);
            if (isNaN(d.getTime())) {
                return null;
            }
            return d;
        case 'object':
            if (_.isDate(v)) {
                return v;
            }
    }

    return null;
}

function evaluateList(op, properties) {
    if (!op['operator'] || op['operator'] !== LIST_OPERATOR || !op['children'] || op['children'].length !== 1) {
        throw ('Invalid cast operator: list ' + op);
    }

    var v = evaluateSelector(op['children'][0], properties);
    if (v === null) {
        return null;
    }

    if (_.isArray(v)) {
        return v;
    }

    return null;
}

function evaluateString(op, properties) {
    if (!op['operator'] || op['operator'] !== STRING_OPERATOR || !op['children'] || op['children'].length !== 1) {
        throw ('Invalid cast operator: string ' + op);
    }

    var v = evaluateSelector(op['children'][0], properties);
    switch (typeof(v)) {
        case 'object':
            if (_.isDate(v)) {
                return v.toJSON();
            }
            return JSON.stringify(v);
    }
    return String(v);
}

// Operators
function evaluateAnd(op, properties) {
    if (!op['operator'] || op['operator'] !== AND_OPERATOR || !op['children'] || op['children'].length !== 2) {
        throw ('Invalid operator: AND ' + op);
    }

    return toBoolean(evaluateSelector(op['children'][0], properties)) && toBoolean(evaluateSelector(op['children'][1], properties));
}

function evaluateOr(op, properties) {
    if (!op['operator'] || op['operator'] !== OR_OPERATOR || !op['children'] || op['children'].length !== 2) {
        throw ('Invalid operator: OR ' + op);
    }

    return toBoolean(evaluateSelector(op['children'][0], properties)) || toBoolean(evaluateSelector(op['children'][1], properties));
}

function evaluateIn(op, properties) {
    if (!op['operator'] || [IN_OPERATOR, NOT_IN_OPERATOR].indexOf(op['operator']) === -1 || !op['children'] || op['children'].length !== 2) {
        throw ('Invalid operator: IN/NOT IN ' + op);
    }
    var leftValue = evaluateSelector(op['children'][0], properties);
    var rightValue = evaluateSelector(op['children'][1], properties);

    if (!_.isArray(rightValue) && !_.isString(rightValue)) {
        throw ('Invalid operand for operator IN: invalid type' + rightValue);
    }

    var v = rightValue.indexOf(leftValue) > -1;
    if (op['operator'] === NOT_IN_OPERATOR) {
        return !v;
    }
    return v;
}

function evaluatePlus(op, properties) {
    if (!op['operator'] || op['operator'] !== PLUS_OPERATOR || !op['children'] || op['children'].length < 2) {
        throw ('Invalid operator: PLUS ' + op);
    }
    var l = evaluateSelector(op['children'][0], properties);
    var r = evaluateSelector(op['children'][1], properties);

    if (typeof l === 'number' && typeof r === 'number') {
        return l + r;
    }
    if (typeof l === 'string' && typeof r === 'string') {
        return l + r;
    }
    return null;
}

function evaluateArithmetic(op, properties) {
    if (!op['operator'] || [MINUS_OPERATOR, MUL_OPERATOR, DIV_OPERATOR, MOD_OPERATOR].indexOf(op['operator']) === -1 ||
        !op['children'] || op['children'].length < 2) {
        throw ('Invalid arithmetic operator ' + op);
    }

    var l = evaluateSelector(op['children'][0], properties);
    var r = evaluateSelector(op['children'][1], properties);

    if (typeof l === 'number' && typeof r === 'number') {
        switch (op['operator']) {
            case MINUS_OPERATOR:
                return l - r;
            case MUL_OPERATOR:
                return l * r;
            case DIV_OPERATOR:
                if (r !== 0) {
                    return l / r;
                }
                return null;
            case MOD_OPERATOR:
                if (r === 0) {
                    return null;
                }
                if (l === 0) {
                    return 0;
                }
                if ((l < 0 && r > 0) || (l > 0 && r < 0)) {
                    /* Mimic python modulo - result takes sign of the divisor
                     * if one operand is negative. */
                    return -(Math.floor(l / r) * r - l);
                }
                return l % r;
            default:
                throw('Unknown operator: ' + op['operator']);
        }
    }

    return null;
}

function _isArrayEqual(l, r) {
    if (l === r) return true;
    if (l === null || r === null) return false;
    if (l.length !== r.length) return false;

    for (var i = 0; i < l.length; i++) {
        if (l[i] !== r[i]) {
            return false;
        }
    }

    return true;
}

function _isEqual(l, r) {
    if ( l === null && l === r ) {
        return true;
    }
    if (typeof l === typeof r) {
        switch (typeof l) {
            case 'number':
            case 'string':
            case 'boolean':
                return l === r;
            case 'object':
                if (_.isArray(l) && _.isArray(r)) {
                    return _isArrayEqual(l, r);
                }
                if (_.isDate(l) && _.isDate(r)) {
                    return l.getTime() === r.getTime();
                }
                if (_.isObject(l) && _.isObject(r)) {
                    return JSON.stringify(l) === JSON.stringify(r);
                }
        }
    }
    return false;
}

function evaluateEquality(op, properties) {
    if (!op['operator'] || [EQUALS_OPERATOR, NOT_EQUALS_OPERATOR].indexOf(op['operator']) === -1 || !op['children'] || op['children'].length !== 2) {
        throw ('Invalid equality operator ' + op);
    }

    var v = _isEqual(evaluateSelector(op['children'][0], properties), evaluateSelector(op['children'][1], properties));

    switch (op['operator']) {
        case EQUALS_OPERATOR:
            return v;
        case NOT_EQUALS_OPERATOR:
            return !v;
    }
}

function evaluateComparison(op, properties) {
    if (!op['operator'] ||
        [GREATER_OPERATOR, GREATER_EQUAL_OPERATOR, LESS_OPERATOR, LESS_EQUAL_OPERATOR].indexOf(op['operator']) === -1 ||
        !op['children'] || op['children'].length !== 2) {
        throw ('Invalid comparison operator ' + op);
    }
    var l = evaluateSelector(op['children'][0], properties);
    var r = evaluateSelector(op['children'][1], properties);

    if (typeof(l) === typeof(r)) {
        if (typeof(r) === 'number' || _.isDate(r)) {
            l = toNumber(l);
            r = toNumber(r);
            switch (op['operator']) {
                case GREATER_OPERATOR:
                    return l > r;
                case GREATER_EQUAL_OPERATOR:
                    return l >= r;
                case LESS_OPERATOR:
                    return l < r;
                case LESS_EQUAL_OPERATOR:
                    return l <= r;
            }
        } else if (typeof(r) === 'string') {
            var compare = l.localeCompare(r);
            switch (op['operator']) {
                case GREATER_OPERATOR:
                    return compare > 0;
                case GREATER_EQUAL_OPERATOR:
                    return compare >= 0;
                case LESS_OPERATOR:
                    return compare < 0;
                case LESS_EQUAL_OPERATOR:
                    return compare <= 0;
            }
        }
    }

    return null;
}

function evaluateDefined(op, properties) {
    if (!op['operator'] || [DEFINED_OPERATOR, NOT_DEFINED_OPERATOR].indexOf(op['operator']) === -1 ||
        !op['children'] || op['children'].length !== 1) {
        throw ('Invalid defined/not defined operator: ' + op);
    }

    var b = evaluateSelector(op['children'][0], properties) !== null;
    if (op['operator'] === NOT_DEFINED_OPERATOR) {
        return !b;
    }

    return b;
}

function evaluateNot(op, properties) {
    if (!op['operator'] || op['operator'] !== NOT_OPERATOR || !op['children'] || op['children'].length !== 1) {
        throw ('Invalid not operator: ' + op);
    }

    var v = evaluateSelector(op['children'][0], properties);
    if (v === null) {
        return true;
    }

    if (typeof(v) === 'boolean') {
        return !v;
    }

    return null;
}

function evaluateOperator(op, properties) {
    if (!op['operator']) {
        throw ('Invalid operator: operator key missing ' + op);
    }

    switch (op['operator']) {
        case AND_OPERATOR:
            return evaluateAnd(op, properties);
        case OR_OPERATOR:
            return evaluateOr(op, properties);
        case IN_OPERATOR:
        case NOT_IN_OPERATOR:
            return evaluateIn(op, properties);
        case PLUS_OPERATOR:
            return evaluatePlus(op, properties);
        case MINUS_OPERATOR:
        case MUL_OPERATOR:
        case DIV_OPERATOR:
        case MOD_OPERATOR:
            return evaluateArithmetic(op, properties);
        case EQUALS_OPERATOR:
        case NOT_EQUALS_OPERATOR:
            return evaluateEquality(op, properties);
        case GREATER_OPERATOR:
        case LESS_OPERATOR:
        case GREATER_EQUAL_OPERATOR:
        case LESS_EQUAL_OPERATOR:
            return evaluateComparison(op, properties);
        case BOOLEAN_OPERATOR:
            return evaluateBoolean(op, properties);
        case DATETIME_OPERATOR:
            return evaluateDateTime(op, properties);
        case LIST_OPERATOR:
            return evaluateList(op, properties);
        case NUMBER_OPERATOR:
            return evaluateNumber(op, properties);
        case STRING_OPERATOR:
            return evaluateString(op, properties);
        case DEFINED_OPERATOR:
        case NOT_DEFINED_OPERATOR:
            return evaluateDefined(op, properties);
        case NOT_OPERATOR:
            return evaluateNot(op, properties);
    }
}

function evaluateWindow(value) {
    var win = value[WINDOW_KEY];
    if (!win || !win[UNIT_KEY] || !win[VALUE_KEY]) {
        throw('Invalid window: missing required keys ' + JSON.stringify(value));
    }
    var out = new Date();
    switch (win[UNIT_KEY]) {
        case HOUR_KEY:
            out.setTime(out.getTime() + (win[VALUE_KEY]*-1*60*60*1000));
            break;
        case DAY_KEY:
            out.setTime(out.getTime() + (win[VALUE_KEY]*-1*24*60*60*1000));
            break;
        case WEEK_KEY:
            out.setTime(out.getTime() + (win[VALUE_KEY]*-1*7*24*60*60*1000));
            break;
        case MONTH_KEY:
            out.setTime(out.getTime() + (win[VALUE_KEY]*-1*30*24*60*60*1000));
            break;
        default:
            throw('Invalid unit: ' + win[UNIT_KEY]);
    }

    return out;
}

function evaluateOperand(op, properties) {
    if (!op['property'] || !op['value']) {
        throw('Invalid operand: missing required keys ' + op);
    }
    switch (op['property']) {
        case EVENT_PROPERTY:
            if (properties[op['value']] !== undefined) {
                return properties[op['value']];
            }
            return null;
        case LITERAL_PROPERTY:
            if (op['value'] === NOW_LITERAL) {
                return new Date();
            }
            if (typeof(op['value']) === 'object') {
                return evaluateWindow(op['value']);
            }
            return op['value'];
        default:
            throw('Invalid operand: Invalid property type ' + op['property']);
    }
}

function evaluateSelector(filters, properties) {
    if (filters[PROPERTY_KEY]) {
        return evaluateOperand(filters, properties);
    }
    if (filters[OPERATOR_KEY]) {
        return evaluateOperator(filters, properties);
    }
}

// Internal class for notification display

var MixpanelNotification = function(notif_data, mixpanel_instance) {
    _.bind_instance_methods(this);

    this.mixpanel          = mixpanel_instance;
    this.persistence       = this.mixpanel['persistence'];
    this.resource_protocol = this.mixpanel.get_config('inapp_protocol');
    this.cdn_host          = this.mixpanel.get_config('cdn');

    this.campaign_id = _.escapeHTML(notif_data['id']);
    this.message_id  = _.escapeHTML(notif_data['message_id']);

    this.body            = (_.escapeHTML(notif_data['body']) || '').replace(/\n/g, '<br/>');
    this.cta             = _.escapeHTML(notif_data['cta']) || 'Close';
    this.notif_type      = _.escapeHTML(notif_data['type']) || 'takeover';
    this.style           = _.escapeHTML(notif_data['style']) || 'light';
    this.title           = _.escapeHTML(notif_data['title']) || '';
    this.video_width     = MixpanelNotification.VIDEO_WIDTH;
    this.video_height    = MixpanelNotification.VIDEO_HEIGHT;

    this.display_triggers = notif_data['display_triggers'] || [];

    // These fields are url-sanitized in the backend already.
    this.dest_url        = notif_data['cta_url'] || null;
    this.image_url       = notif_data['image_url'] || null;
    this.thumb_image_url = notif_data['thumb_image_url'] || null;
    this.video_url       = notif_data['video_url'] || null;

    if (this.thumb_image_url && this.thumb_image_url.indexOf('//') === 0) {
        this.thumb_image_url = this.thumb_image_url.replace('//', this.resource_protocol);
    }

    this.clickthrough = true;
    if (!this.dest_url) {
        this.dest_url = '#dismiss';
        this.clickthrough = false;
    }

    this.mini = this.notif_type === 'mini';
    if (!this.mini) {
        this.notif_type = 'takeover';
    }
    this.notif_width = !this.mini ? MixpanelNotification.NOTIF_WIDTH : MixpanelNotification.NOTIF_WIDTH_MINI;

    this._set_client_config();
    this.imgs_to_preload = this._init_image_html();
    this._init_video();
};

MixpanelNotification.ANIM_TIME         = 200;
MixpanelNotification.MARKUP_PREFIX     = 'mixpanel-notification';
MixpanelNotification.BG_OPACITY        = 0.6;
MixpanelNotification.NOTIF_TOP         = 25;
MixpanelNotification.NOTIF_START_TOP   = 200;
MixpanelNotification.NOTIF_WIDTH       = 388;
MixpanelNotification.NOTIF_WIDTH_MINI  = 420;
MixpanelNotification.NOTIF_HEIGHT_MINI = 85;
MixpanelNotification.THUMB_BORDER_SIZE = 5;
MixpanelNotification.THUMB_IMG_SIZE    = 60;
MixpanelNotification.THUMB_OFFSET      = Math.round(MixpanelNotification.THUMB_IMG_SIZE / 2);
MixpanelNotification.VIDEO_WIDTH       = 595;
MixpanelNotification.VIDEO_HEIGHT      = 334;

MixpanelNotification.prototype.show = function() {
    var self = this;
    this._set_client_config();

    // don't display until HTML body exists
    if (!this.body_el) {
        setTimeout(function() { self.show(); }, 300);
        return;
    }

    this._init_styles();
    this._init_notification_el();

    // wait for any images to load before showing notification
    this._preload_images(this._attach_and_animate);
};

MixpanelNotification.prototype.dismiss = _.safewrap(function() {
    if (!this.marked_as_shown) {
        // unexpected condition: user interacted with notif even though we didn't consider it
        // visible (see _mark_as_shown()); send tracking signals to mark delivery
        this._mark_delivery({'invisible': true});
    }

    var exiting_el = this.showing_video ? this._get_el('video') : this._get_notification_display_el();
    if (this.use_transitions) {
        this._remove_class('bg', 'visible');
        this._add_class(exiting_el, 'exiting');
        setTimeout(this._remove_notification_el, MixpanelNotification.ANIM_TIME);
    } else {
        var notif_attr, notif_start, notif_goal;
        if (this.mini) {
            notif_attr  = 'right';
            notif_start = 20;
            notif_goal  = -100;
        } else {
            notif_attr  = 'top';
            notif_start = MixpanelNotification.NOTIF_TOP;
            notif_goal  = MixpanelNotification.NOTIF_START_TOP + MixpanelNotification.NOTIF_TOP;
        }
        this._animate_els([
            {
                el:    this._get_el('bg'),
                attr:  'opacity',
                start: MixpanelNotification.BG_OPACITY,
                goal:  0.0
            },
            {
                el:    exiting_el,
                attr:  'opacity',
                start: 1.0,
                goal:  0.0
            },
            {
                el:    exiting_el,
                attr:  notif_attr,
                start: notif_start,
                goal:  notif_goal
            }
        ], MixpanelNotification.ANIM_TIME, this._remove_notification_el);
    }
});

MixpanelNotification.prototype._add_class = _.safewrap(function(el, class_name) {
    class_name = MixpanelNotification.MARKUP_PREFIX + '-' + class_name;
    if (typeof el === 'string') {
        el = this._get_el(el);
    }
    if (!el.className) {
        el.className = class_name;
    } else if (!~(' ' + el.className + ' ').indexOf(' ' + class_name + ' ')) {
        el.className += ' ' + class_name;
    }
});
MixpanelNotification.prototype._remove_class = _.safewrap(function(el, class_name) {
    class_name = MixpanelNotification.MARKUP_PREFIX + '-' + class_name;
    if (typeof el === 'string') {
        el = this._get_el(el);
    }
    if (el.className) {
        el.className = (' ' + el.className + ' ')
            .replace(' ' + class_name + ' ', '')
            .replace(/^[\s\xA0]+/, '')
            .replace(/[\s\xA0]+$/, '');
    }
});

MixpanelNotification.prototype._animate_els = _.safewrap(function(anims, mss, done_cb, start_time) {
    var self = this,
        in_progress = false,
        ai, anim,
        cur_time = 1 * new Date(), time_diff;

    start_time = start_time || cur_time;
    time_diff = cur_time - start_time;

    for (ai = 0; ai < anims.length; ai++) {
        anim = anims[ai];
        if (typeof anim.val === 'undefined') {
            anim.val = anim.start;
        }
        if (anim.val !== anim.goal) {
            in_progress = true;
            var anim_diff = anim.goal - anim.start,
                anim_dir = anim.goal >= anim.start ? 1 : -1;
            anim.val = anim.start + anim_diff * time_diff / mss;
            if (anim.attr !== 'opacity') {
                anim.val = Math.round(anim.val);
            }
            if ((anim_dir > 0 && anim.val >= anim.goal) || (anim_dir < 0 && anim.val <= anim.goal)) {
                anim.val = anim.goal;
            }
        }
    }
    if (!in_progress) {
        if (done_cb) {
            done_cb();
        }
        return;
    }

    for (ai = 0; ai < anims.length; ai++) {
        anim = anims[ai];
        if (anim.el) {
            var suffix = anim.attr === 'opacity' ? '' : 'px';
            anim.el.style[anim.attr] = String(anim.val) + suffix;
        }
    }
    setTimeout(function() { self._animate_els(anims, mss, done_cb, start_time); }, 10);
});

MixpanelNotification.prototype._attach_and_animate = _.safewrap(function() {
    var self = this;

    // no possibility to double-display
    if (this.shown || this._get_shown_campaigns()[this.campaign_id]) {
        return;
    }
    this.shown = true;

    this.body_el.appendChild(this.notification_el);
    setTimeout(function() {
        var notif_el = self._get_notification_display_el();
        if (self.use_transitions) {
            if (!self.mini) {
                self._add_class('bg', 'visible');
            }
            self._add_class(notif_el, 'visible');
            self._mark_as_shown();
        } else {
            var notif_attr, notif_start, notif_goal;
            if (self.mini) {
                notif_attr  = 'right';
                notif_start = -100;
                notif_goal  = 20;
            } else {
                notif_attr  = 'top';
                notif_start = MixpanelNotification.NOTIF_START_TOP + MixpanelNotification.NOTIF_TOP;
                notif_goal  = MixpanelNotification.NOTIF_TOP;
            }
            self._animate_els([
                {
                    el:    self._get_el('bg'),
                    attr:  'opacity',
                    start: 0.0,
                    goal:  MixpanelNotification.BG_OPACITY
                },
                {
                    el:    notif_el,
                    attr:  'opacity',
                    start: 0.0,
                    goal:  1.0
                },
                {
                    el:    notif_el,
                    attr:  notif_attr,
                    start: notif_start,
                    goal:  notif_goal
                }
            ], MixpanelNotification.ANIM_TIME, self._mark_as_shown);
        }
    }, 100);
    _.register_event(self._get_el('cancel'), 'click', function(e) {
        e.preventDefault();
        self.dismiss();
    });
    var click_el = self._get_el('button') ||
                        self._get_el('mini-content');
    _.register_event(click_el, 'click', function(e) {
        e.preventDefault();
        if (self.show_video) {
            self._track_event('$campaign_open', {'$resource_type': 'video'});
            self._switch_to_video();
        } else {
            self.dismiss();
            if (self.clickthrough) {
                var tracking_cb = null;
                if (self.mixpanel.get_config('inapp_link_new_window')) {
                    window.open(self.dest_url);
                } else {
                    tracking_cb = function() {
                        window.location.href = self.dest_url;
                    };
                }
                self._track_event('$campaign_open', {'$resource_type': 'link'}, tracking_cb);
            }
        }
    });
});

MixpanelNotification.prototype._get_el = function(id) {
    return document.getElementById(MixpanelNotification.MARKUP_PREFIX + '-' + id);
};

MixpanelNotification.prototype._get_notification_display_el = function() {
    return this._get_el(this.notif_type);
};

MixpanelNotification.prototype._get_shown_campaigns = function() {
    return this.persistence['props'][CAMPAIGN_IDS_KEY] || (this.persistence['props'][CAMPAIGN_IDS_KEY] = {});
};

MixpanelNotification.prototype._matches_event_data = _.safewrap(function(event_data) {
    var event_name = event_data['event'] || '';
    for (var i = 0; i < this.display_triggers.length; i++) {
        var display_trigger = this.display_triggers[i];
        var match_event = display_trigger['event'] || '';
        if (match_event === '$any_event' || event_name === display_trigger['event']) {
            if (display_trigger['selector'] && !_.isEmptyObject(display_trigger['selector'])) {
                if (evaluateSelector(display_trigger['selector'], event_data['properties'])) {
                    return true;
                }
            } else {
                return true;
            }
        }
    }
    return false;
});


MixpanelNotification.prototype._browser_lte = function(browser, version) {
    return this.browser_versions[browser] && this.browser_versions[browser] <= version;
};

MixpanelNotification.prototype._init_image_html = function() {
    var imgs_to_preload = [];

    if (!this.mini) {
        if (this.image_url) {
            imgs_to_preload.push(this.image_url);
            this.img_html = '<img id="img" src="' + this.image_url + '"/>';
        } else {
            this.img_html = '';
        }
        if (this.thumb_image_url) {
            imgs_to_preload.push(this.thumb_image_url);
            this.thumb_img_html =
                    '<div id="thumbborder-wrapper"><div id="thumbborder"></div></div>' +
                    '<img id="thumbnail"' +
                        ' src="' + this.thumb_image_url + '"' +
                        ' width="' + MixpanelNotification.THUMB_IMG_SIZE + '"' +
                        ' height="' + MixpanelNotification.THUMB_IMG_SIZE + '"' +
                    '/>' +
                    '<div id="thumbspacer"></div>';
        } else {
            this.thumb_img_html = '';
        }
    } else {
        this.thumb_image_url = this.thumb_image_url || (this.cdn_host + '/site_media/images/icons/notifications/mini-news-dark.png');
        imgs_to_preload.push(this.thumb_image_url);
    }

    return imgs_to_preload;
};

MixpanelNotification.prototype._init_notification_el = function() {
    var notification_html = '';
    var video_src         = '';
    var video_html        = '';
    var cancel_html       = '<div id="cancel">' +
                                    '<div id="cancel-icon"></div>' +
                                '</div>';

    this.notification_el = document.createElement('div');
    this.notification_el.id = MixpanelNotification.MARKUP_PREFIX + '-wrapper';
    if (!this.mini) {
        // TAKEOVER notification
        var close_html  = (this.clickthrough || this.show_video) ? '' : '<div id="button-close"></div>',
            play_html   = this.show_video ? '<div id="button-play"></div>' : '';
        if (this._browser_lte('ie', 7)) {
            close_html = '';
            play_html = '';
        }
        notification_html =
                '<div id="takeover">' +
                    this.thumb_img_html +
                    '<div id="mainbox">' +
                        cancel_html +
                        '<div id="content">' +
                            this.img_html +
                            '<div id="title">' + this.title + '</div>' +
                            '<div id="body">' + this.body + '</div>' +
                            '<div id="tagline">' +
                                '<a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a>' +
                            '</div>' +
                        '</div>' +
                        '<div id="button">' +
                            close_html +
                            '<a id="button-link" href="' + this.dest_url + '">' + this.cta + '</a>' +
                            play_html +
                        '</div>' +
                    '</div>' +
                '</div>';
    } else {
        // MINI notification
        notification_html =
                '<div id="mini">' +
                    '<div id="mainbox">' +
                        cancel_html +
                        '<div id="mini-content">' +
                            '<div id="mini-icon">' +
                                '<div id="mini-icon-img"></div>' +
                            '</div>' +
                            '<div id="body">' +
                                '<div id="body-text"><div>' + this.body + '</div></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div id="mini-border"></div>' +
                '</div>';
    }
    if (this.youtube_video) {
        video_src = this.resource_protocol + 'www.youtube.com/embed/' + this.youtube_video +
                '?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080';
        if (this.yt_custom) {
            video_src += '&enablejsapi=1&html5=1&controls=0';
            video_html =
                    '<div id="video-controls">' +
                        '<div id="video-progress" class="video-progress-el">' +
                            '<div id="video-progress-total" class="video-progress-el"></div>' +
                            '<div id="video-elapsed" class="video-progress-el"></div>' +
                        '</div>' +
                        '<div id="video-time" class="video-progress-el"></div>' +
                    '</div>';
        }
    } else if (this.vimeo_video) {
        video_src = this.resource_protocol + 'player.vimeo.com/video/' + this.vimeo_video + '?autoplay=1&title=0&byline=0&portrait=0';
    }
    if (this.show_video) {
        this.video_iframe =
                '<iframe id="' + MixpanelNotification.MARKUP_PREFIX + '-video-frame" ' +
                    'width="' + this.video_width + '" height="' + this.video_height + '" ' +
                    ' src="' + video_src + '"' +
                    ' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"' +
                '></iframe>';
        video_html =
                '<div id="video-' + (this.flip_animate ? '' : 'no') + 'flip">' +
                    '<div id="video">' +
                        '<div id="video-holder"></div>' +
                        video_html +
                    '</div>' +
                '</div>';
    }
    var main_html = video_html + notification_html;
    if (this.flip_animate) {
        main_html =
                (this.mini ? notification_html : '') +
                '<div id="flipcontainer"><div id="flipper">' +
                    (this.mini ? video_html : main_html) +
                '</div></div>';
    }

    this.notification_el.innerHTML =
        ('<div id="overlay" class="' + this.notif_type + '">' +
            '<div id="campaignid-' + this.campaign_id + '">' +
                '<div id="bgwrapper">' +
                    '<div id="bg"></div>' +
                    main_html +
                '</div>' +
            '</div>' +
        '</div>')
            .replace(/class="/g, 'class="' + MixpanelNotification.MARKUP_PREFIX + '-')
            .replace(/id="/g, 'id="' + MixpanelNotification.MARKUP_PREFIX + '-');
};

MixpanelNotification.prototype._init_styles = function() {
    if (this.style === 'dark') {
        this.style_vals = {
            bg:             '#1d1f25',
            bg_actions:     '#282b32',
            bg_hover:       '#3a4147',
            bg_light:       '#4a5157',
            border_gray:    '#32353c',
            cancel_opacity: '0.4',
            mini_hover:     '#2a3137',
            text_title:     '#fff',
            text_main:      '#9498a3',
            text_tagline:   '#464851',
            text_hover:     '#ddd'
        };
    } else {
        this.style_vals = {
            bg:             '#fff',
            bg_actions:     '#e7eaee',
            bg_hover:       '#eceff3',
            bg_light:       '#f5f5f5',
            border_gray:    '#e4ecf2',
            cancel_opacity: '1.0',
            mini_hover:     '#fafafa',
            text_title:     '#5c6578',
            text_main:      '#8b949b',
            text_tagline:   '#ced9e6',
            text_hover:     '#7c8598'
        };
    }
    var shadow = '0px 0px 35px 0px rgba(45, 49, 56, 0.7)',
        video_shadow = shadow,
        mini_shadow = shadow,
        thumb_total_size = MixpanelNotification.THUMB_IMG_SIZE + MixpanelNotification.THUMB_BORDER_SIZE * 2,
        anim_seconds = (MixpanelNotification.ANIM_TIME / 1000) + 's';
    if (this.mini) {
        shadow = 'none';
    }

    // don't display on small viewports
    var notif_media_queries = {},
        min_width = MixpanelNotification.NOTIF_WIDTH_MINI + 20;
    notif_media_queries['@media only screen and (max-width: ' + (min_width - 1) + 'px)'] = {
        '#overlay': {
            'display': 'none'
        }
    };
    var notif_styles = {
        '.flipped': {
            'transform': 'rotateY(180deg)'
        },
        '#overlay': {
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'overflow': 'auto',
            'text-align': 'center',
            'z-index': '10000',
            'font-family': '"Helvetica", "Arial", sans-serif',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        },
        '#overlay.mini': {
            'height': '0',
            'overflow': 'visible'
        },
        '#overlay a': {
            'width': 'initial',
            'padding': '0',
            'text-decoration': 'none',
            'text-transform': 'none',
            'color': 'inherit'
        },
        '#bgwrapper': {
            'position': 'relative',
            'width': '100%',
            'height': '100%'
        },
        '#bg': {
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'min-width': this.doc_width * 4 + 'px',
            'min-height': this.doc_height * 4 + 'px',
            'background-color': 'black',
            'opacity': '0.0',
            '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)', // IE8
            'filter': 'alpha(opacity=60)', // IE5-7
            'transition': 'opacity ' + anim_seconds
        },
        '#bg.visible': {
            'opacity': MixpanelNotification.BG_OPACITY
        },
        '.mini #bg': {
            'width': '0',
            'height': '0',
            'min-width': '0'
        },
        '#flipcontainer': {
            'perspective': '1000px',
            'position': 'absolute',
            'width': '100%'
        },
        '#flipper': {
            'position': 'relative',
            'transform-style': 'preserve-3d',
            'transition': '0.3s'
        },
        '#takeover': {
            'position': 'absolute',
            'left': '50%',
            'width': MixpanelNotification.NOTIF_WIDTH + 'px',
            'margin-left': Math.round(-MixpanelNotification.NOTIF_WIDTH / 2) + 'px',
            'backface-visibility': 'hidden',
            'transform': 'rotateY(0deg)',
            'opacity': '0.0',
            'top': MixpanelNotification.NOTIF_START_TOP + 'px',
            'transition': 'opacity ' + anim_seconds + ', top ' + anim_seconds
        },
        '#takeover.visible': {
            'opacity': '1.0',
            'top': MixpanelNotification.NOTIF_TOP + 'px'
        },
        '#takeover.exiting': {
            'opacity': '0.0',
            'top': MixpanelNotification.NOTIF_START_TOP + 'px'
        },
        '#thumbspacer': {
            'height': MixpanelNotification.THUMB_OFFSET + 'px'
        },
        '#thumbborder-wrapper': {
            'position': 'absolute',
            'top': (-MixpanelNotification.THUMB_BORDER_SIZE) + 'px',
            'left': (MixpanelNotification.NOTIF_WIDTH / 2 - MixpanelNotification.THUMB_OFFSET - MixpanelNotification.THUMB_BORDER_SIZE) + 'px',
            'width': thumb_total_size + 'px',
            'height': (thumb_total_size / 2) + 'px',
            'overflow': 'hidden'
        },
        '#thumbborder': {
            'position': 'absolute',
            'width': thumb_total_size + 'px',
            'height': thumb_total_size + 'px',
            'border-radius': thumb_total_size + 'px',
            'background-color': this.style_vals.bg_actions,
            'opacity': '0.5'
        },
        '#thumbnail': {
            'position': 'absolute',
            'top': '0px',
            'left': (MixpanelNotification.NOTIF_WIDTH / 2 - MixpanelNotification.THUMB_OFFSET) + 'px',
            'width': MixpanelNotification.THUMB_IMG_SIZE + 'px',
            'height': MixpanelNotification.THUMB_IMG_SIZE + 'px',
            'overflow': 'hidden',
            'z-index': '100',
            'border-radius': MixpanelNotification.THUMB_IMG_SIZE + 'px'
        },
        '#mini': {
            'position': 'absolute',
            'right': '20px',
            'top': MixpanelNotification.NOTIF_TOP + 'px',
            'width': this.notif_width + 'px',
            'height': MixpanelNotification.NOTIF_HEIGHT_MINI * 2 + 'px',
            'margin-top': 20 - MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'backface-visibility': 'hidden',
            'opacity': '0.0',
            'transform': 'rotateX(90deg)',
            'transition': 'opacity 0.3s, transform 0.3s, right 0.3s'
        },
        '#mini.visible': {
            'opacity': '1.0',
            'transform': 'rotateX(0deg)'
        },
        '#mini.exiting': {
            'opacity': '0.0',
            'right': '-150px'
        },
        '#mainbox': {
            'border-radius': '4px',
            'box-shadow': shadow,
            'text-align': 'center',
            'background-color': this.style_vals.bg,
            'font-size': '14px',
            'color': this.style_vals.text_main
        },
        '#mini #mainbox': {
            'height': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'margin-top': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'border-radius': '3px',
            'transition': 'background-color ' + anim_seconds
        },
        '#mini-border': {
            'height': (MixpanelNotification.NOTIF_HEIGHT_MINI + 6) + 'px',
            'width': (MixpanelNotification.NOTIF_WIDTH_MINI + 6) + 'px',
            'position': 'absolute',
            'top': '-3px',
            'left': '-3px',
            'margin-top': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'border-radius': '6px',
            'opacity': '0.25',
            'background-color': '#fff',
            'z-index': '-1',
            'box-shadow': mini_shadow
        },
        '#mini-icon': {
            'position': 'relative',
            'display': 'inline-block',
            'width': '75px',
            'height': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'border-radius': '3px 0 0 3px',
            'background-color': this.style_vals.bg_actions,
            'background': 'linear-gradient(135deg, ' + this.style_vals.bg_light + ' 0%, ' + this.style_vals.bg_actions + ' 100%)',
            'transition': 'background-color ' + anim_seconds
        },
        '#mini:hover #mini-icon': {
            'background-color': this.style_vals.mini_hover
        },
        '#mini:hover #mainbox': {
            'background-color': this.style_vals.mini_hover
        },
        '#mini-icon-img': {
            'position': 'absolute',
            'background-image': 'url(' + this.thumb_image_url + ')',
            'width': '48px',
            'height': '48px',
            'top': '20px',
            'left': '12px'
        },
        '#content': {
            'padding': '30px 20px 0px 20px'
        },
        '#mini-content': {
            'text-align': 'left',
            'height': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'cursor': 'pointer'
        },
        '#img': {
            'width': '328px',
            'margin-top': '30px',
            'border-radius': '5px'
        },
        '#title': {
            'max-height': '600px',
            'overflow': 'hidden',
            'word-wrap': 'break-word',
            'padding': '25px 0px 20px 0px',
            'font-size': '19px',
            'font-weight': 'bold',
            'color': this.style_vals.text_title
        },
        '#body': {
            'max-height': '600px',
            'margin-bottom': '25px',
            'overflow': 'hidden',
            'word-wrap': 'break-word',
            'line-height': '21px',
            'font-size': '15px',
            'font-weight': 'normal',
            'text-align': 'left'
        },
        '#mini #body': {
            'display': 'inline-block',
            'max-width': '250px',
            'margin': '0 0 0 30px',
            'height': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px',
            'font-size': '16px',
            'letter-spacing': '0.8px',
            'color': this.style_vals.text_title
        },
        '#mini #body-text': {
            'display': 'table',
            'height': MixpanelNotification.NOTIF_HEIGHT_MINI + 'px'
        },
        '#mini #body-text div': {
            'display': 'table-cell',
            'vertical-align': 'middle'
        },
        '#tagline': {
            'margin-bottom': '15px',
            'font-size': '10px',
            'font-weight': '600',
            'letter-spacing': '0.8px',
            'color': '#ccd7e0',
            'text-align': 'left'
        },
        '#tagline a': {
            'color': this.style_vals.text_tagline,
            'transition': 'color ' + anim_seconds
        },
        '#tagline a:hover': {
            'color': this.style_vals.text_hover
        },
        '#cancel': {
            'position': 'absolute',
            'right': '0',
            'width': '8px',
            'height': '8px',
            'padding': '10px',
            'border-radius': '20px',
            'margin': '12px 12px 0 0',
            'box-sizing': 'content-box',
            'cursor': 'pointer',
            'transition': 'background-color ' + anim_seconds
        },
        '#mini #cancel': {
            'margin': '7px 7px 0 0'
        },
        '#cancel-icon': {
            'width': '8px',
            'height': '8px',
            'overflow': 'hidden',
            'background-image': 'url(' + this.cdn_host + '/site_media/images/icons/notifications/cancel-x.png)',
            'opacity': this.style_vals.cancel_opacity
        },
        '#cancel:hover': {
            'background-color': this.style_vals.bg_hover
        },
        '#button': {
            'display': 'block',
            'height': '60px',
            'line-height': '60px',
            'text-align': 'center',
            'background-color': this.style_vals.bg_actions,
            'border-radius': '0 0 4px 4px',
            'overflow': 'hidden',
            'cursor': 'pointer',
            'transition': 'background-color ' + anim_seconds
        },
        '#button-close': {
            'display': 'inline-block',
            'width': '9px',
            'height': '60px',
            'margin-right': '8px',
            'vertical-align': 'top',
            'background-image': 'url(' + this.cdn_host + '/site_media/images/icons/notifications/close-x-' + this.style + '.png)',
            'background-repeat': 'no-repeat',
            'background-position': '0px 25px'
        },
        '#button-play': {
            'display': 'inline-block',
            'width': '30px',
            'height': '60px',
            'margin-left': '15px',
            'background-image': 'url(' + this.cdn_host + '/site_media/images/icons/notifications/play-' + this.style + '-small.png)',
            'background-repeat': 'no-repeat',
            'background-position': '0px 15px'
        },
        'a#button-link': {
            'display': 'inline-block',
            'vertical-align': 'top',
            'text-align': 'center',
            'font-size': '17px',
            'font-weight': 'bold',
            'overflow': 'hidden',
            'word-wrap': 'break-word',
            'color': this.style_vals.text_title,
            'transition': 'color ' + anim_seconds
        },
        '#button:hover': {
            'background-color': this.style_vals.bg_hover,
            'color': this.style_vals.text_hover
        },
        '#button:hover a': {
            'color': this.style_vals.text_hover
        },

        '#video-noflip': {
            'position': 'relative',
            'top': (-this.video_height * 2) + 'px'
        },
        '#video-flip': {
            'backface-visibility': 'hidden',
            'transform': 'rotateY(180deg)'
        },
        '#video': {
            'position': 'absolute',
            'width': (this.video_width - 1) + 'px',
            'height': this.video_height + 'px',
            'top': MixpanelNotification.NOTIF_TOP + 'px',
            'margin-top': '100px',
            'left': '50%',
            'margin-left': Math.round(-this.video_width / 2) + 'px',
            'overflow': 'hidden',
            'border-radius': '5px',
            'box-shadow': video_shadow,
            'transform': 'translateZ(1px)', // webkit rendering bug http://stackoverflow.com/questions/18167981/clickable-link-area-unexpectedly-smaller-after-css-transform
            'transition': 'opacity ' + anim_seconds + ', top ' + anim_seconds
        },
        '#video.exiting': {
            'opacity': '0.0',
            'top': this.video_height + 'px'
        },
        '#video-holder': {
            'position': 'absolute',
            'width': (this.video_width - 1) + 'px',
            'height': this.video_height + 'px',
            'overflow': 'hidden',
            'border-radius': '5px'
        },
        '#video-frame': {
            'margin-left': '-1px',
            'width': this.video_width + 'px'
        },
        '#video-controls': {
            'opacity': '0',
            'transition': 'opacity 0.5s'
        },
        '#video:hover #video-controls': {
            'opacity': '1.0'
        },
        '#video .video-progress-el': {
            'position': 'absolute',
            'bottom': '0',
            'height': '25px',
            'border-radius': '0 0 0 5px'
        },
        '#video-progress': {
            'width': '90%'
        },
        '#video-progress-total': {
            'width': '100%',
            'background-color': this.style_vals.bg,
            'opacity': '0.7'
        },
        '#video-elapsed': {
            'width': '0',
            'background-color': '#6cb6f5',
            'opacity': '0.9'
        },
        '#video #video-time': {
            'width': '10%',
            'right': '0',
            'font-size': '11px',
            'line-height': '25px',
            'color': this.style_vals.text_main,
            'background-color': '#666',
            'border-radius': '0 0 5px 0'
        }
    };

    // IE hacks
    if (this._browser_lte('ie', 8)) {
        _.extend(notif_styles, {
            '* html #overlay': {
                'position': 'absolute'
            },
            '* html #bg': {
                'position': 'absolute'
            },
            'html, body': {
                'height': '100%'
            }
        });
    }
    if (this._browser_lte('ie', 7)) {
        _.extend(notif_styles, {
            '#mini #body': {
                'display': 'inline',
                'zoom': '1',
                'border': '1px solid ' + this.style_vals.bg_hover
            },
            '#mini #body-text': {
                'padding': '20px'
            },
            '#mini #mini-icon': {
                'display': 'none'
            }
        });
    }

    // add vendor-prefixed style rules
    var VENDOR_STYLES = [
            'backface-visibility', 'border-radius', 'box-shadow', 'opacity',
            'perspective', 'transform', 'transform-style', 'transition'
        ],
        VENDOR_PREFIXES = ['khtml', 'moz', 'ms', 'o', 'webkit'];
    for (var selector in notif_styles) {
        for (var si = 0; si < VENDOR_STYLES.length; si++) {
            var prop = VENDOR_STYLES[si];
            if (prop in notif_styles[selector]) {
                var val = notif_styles[selector][prop];
                for (var pi = 0; pi < VENDOR_PREFIXES.length; pi++) {
                    notif_styles[selector]['-' + VENDOR_PREFIXES[pi] + '-' + prop] = val;
                }
            }
        }
    }

    var inject_styles = function(styles, media_queries) {
        var create_style_text = function(style_defs) {
            var st = '';
            for (var selector in style_defs) {
                var mp_selector = selector
                    .replace(/#/g, '#' + MixpanelNotification.MARKUP_PREFIX + '-')
                    .replace(/\./g, '.' + MixpanelNotification.MARKUP_PREFIX + '-');
                st += '\n' + mp_selector + ' {';
                var props = style_defs[selector];
                for (var k in props) {
                    st += k + ':' + props[k] + ';';
                }
                st += '}';
            }
            return st;
        };
        var create_media_query_text = function(mq_defs) {
            var mqt = '';
            for (var mq in mq_defs) {
                mqt += '\n' + mq + ' {' + create_style_text(mq_defs[mq]) + '\n}';
            }
            return mqt;
        };

        var style_text = create_style_text(styles) + create_media_query_text(media_queries),
            head_el = document.head || document.getElementsByTagName('head')[0] || document.documentElement,
            style_el = document.createElement('style');
        head_el.appendChild(style_el);
        style_el.setAttribute('type', 'text/css');
        if (style_el.styleSheet) { // IE
            style_el.styleSheet.cssText = style_text;
        } else {
            style_el.textContent = style_text;
        }
    };
    inject_styles(notif_styles, notif_media_queries);
};

MixpanelNotification.prototype._init_video = _.safewrap(function() {
    if (!this.video_url) {
        return;
    }
    var self = this;

    // Youtube iframe API compatibility
    self.yt_custom = 'postMessage' in window;

    self.dest_url = self.video_url;
    var youtube_match = self.video_url.match(
            // http://stackoverflow.com/questions/2936467/parse-youtube-video-id-using-preg-match
            /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i
        ),
        vimeo_match = self.video_url.match(
            /vimeo\.com\/.*?(\d+)/i
        );
    if (youtube_match) {
        self.show_video = true;
        self.youtube_video = youtube_match[1];

        if (self.yt_custom) {
            window['onYouTubeIframeAPIReady'] = function() {
                if (self._get_el('video-frame')) {
                    self._yt_video_ready();
                }
            };

            // load Youtube iframe API; see https://developers.google.com/youtube/iframe_api_reference
            var tag = document.createElement('script');
            tag.src = self.resource_protocol + 'www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    } else if (vimeo_match) {
        self.show_video = true;
        self.vimeo_video = vimeo_match[1];
    }

    // IE <= 7, FF <= 3: fall through to video link rather than embedded player
    if (self._browser_lte('ie', 7) || self._browser_lte('firefox', 3)) {
        self.show_video = false;
        self.clickthrough = true;
    }
});

MixpanelNotification.prototype._mark_as_shown = _.safewrap(function() {
    // click on background to dismiss
    var self = this;
    _.register_event(self._get_el('bg'), 'click', function() {
        self.dismiss();
    });

    var get_style = function(el, style_name) {
        var styles = {};
        if (document.defaultView && document.defaultView.getComputedStyle) {
            styles = document.defaultView.getComputedStyle(el, null); // FF3 requires both args
        } else if (el.currentStyle) { // IE
            styles = el.currentStyle;
        }
        return styles[style_name];
    };

    if (this.campaign_id) {
        var notif_el = this._get_el('overlay');
        if (notif_el && get_style(notif_el, 'visibility') !== 'hidden' && get_style(notif_el, 'display') !== 'none') {
            this._mark_delivery();
        }
    }
});

MixpanelNotification.prototype._mark_delivery = _.safewrap(function(extra_props) {
    if (!this.marked_as_shown) {
        this.marked_as_shown = true;

        if (this.campaign_id) {
            // mark notification shown (local cache)
            this._get_shown_campaigns()[this.campaign_id] = 1 * new Date();
            this.persistence.save();
        }

        // track delivery
        this._track_event('$campaign_delivery', extra_props);

        // mark notification shown (mixpanel property)
        this.mixpanel['people']['append']({
            '$campaigns': this.campaign_id,
            '$notifications': {
                'campaign_id': this.campaign_id,
                'message_id':  this.message_id,
                'type':        'web',
                'time':        new Date()
            }
        });
    }
});

MixpanelNotification.prototype._preload_images = function(all_loaded_cb) {
    var self = this;
    if (this.imgs_to_preload.length === 0) {
        all_loaded_cb();
        return;
    }

    var preloaded_imgs = 0;
    var img_objs = [];
    var onload = function() {
        preloaded_imgs++;
        if (preloaded_imgs === self.imgs_to_preload.length && all_loaded_cb) {
            all_loaded_cb();
            all_loaded_cb = null;
        }
    };
    for (var i = 0; i < this.imgs_to_preload.length; i++) {
        var img = new Image();
        img.onload = onload;
        img.src = this.imgs_to_preload[i];
        if (img.complete) {
            onload();
        }
        img_objs.push(img);
    }

    // IE6/7 doesn't fire onload reliably
    if (this._browser_lte('ie', 7)) {
        setTimeout(function() {
            var imgs_loaded = true;
            for (i = 0; i < img_objs.length; i++) {
                if (!img_objs[i].complete) {
                    imgs_loaded = false;
                }
            }
            if (imgs_loaded && all_loaded_cb) {
                all_loaded_cb();
                all_loaded_cb = null;
            }
        }, 500);
    }
};

MixpanelNotification.prototype._remove_notification_el = _.safewrap(function() {
    window.clearInterval(this._video_progress_checker);
    this.notification_el.style.visibility = 'hidden';
    this.body_el.removeChild(this.notification_el);
});

MixpanelNotification.prototype._set_client_config = function() {
    var get_browser_version = function(browser_ex) {
        var match = navigator.userAgent.match(browser_ex);
        return match && match[1];
    };
    this.browser_versions = {};
    this.browser_versions['chrome']  = get_browser_version(/Chrome\/(\d+)/);
    this.browser_versions['firefox'] = get_browser_version(/Firefox\/(\d+)/);
    this.browser_versions['ie']      = get_browser_version(/MSIE (\d+).+/);
    if (!this.browser_versions['ie'] && !(window.ActiveXObject) && 'ActiveXObject' in window) {
        this.browser_versions['ie'] = 11;
    }

    this.body_el = document.body || document.getElementsByTagName('body')[0];
    if (this.body_el) {
        this.doc_width = Math.max(
            this.body_el.scrollWidth, document.documentElement.scrollWidth,
            this.body_el.offsetWidth, document.documentElement.offsetWidth,
            this.body_el.clientWidth, document.documentElement.clientWidth
        );
        this.doc_height = Math.max(
            this.body_el.scrollHeight, document.documentElement.scrollHeight,
            this.body_el.offsetHeight, document.documentElement.offsetHeight,
            this.body_el.clientHeight, document.documentElement.clientHeight
        );
    }

    // detect CSS compatibility
    var ie_ver = this.browser_versions['ie'];
    var sample_styles = document.createElement('div').style,
        is_css_compatible = function(rule) {
            if (rule in sample_styles) {
                return true;
            }
            if (!ie_ver) {
                rule = rule[0].toUpperCase() + rule.slice(1);
                var props = ['O' + rule, 'Webkit' + rule, 'Moz' + rule];
                for (var i = 0; i < props.length; i++) {
                    if (props[i] in sample_styles) {
                        return true;
                    }
                }
            }
            return false;
        };
    this.use_transitions = this.body_el &&
        is_css_compatible('transition') &&
        is_css_compatible('transform');
    this.flip_animate = (this.browser_versions['chrome'] >= 33 || this.browser_versions['firefox'] >= 15) &&
        this.body_el &&
        is_css_compatible('backfaceVisibility') &&
        is_css_compatible('perspective') &&
        is_css_compatible('transform');
};

MixpanelNotification.prototype._switch_to_video = _.safewrap(function() {
    var self = this,
        anims = [
            {
                el:    self._get_notification_display_el(),
                attr:  'opacity',
                start: 1.0,
                goal:  0.0
            },
            {
                el:    self._get_notification_display_el(),
                attr:  'top',
                start: MixpanelNotification.NOTIF_TOP,
                goal:  -500
            },
            {
                el:    self._get_el('video-noflip'),
                attr:  'opacity',
                start: 0.0,
                goal:  1.0
            },
            {
                el:    self._get_el('video-noflip'),
                attr:  'top',
                start: -self.video_height * 2,
                goal:  0
            }
        ];

    if (self.mini) {
        var bg = self._get_el('bg'),
            overlay = self._get_el('overlay');
        bg.style.width = '100%';
        bg.style.height = '100%';
        overlay.style.width = '100%';

        self._add_class(self._get_notification_display_el(), 'exiting');
        self._add_class(bg, 'visible');

        anims.push({
            el:    self._get_el('bg'),
            attr:  'opacity',
            start: 0.0,
            goal:  MixpanelNotification.BG_OPACITY
        });
    }

    var video_el = self._get_el('video-holder');
    video_el.innerHTML = self.video_iframe;

    var video_ready = function() {
        if (window['YT'] && window['YT']['loaded']) {
            self._yt_video_ready();
        }
        self.showing_video = true;
        self._get_notification_display_el().style.visibility = 'hidden';
    };
    if (self.flip_animate) {
        self._add_class('flipper', 'flipped');
        setTimeout(video_ready, MixpanelNotification.ANIM_TIME);
    } else {
        self._animate_els(anims, MixpanelNotification.ANIM_TIME, video_ready);
    }
});

MixpanelNotification.prototype._track_event = function(event_name, properties, cb) {
    if (this.campaign_id) {
        properties = properties || {};
        properties = _.extend(properties, {
            'campaign_id':     this.campaign_id,
            'message_id':      this.message_id,
            'message_type':    'web_inapp',
            'message_subtype': this.notif_type
        });
        this.mixpanel['track'](event_name, properties, cb);
    } else if (cb) {
        cb.call();
    }
};

MixpanelNotification.prototype._yt_video_ready = _.safewrap(function() {
    var self = this;
    if (self.video_inited) {
        return;
    }
    self.video_inited = true;

    var progress_bar  = self._get_el('video-elapsed'),
        progress_time = self._get_el('video-time'),
        progress_el   = self._get_el('video-progress');

    new window['YT']['Player'](MixpanelNotification.MARKUP_PREFIX + '-video-frame', {
        'events': {
            'onReady': function(event) {
                var ytplayer = event['target'],
                    video_duration = ytplayer['getDuration'](),
                    pad = function(i) {
                        return ('00' + i).slice(-2);
                    },
                    update_video_time = function(current_time) {
                        var secs = Math.round(video_duration - current_time),
                            mins = Math.floor(secs / 60),
                            hours = Math.floor(mins / 60);
                        secs -= mins * 60;
                        mins -= hours * 60;
                        progress_time.innerHTML = '-' + (hours ? hours + ':' : '') + pad(mins) + ':' + pad(secs);
                    };
                update_video_time(0);
                self._video_progress_checker = window.setInterval(function() {
                    var current_time = ytplayer['getCurrentTime']();
                    progress_bar.style.width = (current_time / video_duration * 100) + '%';
                    update_video_time(current_time);
                }, 250);
                _.register_event(progress_el, 'click', function(e) {
                    var clickx = Math.max(0, e.pageX - progress_el.getBoundingClientRect().left);
                    ytplayer['seekTo'](video_duration * clickx / progress_el.clientWidth, true);
                });
            }
        }
    });
});

/**
 * Mixpanel People Object
 * @constructor
 */
var MixpanelPeople = function() {};

_.extend(MixpanelPeople.prototype, apiActions);

MixpanelPeople.prototype._init = function(mixpanel_instance) {
    this._mixpanel = mixpanel_instance;
};

/*
* Set properties on a user record.
*
* ### Usage:
*
*     mixpanel.people.set('gender', 'm');
*
*     // or set multiple properties at once
*     mixpanel.people.set({
*         'Company': 'Acme',
*         'Plan': 'Premium',
*         'Upgrade date': new Date()
*     });
*     // properties can be strings, integers, dates, or lists
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [to] A value to set on the given property name
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
    var data = this.set_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    // make sure that the referrer info has been updated and saved
    if (this._get_config('save_referrer')) {
        this._mixpanel['persistence'].update_referrer_info(document.referrer);
    }

    // update $set object with default people properties
    data[SET_ACTION] = _.extend(
        {},
        _.info.people_properties(),
        this._mixpanel['persistence'].get_referrer_info(),
        data[SET_ACTION]
    );
    return this._send_request(data, callback);
});

/*
* Set properties on a user record, only if they do not yet exist.
* This will not overwrite previous people property values, unlike
* people.set().
*
* ### Usage:
*
*     mixpanel.people.set_once('First Login Date', new Date());
*
*     // or set multiple properties at once
*     mixpanel.people.set_once({
*         'First Login Date': new Date(),
*         'Starting Plan': 'Premium'
*     });
*
*     // properties can be strings, integers or dates
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [to] A value to set on the given property name
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
    var data = this.set_once_action(prop, to);
    if (_.isObject(prop)) {
        callback = to;
    }
    return this._send_request(data, callback);
});

/*
* Unset properties on a user record (permanently removes the properties and their values from a profile).
*
* ### Usage:
*
*     mixpanel.people.unset('gender');
*
*     // or unset multiple properties at once
*     mixpanel.people.unset(['gender', 'Company']);
*
* @param {Array|String} prop If a string, this is the name of the property. If an array, this is a list of property names.
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(function(prop, callback) {
    var data = this.unset_action(prop);
    return this._send_request(data, callback);
});

/*
* Increment/decrement numeric people analytics properties.
*
* ### Usage:
*
*     mixpanel.people.increment('page_views', 1);
*
*     // or, for convenience, if you're just incrementing a counter by
*     // 1, you can simply do
*     mixpanel.people.increment('page_views');
*
*     // to decrement a counter, pass a negative number
*     mixpanel.people.increment('credits_left', -1);
*
*     // like mixpanel.people.set(), you can increment multiple
*     // properties at once:
*     mixpanel.people.increment({
*         counter1: 1,
*         counter2: 6
*     });
*
* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and numeric values.
* @param {Number} [by] An amount to increment the given property
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(function(prop, by, callback) {
    var data = {};
    var $add = {};
    if (_.isObject(prop)) {
        _.each(prop, function(v, k) {
            if (!this._is_reserved_property(k)) {
                if (isNaN(parseFloat(v))) {
                    console$1.error('Invalid increment value passed to mixpanel.people.increment - must be a number');
                    return;
                } else {
                    $add[k] = v;
                }
            }
        }, this);
        callback = by;
    } else {
        // convenience: mixpanel.people.increment('property'); will
        // increment 'property' by 1
        if (_.isUndefined(by)) {
            by = 1;
        }
        $add[prop] = by;
    }
    data[ADD_ACTION] = $add;

    return this._send_request(data, callback);
});

/*
* Append a value to a list-valued people analytics property.
*
* ### Usage:
*
*     // append a value to a list, creating it if needed
*     mixpanel.people.append('pages_visited', 'homepage');
*
*     // like mixpanel.people.set(), you can append multiple
*     // properties at once:
*     mixpanel.people.append({
*         list1: 'bob',
*         list2: 123
*     });
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] value An item to append to the list
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
    if (_.isObject(list_name)) {
        callback = value;
    }
    var data = this.append_action(list_name, value);
    return this._send_request(data, callback);
});

/*
* Remove a value from a list-valued people analytics property.
*
* ### Usage:
*
*     mixpanel.people.remove('School', 'UCB');
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] value Item to remove from the list
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
    if (_.isObject(list_name)) {
        callback = value;
    }
    var data = this.remove_action(list_name, value);
    return this._send_request(data, callback);
});

/*
* Merge a given list with a list-valued people analytics property,
* excluding duplicate values.
*
* ### Usage:
*
*     // merge a value to a list, creating it if needed
*     mixpanel.people.union('pages_visited', 'homepage');
*
*     // like mixpanel.people.set(), you can append multiple
*     // properties at once:
*     mixpanel.people.union({
*         list1: 'bob',
*         list2: 123
*     });
*
*     // like mixpanel.people.append(), you can append multiple
*     // values to the same list:
*     mixpanel.people.union({
*         list1: ['bob', 'billy']
*     });
*
* @param {Object|String} list_name If a string, this is the name of the property. If an object, this is an associative array of names and values.
* @param {*} [value] Value / values to merge with the given property
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(function(list_name, values, callback) {
    if (_.isObject(list_name)) {
        callback = values;
    }
    var data = this.union_action(list_name, values);
    return this._send_request(data, callback);
});

/*
* Record that you have charged the current user a certain amount
* of money. Charges recorded with track_charge() will appear in the
* Mixpanel revenue report.
*
* ### Usage:
*
*     // charge a user $50
*     mixpanel.people.track_charge(50);
*
*     // charge a user $30.50 on the 2nd of january
*     mixpanel.people.track_charge(30.50, {
*         '$time': new Date('jan 1 2012')
*     });
*
* @param {Number} amount The amount of money charged to the current user
* @param {Object} [properties] An associative array of properties associated with the charge
* @param {Function} [callback] If provided, the callback will be called when the server responds
*/
MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(function(amount, properties, callback) {
    if (!_.isNumber(amount)) {
        amount = parseFloat(amount);
        if (isNaN(amount)) {
            console$1.error('Invalid value passed to mixpanel.people.track_charge - must be a number');
            return;
        }
    }

    return this.append('$transactions', _.extend({
        '$amount': amount
    }, properties), callback);
});

/*
* Permanently clear all revenue report transactions from the
* current user's people analytics profile.
*
* ### Usage:
*
*     mixpanel.people.clear_charges();
*
* @param {Function} [callback] If provided, the callback will be called after tracking the event.
*/
MixpanelPeople.prototype.clear_charges = function(callback) {
    return this.set('$transactions', [], callback);
};

/*
* Permanently deletes the current people analytics profile from
* Mixpanel (using the current distinct_id).
*
* ### Usage:
*
*     // remove the all data you have stored about the current user
*     mixpanel.people.delete_user();
*
*/
MixpanelPeople.prototype.delete_user = function() {
    if (!this._identify_called()) {
        console$1.error('mixpanel.people.delete_user() requires you to call identify() first');
        return;
    }
    var data = {'$delete': this._mixpanel.get_distinct_id()};
    return this._send_request(data);
};

MixpanelPeople.prototype.toString = function() {
    return this._mixpanel.toString() + '.people';
};

MixpanelPeople.prototype._send_request = function(data, callback) {
    data['$token'] = this._get_config('token');
    data['$distinct_id'] = this._mixpanel.get_distinct_id();
    var device_id = this._mixpanel.get_property('$device_id');
    var user_id = this._mixpanel.get_property('$user_id');
    var had_persisted_distinct_id = this._mixpanel.get_property('$had_persisted_distinct_id');
    if (device_id) {
        data['$device_id'] = device_id;
    }
    if (user_id) {
        data['$user_id'] = user_id;
    }
    if (had_persisted_distinct_id) {
        data['$had_persisted_distinct_id'] = had_persisted_distinct_id;
    }

    var date_encoded_data = _.encodeDates(data);
    var truncated_data    = _.truncate(date_encoded_data, 255);
    var json_data         = _.JSONEncode(date_encoded_data);
    var encoded_data      = _.base64Encode(json_data);

    if (!this._identify_called()) {
        this._enqueue(data);
        if (!_.isUndefined(callback)) {
            if (this._get_config('verbose')) {
                callback({status: -1, error: null});
            } else {
                callback(-1);
            }
        }
        return truncated_data;
    }

    console$1.log('MIXPANEL PEOPLE REQUEST:');
    console$1.log(truncated_data);

    this._mixpanel._send_request(
        this._get_config('api_host') + '/engage/',
        {'data': encoded_data},
        this._mixpanel._prepare_callback(callback, truncated_data)
    );

    return truncated_data;
};

MixpanelPeople.prototype._get_config = function(conf_var) {
    return this._mixpanel.get_config(conf_var);
};

MixpanelPeople.prototype._identify_called = function() {
    return this._mixpanel._flags.identify_called === true;
};

// Queue up engage operations if identify hasn't been called yet.
MixpanelPeople.prototype._enqueue = function(data) {
    if (SET_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(SET_ACTION, data);
    } else if (SET_ONCE_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(SET_ONCE_ACTION, data);
    } else if (UNSET_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(UNSET_ACTION, data);
    } else if (ADD_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(ADD_ACTION, data);
    } else if (APPEND_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, data);
    } else if (REMOVE_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(REMOVE_ACTION, data);
    } else if (UNION_ACTION in data) {
        this._mixpanel['persistence']._add_to_people_queue(UNION_ACTION, data);
    } else {
        console$1.error('Invalid call to _enqueue():', data);
    }
};

MixpanelPeople.prototype._flush_one_queue = function(action, action_method, callback, queue_to_params_fn) {
    var _this = this;
    var queued_data = _.extend({}, this._mixpanel['persistence']._get_queue(action));
    var action_params = queued_data;

    if (!_.isUndefined(queued_data) && _.isObject(queued_data) && !_.isEmptyObject(queued_data)) {
        _this._mixpanel['persistence']._pop_from_people_queue(action, queued_data);
        if (queue_to_params_fn) {
            action_params = queue_to_params_fn(queued_data);
        }
        action_method.call(_this, action_params, function(response, data) {
            // on bad response, we want to add it back to the queue
            if (response === 0) {
                _this._mixpanel['persistence']._add_to_people_queue(action, queued_data);
            }
            if (!_.isUndefined(callback)) {
                callback(response, data);
            }
        });
    }
};

// Flush queued engage operations - order does not matter,
// and there are network level race conditions anyway
MixpanelPeople.prototype._flush = function(
    _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback
) {
    var _this = this;
    var $append_queue = this._mixpanel['persistence']._get_queue(APPEND_ACTION);
    var $remove_queue = this._mixpanel['persistence']._get_queue(REMOVE_ACTION);

    this._flush_one_queue(SET_ACTION, this.set, _set_callback);
    this._flush_one_queue(SET_ONCE_ACTION, this.set_once, _set_once_callback);
    this._flush_one_queue(UNSET_ACTION, this.unset, _unset_callback, function(queue) { return _.keys(queue); });
    this._flush_one_queue(ADD_ACTION, this.increment, _add_callback);
    this._flush_one_queue(UNION_ACTION, this.union, _union_callback);

    // we have to fire off each $append individually since there is
    // no concat method server side
    if (!_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
        var $append_item;
        var append_callback = function(response, data) {
            if (response === 0) {
                _this._mixpanel['persistence']._add_to_people_queue(APPEND_ACTION, $append_item);
            }
            if (!_.isUndefined(_append_callback)) {
                _append_callback(response, data);
            }
        };
        for (var i = $append_queue.length - 1; i >= 0; i--) {
            $append_item = $append_queue.pop();
            if (!_.isEmptyObject($append_item)) {
                _this.append($append_item, append_callback);
            }
        }
        // Save the shortened append queue
        _this._mixpanel['persistence'].save();
    }

    // same for $remove
    if (!_.isUndefined($remove_queue) && _.isArray($remove_queue) && $remove_queue.length) {
        var $remove_item;
        var remove_callback = function(response, data) {
            if (response === 0) {
                _this._mixpanel['persistence']._add_to_people_queue(REMOVE_ACTION, $remove_item);
            }
            if (!_.isUndefined(_remove_callback)) {
                _remove_callback(response, data);
            }
        };
        for (var j = $remove_queue.length - 1; j >= 0; j--) {
            $remove_item = $remove_queue.pop();
            if (!_.isEmptyObject($remove_item)) {
                _this.remove($remove_item, remove_callback);
            }
        }
        _this._mixpanel['persistence'].save();
    }
};

MixpanelPeople.prototype._is_reserved_property = function(prop) {
    return prop === '$distinct_id' || prop === '$token' || prop === '$device_id' || prop === '$user_id' || prop === '$had_persisted_distinct_id';
};

// MixpanelPeople Exports
MixpanelPeople.prototype['set']           = MixpanelPeople.prototype.set;
MixpanelPeople.prototype['set_once']      = MixpanelPeople.prototype.set_once;
MixpanelPeople.prototype['unset']         = MixpanelPeople.prototype.unset;
MixpanelPeople.prototype['increment']     = MixpanelPeople.prototype.increment;
MixpanelPeople.prototype['append']        = MixpanelPeople.prototype.append;
MixpanelPeople.prototype['remove']        = MixpanelPeople.prototype.remove;
MixpanelPeople.prototype['union']         = MixpanelPeople.prototype.union;
MixpanelPeople.prototype['track_charge']  = MixpanelPeople.prototype.track_charge;
MixpanelPeople.prototype['clear_charges'] = MixpanelPeople.prototype.clear_charges;
MixpanelPeople.prototype['delete_user']   = MixpanelPeople.prototype.delete_user;
MixpanelPeople.prototype['toString']      = MixpanelPeople.prototype.toString;

/*
 * Mixpanel JS Library
 *
 * Copyright 2012, Mixpanel, Inc. All Rights Reserved
 * http://mixpanel.com/
 *
 * Includes portions of Underscore.js
 * http://documentcloud.github.com/underscore/
 * (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
 * Released under the MIT License.
 */

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name mixpanel-2.8.min.js
// ==/ClosureCompiler==

/*
SIMPLE STYLE GUIDE:

this.x === public function
this._x === internal - only use within this file
this.__x === private - only use within the class

Globals should be all caps
*/

var init_type;       // MODULE or SNIPPET loader
var mixpanel_master; // main mixpanel instance / object
var INIT_MODULE  = 0;
var INIT_SNIPPET = 1;

/** @const */ var PRIMARY_INSTANCE_NAME = 'mixpanel';


/*
 * Dynamic... constants? Is that an oxymoron?
 */
// http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
// https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#withCredentials
var USE_XHR = (window$1.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest());

// IE<10 does not support cross-origin XHR's but script tags
// with defer won't block window.onload; ENQUEUE_REQUESTS
// should only be true for Opera<12
var ENQUEUE_REQUESTS = !USE_XHR && (userAgent.indexOf('MSIE') === -1) && (userAgent.indexOf('Mozilla') === -1);

/*
 * Module-level globals
 */
var DEFAULT_CONFIG = {
    'api_host':                          'https://api-js.mixpanel.com',
    'app_host':                          'https://mixpanel.com',
    'autotrack':                         true,
    'cdn':                               'https://cdn.mxpnl.com',
    'cross_subdomain_cookie':            true,
    'persistence':                       'cookie',
    'persistence_name':                  '',
    'cookie_name':                       '',
    'loaded':                            function() {},
    'store_google':                      true,
    'save_referrer':                     true,
    'test':                              false,
    'verbose':                           false,
    'img':                               false,
    'track_pageview':                    true,
    'debug':                             false,
    'track_links_timeout':               300,
    'cookie_expiration':                 365,
    'upgrade':                           false,
    'disable_persistence':               false,
    'disable_cookie':                    false,
    'secure_cookie':                     false,
    'ip':                                true,
    'opt_out_tracking_by_default':       false,
    'opt_out_persistence_by_default':    false,
    'opt_out_tracking_persistence_type': 'localStorage',
    'opt_out_tracking_cookie_prefix':    null,
    'property_blacklist':                [],
    'xhr_headers':                       {}, // { header: value, header2: value }
    'inapp_protocol':                    '//',
    'inapp_link_new_window':             false
};

var DOM_LOADED = false;

/**
 * Mixpanel Library Object
 * @constructor
 */
var MixpanelLib = function() {};


/**
 * create_mplib(token:string, config:object, name:string)
 *
 * This function is used by the init method of MixpanelLib objects
 * as well as the main initializer at the end of the JSLib (that
 * initializes document.mixpanel as well as any additional instances
 * declared before this file has loaded).
 */
var create_mplib = function(token, config, name) {
    var instance,
        target = (name === PRIMARY_INSTANCE_NAME) ? mixpanel_master : mixpanel_master[name];

    if (target && init_type === INIT_MODULE) {
        instance = target;
    } else {
        if (target && !_.isArray(target)) {
            console$1.error('You have already initialized ' + name);
            return;
        }
        instance = new MixpanelLib();
    }

    instance._init(token, config, name);

    instance['people'] = new MixpanelPeople();
    instance['people']._init(instance);

    instance._cached_groups = {}; // cache groups in a pool
    instance._user_decide_check_complete = false;
    instance._events_tracked_before_user_decide_check_complete = [];

    // if any instance on the page has debug = true, we set the
    // global debug to be true
    Config.DEBUG = Config.DEBUG || instance.get_config('debug');

    instance['__autotrack_enabled'] = instance.get_config('autotrack');
    if (instance.get_config('autotrack')) {
        var num_buckets = 100;
        var num_enabled_buckets = 100;
        if (!autotrack.enabledForProject(instance.get_config('token'), num_buckets, num_enabled_buckets)) {
            instance['__autotrack_enabled'] = false;
            console$1.log('Not in active bucket: disabling Automatic Event Collection.');
        } else if (!autotrack.isBrowserSupported()) {
            instance['__autotrack_enabled'] = false;
            console$1.log('Disabling Automatic Event Collection because this browser is not supported');
        } else {
            autotrack.init(instance);
        }
    }

    // if target is not defined, we called init after the lib already
    // loaded, so there won't be an array of things to execute
    if (!_.isUndefined(target) && _.isArray(target)) {
        // Crunch through the people queue first - we queue this data up &
        // flush on identify, so it's better to do all these operations first
        instance._execute_array.call(instance['people'], target['people']);
        instance._execute_array(target);
    }

    return instance;
};

// Initialization methods

/**
 * This function initializes a new instance of the Mixpanel tracking object.
 * All new instances are added to the main mixpanel object as sub properties (such as
 * mixpanel.library_name) and also returned by this function. To define a
 * second instance on the page, you would call:
 *
 *     mixpanel.init('new token', { your: 'config' }, 'library_name');
 *
 * and use it like so:
 *
 *     mixpanel.library_name.track(...);
 *
 * @param {String} token   Your Mixpanel API token
 * @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110">See a list of default config options</a>.
 * @param {String} [name]    The name for the new mixpanel instance that you want created
 */
MixpanelLib.prototype.init = function (token, config, name) {
    if (_.isUndefined(name)) {
        console$1.error('You must name your new library: init(token, config, name)');
        return;
    }
    if (name === PRIMARY_INSTANCE_NAME) {
        console$1.error('You must initialize the main mixpanel object right after you include the Mixpanel js snippet');
        return;
    }

    var instance = create_mplib(token, config, name);
    mixpanel_master[name] = instance;
    instance._loaded();

    return instance;
};

// mixpanel._init(token:string, config:object, name:string)
//
// This function sets up the current instance of the mixpanel
// library.  The difference between this method and the init(...)
// method is this one initializes the actual instance, whereas the
// init(...) method sets up a new library and calls _init on it.
//
MixpanelLib.prototype._init = function(token, config, name) {
    this['__loaded'] = true;
    this['config'] = {};
    this['_triggered_notifs'] = [];

    this.set_config(_.extend({}, DEFAULT_CONFIG, config, {
        'name': name,
        'token': token,
        'callback_fn': ((name === PRIMARY_INSTANCE_NAME) ? name : PRIMARY_INSTANCE_NAME + '.' + name) + '._jsc'
    }));

    this['_jsc'] = function() {};

    this.__dom_loaded_queue = [];
    this.__request_queue = [];
    this.__disabled_events = [];
    this._flags = {
        'disable_all_events': false,
        'identify_called': false
    };

    this['persistence'] = this['cookie'] = new MixpanelPersistence(this['config']);
    this._gdpr_init();

    var uuid = _.UUID();
    if (!this.get_distinct_id()) {
        // There is no need to set the distinct id
        // or the device id if something was already stored
        // in the persitence
        this.register_once({
            'distinct_id': uuid,
            '$device_id': uuid
        }, '');
    }
};

// Private methods

MixpanelLib.prototype._loaded = function() {
    this.get_config('loaded')(this);

    // this happens after so a user can call identify/name_tag in
    // the loaded callback
    if (this.get_config('track_pageview')) {
        this.track_pageview();
    }
};

MixpanelLib.prototype._dom_loaded = function() {
    _.each(this.__dom_loaded_queue, function(item) {
        this._track_dom.apply(this, item);
    }, this);

    if (!this.has_opted_out_tracking()) {
        _.each(this.__request_queue, function(item) {
            this._send_request.apply(this, item);
        }, this);
    }

    delete this.__dom_loaded_queue;
    delete this.__request_queue;
};

MixpanelLib.prototype._track_dom = function(DomClass, args) {
    if (this.get_config('img')) {
        console$1.error('You can\'t use DOM tracking functions with img = true.');
        return false;
    }

    if (!DOM_LOADED) {
        this.__dom_loaded_queue.push([DomClass, args]);
        return false;
    }

    var dt = new DomClass().init(this);
    return dt.track.apply(dt, args);
};

/**
 * _prepare_callback() should be called by callers of _send_request for use
 * as the callback argument.
 *
 * If there is no callback, this returns null.
 * If we are going to make XHR/XDR requests, this returns a function.
 * If we are going to use script tags, this returns a string to use as the
 * callback GET param.
 */
MixpanelLib.prototype._prepare_callback = function(callback, data) {
    if (_.isUndefined(callback)) {
        return null;
    }

    if (USE_XHR) {
        var callback_function = function(response) {
            callback(response, data);
        };
        return callback_function;
    } else {
        // if the user gives us a callback, we store as a random
        // property on this instances jsc function and update our
        // callback string to reflect that.
        var jsc = this['_jsc'];
        var randomized_cb = '' + Math.floor(Math.random() * 100000000);
        var callback_string = this.get_config('callback_fn') + '[' + randomized_cb + ']';
        jsc[randomized_cb] = function(response) {
            delete jsc[randomized_cb];
            callback(response, data);
        };
        return callback_string;
    }
};

MixpanelLib.prototype._send_request = function(url, data, callback) {
    if (ENQUEUE_REQUESTS) {
        this.__request_queue.push(arguments);
        return;
    }

    // needed to correctly format responses
    var verbose_mode = this.get_config('verbose');
    if (data['verbose']) { verbose_mode = true; }

    if (this.get_config('test')) { data['test'] = 1; }
    if (verbose_mode) { data['verbose'] = 1; }
    if (this.get_config('img')) { data['img'] = 1; }
    if (!USE_XHR) {
        if (callback) {
            data['callback'] = callback;
        } else if (verbose_mode || this.get_config('test')) {
            // Verbose output (from verbose mode, or an error in test mode) is a json blob,
            // which by itself is not valid javascript. Without a callback, this verbose output will
            // cause an error when returned via jsonp, so we force a no-op callback param.
            // See the ECMA script spec: http://www.ecma-international.org/ecma-262/5.1/#sec-12.4
            data['callback'] = '(function(){})';
        }
    }

    data['ip'] = this.get_config('ip')?1:0;
    data['_'] = new Date().getTime().toString();
    url += '?' + _.HTTPBuildQuery(data);

    if ('img' in data) {
        var img = document$1.createElement('img');
        img.src = url;
        document$1.body.appendChild(img);
    } else if (USE_XHR) {
        try {
            var req = new XMLHttpRequest();
            req.open('GET', url, true);

            var headers = this.get_config('xhr_headers');
            _.each(headers, function(headerValue, headerName) {
                req.setRequestHeader(headerName, headerValue);
            });

            // send the mp_optout cookie
            // withCredentials cannot be modified until after calling .open on Android and Mobile Safari
            req.withCredentials = true;
            req.onreadystatechange = function () {
                if (req.readyState === 4) { // XMLHttpRequest.DONE == 4, except in safari 4
                    if (req.status === 200) {
                        if (callback) {
                            if (verbose_mode) {
                                var response;
                                try {
                                    response = _.JSONDecode(req.responseText);
                                } catch (e) {
                                    console$1.error(e);
                                    return;
                                }
                                callback(response);
                            } else {
                                callback(Number(req.responseText));
                            }
                        }
                    } else {
                        var error = 'Bad HTTP status: ' + req.status + ' ' + req.statusText;
                        console$1.error(error);
                        if (callback) {
                            if (verbose_mode) {
                                callback({status: 0, error: error});
                            } else {
                                callback(0);
                            }
                        }
                    }
                }
            };
            req.send(null);
        } catch (e) {
            console$1.error(e);
        }
    } else {
        var script = document$1.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = url;
        var s = document$1.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    }
};

/**
 * _execute_array() deals with processing any mixpanel function
 * calls that were called before the Mixpanel library were loaded
 * (and are thus stored in an array so they can be called later)
 *
 * Note: we fire off all the mixpanel function calls && user defined
 * functions BEFORE we fire off mixpanel tracking calls. This is so
 * identify/register/set_config calls can properly modify early
 * tracking calls.
 *
 * @param {Array} array
 */
MixpanelLib.prototype._execute_array = function(array) {
    var fn_name, alias_calls = [], other_calls = [], tracking_calls = [];
    _.each(array, function(item) {
        if (item) {
            fn_name = item[0];
            if (_.isArray(fn_name)) {
                tracking_calls.push(item); // chained call e.g. mixpanel.get_group().set()
            } else if (typeof(item) === 'function') {
                item.call(this);
            } else if (_.isArray(item) && fn_name === 'alias') {
                alias_calls.push(item);
            } else if (_.isArray(item) && fn_name.indexOf('track') !== -1 && typeof(this[fn_name]) === 'function') {
                tracking_calls.push(item);
            } else {
                other_calls.push(item);
            }
        }
    }, this);

    var execute = function(calls, context) {
        _.each(calls, function(item) {
            if (_.isArray(item[0])) {
                // chained call
                var caller = context;
                _.each(item, function(call) {
                    caller = caller[call[0]].apply(caller, call.slice(1));
                });
            } else {
                this[item[0]].apply(this, item.slice(1));
            }
        }, context);
    };

    execute(alias_calls, this);
    execute(other_calls, this);
    execute(tracking_calls, this);
};

/**
 * push() keeps the standard async-array-push
 * behavior around after the lib is loaded.
 * This is only useful for external integrations that
 * do not wish to rely on our convenience methods
 * (created in the snippet).
 *
 * ### Usage:
 *     mixpanel.push(['register', { a: 'b' }]);
 *
 * @param {Array} item A [function_name, args...] array to be executed
 */
MixpanelLib.prototype.push = function(item) {
    this._execute_array([item]);
};

/**
 * Disable events on the Mixpanel object. If passed no arguments,
 * this function disables tracking of any event. If passed an
 * array of event names, those events will be disabled, but other
 * events will continue to be tracked.
 *
 * Note: this function does not stop other mixpanel functions from
 * firing, such as register() or people.set().
 *
 * @param {Array} [events] An array of event names to disable
 */
MixpanelLib.prototype.disable = function(events) {
    if (typeof(events) === 'undefined') {
        this._flags.disable_all_events = true;
    } else {
        this.__disabled_events = this.__disabled_events.concat(events);
    }
};

/**
 * Track an event. This is the most important and
 * frequently used Mixpanel function.
 *
 * ### Usage:
 *
 *     // track an event named 'Registered'
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 * To track link clicks or form submissions, see track_links() or track_forms().
 *
 * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
 * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
 * @param {Function} [callback] If provided, the callback function will be called after tracking the event.
 */
MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function(event_name, properties, callback) {
    if (typeof(callback) !== 'function') {
        callback = function() {};
    }

    if (_.isUndefined(event_name)) {
        console$1.error('No event name provided to mixpanel.track');
        return;
    }

    if (this._event_is_disabled(event_name)) {
        callback(0);
        return;
    }

    // set defaults
    properties = properties || {};
    properties['token'] = this.get_config('token');

    // set $duration if time_event was previously called for this event
    var start_timestamp = this['persistence'].remove_event_timer(event_name);
    if (!_.isUndefined(start_timestamp)) {
        var duration_in_ms = new Date().getTime() - start_timestamp;
        properties['$duration'] = parseFloat((duration_in_ms / 1000).toFixed(3));
    }

    // update persistence
    this['persistence'].update_search_keyword(document$1.referrer);

    if (this.get_config('store_google')) { this['persistence'].update_campaign_params(); }
    if (this.get_config('save_referrer')) { this['persistence'].update_referrer_info(document$1.referrer); }

    // note: extend writes to the first object, so lets make sure we
    // don't write to the persistence properties object and info
    // properties object by passing in a new object

    // update properties with pageview info and super-properties
    properties = _.extend(
        {},
        _.info.properties(),
        this['persistence'].properties(),
        properties
    );

    var property_blacklist = this.get_config('property_blacklist');
    if (_.isArray(property_blacklist)) {
        _.each(property_blacklist, function(blacklisted_prop) {
            delete properties[blacklisted_prop];
        });
    } else {
        console$1.error('Invalid value for property_blacklist config: ' + property_blacklist);
    }

    var data = {
        'event': event_name,
        'properties': properties
    };
    var truncated_data = _.truncate(data, 255);
    var json_data      = _.JSONEncode(truncated_data);
    var encoded_data   = _.base64Encode(json_data);

    console$1.log('MIXPANEL REQUEST:');
    console$1.log(truncated_data);

    this._send_request(
        this.get_config('api_host') + '/track/',
        { 'data': encoded_data },
        this._prepare_callback(callback, truncated_data)
    );

    this._check_and_handle_triggered_notifications(data);

    return truncated_data;
});

/**
 * Register the current user into one/many groups.
 *
 * ### Usage:
 *
 *      mixpanel.set_group('company', ['mixpanel', 'google']) // an array of IDs
 *      mixpanel.set_group('company', 'mixpanel')
 *      mixpanel.set_group('company', 128746312)
 *
 * @param {String} group_key Group key
 * @param {Array|String|Number} group_ids An array of group IDs, or a singular group ID
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 *
 */
MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function(group_key, group_ids, callback) {
    if (!_.isArray(group_ids)) {
        group_ids = [group_ids];
    }
    var prop = {};
    prop[group_key] = group_ids;
    this.register(prop);
    return this['people'].set(group_key, group_ids, callback);
});

/**
 * Add a new group for this user.
 *
 * ### Usage:
 *
 *      mixpanel.add_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */
MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
    var old_values = this.get_property(group_key);
    if (old_values === undefined) {
        var prop = {};
        prop[group_key] = [group_id];
        this.register(prop);
    } else {
        if (old_values.indexOf(group_id) === -1) {
            old_values.push(group_id);
            this.register(prop);
        }
    }
    return this['people'].union(group_key, group_id, callback);
});

/**
 * Remove a group from this user.
 *
 * ### Usage:
 *
 *      mixpanel.remove_group('company', 'mixpanel')
 *
 * @param {String} group_key Group key
 * @param {*} group_id A valid Mixpanel property type
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */
MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
    var old_value = this.get_property(group_key);
    // if the value doesn't exist, the persistent store is unchanged
    if (old_value !== undefined) {
        var idx = old_value.indexOf(group_id);
        if (idx > -1) {
            old_value.splice(idx, 1);
            this.register({group_key: old_value});
        }
        if (old_value.length === 0) {
            this.unregister(group_key);
        }
    }
    return this['people'].remove(group_key, group_id, callback);
});

/**
 * Track an event with specific groups.
 *
 * ### Usage:
 *
 *      mixpanel.track_with_groups('purchase', {'product': 'iphone'}, {'University': ['UCB', 'UCLA']})
 *
 * @param {String} event_name The name of the event (see `mixpanel.track()`)
 * @param {Object=} properties A set of properties to include with the event you're sending (see `mixpanel.track()`)
 * @param {Object=} groups An object mapping group name keys to one or more values
 * @param {Function} [callback] If provided, the callback will be called after tracking the event.
 */
MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(function(event_name, properties, groups, callback) {
    var tracking_props = _.extend({}, properties || {});
    _.each(groups, function(v, k) {
        if (v !== null && v !== undefined) {
            tracking_props[k] = v;
        }
    });
    return this.track(event_name, tracking_props, callback);
});

MixpanelLib.prototype._create_map_key = function (group_key, group_id) {
    return group_key + '_' + JSON.stringify(group_id);
};

MixpanelLib.prototype._remove_group_from_cache = function (group_key, group_id) {
    delete this._cached_groups[this._create_map_key(group_key, group_id)];
};

/**
 * Look up reference to a Mixpanel group
 *
 * ### Usage:
 *
 *       mixpanel.get_group(group_key, group_id)
 *
 * @param {String} group_key Group key
 * @param {Object} group_id A valid Mixpanel property type
 * @returns {Object} A MixpanelGroup identifier
 */
MixpanelLib.prototype.get_group = function (group_key, group_id) {
    var map_key = this._create_map_key(group_key, group_id);
    var group = this._cached_groups[map_key];
    if (group === undefined || group._group_key !== group_key || group._group_id !== group_id) {
        group = new MixpanelGroup();
        group._init(this, group_key, group_id);
        this._cached_groups[map_key] = group;
    }
    return group;
};

/**
 * Track a page view event, which is currently ignored by the server.
 * This function is called by default on page load unless the
 * track_pageview configuration variable is false.
 *
 * @param {String} [page] The url of the page to record. If you don't include this, it defaults to the current url.
 * @api private
 */
MixpanelLib.prototype.track_pageview = function(page) {
    if (_.isUndefined(page)) {
        page = document$1.location.href;
    }
    this.track('mp_page_view', _.info.pageviewInfo(page));
};

/**
 * Track clicks on a set of document elements. Selector must be a
 * valid query. Elements must exist on the page at the time track_links is called.
 *
 * ### Usage:
 *
 *     // track click for link id #nav
 *     mixpanel.track_links('#nav', 'Clicked Nav Link');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the Mixpanel
 * servers to respond. If they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] A properties object or function that returns a dictionary of properties when passed a DOMElement
 */
MixpanelLib.prototype.track_links = function() {
    return this._track_dom.call(this, LinkTracker, arguments);
};

/**
 * Track form submissions. Selector must be a valid query.
 *
 * ### Usage:
 *
 *     // track submission for form id 'register'
 *     mixpanel.track_forms('#register', 'Created Account');
 *
 * ### Notes:
 *
 * This function will wait up to 300 ms for the mixpanel
 * servers to respond, if they have not responded by that time
 * it will head to the link without ensuring that your event
 * has been tracked.  To configure this timeout please see the
 * set_config() documentation below.
 *
 * If you pass a function in as the properties argument, the
 * function will receive the DOMElement that triggered the
 * event as an argument.  You are expected to return an object
 * from the function; any properties defined on this object
 * will be sent to mixpanel as event properties.
 *
 * @type {Function}
 * @param {Object|String} query A valid DOM query, element or jQuery-esque list
 * @param {String} event_name The name of the event to track
 * @param {Object|Function} [properties] This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
 */
MixpanelLib.prototype.track_forms = function() {
    return this._track_dom.call(this, FormTracker, arguments);
};

/**
 * Time an event by including the time between this call and a
 * later 'track' call for the same event in the properties sent
 * with the event.
 *
 * ### Usage:
 *
 *     // time an event named 'Registered'
 *     mixpanel.time_event('Registered');
 *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
 *
 * When called for a particular event name, the next track call for that event
 * name will include the elapsed time between the 'time_event' and 'track'
 * calls. This value is stored as seconds in the '$duration' property.
 *
 * @param {String} event_name The name of the event.
 */
MixpanelLib.prototype.time_event = function(event_name) {
    if (_.isUndefined(event_name)) {
        console$1.error('No event name provided to mixpanel.time_event');
        return;
    }

    if (this._event_is_disabled(event_name)) {
        return;
    }

    this['persistence'].set_event_timer(event_name,  new Date().getTime());
};

/**
 * Register a set of super properties, which are included with all
 * events. This will overwrite previous super property values.
 *
 * ### Usage:
 *
 *     // register 'Gender' as a super property
 *     mixpanel.register({'Gender': 'Female'});
 *
 *     // register several super properties when a user signs up
 *     mixpanel.register({
 *         'Email': 'jdoe@example.com',
 *         'Account Type': 'Free'
 *     });
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {Number} [days] How many days since the user's last visit to store the super properties
 */
MixpanelLib.prototype.register = function(props, days) {
    this['persistence'].register(props, days);
};

/**
 * Register a set of super properties only once. This will not
 * overwrite previous super property values, unlike register().
 *
 * ### Usage:
 *
 *     // register a super property for the first time only
 *     mixpanel.register_once({
 *         'First Login Date': new Date().toISOString()
 *     });
 *
 * ### Notes:
 *
 * If default_value is specified, current super properties
 * with that value will be overwritten.
 *
 * @param {Object} properties An associative array of properties to store about the user
 * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
 * @param {Number} [days] How many days since the users last visit to store the super properties
 */
MixpanelLib.prototype.register_once = function(props, default_value, days) {
    this['persistence'].register_once(props, default_value, days);
};

/**
 * Delete a super property stored with the current user.
 *
 * @param {String} property The name of the super property to remove
 */
MixpanelLib.prototype.unregister = function(property) {
    this['persistence'].unregister(property);
};

MixpanelLib.prototype._register_single = function(prop, value) {
    var props = {};
    props[prop] = value;
    this.register(props);
};

/**
 * Identify a user with a unique ID instead of a Mixpanel
 * randomly generated distinct_id. If the method is never called,
 * then unique visitors will be identified by a UUID generated
 * the first time they visit the site.
 *
 * ### Notes:
 *
 * You can call this function to overwrite a previously set
 * unique ID for the current user. Mixpanel cannot translate
 * between IDs at this time, so when you change a user's ID
 * they will appear to be a new user.
 *
 * When used alone, mixpanel.identify will change the user's
 * distinct_id to the unique ID provided. When used in tandem
 * with mixpanel.alias, it will allow you to identify based on
 * unique ID and map that back to the original, anonymous
 * distinct_id given to the user upon her first arrival to your
 * site (thus connecting anonymous pre-signup activity to
 * post-signup activity). Though the two work together, do not
 * call identify() at the same time as alias(). Calling the two
 * at the same time can cause a race condition, so it is best
 * practice to call identify on the original, anonymous ID
 * right after you've aliased it.
 * <a href="https://mixpanel.com/help/questions/articles/how-should-i-handle-my-user-identity-with-the-mixpanel-javascript-library">Learn more about how mixpanel.identify and mixpanel.alias can be used</a>.
 *
 * @param {String} [unique_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
 */
MixpanelLib.prototype.identify = function(
    new_distinct_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback
) {
    // Optional Parameters
    //  _set_callback:function  A callback to be run if and when the People set queue is flushed
    //  _add_callback:function  A callback to be run if and when the People add queue is flushed
    //  _append_callback:function  A callback to be run if and when the People append queue is flushed
    //  _set_once_callback:function  A callback to be run if and when the People set_once queue is flushed
    //  _union_callback:function  A callback to be run if and when the People union queue is flushed
    //  _unset_callback:function  A callback to be run if and when the People unset queue is flushed

    var previous_distinct_id = this.get_distinct_id();
    this.register({'$user_id': new_distinct_id});

    if (!this.get_property('$device_id')) {
        // The persisted distinct id might not actually be a device id at all
        // it might be a distinct id of the user from before
        var device_id = previous_distinct_id;
        this.register_once({
            '$had_persisted_distinct_id': true,
            '$device_id': device_id
        }, '');
    }

    // identify only changes the distinct id if it doesn't match either the existing or the alias;
    // if it's new, blow away the alias as well.
    if (new_distinct_id !== previous_distinct_id && new_distinct_id !== this.get_property(ALIAS_ID_KEY)) {
        this.unregister(ALIAS_ID_KEY);
        this.register({'distinct_id': new_distinct_id});
    }
    this._check_and_handle_notifications(this.get_distinct_id());
    this._flags.identify_called = true;
    // Flush any queued up people requests
    this['people']._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback);

    // send an $identify event any time the distinct_id is changing - logic on the server
    // will determine whether or not to do anything with it.
    if (new_distinct_id !== previous_distinct_id) {
        this.track('$identify', { 'distinct_id': new_distinct_id, '$anon_distinct_id': previous_distinct_id });
    }
};

/**
 * Clears super properties and generates a new random distinct_id for this instance.
 * Useful for clearing data when a user logs out.
 */
MixpanelLib.prototype.reset = function() {
    this['persistence'].clear();
    this._flags.identify_called = false;
    var uuid = _.UUID();
    this.register_once({
        'distinct_id': uuid,
        '$device_id': uuid
    }, '');
};

/**
 * Returns the current distinct id of the user. This is either the id automatically
 * generated by the library or the id that has been passed by a call to identify().
 *
 * ### Notes:
 *
 * get_distinct_id() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // set distinct_id after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             distinct_id = mixpanel.get_distinct_id();
 *         }
 *     });
 */
MixpanelLib.prototype.get_distinct_id = function() {
    return this.get_property('distinct_id');
};

/**
 * Create an alias, which Mixpanel will use to link two distinct_ids going forward (not retroactively).
 * Multiple aliases can map to the same original ID, but not vice-versa. Aliases can also be chained - the
 * following is a valid scenario:
 *
 *     mixpanel.alias('new_id', 'existing_id');
 *     ...
 *     mixpanel.alias('newer_id', 'new_id');
 *
 * If the original ID is not passed in, we will use the current distinct_id - probably the auto-generated GUID.
 *
 * ### Notes:
 *
 * The best practice is to call alias() when a unique ID is first created for a user
 * (e.g., when a user first registers for an account and provides an email address).
 * alias() should never be called more than once for a given user, except to
 * chain a newer ID to a previously new ID, as described above.
 *
 * @param {String} alias A unique identifier that you want to use for this user in the future.
 * @param {String} [original] The current identifier being used for this user.
 */
MixpanelLib.prototype.alias = function(alias, original) {
    // If the $people_distinct_id key exists in persistence, there has been a previous
    // mixpanel.people.identify() call made for this user. It is VERY BAD to make an alias with
    // this ID, as it will duplicate users.
    if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
        console$1.critical('Attempting to create alias for existing People user - aborting.');
        return -2;
    }

    var _this = this;
    if (_.isUndefined(original)) {
        original = this.get_distinct_id();
    }
    if (alias !== original) {
        this._register_single(ALIAS_ID_KEY, alias);
        return this.track('$create_alias', { 'alias': alias, 'distinct_id': original }, function() {
            // Flush the people queue
            _this.identify(alias);
        });
    } else {
        console$1.error('alias matches current distinct_id - skipping api call.');
        this.identify(alias);
        return -1;
    }
};

/**
 * Provide a string to recognize the user by. The string passed to
 * this method will appear in the Mixpanel Streams product rather
 * than an automatically generated name. Name tags do not have to
 * be unique.
 *
 * This value will only be included in Streams data.
 *
 * @param {String} name_tag A human readable name for the user
 * @api private
 */
MixpanelLib.prototype.name_tag = function(name_tag) {
    this._register_single('mp_name_tag', name_tag);
};

/**
 * Update the configuration of a mixpanel library instance.
 *
 * The default config is:
 *
 *     {
 *       // super properties cookie expiration (in days)
 *       cookie_expiration: 365
 *
 *       // super properties span subdomains
 *       cross_subdomain_cookie: true
 *
 *       // debug mode
 *       debug: false
 *
 *       // if this is true, the mixpanel cookie or localStorage entry
 *       // will be deleted, and no user persistence will take place
 *       disable_persistence: false
 *
 *       // if this is true, Mixpanel will automatically determine
 *       // City, Region and Country data using the IP address of
 *       //the client
 *       ip: true
 *
 *       // opt users out of tracking by this Mixpanel instance by default
 *       opt_out_tracking_by_default: false
 *
 *       // opt users out of browser data storage by this Mixpanel instance by default
 *       opt_out_persistence_by_default: false
 *
 *       // persistence mechanism used by opt-in/opt-out methods - cookie
 *       // or localStorage - falls back to cookie if localStorage is unavailable
 *       opt_out_tracking_persistence_type: 'localStorage'
 *
 *       // customize the name of cookie/localStorage set by opt-in/opt-out methods
 *       opt_out_tracking_cookie_prefix: null
 *
 *       // type of persistent store for super properties (cookie/
 *       // localStorage) if set to 'localStorage', any existing
 *       // mixpanel cookie value with the same persistence_name
 *       // will be transferred to localStorage and deleted
 *       persistence: 'cookie'
 *
 *       // name for super properties persistent store
 *       persistence_name: ''
 *
 *       // names of properties/superproperties which should never
 *       // be sent with track() calls
 *       property_blacklist: []
 *
 *       // if this is true, mixpanel cookies will be marked as
 *       // secure, meaning they will only be transmitted over https
 *       secure_cookie: false
 *
 *       // the amount of time track_links will
 *       // wait for Mixpanel's servers to respond
 *       track_links_timeout: 300
 *
 *       // should we track a page view on page load
 *       track_pageview: true
 *
 *       // if you set upgrade to be true, the library will check for
 *       // a cookie from our old js library and import super
 *       // properties from it, then the old cookie is deleted
 *       // The upgrade config option only works in the initialization,
 *       // so make sure you set it when you create the library.
 *       upgrade: false
 *
 *       // extra HTTP request headers to set for each API request, in
 *       // the format {'Header-Name': value}
 *       xhr_headers: {}
 *
 *       // protocol for fetching in-app message resources, e.g.
 *       // 'https://' or 'http://'; defaults to '//' (which defers to the
 *       // current page's protocol)
 *       inapp_protocol: '//'
 *
 *       // whether to open in-app message link in new tab/window
 *       inapp_link_new_window: false
 *     }
 *
 *
 * @param {Object} config A dictionary of new configuration values to update
 */
MixpanelLib.prototype.set_config = function(config) {
    if (_.isObject(config)) {
        _.extend(this['config'], config);

        if (!this.get_config('persistence_name')) {
            this['config']['persistence_name'] = this['config']['cookie_name'];
        }
        if (!this.get_config('disable_persistence')) {
            this['config']['disable_persistence'] = this['config']['disable_cookie'];
        }

        if (this['persistence']) {
            this['persistence'].update_config(this['config']);
        }
        Config.DEBUG = Config.DEBUG || this.get_config('debug');
    }
};

/**
 * returns the current config object for the library.
 */
MixpanelLib.prototype.get_config = function(prop_name) {
    return this['config'][prop_name];
};

/**
 * Returns the value of the super property named property_name. If no such
 * property is set, get_property() will return the undefined value.
 *
 * ### Notes:
 *
 * get_property() can only be called after the Mixpanel library has finished loading.
 * init() has a loaded function available to handle this automatically. For example:
 *
 *     // grab value for 'user_id' after the mixpanel library has loaded
 *     mixpanel.init('YOUR PROJECT TOKEN', {
 *         loaded: function(mixpanel) {
 *             user_id = mixpanel.get_property('user_id');
 *         }
 *     });
 *
 * @param {String} property_name The name of the super property you want to retrieve
 */
MixpanelLib.prototype.get_property = function(property_name) {
    return this['persistence']['props'][property_name];
};

MixpanelLib.prototype.toString = function() {
    var name = this.get_config('name');
    if (name !== PRIMARY_INSTANCE_NAME) {
        name = PRIMARY_INSTANCE_NAME + '.' + name;
    }
    return name;
};

MixpanelLib.prototype._event_is_disabled = function(event_name) {
    return _.isBlockedUA(userAgent) ||
        this._flags.disable_all_events ||
        _.include(this.__disabled_events, event_name);
};

MixpanelLib.prototype._check_and_handle_triggered_notifications = addOptOutCheckMixpanelLib(function(event_data) {
    if (!this._user_decide_check_complete) {
        this._events_tracked_before_user_decide_check_complete.push(event_data);
    } else {
        var arr = this['_triggered_notifs'];
        for (var i = 0; i < arr.length; i++) {
            var notif = new MixpanelNotification(arr[i], this);
            if (notif._matches_event_data(event_data)) {
                this._show_notification(arr[i]);
                return;
            }
        }
    }
});

MixpanelLib.prototype._check_and_handle_notifications = addOptOutCheckMixpanelLib(function(distinct_id) {
    if (
        !distinct_id ||
        this._flags.identify_called ||
        this.get_config('disable_notifications')
    ) {
        return;
    }

    console$1.log('MIXPANEL NOTIFICATION CHECK');

    var data = {
        'verbose':     true,
        'version':     '3',
        'lib':         'web',
        'token':       this.get_config('token'),
        'distinct_id': distinct_id
    };
    this._send_request(
        this.get_config('api_host') + '/decide/',
        data,
        this._prepare_callback(_.bind(function(result) {
            if (result['notifications'] && result['notifications'].length > 0) {
                this['_triggered_notifs'] = [];
                var notifications = [];
                _.each(result['notifications'], function(notif) {
                    (notif['display_triggers'] && notif['display_triggers'].length > 0 ? this['_triggered_notifs'] : notifications).push(notif);
                }, this);
                if (notifications.length > 0) {
                    this._show_notification.call(this, notifications[0]);
                }
            }
            this._handle_user_decide_check_complete();
        }, this))
    );
});

MixpanelLib.prototype._handle_user_decide_check_complete = function() {
    this._user_decide_check_complete = true;

    // check notifications against events that were tracked before decide call completed
    var events = this._events_tracked_before_user_decide_check_complete;
    while (events.length > 0) {
        var data = events.shift(); // replay in the same order they came in
        this._check_and_handle_triggered_notifications(data);
    }
};

MixpanelLib.prototype._show_notification = function(notif_data) {
    var notification = new MixpanelNotification(notif_data, this);
    notification.show();
};

// perform some housekeeping around GDPR opt-in/out state
MixpanelLib.prototype._gdpr_init = function() {
    var is_localStorage_requested = this.get_config('opt_out_tracking_persistence_type') === 'localStorage';

    // try to convert opt-in/out cookies to localStorage if possible
    if (is_localStorage_requested && _.localStorage.is_supported()) {
        if (!this.has_opted_in_tracking() && this.has_opted_in_tracking({'persistence_type': 'cookie'})) {
            this.opt_in_tracking({'enable_persistence': false});
        }
        if (!this.has_opted_out_tracking() && this.has_opted_out_tracking({'persistence_type': 'cookie'})) {
            this.opt_out_tracking({'clear_persistence': false});
        }
        this.clear_opt_in_out_tracking({
            'persistence_type': 'cookie',
            'enable_persistence': false
        });
    }

    // check whether the user has already opted out - if so, clear & disable persistence
    if (this.has_opted_out_tracking()) {
        this._gdpr_update_persistence({'clear_persistence': true});

    // check whether we should opt out by default
    // note: we don't clear persistence here by default since opt-out default state is often
    //       used as an initial state while GDPR information is being collected
    } else if (!this.has_opted_in_tracking() && (
        this.get_config('opt_out_tracking_by_default') || _.cookie.get('mp_optout')
    )) {
        _.cookie.remove('mp_optout');
        this.opt_out_tracking({
            'clear_persistence': this.get_config('opt_out_persistence_by_default')
        });
    }
};

/**
 * Enable or disable persistence based on options
 * only enable/disable if persistence is not already in this state
 * @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
 * @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
 */
MixpanelLib.prototype._gdpr_update_persistence = function(options) {
    var disabled;
    if (options && options['clear_persistence']) {
        disabled = true;
    } else if (options && options['enable_persistence']) {
        disabled = false;
    } else {
        return;
    }

    if (!this.get_config('disable_persistence') && this['persistence'].disabled !== disabled) {
        this['persistence'].set_disabled(disabled);
    }
};

// call a base gdpr function after constructing the appropriate token and options args
MixpanelLib.prototype._gdpr_call_func = function(func, options) {
    options = _.extend({
        'track': _.bind(this.track, this),
        'persistence_type': this.get_config('opt_out_tracking_persistence_type'),
        'cookie_prefix': this.get_config('opt_out_tracking_cookie_prefix'),
        'cookie_expiration': this.get_config('cookie_expiration'),
        'cross_subdomain_cookie': this.get_config('cross_subdomain_cookie'),
        'secure_cookie': this.get_config('secure_cookie')
    }, options);

    // check if localStorage can be used for recording opt out status, fall back to cookie if not
    if (!_.localStorage.is_supported()) {
        options['persistence_type'] = 'cookie';
    }

    return func(this.get_config('token'), {
        track: options['track'],
        trackEventName: options['track_event_name'],
        trackProperties: options['track_properties'],
        persistenceType: options['persistence_type'],
        persistencePrefix: options['cookie_prefix'],
        cookieExpiration: options['cookie_expiration'],
        crossSubdomainCookie: options['cross_subdomain_cookie'],
        secureCookie: options['secure_cookie']
    });
};

/**
 * Opt the user in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user in
 *     mixpanel.opt_in_tracking();
 *
 *     // opt user in with specific event name, properties, cookie configuration
 *     mixpanel.opt_in_tracking({
 *         track_event_name: 'User opted in',
 *         track_event_properties: {
 *             'Email': 'jdoe@example.com'
 *         },
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {function} [options.track] Function used for tracking a Mixpanel event to record the opt-in action (default is this Mixpanel instance's track method)
 * @param {string} [options.track_event_name=$opt_in] Event name to be used for tracking the opt-in action
 * @param {Object} [options.track_properties] Set of properties to be tracked along with the opt-in action
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */
MixpanelLib.prototype.opt_in_tracking = function(options) {
    options = _.extend({
        'enable_persistence': true
    }, options);

    this._gdpr_call_func(optIn, options);
    this._gdpr_update_persistence(options);
};

/**
 * Opt the user out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // opt user out
 *     mixpanel.opt_out_tracking();
 *
 *     // opt user out with different cookie configuration from Mixpanel instance
 *     mixpanel.opt_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.delete_user=true] If true, will delete the currently identified user's profile and clear all charges after opting the user out
 * @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */
MixpanelLib.prototype.opt_out_tracking = function(options) {
    options = _.extend({
        'clear_persistence': true,
        'delete_user': true
    }, options);

    // delete use and clear charges since these methods may be disabled by opt-out
    if (options['delete_user'] && this['people'] && this['people']._identify_called()) {
        this['people'].delete_user();
        this['people'].clear_charges();
    }

    this._gdpr_call_func(optOut, options);
    this._gdpr_update_persistence(options);
};

/**
 * Check whether the user has opted in to data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_in = mixpanel.has_opted_in_tracking();
 *     // use has_opted_in value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-in status
 */
MixpanelLib.prototype.has_opted_in_tracking = function(options) {
    return this._gdpr_call_func(hasOptedIn, options);
};

/**
 * Check whether the user has opted out of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     var has_opted_out = mixpanel.has_opted_out_tracking();
 *     // use has_opted_out value
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @returns {boolean} current opt-out status
 */
MixpanelLib.prototype.has_opted_out_tracking = function(options) {
    return this._gdpr_call_func(hasOptedOut, options);
};

/**
 * Clear the user's opt in/out status of data tracking and cookies/localstorage for this Mixpanel instance
 *
 * ### Usage
 *
 *     // clear user's opt-in/out status
 *     mixpanel.clear_opt_in_out_tracking();
 *
 *     // clear user's opt-in/out status with specific cookie configuration - should match
 *     // configuration used when opt_in_tracking/opt_out_tracking methods were called.
 *     mixpanel.clear_opt_in_out_tracking({
 *         cookie_expiration: 30,
 *         secure_cookie: true
 *     });
 *
 * @param {Object} [options] A dictionary of config options to override
 * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
 * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
 * @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
 * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
 * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
 */
MixpanelLib.prototype.clear_opt_in_out_tracking = function(options) {
    options = _.extend({
        'enable_persistence': true
    }, options);

    this._gdpr_call_func(clearOptInOut, options);
    this._gdpr_update_persistence(options);
};

// EXPORTS (for closure compiler)

// MixpanelLib Exports
MixpanelLib.prototype['init']                            = MixpanelLib.prototype.init;
MixpanelLib.prototype['reset']                           = MixpanelLib.prototype.reset;
MixpanelLib.prototype['disable']                         = MixpanelLib.prototype.disable;
MixpanelLib.prototype['time_event']                      = MixpanelLib.prototype.time_event;
MixpanelLib.prototype['track']                           = MixpanelLib.prototype.track;
MixpanelLib.prototype['track_links']                     = MixpanelLib.prototype.track_links;
MixpanelLib.prototype['track_forms']                     = MixpanelLib.prototype.track_forms;
MixpanelLib.prototype['track_pageview']                  = MixpanelLib.prototype.track_pageview;
MixpanelLib.prototype['register']                        = MixpanelLib.prototype.register;
MixpanelLib.prototype['register_once']                   = MixpanelLib.prototype.register_once;
MixpanelLib.prototype['unregister']                      = MixpanelLib.prototype.unregister;
MixpanelLib.prototype['identify']                        = MixpanelLib.prototype.identify;
MixpanelLib.prototype['alias']                           = MixpanelLib.prototype.alias;
MixpanelLib.prototype['name_tag']                        = MixpanelLib.prototype.name_tag;
MixpanelLib.prototype['set_config']                      = MixpanelLib.prototype.set_config;
MixpanelLib.prototype['get_config']                      = MixpanelLib.prototype.get_config;
MixpanelLib.prototype['get_property']                    = MixpanelLib.prototype.get_property;
MixpanelLib.prototype['get_distinct_id']                 = MixpanelLib.prototype.get_distinct_id;
MixpanelLib.prototype['toString']                        = MixpanelLib.prototype.toString;
MixpanelLib.prototype['_check_and_handle_notifications'] = MixpanelLib.prototype._check_and_handle_notifications;
MixpanelLib.prototype['_show_notification']              = MixpanelLib.prototype._show_notification;
MixpanelLib.prototype['opt_out_tracking']                = MixpanelLib.prototype.opt_out_tracking;
MixpanelLib.prototype['opt_in_tracking']                 = MixpanelLib.prototype.opt_in_tracking;
MixpanelLib.prototype['has_opted_out_tracking']          = MixpanelLib.prototype.has_opted_out_tracking;
MixpanelLib.prototype['has_opted_in_tracking']           = MixpanelLib.prototype.has_opted_in_tracking;
MixpanelLib.prototype['clear_opt_in_out_tracking']       = MixpanelLib.prototype.clear_opt_in_out_tracking;
MixpanelLib.prototype['get_group']                       = MixpanelLib.prototype.get_group;
MixpanelLib.prototype['set_group']                       = MixpanelLib.prototype.set_group;
MixpanelLib.prototype['add_group']                       = MixpanelLib.prototype.add_group;
MixpanelLib.prototype['remove_group']                    = MixpanelLib.prototype.remove_group;
MixpanelLib.prototype['track_with_groups']               = MixpanelLib.prototype.track_with_groups;

// MixpanelPersistence Exports
MixpanelPersistence.prototype['properties']            = MixpanelPersistence.prototype.properties;
MixpanelPersistence.prototype['update_search_keyword'] = MixpanelPersistence.prototype.update_search_keyword;
MixpanelPersistence.prototype['update_referrer_info']  = MixpanelPersistence.prototype.update_referrer_info;
MixpanelPersistence.prototype['get_cross_subdomain']   = MixpanelPersistence.prototype.get_cross_subdomain;
MixpanelPersistence.prototype['clear']                 = MixpanelPersistence.prototype.clear;

_.safewrap_class(MixpanelLib, ['identify', '_check_and_handle_notifications', '_show_notification']);


var instances = {};
var extend_mp = function() {
    // add all the sub mixpanel instances
    _.each(instances, function(instance, name) {
        if (name !== PRIMARY_INSTANCE_NAME) { mixpanel_master[name] = instance; }
    });

    // add private functions as _
    mixpanel_master['_'] = _;
};

var override_mp_init_func = function() {
    // we override the snippets init function to handle the case where a
    // user initializes the mixpanel library after the script loads & runs
    mixpanel_master['init'] = function(token, config, name) {
        if (name) {
            // initialize a sub library
            if (!mixpanel_master[name]) {
                mixpanel_master[name] = instances[name] = create_mplib(token, config, name);
                mixpanel_master[name]._loaded();
            }
            return mixpanel_master[name];
        } else {
            var instance = mixpanel_master;

            if (instances[PRIMARY_INSTANCE_NAME]) {
                // main mixpanel lib already initialized
                instance = instances[PRIMARY_INSTANCE_NAME];
            } else if (token) {
                // intialize the main mixpanel lib
                instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);
                instance._loaded();
                instances[PRIMARY_INSTANCE_NAME] = instance;
            }

            mixpanel_master = instance;
            if (init_type === INIT_SNIPPET) {
                window$1[PRIMARY_INSTANCE_NAME] = mixpanel_master;
            }
            extend_mp();
        }
    };
};

var add_dom_loaded_handler = function() {
    // Cross browser DOM Loaded support
    function dom_loaded_handler() {
        // function flag since we only want to execute this once
        if (dom_loaded_handler.done) { return; }
        dom_loaded_handler.done = true;

        DOM_LOADED = true;
        ENQUEUE_REQUESTS = false;

        _.each(instances, function(inst) {
            inst._dom_loaded();
        });
    }

    function do_scroll_check() {
        try {
            document$1.documentElement.doScroll('left');
        } catch(e) {
            setTimeout(do_scroll_check, 1);
            return;
        }

        dom_loaded_handler();
    }

    if (document$1.addEventListener) {
        if (document$1.readyState === 'complete') {
            // safari 4 can fire the DOMContentLoaded event before loading all
            // external JS (including this file). you will see some copypasta
            // on the internet that checks for 'complete' and 'loaded', but
            // 'loaded' is an IE thing
            dom_loaded_handler();
        } else {
            document$1.addEventListener('DOMContentLoaded', dom_loaded_handler, false);
        }
    } else if (document$1.attachEvent) {
        // IE
        document$1.attachEvent('onreadystatechange', dom_loaded_handler);

        // check to make sure we arn't in a frame
        var toplevel = false;
        try {
            toplevel = window$1.frameElement === null;
        } catch(e) {
            // noop
        }

        if (document$1.documentElement.doScroll && toplevel) {
            do_scroll_check();
        }
    }

    // fallback handler, always will work
    _.register_event(window$1, 'load', dom_loaded_handler, true);
};

function init_as_module() {
    init_type = INIT_MODULE;
    mixpanel_master = new MixpanelLib();

    override_mp_init_func();
    mixpanel_master['init']();
    add_dom_loaded_handler();

    return mixpanel_master;
}

var mixpanel = init_as_module();

module.exports = mixpanel;

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5f137288facb1107b491 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx!./":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.jsx */ "./pages/_app.jsx")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.jsx */ "./pages/_app.jsx", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.jsx */ "./pages/_app.jsx")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2.default, args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = urlPropertyFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2.default.events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  }).catch(function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod.default || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }).catch(function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      }).catch(handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_ref) {
  var Component, ctx, pageProps;
  return _regeneratorRuntime.async(function appGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx;
          _context.next = 3;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(Component, ctx));

        case 3:
          pageProps = _context.sent;
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

var App =
/*#__PURE__*/
function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react.default.Component);

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5f137288facb1107b491 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-mixpanel/lib/MixpanelContext.js":
/*!************************************************************!*\
  !*** ./node_modules/react-mixpanel/lib/MixpanelContext.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MixpanelConsumer = exports.mixpanelShape = exports.MixpanelProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MixpanelContext = _react2.default.createContext();
exports.default = MixpanelContext;


MixpanelContext.Provider.propTypes = {
	value: _propTypes2.default.shape({
		init: _propTypes2.default.func.isRequired,
		track: _propTypes2.default.func.isRequired
	})
};

var MixpanelProvider = exports.MixpanelProvider = function (_React$Component) {
	_inherits(MixpanelProvider, _React$Component);

	function MixpanelProvider() {
		_classCallCheck(this, MixpanelProvider);

		return _possibleConstructorReturn(this, (MixpanelProvider.__proto__ || Object.getPrototypeOf(MixpanelProvider)).apply(this, arguments));
	}

	_createClass(MixpanelProvider, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				MixpanelContext.Provider,
				{ value: this.props.mixpanel },
				this.props.children
			);
		}
	}]);

	return MixpanelProvider;
}(_react2.default.Component);

var mixpanelShape = exports.mixpanelShape = _propTypes2.default.shape({
	init: _propTypes2.default.func.isRequired,
	track: _propTypes2.default.func.isRequired,
	register: _propTypes2.default.func.isRequired,
	people: _propTypes2.default.object.isRequired
});

MixpanelProvider.propTypes = {
	children: _propTypes2.default.node.isRequired,
	mixpanel: mixpanelShape
};

var MixpanelConsumer = exports.MixpanelConsumer = MixpanelContext.Consumer;

/***/ }),

/***/ "./node_modules/react-mixpanel/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-mixpanel/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MixpanelContext = __webpack_require__(/*! ./MixpanelContext */ "./node_modules/react-mixpanel/lib/MixpanelContext.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MixpanelContext).default;
  }
});
Object.defineProperty(exports, 'MixpanelProvider', {
  enumerable: true,
  get: function get() {
    return _MixpanelContext.MixpanelProvider;
  }
});
Object.defineProperty(exports, 'MixpanelConsumer', {
  enumerable: true,
  get: function get() {
    return _MixpanelContext.MixpanelConsumer;
  }
});
Object.defineProperty(exports, 'mixpanelShape', {
  enumerable: true,
  get: function get() {
    return _MixpanelContext.mixpanelShape;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

Provider.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }),
  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");








 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (true) {
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_5__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_4__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_5__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options.")); // Based on the previous check, one of these must be true

      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_6__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__["useIsomorphicLayoutEffect"])(function () {
        // We want to capture the wrapper props and child props we used for later comparisons
        lastWrapperProps.current = wrapperProps;
        lastChildProps.current = actualChildProps;
        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

        if (childPropsFromStoreUpdate.current) {
          childPropsFromStoreUpdate.current = null;
          notifyNestedSubs();
        }
      }); // Our re-subscribe logic only runs when the store/subscription setup changes

      Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__["useIsomorphicLayoutEffect"])(function () {
        // If we're not subscribed to the store, nothing to do here
        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

        var didUnsubscribe = false;
        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

        var checkForUpdates = function checkForUpdates() {
          if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
          }

          var latestStoreState = store.getState();
          var newChildProps, error;

          try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
          } catch (e) {
            error = e;
            lastThrownError = e;
          }

          if (!error) {
            lastThrownError = null;
          } // If the child props haven't changed, nothing to do here - cascade the subscription update


          if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
              notifyNestedSubs();
            }
          } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

            forceComponentUpdateDispatch({
              type: 'STORE_UPDATED',
              payload: {
                error: error
              }
            });
          }
        }; // Actually subscribe to the nearest connected ancestor (or store)


        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
        // changed since we began.

        checkForUpdates();

        var unsubscribeWrapper = function unsubscribeWrapper() {
          didUnsubscribe = true;
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;

          if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
          }
        };

        return unsubscribeWrapper;
      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]);
  invariant__WEBPACK_IMPORTED_MODULE_1___default()(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");







var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occurred while selecting the store state: " + err.message + ".";

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
    }

    throw new Error(errorMessage);
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_5__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_5__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    invariant__WEBPACK_IMPORTED_MODULE_1___default()(selector, "You must pass a selector to useSelectors");

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var isHopefullyDomEnvironment = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
var useIsomorphicLayoutEffect = isHopefullyDomEnvironment ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.20',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            ], [NAME, VERSION], [

            /(konqueror)\/([\w\.]+)/i                                           // Konqueror
            ], [[NAME, 'Konqueror'], VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(focus)\/([\w\.]+)/i                                               // Firefox Focus
            ], [[NAME, 'Firefox Focus'], VERSION], [

            /(opt)\/([\w\.]+)/i                                                 // Opera Touch
            ], [[NAME, 'Opera Touch'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(brave)\/([\w\.]+)/i                                              // Brave browser
            ], [[NAME, 'Brave'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(BIDUBrowser)[\/\s]?([\w\.]+)/i                                    // Baidu Browser
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
            ], [NAME, VERSION], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
            ], [[NAME, 'Sailfish Browser'], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
            /android.+aft([bms])\sbuild/i                                       // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p)/i                                                      // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
            /(lenovo)[_\s-]?([\w-]+)/i
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel( [23])?( xl)?)[\s)]/i                              // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    
                                                                                // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
            /(mz)-([\w-]{2,})/i
            ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})\s+build/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+;\s(PH-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
            ], [[TYPE, SMARTTV]], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)/i                                  // Blink
            ], [[NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,     
                                                                                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_mixpanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-mixpanel */ "./node_modules/react-mixpanel/lib/index.js");
/* harmony import */ var react_mixpanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_mixpanel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mixpanel-browser */ "./node_modules/mixpanel-browser/dist/mixpanel.cjs.js");
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.js");
/* harmony import */ var _EasTheme_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../EasTheme.jsx */ "./EasTheme.jsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_15__);






var _jsxFileName = "/Users/davidnaranjo/eas/eas-frontend/pages/_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).call(this, props)); // if (config.googleAnalyticsEnabled) {
    //   ReactGA.initialize(config.googleAnalyticsID, { titleCase: false });
    // }

    if (_config_config__WEBPACK_IMPORTED_MODULE_15___default.a.mixpanelEnabled) {
      mixpanel_browser__WEBPACK_IMPORTED_MODULE_10___default.a.init(_config_config__WEBPACK_IMPORTED_MODULE_15___default.a.mixpanelID, {
        debug: _config_config__WEBPACK_IMPORTED_MODULE_15___default.a.mixpanelDebug,
        track_pageview: false
      });
    } // initI18n(props.hostname);


    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: _EasTheme_jsx__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), _config_config__WEBPACK_IMPORTED_MODULE_15___default.a.mixpanelEnabled ? __jsx(react_mixpanel__WEBPACK_IMPORTED_MODULE_9__["MixpanelProvider"], {
        mixpanel: mixpanel_browser__WEBPACK_IMPORTED_MODULE_10___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))) : __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp));

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: FETCH_DRAW, SHOW_FOOTER, HIDE_FOOTER, SET_USER_AGENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DRAW", function() { return FETCH_DRAW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_FOOTER", function() { return SHOW_FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_FOOTER", function() { return HIDE_FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_AGENT", function() { return SET_USER_AGENT; });
// eslint-disable-next-line import/prefer-default-export
var FETCH_DRAW = 'FETCH_DRAW';
var SHOW_FOOTER = 'SHOW_FOOTER';
var HIDE_FOOTER = 'HIDE_FOOTER';
var SET_USER_AGENT = 'SET_USER_AGENT';

/***/ }),

/***/ "./src/reducers/drawReducers.js":
/*!**************************************!*\
  !*** ./src/reducers/drawReducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  draw: {
    title: '',
    description: '',
    participants: [],
    prizes: [],
    numberOfGroups: null,
    result: null,
    isOwner: false,
    isLoading: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DRAW"]:
      return _objectSpread({}, state, {
        draw: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _drawReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawReducers */ "./src/reducers/drawReducers.js");
/* harmony import */ var _userRequestReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userRequestReducers */ "./src/reducers/userRequestReducers.js");
 // import { connectRouter } from 'connected-react-router';


 // const createRootReducer =  =>
//   combineReducers({
//     // router: connectRouter(history),
//     draws: drawReducers,
//     userRequest: userRequestReducers,
//   });

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  // router: connectRouter(history),
  draws: _drawReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  userRequest: _userRequestReducers__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/userRequestReducers.js":
/*!*********************************************!*\
  !*** ./src/reducers/userRequestReducers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  hostname: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SET_USER_AGENT"]:
      return _objectSpread({}, state, {
        userAgent: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/reducers */ "./src/reducers/index.js");



 // CREATING INITIAL STORE

/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_src_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]))); // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE

  if (true) {
    module.hot.accept(/*! ./src/reducers */ "./src/reducers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _src_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/reducers */ "./src/reducers/index.js");
(function () {
      var createNextReducer = __webpack_require__(/*! ./src/reducers */ "./src/reducers/index.js").default;

      store.replaceReducer(createNextReducer(initialState));
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  }

  return store;
});

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx ./node_modules/next/dist/client/router.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx!./");
module.exports = __webpack_require__(/*! /Users/davidnaranjo/eas/eas-frontend/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map