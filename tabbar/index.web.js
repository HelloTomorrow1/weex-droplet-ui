// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/tabbar/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/tabbar/index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var width = weex.config.env.deviceWidth;
var height = weex.config.env.deviceHeight;
var platform = weex.config.env.platform.toLowerCase();
var appName = weex.config.env.appName;

var mixins = {
    data: function data() {
        return {
            $env: {
                isWeb: platform === 'web',
                isAndroid: platform === 'android',
                isIos: platform === 'ios'
            }
        };
    },

    methods: {
        getPageHeight: function getPageHeight() {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },
        preventDefault: function preventDefault(e) {
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
        }
    }
};

exports.default = mixins;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(99);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(14);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(10);

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        width: {
            type: String,
            default: '670px'
        },
        height: {
            type: String,
            default: '90px'
        },
        borderRadius: {
            type: String,
            default: '12px'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        disableOnPromise: {
            type: Function
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        disabledBgColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.1)'
        },
        textColor: {
            type: String,
            default: '#ffffff'
        },
        textFontSize: {
            type: String,
            default: '32px'
        }
    },
    data: function data() {
        return {
            buttonStyles: {},
            textStyles: {},
            promiseDisabled: false,
            defualtBgColor: '#4676FF'
        };
    },
    created: function created() {
        this.promiseDisabled = this.disabled;
        this.setStyle();
    },

    watch: {
        'disabled': function disabled() {
            this.btnStyle(this.disabled);
        }
    },
    methods: {
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width,
                'border-radius': this.borderRadius,
                'background-color': this.defualtBgColor
            };
            var style = Object.assign({}, baseCss, this.styles);
            this.buttonStyles = style;
            this.defualtBgColor = this.buttonStyles['background-color'];
            if (this.disabled) {
                this.buttonStyles['background-color'] = this.disabledBgColor;
            }
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled || this.promiseDisabled) return;
            if (this.disableOnPromise) {
                var _promise = this.disableOnPromise();
                this.disablePromise(_promise);
            } else {
                this.$emit('wxClick', e);
            }
        },
        disablePromise: function disablePromise(_promise) {
            var _this = this;

            this.btnStyle(true);
            _promise.finally(function () {
                _this.btnStyle(false);
            });
        },
        btnStyle: function btnStyle(disabled) {
            this.promiseDisabled = disabled;
            if (disabled) {
                this.buttonStyles['background-color'] = this.disabledBgColor;
            } else {
                this.buttonStyles['background-color'] = this.defualtBgColor;
            }
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alias = __webpack_require__(11);

var _alias2 = _interopRequireDefault(_alias);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        name: {
            type: String,
            default: 'success'
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    data: function data() {
        return {
            iconStyle: {},
            Icon: _alias2.default
        };
    },
    beforeCreate: function beforeCreate() {
        dom.addRule('fontFace', {
            'fontFamily': "dropletUiIconfont",
            'src': "url('https://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')"
        });
    },
    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            this.iconStyle = Object.assign({}, this.styles);
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// promise添加finally
var promiseFinallyPolyfill = function () {
    if (Promise.prototype.finally) return;
    Object.defineProperty(Promise.prototype, 'finally', {
        configurable: true,
        writable: true,
        value: function value(callback) {
            var P = this.constructor;
            return this.then(function (value) {
                return P.resolve(callback()).then(function () {
                    return value;
                });
            }, function (reason) {
                return P.resolve(callback()).then(function () {
                    throw reason;
                });
            });
        }
    });
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'roundclose': '\uE659',
    'success': '\uE717',
    'search': '\uE7D1',
    'enter': '\uE65D',
    'back': '\uE661'
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-button {\n    background-color: #4676FF;\n    /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.wx-text {\n    color: #ffffff;\n    font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-button/index.vue?69f0dfa6"],"names":[],"mappings":";AAQA;IACA,0BAAA;IACA,kDAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AACA;IACA,eAAA;IACA,sBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-button\" @click=\"handleClick\" :style=\"buttonStyles\">\n        <text class=\"wx-text\" :style=\"textStyles\">\n            <slot></slot>\n        </text>\n    </div>\n</template>\n<style>\n    .wx-button {\n        background-color: #4676FF;\n        /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/\n        align-items: center;\n        justify-content: center;\n    }\n    .wx-text {\n        color: #ffffff;\n        font-size: 32px;\n    }\n</style>\n<script type=\"text/javascript\">\n    import '../utils/finally';\n    import mixins from '../utils/mixins';\n\n    export default {\n        mixins:[mixins],\n        props: {\n            width: {\n                type: String,\n                default: '670px'\n            },\n            height: {\n                type: String,\n                default: '90px'\n            },\n            borderRadius: {\n                type: String,\n                default: '12px'\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            disableOnPromise: {\n                type: Function\n            },\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            disabledBgColor: {\n                type: String,\n                default: 'rgba(0, 0, 0, 0.1)'\n            },\n            textColor: {\n                type: String,\n                default: '#ffffff'\n            },\n            textFontSize: {\n                type: String,\n                default: '32px'\n            }\n        },\n        data () {\n            return {\n                buttonStyles: {},\n                textStyles: {},\n                promiseDisabled: false,\n                defualtBgColor: '#4676FF',\n            }\n        },\n        created () {\n            this.promiseDisabled = this.disabled;\n            this.setStyle();\n        },\n        watch: {\n            'disabled': function () {\n                this.btnStyle(this.disabled);\n            }\n        },\n        methods: {\n            setStyle () {\n                const baseCss = {\n                    height: this.height,\n                    width: this.width,\n                    'border-radius': this.borderRadius,\n                    'background-color': this.defualtBgColor\n                };\n                let style = Object.assign({}, baseCss, this.styles);\n                this.buttonStyles = style;\n                this.defualtBgColor = this.buttonStyles['background-color'];\n                if(this.disabled){\n                    this.buttonStyles['background-color'] = this.disabledBgColor\n                }\n                this.textStyles = {\n                    color: this.textColor,\n                    fontSize: this.textFontSize\n                };\n            },\n\n            handleClick (e) {\n                this.preventDefault(e);\n                if (this.disabled || this.promiseDisabled) return;\n                if (this.disableOnPromise) {\n                    const _promise = this.disableOnPromise();\n                    this.disablePromise(_promise);\n                } else {\n                    this.$emit('wxClick', e);\n                }\n                \n            },\n\n            disablePromise (_promise) {\n                this.btnStyle(true)\n                _promise.finally(() => {\n                    this.btnStyle(false);\n                });\n            },\n\n            btnStyle (disabled) {\n                this.promiseDisabled = disabled;\n                if(disabled){\n                    this.buttonStyles['background-color'] = this.disabledBgColor\n                }else{\n                    this.buttonStyles['background-color'] = this.defualtBgColor;\n                }\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.icon-font[data-v-7bfc623c] {\n    font-family: dropletUiIconfont;\n    color: #666;\n    font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-icon/index.vue?eef61740"],"names":[],"mappings":";AAIA;IACA,+BAAA;IACA,YAAA;IACA,sBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <text class=\"icon-font\" :style=\"iconStyle\">{{Icon[name]}}</text>\n</template>\n<style scoped>\n    .icon-font {\n        font-family: dropletUiIconfont;\n        color: #666;\n        font-size: 32px;\n    }\n</style>\n<script>\n    import Icon from './alias';\n    const dom = weex.requireModule('dom');\n\n    export default {\n        props: {\n            name: {\n                type: String,\n                default: 'success'\n            },\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n        },\n\n        data () {\n            return {\n                iconStyle: {},\n                Icon: Icon\n            }\n        },\n\n        beforeCreate () {\n            dom.addRule('fontFace', {\n                'fontFamily': \"dropletUiIconfont\",\n                'src': \"url('https://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')\"\n            })\n        },\n\n        created () {\n            this.setStyle();\n        },\n\n        methods: {\n            setStyle () {\n                this.iconStyle = Object.assign({}, this.styles);\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(16),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-button/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22ec0a4a", Component.options)
  } else {
    hotAPI.reload("data-v-22ec0a4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(17),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7bfc623c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-icon/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bfc623c", Component.options)
  } else {
    hotAPI.reload("data-v-7bfc623c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-button weex-ct",
    style: (_vm._px2rem(_vm.buttonStyles, 75)),
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    }
  }, [_c('p', {
    staticClass: "wx-text weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.textStyles, 75, 'text')),
    attrs: {}
  }, [_vm._t("default", null, {})], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22ec0a4a", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "icon-font weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.iconStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bfc623c", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("64976848", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22ec0a4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22ec0a4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("46f5a80f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bfc623c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bfc623c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(33);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(34);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        type: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String
        },
        tail: {
            type: String
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: String
        },
        iconStyle: {
            type: Object
        },
        tailStyle: {
            type: Object
        },
        width: {
            type: String
        },
        bgColor: {
            type: String,
            default: '#f8f8f8'
        }
    },
    data: function data() {
        return {
            style: {
                width: this.width,
                'background-color': this.bgColor
            },
            inputValue: ''
        };
    },

    methods: {
        onblur: function onblur(e) {
            this.preventDefault(e);
            this.$emit('wxBlur', this.inputValue);
        },
        oninput: function oninput(e) {
            this.preventDefault(e);
            this.inputValue = e.value;
            this.$emit('input', e.value);
            this.$emit('wxInput', this.inputValue);
        },
        onfocus: function onfocus(e) {
            this.preventDefault(e);
            this.$emit('wxFocus', this.inputValue);
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        top: {
            type: String
        },
        opacity: {
            type: String
        },
        url: {
            type: String,
            default: 'https://p285sfed1.bkt.clouddn.com/loading.gif'
        }
    },
    data: function data() {
        return {
            style: {
                top: '0px',
                'background-color': 'rgba(0,0,0,0.6)'
            }
        };
    },
    created: function created() {
        if (this.top !== undefined) {
            this.style.top = this.top;
        }
        if (this.opacity !== undefined) {
            this.style['background-color'] = 'rgba(0,0,0,' + this.opacity + ')';
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');

exports.default = {
    props: {
        percent: {
            type: Number,
            default: 0
        },
        width: {
            type: String,
            default: '750px'
        },
        height: {
            type: String,
            default: '40px'
        },
        animation: {
            type: Boolean,
            default: true
        },
        innerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        outerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            progress: '',
            _outerStyle: {},
            _innerStyle: {}
        };
    },
    created: function created() {
        this.initStyle();
        this.progress = this.getProgress();
        if (!this.animation) {
            this.defaultProgress(this.progress);
        }
    },
    mounted: function mounted() {
        if (this.animation) {
            this.animationProgress(this.progress);
        }
    },


    methods: {
        initStyle: function initStyle() {
            var base = {
                width: this.width,
                height: this.height
            };
            this._outerStyle = Object.assign({}, this.outerStyle, base);
            base.left = '-' + this.width;
            this._innerStyle = Object.assign({}, this.innerStyle, base);
        },


        /**
         * 计算百分比对应的实际进度
         * @return {[type]} [description]
         */
        getProgress: function getProgress() {
            var width = Number(this._outerStyle.width.replace('px', ''));
            return width * (this.percent / 100) + 'px';
        },
        defaultProgress: function defaultProgress(progress) {
            this._innerStyle.width = progress;
            this._innerStyle.left = '0px';
        },
        animationProgress: function animationProgress(progress) {
            var el = this.$refs.progressBar;
            animation.transition(el, {
                styles: {
                    transform: 'translateX(' + progress + ')',
                    transformOrigin: 'center center'
                },
                duration: 1000,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        }
    },

    watch: {
        percent: function percent() {
            this.animationProgress(this.getProgress());
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxIcon = __webpack_require__(4);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        value: {
            type: String
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: '#d9d9d9'
        },
        placeholder: {
            type: String,
            default: '搜索'
        },
        cancelColor: {
            type: String,
            default: '#4d4d4d'
        },
        innerBgColor: {
            type: String,
            default: '#fff'
        }
    },

    data: function data() {
        return {
            searchStyle: {},
            showCancel: false,
            iconSearchStyle: {
                'font-size': '32px',
                'color': '#ccc',
                'height': '33px',
                'width': '44px',
                'margin-top': '5px'
            }
        };
    },
    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            this.searchStyle = Object.assign({}, { 'background-color': this.bgColor });
            this.cancelStyle = Object.assign({}, { 'color': this.cancelColor });
            this.innerStyle = Object.assign({}, { 'background-color': this.innerBgColor });
        },
        input: function input(e) {
            this.$emit('input', e.value);
        },
        focus: function focus() {
            this.showCancel = true;
        },
        handleClickCancel: function handleClickCancel() {
            this.showCancel = false;
            this.$emit('input', '');
            this.$refs.searchInput.blur();
        }
    },

    mounted: function mounted() {
        this.autofocus && this.$refs.searchInput.focus();
    },


    components: { WxIcon: _wxIcon2.default }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WxMarquee = exports.WxPicker = exports.WxRange = exports.WxProgress = exports.WxScrollerbar = exports.WxIndexlist = exports.WxIcon = exports.WxSearch = exports.WxLoading = exports.WxActionsheet = exports.WxPopup = exports.WxInput = exports.WxField = exports.WxRadio = exports.WxCheckboxList = exports.WxCheckbox = exports.WxCell = exports.WxTabbar = exports.WxNavbar = exports.WxHeader = exports.WxDialog = exports.WxButton = undefined;

var _wxButton = __webpack_require__(7);

var _wxButton2 = _interopRequireDefault(_wxButton);

var _wxDialog = __webpack_require__(48);

var _wxDialog2 = _interopRequireDefault(_wxDialog);

var _wxHeader = __webpack_require__(50);

var _wxHeader2 = _interopRequireDefault(_wxHeader);

var _wxNavbar = __webpack_require__(53);

var _wxNavbar2 = _interopRequireDefault(_wxNavbar);

var _wxTabbar = __webpack_require__(60);

var _wxTabbar2 = _interopRequireDefault(_wxTabbar);

var _wxCell = __webpack_require__(46);

var _wxCell2 = _interopRequireDefault(_wxCell);

var _wxCheckbox = __webpack_require__(5);

var _wxCheckbox2 = _interopRequireDefault(_wxCheckbox);

var _wxCheckboxList = __webpack_require__(47);

var _wxCheckboxList2 = _interopRequireDefault(_wxCheckboxList);

var _wxRadio = __webpack_require__(56);

var _wxRadio2 = _interopRequireDefault(_wxRadio);

var _wxField = __webpack_require__(49);

var _wxField2 = _interopRequireDefault(_wxField);

var _wxInput = __webpack_require__(20);

var _wxInput2 = _interopRequireDefault(_wxInput);

var _wxPopup = __webpack_require__(55);

var _wxPopup2 = _interopRequireDefault(_wxPopup);

var _wxActionsheet = __webpack_require__(45);

var _wxActionsheet2 = _interopRequireDefault(_wxActionsheet);

var _wxLoading = __webpack_require__(21);

var _wxLoading2 = _interopRequireDefault(_wxLoading);

var _wxSearch = __webpack_require__(23);

var _wxSearch2 = _interopRequireDefault(_wxSearch);

var _wxIcon = __webpack_require__(4);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

var _wxIndexlist = __webpack_require__(51);

var _wxIndexlist2 = _interopRequireDefault(_wxIndexlist);

var _wxScrollerbar = __webpack_require__(58);

var _wxScrollerbar2 = _interopRequireDefault(_wxScrollerbar);

var _wxProgress = __webpack_require__(22);

var _wxProgress2 = _interopRequireDefault(_wxProgress);

var _wxRange = __webpack_require__(57);

var _wxRange2 = _interopRequireDefault(_wxRange);

var _wxPicker = __webpack_require__(54);

var _wxPicker2 = _interopRequireDefault(_wxPicker);

var _wxSwitch = __webpack_require__(59);

var _wxSwitch2 = _interopRequireDefault(_wxSwitch);

var _wxMarquee = __webpack_require__(52);

var _wxMarquee2 = _interopRequireDefault(_wxMarquee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.WxButton = _wxButton2.default;
exports.WxDialog = _wxDialog2.default;
exports.WxHeader = _wxHeader2.default;
exports.WxNavbar = _wxNavbar2.default;
exports.WxTabbar = _wxTabbar2.default;
exports.WxCell = _wxCell2.default;
exports.WxCheckbox = _wxCheckbox2.default;
exports.WxCheckboxList = _wxCheckboxList2.default;
exports.WxRadio = _wxRadio2.default;
exports.WxField = _wxField2.default;
exports.WxInput = _wxInput2.default;
exports.WxPopup = _wxPopup2.default;
exports.WxActionsheet = _wxActionsheet2.default;
exports.WxLoading = _wxLoading2.default;
exports.WxSearch = _wxSearch2.default;
exports.WxIcon = _wxIcon2.default;
exports.WxIndexlist = _wxIndexlist2.default;
exports.WxScrollerbar = _wxScrollerbar2.default;
exports.WxProgress = _wxProgress2.default;
exports.WxRange = _wxRange2.default;
exports.WxPicker = _wxPicker2.default;
exports.WxMarquee = _wxMarquee2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-input {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    width: 8.93333rem;\n    height: 1.33333rem;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n}\n.wx-input-icon {\n    width: 1.33333rem;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.input {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-input/index.vue?7d96e800"],"names":[],"mappings":";AAkGA;IACA,qBAAA;IAAA,sBAAA;IAAA,cAAA;IACA,kBAAA;IACA,mBAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,kBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AAEA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-input\" :style=\"style\">\n        <div class=\"wx-input-icon\" v-if=\"icon\">\n            <image :style=\"iconStyle\" :src=\"icon\"></image>\n        </div>\n        <slot name=\"left\"></slot>\n        <input \n            class=\"input\"\n            :style=\"{'background-color': bgColor}\"\n            :type=\"type\" \n            :placeholder=\"placeholder\" \n            :value=\"value\"\n            :disabled=\"disabled\" \n            :autofocus=\"autofocus\" \n            :maxlength=\"maxlength\"\n            @input=\"oninput\" @blur=\"onblur\" @focus=\"onfocus\" />\n        <div class=\"wx-input-icon\" v-if=\"tail\">\n            <image :style=\"tailStyle\" :src=\"tail\"></image>\n        </div>\n    </div>\n</template>\n<script>\n    import mixins from '../utils/mixins';\n    const modal = weex.requireModule('modal');\n\n    export default {\n        mixins:[mixins],\n        props: {\n            type: {\n                type: String,\n                default: 'text'\n            },\n            icon: {\n                type: String\n            },\n            tail: {\n                type: String\n            },\n            placeholder: {\n                type: String\n            },\n            value: {\n                type: String\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            autofocus: {\n                type: Boolean,\n                default: false\n            },\n            maxlength: {\n                type: String\n            },\n            iconStyle: {\n                type: Object\n            },\n            tailStyle: {\n                type: Object\n            },\n            width: {\n                type: String\n            },\n            bgColor: {\n                type: String,\n                default: '#f8f8f8'\n            },\n        },\n        data(){\n            return {\n                style: {\n                    width: this.width,\n                    'background-color': this.bgColor\n                },\n                inputValue: '',\n            }\n        },\n        methods: {\n            onblur (e) {\n                this.preventDefault(e);\n                this.$emit('wxBlur', this.inputValue);\n            },\n            oninput (e) {\n                this.preventDefault(e);\n                this.inputValue = e.value;\n                this.$emit('input', e.value)\n                this.$emit('wxInput', this.inputValue);\n            },\n\n            onfocus (e) {\n                this.preventDefault(e);\n                this.$emit('wxFocus', this.inputValue);\n            },\n        }\n    }\n</script>\n<style>\n    .wx-input {\n        display: flex;\n        width: 670px;\n        height: 100px;\n        flex-direction: row;\n    }\n\n    .wx-input-icon {\n        width: 100px;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .input {\n        flex: 1;\n    }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-progress[data-v-131acc96] {\n    background-color: #1890ff;\n    position: relative;\n    overflow: hidden;\n}\n.progress-bar[data-v-131acc96] {\n    background-color: #52c41a;\n    position: absolute;\n    top: 0;\n    z-index: 10;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-progress/index.vue?7b867c78"],"names":[],"mappings":";AAMA;IACA,0BAAA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,0BAAA;IACA,mBAAA;IACA,OAAA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-progress\" :style=\"_outerStyle\">\n        <text ref=\"progressBar\" class=\"progress-bar\" :style=\"_innerStyle\"></text>\n    </div>\n</template>\n<style scoped>\n    .wx-progress {\n        background-color: #1890ff;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .progress-bar {\n        background-color: #52c41a;\n        position: absolute;\n        top: 0;\n        z-index: 10;\n    }\n\n</style>\n<script>\n    const animation = weex.requireModule('animation');\n\n    export default {\n        props: {\n            percent: {\n                type: Number,\n                default: 0\n            },\n            width: {\n                type: String,\n                default: '750px'\n            },\n            height: {\n                type: String,\n                default: '40px'\n            },\n            animation: {\n                type: Boolean,\n                default: true\n            },\n            innerStyle: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            outerStyle: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n        },\n        data(){\n            return {\n                progress: '',\n                _outerStyle: {},\n                _innerStyle: {},\n            }\n        },\n\n        created () {\n            this.initStyle();\n            this.progress = this.getProgress();\n            if (!this.animation) {\n                this.defaultProgress(this.progress);\n            } \n        },\n\n        mounted () {\n            if (this.animation) {\n                this.animationProgress(this.progress);\n            }\n        },\n\n        methods: {\n\n            initStyle () {\n                let base = {\n                    width: this.width, \n                    height: this.height,\n                };\n                this._outerStyle = Object.assign({}, this.outerStyle, base);\n                base.left = '-' + this.width;\n                this._innerStyle = Object.assign({}, this.innerStyle, base);\n            },\n\n            /**\n             * 计算百分比对应的实际进度\n             * @return {[type]} [description]\n             */\n            getProgress () {\n                const width = Number(this._outerStyle.width.replace('px', ''));\n                return width * (this.percent / 100) + 'px';\n            },\n\n            defaultProgress (progress) {\n                this._innerStyle.width =  progress;\n                this._innerStyle.left =  '0px';\n            },\n\n            animationProgress (progress) {\n                let el = this.$refs.progressBar;\n                animation.transition(el, {\n                    styles: {\n                        transform: `translateX(${progress})`,\n                        transformOrigin: 'center center'\n                    },\n                    duration: 1000,\n                    timingFunction: 'ease-out',\n                    needLayout: false,\n                    delay: 0 //ms\n                });\n            }\n        },\n\n        watch: {\n            percent () {\n                this.animationProgress(this.getProgress());\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-search[data-v-5d51c45e] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    width: 10rem;\n    height: 1.17333rem;\n    padding-top: 0.21333rem;\n    padding-right: 0.26667rem;\n    padding-bottom: 0.21333rem;\n    padding-left: 0.26667rem;\n}\n.wx-search-inner[data-v-5d51c45e] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    background-color: #fff;\n    padding-top: 0.10667rem;\n    padding-right: 0.16rem;\n    padding-bottom: 0.10667rem;\n    padding-left: 0.16rem;\n    border-radius: 0.05333rem;\n    height: 0.74667rem;\n}\n.search-input[data-v-5d51c45e] {\n    height: 0.50667rem;\n    width: 8.56rem;\n}\n.focus[data-v-5d51c45e] {\n    width: 7.22667rem;\n}\n.cancel[data-v-5d51c45e] {\n    width: 1.33333rem;\n    height: 0.74667rem;\n    padding-left: 0.26667rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.f32[data-v-5d51c45e] { font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-search/index.vue?1e4f1a33"],"names":[],"mappings":";AAqBA;IACA,qBAAA;IAAA,sBAAA;IAAA,cAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,aAAA;IACA,mBAAA;IACA,wBAAA;IACA,0BAAA;IACA,2BAAA;IACA,yBAAA;CACA;AAEA;IACA,qBAAA;IAAA,sBAAA;IAAA,cAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;IACA,wBAAA;IACA,uBAAA;IACA,2BAAA;IACA,sBAAA;IACA,0BAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,kBAAA;IACA,mBAAA;IACA,yBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA,wBAAA,sBAAA;CAAA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-search\" :style=\"searchStyle\">\n        <div class=\"wx-search-inner\" :style=\"innerStyle\">\n            <wx-icon name=\"search\" :styles=\"iconSearchStyle\"></wx-icon>\n            <input\n                class=\"search-input\"\n                type=\"text\"\n                :placeholder=\"placeholder\"\n                @input=\"input\"\n                :value=\"value\"\n                @focus=\"focus\"\n                :class=\"[showCancel ? 'focus': '']\"\n                :style=\"{'background-color': innerBgColor}\"\n                ref=\"searchInput\" />\n        </div>\n        <div class=\"cancel\" @click=\"handleClickCancel\">\n            <text class=\"f32\" :style=\"cancelStyle\" v-if=\"showCancel\">取消</text>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-search {\n        display: flex;\n        flex-direction: row;\n        width: 750px;\n        height: 88px;\n        padding-top: 16px;\n        padding-right: 20px;\n        padding-bottom: 16px;\n        padding-left: 20px;\n    }\n\n    .wx-search-inner {\n        display: flex;\n        flex-direction: row;\n        background-color: #fff;\n        padding-top: 8px;\n        padding-right: 12px;\n        padding-bottom: 8px;\n        padding-left: 12px;\n        border-radius: 4px;\n        height: 56px;\n    }\n\n    .search-input {\n        height: 38px;\n        width: 642px;\n    }\n\n    .focus {\n        width: 542px;\n    }\n\n    .cancel {\n        width: 100px;\n        height: 56px;\n        padding-left: 20px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .f32 { font-size: 32px; }\n</style>\n<script>\n    import WxIcon from '../wx-icon'\n\n    export default {\n        props: {\n            value: {\n                type: String,\n            },\n            autofocus: {\n                type: Boolean,\n                default: false\n            },\n            bgColor: {\n                type: String,\n                default: '#d9d9d9'\n            },\n            placeholder: {\n                type: String,\n                default: '搜索'\n            },\n            cancelColor: {\n                type: String,\n                default: '#4d4d4d'\n            },\n            innerBgColor: {\n                type: String,\n                default: '#fff'\n            }\n        },\n\n        data () {\n            return {\n                searchStyle: {},\n                showCancel: false,\n                iconSearchStyle: {\n                    'font-size': '32px',\n                    'color': '#ccc',\n                    'height': '33px',\n                    'width': '44px',\n                    'margin-top': '5px'\n                }\n            }\n        },\n\n        created () {\n            this.setStyle();\n        },\n\n        methods: {\n            setStyle() {\n                this.searchStyle = Object.assign({}, {'background-color': this.bgColor});\n                this.cancelStyle = Object.assign({}, {'color': this.cancelColor});\n                this.innerStyle = Object.assign({}, {'background-color': this.innerBgColor});\n            },\n\n            input (e) {\n                this.$emit('input', e.value)\n            },\n\n            focus () {\n                this.showCancel = true;\n            },\n\n            handleClickCancel () {\n                this.showCancel = false;\n                this.$emit('input', '');\n                this.$refs.searchInput.blur();\n            }\n        },\n\n        mounted () {\n            this.autofocus && this.$refs.searchInput.focus();\n        },\n\n        components: { WxIcon }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.loading[data-v-712e0c09] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 10rem;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.loading-pane[data-v-712e0c09] {\n    height: 1.86667rem;\n    width: 1.86667rem;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin-top: 4rem;\n    border-radius: 0.26667rem;\n}\n.icon-loading[data-v-712e0c09] {\n    width: 1.12rem;\n    height: 1.12rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-loading/index.vue?6c95140b"],"names":[],"mappings":";AAQA;IACA,gBAAA;IACA,QAAA;IACA,UAAA;IACA,aAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,qCAAA;IACA,iBAAA;IACA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,gBAAA;CAEA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"loading\" v-if=\"visible\" :style=\"style\">\n        <div class=\"loading-pane\">\n            <image class=\"icon-loading\" :src=\"url\" />\n        </div>\n    </div>\n</template>\n<style scoped>\n    .loading {\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        width: 750px;\n        flex-direction: row;\n        justify-content: center;\n    }\n\n    .loading-pane {\n        height: 140px;\n        width: 140px;\n        align-items: center;\n        justify-content: center;\n        background-color: rgba(0, 0, 0, 0.8);\n        margin-top: 300px;\n        border-radius: 20px;\n    }\n\n    .icon-loading {\n        width: 84px;\n        height: 84px;\n\n    }\n</style>\n<script>\n    export default {\n        props: {\n            visible: {\n                type: Boolean,\n                default: false\n            },\n            top: {\n                type: String\n            },\n            opacity: {\n                type: String\n            },\n            url: {\n                type: String,\n                default: 'https://p285sfed1.bkt.clouddn.com/loading.gif'\n            }\n        },\n        data(){\n            return {\n                style: {\n                    top:'0px',\n                    'background-color': `rgba(0,0,0,0.6)`\n                }\n            }\n        },\n        created(){\n            if(this.top !== undefined){\n                this.style.top = this.top\n            }\n            if(this.opacity !== undefined){\n                this.style['background-color'] = `rgba(0,0,0,${this.opacity})`\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(37),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-input/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f97a4d2", Component.options)
  } else {
    hotAPI.reload("data-v-0f97a4d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(40),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-712e0c09",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-loading/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-712e0c09", Component.options)
  } else {
    hotAPI.reload("data-v-712e0c09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(38),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-131acc96",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-progress/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-131acc96", Component.options)
  } else {
    hotAPI.reload("data-v-131acc96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(39),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5d51c45e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-search/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d51c45e", Component.options)
  } else {
    hotAPI.reload("data-v-5d51c45e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-input weex-ct",
    style: (_vm._px2rem(_vm.style, 75)),
    attrs: {}
  }, [(_vm.icon) ? _c('div', {
    staticClass: "wx-input-icon weex-ct",
    attrs: {}
  }, [_c('figure', {
    staticClass: " weex-el weex-img",
    staticStyle: {
      "background-size": "100%100%"
    },
    style: (_vm._px2rem(_vm.iconStyle, 75)),
    attrs: {
      "src": _vm.icon,
      "data-img-src": _vm.icon
    }
  })]) : _vm._e(), _vm._v(" "), _vm._t("left", null, {}), _vm._v(" "), _c('input', {
    staticClass: "input",
    style: ({
      'background-color': _vm.bgColor
    }),
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength,
      "data-evt-input": "",
      "data-evt-blur": "",
      "data-evt-focus": ""
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        $event.stopPropagation();
        return _vm.oninput($event)
      },
      "blur": function($event) {
        $event.stopPropagation();
        return _vm.onblur($event)
      },
      "focus": function($event) {
        $event.stopPropagation();
        return _vm.onfocus($event)
      }
    },
    nativeOn: {
      "input": function($event) {
        $event.stopPropagation();
        return _vm.oninput($event)
      },
      "blur": function($event) {
        $event.stopPropagation();
        return _vm.onblur($event)
      },
      "focus": function($event) {
        $event.stopPropagation();
        return _vm.onfocus($event)
      }
    }
  }), _vm._v(" "), (_vm.tail) ? _c('div', {
    staticClass: "wx-input-icon weex-ct",
    attrs: {}
  }, [_c('figure', {
    staticClass: " weex-el weex-img",
    staticStyle: {
      "background-size": "100%100%"
    },
    style: (_vm._px2rem(_vm.tailStyle, 75)),
    attrs: {
      "src": _vm.tail,
      "data-img-src": _vm.tail
    }
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f97a4d2", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-progress weex-ct",
    style: (_vm._px2rem(_vm._outerStyle, 75)),
    attrs: {}
  }, [_c('p', {
    ref: "progressBar",
    staticClass: "progress-bar weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm._innerStyle, 75, 'text')),
    attrs: {}
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-131acc96", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-search weex-ct",
    style: (_vm._px2rem(_vm.searchStyle, 75)),
    attrs: {}
  }, [_c('div', {
    staticClass: "wx-search-inner weex-ct",
    style: (_vm._px2rem(_vm.innerStyle, 75)),
    attrs: {}
  }, [_c('wx-icon', {
    attrs: {
      "name": "search",
      "styles": _vm.iconSearchStyle
    }
  }), _vm._v(" "), _c('input', {
    ref: "searchInput",
    staticClass: "search-input",
    class: [_vm.showCancel ? 'focus' : ''],
    style: ({
      'background-color': _vm.innerBgColor
    }),
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "data-evt-input": "",
      "data-evt-focus": ""
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        $event.stopPropagation();
        return _vm.input($event)
      },
      "focus": function($event) {
        $event.stopPropagation();
        return _vm.focus($event)
      }
    },
    nativeOn: {
      "input": function($event) {
        $event.stopPropagation();
        return _vm.input($event)
      },
      "focus": function($event) {
        $event.stopPropagation();
        return _vm.focus($event)
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cancel weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClickCancel($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClickCancel($event)
      }
    }
  }, [(_vm.showCancel) ? _c('p', {
    staticClass: "f32 weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.cancelStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v("取消")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d51c45e", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: "loading weex-ct",
    style: (_vm._px2rem(_vm.style, 75)),
    attrs: {}
  }, [_c('div', {
    staticClass: "loading-pane weex-ct",
    attrs: {}
  }, [_c('figure', {
    staticClass: "icon-loading weex-el weex-img",
    staticStyle: {
      "background-size": "100%100%"
    },
    attrs: {
      "src": _vm.url,
      "data-img-src": _vm.url
    }
  })])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-712e0c09", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3dce1d35", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f97a4d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f97a4d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("772247d8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-131acc96\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-131acc96\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e4f88512", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d51c45e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d51c45e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7f676e7a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-712e0c09\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-712e0c09\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(96);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(97);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(98);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(100);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(101);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(102);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(103);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(104);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(105);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(106);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(107);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(108);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(109);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(110);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(111);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(112);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');

exports.default = {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closeOnClickMask: {
            type: Boolean,
            default: true
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        titleText: {
            type: String,
            default: '标题'
        },
        actions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        actionColor: {
            type: String,
            default: '#0076FF'
        },
        cancelColor: {
            type: String,
            default: '#0076FF'
        },
        actionFontSize: {
            type: String,
            default: '40px'
        },
        cancelFontSize: {
            type: String,
            default: '40px'
        }
    },

    data: function data() {
        return {
            showActionsheet: false,
            mbHeight: 20,
            actionStyle: {},
            cancelStyle: {}
        };
    },


    computed: {
        listStyle: function listStyle() {
            var titleHeight = 92;
            var itemHeight = 114;
            var listHeight = this.actions.length * itemHeight;

            var totalHeight = listHeight + this.mbHeight;
            if (this.titleText) {
                totalHeight += titleHeight;
            }
            if (this.cancelText) {
                totalHeight += itemHeight + this.mbHeight;
            }

            var styleObj = { 'height': totalHeight + 'px', 'bottom': '-' + totalHeight + 'px' };

            return styleObj;
        }
    },

    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            this.actionStyle = Object.assign({}, {
                'color': this.actionColor,
                'font-size': this.actionFontSize
            });
            this.cancelStyle = Object.assign({}, {
                'color': this.cancelColor,
                'font-size': this.cancelFontSize
            });
        },
        itemsClass: function itemsClass(index) {
            var classArray = [];

            if (index === this.actions.length - 1) {
                classArray.push('radius-bl-24');
                classArray.push('radius-br-24');
            } else {
                classArray.push('bd-btm');
            }

            if (index === 0 && !this.titleText) {
                classArray.push('radius-tl-24');
                classArray.push('radius-tr-24');
            }

            return classArray;
        },
        close: function close() {
            if (!this.closeOnClickMask) {
                return;
            }
            this.hideSheet();
        },
        itemClick: function itemClick(item, index) {
            if (item.method && typeof item.method === 'function') {
                item.method(item, index);
            }
            this.hideSheet();
        },
        cancel: function cancel() {
            this.hideSheet();
        },
        showSheet: function showSheet() {
            var _this = this;

            this.displaySheetMask(true, function () {
                _this.displaySheetContent(true);
            });
        },
        hideSheet: function hideSheet() {
            var _this2 = this;

            this.displaySheetContent(false, function () {
                _this2.displaySheetMask(false, function () {
                    _this2.showActionsheet = false;
                });
            });
        },
        displaySheetMask: function displaySheetMask(isShow, callback) {
            var maskEl = this.$refs.sheetMask;
            if (!maskEl) {
                return;
            }

            var styles = isShow ? { opacity: 1 } : { opacity: 0 };

            animation.transition(maskEl, {
                styles: styles,
                duration: 150
            }, function () {
                typeof callback === 'function' && callback();
            });
        },
        displaySheetContent: function displaySheetContent(isShow, callback) {
            var contentEl = this.$refs.sheetContent;
            if (!contentEl) {
                return;
            }

            var styles = isShow ? { transform: 'translate(0, -100%)' } : { transform: 'translate(0, 100%)' };
            var timingF = isShow ? 'ease' : 'ease-out';
            var duration = isShow ? 150 : 300;

            animation.transition(contentEl, {
                styles: styles,
                duration: duration,
                timingFunction: timingF
            }, function () {
                typeof callback === 'function' && callback();
            });
        }
    },

    watch: {
        value: function value(val) {
            var _this3 = this;

            if (val) {
                this.showActionsheet = val;
                var timer = setTimeout(function () {
                    _this3.showSheet();
                    clearTimeout(timer);
                }, 40);
            }
        },
        showActionsheet: function showActionsheet(val) {
            !val && this.$emit('input', val);
        }
    }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_mixins2.default],
    props: {
        width: {
            type: String
        },
        height: {
            type: String,
            default: '100px'
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        text: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        hasArrow: {
            type: Boolean,
            default: true
        },
        textColor: {
            type: String,
            default: '#ffffff'
        },
        textFontSize: {
            type: String,
            default: '32px'
        }
    },

    data: function data() {
        return {
            cellStyles: {},
            textStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width
            };
            this.cellStyles = Object.assign({}, this.styles, baseCss);
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            this.$emit('wxClick', e);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

var _wxCheckbox = __webpack_require__(5);

var _wxCheckbox2 = _interopRequireDefault(_wxCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        options: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        value: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        width: {
            width: String,
            default: '750px'
        },
        height: {
            width: String,
            default: '100px'
        },
        padding: {
            width: String,
            default: '20px'
        },
        checkedColor: {
            width: String,
            default: '#027FF3'
        }
    },

    created: function created() {
        this.fire();
    },


    methods: {
        handleClick: function handleClick(item) {
            if (item.disabled) return;
            item.checked = !item.checked;
            this.fire();
        },
        fire: function fire() {
            var list = [];
            this.options.forEach(function (item) {
                return item.checked && list.push(item.value);
            });
            this.$emit('input', list);
            this.$emit('wxChange', list);
        }
    },
    components: { WxCheckbox: _wxCheckbox2.default }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_mixins2.default],
    props: {
        value: {
            type: Boolean,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            // left or right
            default: 'left'
        },
        checkedColor: {
            type: String,
            default: '#027FF3'
        }
    },

    data: function data() {
        return {
            checked: false,
            boxStyle: {}
        };
    },
    created: function created() {
        this.checked = this.value;
        if (!this.disabled) {
            this.boxStyle = {
                'border-color': this.checked ? this.checkedColor : '#DCDCDC'
            };
        } else {
            this.boxStyle = {
                'border-color': '#DCDCDC',
                'background-color': '#f2f3f4'
            };
        }
    },


    methods: {
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled) return;
            this.checked = !this.checked;
            this.$emit('wxChange', this.checked);
            this.$emit('input', this.checked);
        }
    },

    watch: {
        value: function value(v) {
            this.checked = v;
        },
        checked: function checked() {
            if (!this.disabled) {
                this.boxStyle = {
                    'border-color': this.checked ? this.checkedColor : '#DCDCDC'
                };
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
    mixins: [_mixins2.default],
    props: {
        visible: {
            type: Boolean,
            required: true,
            default: false
        },

        width: {
            type: String,
            default: '574px'
        },

        cancelLabel: {
            type: String,
            default: '取消'
        },
        confirmLabel: {
            type: String,
            default: '确定'
        },
        useDefaultFooter: {
            type: Boolean,
            default: true
        },

        title: {
            type: String,
            default: ''
        },

        clickConfirmHide: {
            type: Boolean,
            default: true
        }
    },

    created: function created() {
        this.setStyles();
    },


    methods: {
        setStyles: function setStyles() {
            var baseCss = {
                width: this.width
            };
            this.dialogContentStyles = Object.assign({}, baseCss);
        },
        cancel: function cancel(e) {
            var _this = this;

            this.preventDefault(e);
            if (this.useDefaultFooter) {
                this.hideDialog(function () {
                    _this.$emit('cancel');
                });
                return;
            }

            this.$emit('cancel');
        },
        confirm: function confirm(e) {
            var _this2 = this;

            this.preventDefault(e);
            if (this.useDefaultFooter && this.clickConfirmHide) {
                this.hideDialog(function () {
                    _this2.$emit('confirm');
                });
                return;
            }

            this.$emit('confirm');
        },
        hideDialog: function hideDialog(callback) {
            var _this3 = this;

            var timer = setTimeout(function () {
                _this3.displayDialog(false, callback);
                clearTimeout(timer);
            }, 40);
        },
        showDialog: function showDialog() {
            var _this4 = this;

            var timer = setTimeout(function () {
                _this4.displayDialog(true);
                clearTimeout(timer);
            }, 40);
        },
        displayDialog: function displayDialog(isShow, callback) {
            var dialogEl = this.$refs.dialog;
            if (!dialogEl) {
                return;
            }
            var styles = isShow ? { opacity: 1 } : { opacity: 0 };
            animation.transition(dialogEl, {
                styles: styles,
                duration: 200
            }, function () {
                typeof callback === 'function' && callback();
            });
        }
    },

    watch: {
        visible: function visible() {
            if (this.visible) {
                this.showDialog();
            }
        }
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

var _wxIcon = __webpack_require__(4);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    components: { WxIcon: _wxIcon2.default },
    props: {
        width: {
            type: String,
            default: '750px'
        },
        cliWidth: {
            type: String
        },
        titleWidth: {
            type: String
        },
        height: {
            type: String,
            default: '100px'
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        inputStyles: {
            type: Object
        },
        label: {
            type: String,
            default: ''
        },
        labelPosition: {
            type: String,
            default: 'left'
        },
        type: {
            type: String,
            default: 'text'
        },
        maxlength: {
            type: String,
            default: '200'
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        unit: {
            type: String
        },
        hasArrow: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        }
    },

    data: function data() {
        return {
            fieldStyles: {},
            textTitleStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
    },

    watch: {
        'value': function value() {
            if (this.value !== '') {
                this.cliTextStyles.color = '#333333';
            } else {
                this.cliTextStyles.color = '#999999';
            }
        }
    },

    methods: {
        setStyle: function setStyle() {

            // fieldStyles 样式
            var baseCss = {
                height: this.height,
                width: this.width
            };
            this.fieldStyles = Object.assign({}, baseCss, this.styles);

            //                if(this.disabled){
            //                    modal.toast({
            //                        message: this.width.replace('px','') - 26 + 'px'
            //                    })
            //                }

            // cliTextStyles样式
            var width = '';
            if (this.cliWidth != null) {
                width = this.cliWidth;
            } else {
                width = this.width;
            }
            var cliTextCss = {
                width: width.replace('px', '') - 26 + 'px',
                color: this.value === '' ? '#999999' : '#333333'
            };
            this.cliTextStyles = Object.assign({}, cliTextCss);

            if (this.titleWidth) {
                // textTitleStyles 样式
                var titleStyles = {
                    width: this.titleWidth
                };
                this.textTitleStyles = Object.assign({}, titleStyles);
            }
        },
        handleChange: function handleChange(e) {
            this.preventDefault(e);
            this.$emit('input', e.value);
        },
        blur: function blur(e) {
            this.preventDefault(e);
            this.$emit('wxBlur', e.target.attr.value);
        },
        clickHandler: function clickHandler() {
            if (this.disabled) {
                this.$emit('wxClick');
            }
        }
    }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');

exports.default = {
    mixins: [_mixins2.default],
    props: {
        hasBackIcon: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            default: ''
        },
        useDefaultBack: {
            type: Boolean,
            default: true
        },
        hasBottom: {
            type: Boolean,
            default: false
        },

        textColor: {
            type: String,
            default: '#333333'
        },

        textFontSize: {
            type: String,
            default: '44px'
        },

        arrowColor: {
            type: String,
            default: '#4676FF'
        },

        arrowSize: {
            type: String,
            default: '32px'
        }
    },

    created: function created() {},


    methods: {
        getTitleStyle: function getTitleStyle() {
            return {
                color: this.textColor,
                'font-size': this.textFontSize
            };
        },
        getArrowStyle: function getArrowStyle() {
            return {
                'border-right-color': this.arrowColor,
                'border-bottom-color': this.arrowColor,
                width: this.arrowSize,
                height: this.arrowSize
            };
        },
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            this.animated();
        },
        animated: function animated() {
            var _this = this;

            var el = this.$refs.arrow;
            animation.transition(el, {
                styles: {
                    opacity: '0.5'
                },
                duration: 200,
                timingFunction: 'ease-in',
                needLayout: false,
                delay: 0
            }, function () {
                if (_this.useDefaultBack) {
                    if (_this.$router && _this.$router.back) {
                        _this.$router.back();
                    } else {
                        navigator.pop({ animated: 'true' });
                    }
                } else {
                    _this.$emit('wxBack');
                }
            });
        }
    }
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
exports.default = {
    mixins: [_mixins2.default],
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        wxChange: {
            type: Function,
            required: true
        }
    },

    data: function data() {
        return {};
    },
    created: function created() {},


    methods: {
        scrollTo: function scrollTo(text) {
            var el = this.$refs['item' + text][0];
            dom.scrollToElement(el, {});
        },
        handleClick: function handleClick(item) {
            this.$emit('wxChange', item);
        }
    }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
exports.default = {
    mixins: [_mixins2.default],
    props: {
        width: {
            type: String,
            default: '750px'
        },
        textWidth: {
            type: String,
            default: '750px'
        },

        height: {
            type: String,
            default: '80px'
        },
        direction: {
            type: String,
            // or column
            default: 'row'
        },
        text: {
            type: [String, Array]
        },
        fontSize: {
            type: String,
            default: '32px'
        },
        textColor: {
            type: String,
            default: '#333'
        },
        bgColor: {
            type: String,
            default: '#fff'
        },
        duration: {
            type: Number,
            // ms
            default: 5000
        },
        delay: {
            type: Number,
            // ms
            default: 0
        }
    },
    data: function data() {
        return {
            base: {
                x: Number(this.textWidth.replace('px', '')),
                t: this.duration,
                h: Number(this.height.replace('px', ''))
            },
            marquee1: {},
            marquee2: {},
            wrapStyle: {},
            baseStyle: {},
            textStyle: {}
        };
    },
    created: function created() {
        this.wrapStyle = { width: this.width, height: this.height, 'background-color': this.bgColor };
        var width = this.direction === 'row' ? this.textWidth : this.width;
        this.baseStyle = { width: width, height: this.height, 'background-color': this.bgColor };

        this.baseStyleWrap = Object.assign({}, this.baseStyle, {
            height: this.base.h * (this.text.length + 1) + 'px' });

        var textStyle = { height: this.height, width: width, 'font-size': this.fontSize, 'color': this.textColor, 'line-height': this.height };

        if (this.$data.$env.isWeb) textStyle.display = 'block';
        this.textStyle = textStyle;
    },
    mounted: function mounted() {
        if (this.direction === 'row' && this.base.x > 750) {
            this.initStyle();
            this.startRow();
        } else if (this.direction === 'column') {
            this.startCol();
        }
    },


    methods: {
        initStyle: function initStyle() {
            var base = { height: this.height, width: this.textWidth };
            if (this.$data.$env.isWeb) {
                this.marquee1 = Object.assign({
                    left: '0px'
                }, base);
                this.marquee2 = Object.assign({
                    left: this.base.x + 'px'
                }, base);
            } else {
                this.marquee1 = Object.assign({
                    transform: 'translateX(0px)'
                }, base);
                this.marquee2 = Object.assign({
                    transform: 'translateX(' + this.base.x + 'px)'
                }, base);
            }
        },
        startRow: function startRow() {
            var _this = this;

            setTimeout(function () {
                _this.animation1('marquee1');
                _this.animation2('marquee2');
            }, this.delay);
        },
        startCol: function startCol() {
            var _this2 = this;

            var index = 0;
            var d = this.duration;
            var next = function next() {
                if (index > _this2.text.length - 1) {
                    index = 0;
                    // 处理浏览器兼容，设置停留100ms
                    d = 100;
                    _this2.animationCol(0, 0);
                } else {
                    d = _this2.duration;
                    index++;
                    var y = -1 * index * 100 / (_this2.text.length + 1) + '%';
                    _this2.animationCol(_this2.duration, y);
                }
                setTimeout(next, d);
            };
            setTimeout(function () {
                next();
            }, this.delay);
        },
        animation1: function animation1(ref) {
            var _this3 = this;

            var el = this.$refs[ref];
            animation.transition(el, {
                styles: this.getStyles(-this.base.x),
                duration: this.base.t,
                timingFunction: 'linear'
            }, function () {
                _this3.end(ref);
            });
        },
        getStyles: function getStyles(x) {
            if (this.$data.$env.isWeb) {
                return { left: x + 'px' };
            } else {
                return { transform: 'translateX(' + x + 'px)' };
            }
        },
        animation2: function animation2(ref) {
            var _this4 = this;

            var el = this.$refs[ref];
            var x = this.base.x;
            var d = this.base.t * 2;
            animation.transition(el, {
                styles: this.getStyles(-x),
                duration: d,
                timingFunction: 'linear'
            }, function () {
                _this4.end(ref);
            });
        },
        end: function end(ref) {
            var _this5 = this;

            var el = this.$refs[ref];
            animation.transition(el, {
                styles: this.getStyles(this.base.x),
                duration: 0
            });
            setTimeout(function () {
                _this5.animation2(ref);
            }, 20);
        },
        animationCol: function animationCol(duration, y) {
            var el = this.$refs.wrapColumn;
            if (this.$data.$env.isWeb) {
                el.style.transitionDuration = duration + 'ms';
                el.style.transitionTimingFunction = 'ease';
                el.style.transform = 'translate3d(0, ' + y + ', 0)';
                return;
            }
            animation.transition(el, {
                styles: {
                    transform: 'translateY(' + y + ')'
                },
                duration: duration,
                timingFunction: 'ease'
            });
        }
    }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        // titleColor默认4D4D4D，titleSize默认32px
        tabItems: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },

        vif: {
            type: Boolean,
            default: false
        },
        // navbar整体宽度
        width: {
            type: String,
            default: '750px'
        },

        // navbar整体高度
        height: {
            type: String,
            default: '80px'
        },

        hasBottom: {
            type: Boolean,
            default: true
        },

        animated: {
            type: Boolean,
            default: true
        },

        lineStyle: {
            default: function _default() {
                return {};
            }
        }
    },

    data: function data() {
        return {
            selectedTab: { index: 0 },
            translateX: 'translateX(0px)',
            // navbar宽度，该值等于prop width值 
            barWidth: 750,
            left: 0,
            defaultLineStyle: {
                width: '120px',
                'background-color': '#4676FF'
            }
        };
    },
    created: function created() {
        var _this = this;

        // 计算宽度
        this.barWidth = Number(this.width.replace('px', ''));
        // 不适用vif
        if (!this.vif) {
            this.contentTotalWidth = 750 * this.tabItems.length;
            this.setTranslateX();
        }
        // 添加pos属性，提供偏移动画适用
        this.tabItems.forEach(function (item, index) {
            var pos = _this.barWidth / _this.tabItems.length * index;
            item.pos = pos;
        });
        // 初始化line style
        this.setLineStyle();
    },


    methods: {
        setLineStyle: function setLineStyle() {
            var style = {
                top: Number(this.height.replace('px', '')) - 2 + 'px',
                left: this.getLeft() + 'px'
            };
            this.defaultLineStyle = Object.assign(style, this.defaultLineStyle, this.lineStyle);
        },


        /**
         * 获得第一个距离左侧left值
         * @return {Number}
         */
        getLeft: function getLeft() {
            var lineWidth = this.lineStyle.width || this.defaultLineStyle.width;
            var width = Number(lineWidth.replace('px', ''));
            return (this.barWidth / this.tabItems.length - width) / 2;
        },
        changeTab: function changeTab(item) {
            if (item.index === this.selectedTab.index && (!item.hasOwnProperty('multipleTrigger') || !item['multipleTrigger'])) {
                return;
            }
            this.$emit('wxChange', item);
            var transform = 'translateX(' + this.tabItems[item.index].pos + 'px)';
            this.offsetPos(transform);
            this.selectedTab = item;
            this.setTranslateX();
        },
        setTranslateX: function setTranslateX() {
            var x = this.selectedTab.index * 750;
            this.translateX = 'translateX(-' + x + 'px)';
        },


        // 设置偏移位置（是否带动画）
        offsetPos: function offsetPos(transform) {
            if (this.animated) {
                this.lineAnimate(transform);
            } else {
                this.setLineStyle();
            }
        },


        // 选中线的动画
        lineAnimate: function lineAnimate(transform) {
            var selectedLineEl = this.$refs.selectedLine;
            if (!selectedLineEl) {
                return;
            }
            animation.transition(selectedLineEl, {
                styles: {
                    transform: transform,
                    transformOrigin: 'center center'
                },
                duration: 300,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        },
        getTitleStyle: function getTitleStyle(item) {
            return {
                color: this.selectedTab.index === item.index ? item.selectedColor || '#4676FF' : item.titleColor || '#7A818B',
                'font-size': item.titleSize || '32px'
            };
        }
    }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _is = __webpack_require__(78);

var _is2 = _interopRequireDefault(_is);

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');

var getIndex = function getIndex(list, item) {
    if (list && list.length < 1) {
        return 0;
    }
    var index1 = list.findIndex(function (v) {
        return v === item || v.name && v.name === item.name;
    });
    var index2 = list.indexOf(item);
    var index = Math.max(index1, index2);
    if (index < 0) {
        // throw new Error('list数组中不存在defaultValue');
        return 0;
    }
    return index;
};

exports.default = {
    mixins: [_mixins2.default],
    props: {
        visible: {
            type: Boolean,
            default: false
        },

        data: {
            type: Object,
            default: function _default() {
                return {};
            },
            required: true
        }
    },
    data: function data() {
        return {
            startY: 0,
            endY: 0,
            currentY: 0,
            itemHeight: 72,
            selectedIndex: 0,
            _defaultValue: null,
            _startTime: 0
        };
    },
    created: function created() {
        this.selectedIndex = this.getInitialIndex();
    },
    mounted: function mounted() {
        this.initMove();
    },


    methods: {
        getInitialIndex: function getInitialIndex() {
            var index = getIndex(this.data.list, this.data.defaultValue);
            if (!this.data.defaultValue && this.data.list.length > 3) {
                index = Math.floor(this.data.list.length / 2);
            }
            return index;
        },
        initMove: function initMove() {
            this.currentY = 0;
            if (this.selectedIndex > 2) {
                this.currentY = -(this.selectedIndex - 2) * this.itemHeight;
            } else {
                this.currentY = (2 - this.selectedIndex) * this.itemHeight;
            }
            this.move(this.currentY);
        },
        getSelectedClass: function getSelectedClass(index) {
            if (this.selectedIndex === index) {
                return 'picker-item-selected';
            }
            return '';
        },
        ontouchstart: function ontouchstart(e) {
            this.preventDefault(e);
            if (this.data.list.length <= 1) {
                return;
            }
            this.startY = e.changedTouches[0].screenY;
            this._startTime = new Date().getTime();
        },
        ontouchmove: function ontouchmove(e) {
            this.preventDefault(e);
            if (this.data.list.length <= 1) {
                return;
            }
            var pageY = e.changedTouches[0].screenY;
            var value = parseInt(pageY - this.startY);
            var y = this.currentY + value;
            this.move(y);
        },
        ontouchend: function ontouchend(e) {
            this.preventDefault(e);
            if (this.data.list.length <= 1) {
                return;
            }
            this.endY = e.changedTouches[0].screenY;
            // 实际滚动距离
            var v = parseInt(this.endY - this.startY);
            // 如果快速滑动，实际滑动距离放大5倍
            var endTime = new Date().getTime();
            if (endTime - this._startTime < 200) {
                v = v * 5;
            }
            var value = v % this.itemHeight;
            // 计算出每次拖动的36px整倍数
            this.currentY += v - value;

            // 正数y最大值
            var max1 = 2 * this.itemHeight;
            // 负数y最小值
            var max2 = (this.data.list.length - 3) * this.itemHeight;

            if (this.currentY > max1) {
                this.currentY = max1;
            } else if (this.currentY > 0 && this.currentY < max1) {
                this.currentY = this.currentY;
            } else if (this.currentY === max1) {
                this.currentY = this.currentY;
            } else if (Math.abs(this.currentY) > max2) {
                this.currentY = -max2;
            }

            this.countListIndex(this.currentY);
            this.move(this.currentY, true);
        },


        // 计算list数组索引
        countListIndex: function countListIndex(pageY) {
            var n = pageY / this.itemHeight;
            n = n > 0 ? 2 - n : Math.abs(n) + 2;
            this.setSelectedValue(n);
        },


        // set选中值
        setSelectedValue: function setSelectedValue(index) {
            var length = this.data.list.length;
            if (length === 0) {
                this.callback(null);
                return;
            }
            if (index < 0 || index > length - 1) {
                throw new Error('滑动取值索引数值出现错误' + index);
            }
            var value = this.data.list[index];
            this.selectedIndex = index;

            this.callback(value);
        },


        // 回调wxChange
        callback: function callback(value) {
            this.data.defaultValue = value;
            this.$emit('wxChange', value);
        },
        move: function move(y, bool) {
            var el = this.$refs.wrapper;
            var obj = {
                styles: {
                    transform: 'translateY(' + y + 'px)',
                    transformOrigin: 'center center'
                },
                needLayout: false,
                delay: 0 //ms
            };
            if (bool) {
                obj.duration = 300;
                obj.timingFunction = 'ease-out';
            }
            animation.transition(el, obj);
        }
    },
    watch: {
        'data.list': function dataList() {
            this.selectedIndex = this.getInitialIndex();
            this.initMove();
        }
    }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        width: {
            type: String,
            default: '750px'
        },

        height: {
            type: String,
            default: '400px'
        },

        position: {
            type: String,
            default: 'bottom'
        },

        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        visible: {
            type: Boolean,
            default: false
        },

        duration: {
            type: Number,
            // 300 ms
            default: 300
        },
        hasOverley: {
            type: Boolean,
            default: true
        },

        closeOnClickMask: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            popupStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
        this.overlayAnimate();
    },


    methods: {
        // overlay动画
        overlayAnimate: function overlayAnimate(opacity) {
            if (!this.hasOverley) {
                return;
            }
            var overlayEl = this.$refs.overlay;
            if (!overlayEl) {
                return;
            }
            animation.transition(overlayEl, {
                styles: {
                    opacity: opacity
                },
                duration: this.duration,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        },
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width
            };
            var style = Object.assign(this.getStyle().position, baseCss, this.styles);
            this.popupStyles = style;
        },
        getStyle: function getStyle(xy) {
            var style = {
                position: {},
                transform: ''
            };
            switch (this.position) {
                case 'top':
                    style.transform = 'translateY(' + (xy || this.height) + ')';
                    style.position = { top: '-' + this.height };
                    break;
                case 'bottom':
                    style.transform = 'translateY(-' + (xy || this.height) + ')';
                    style.position = { bottom: '-' + this.height };
                    break;
                case 'left':
                    style.transform = 'translateX(' + (xy || this.width) + ')';
                    style.position = { left: '-' + this.width, top: '0px' };
                    break;
                case 'right':
                    style.transform = 'translateX(-' + (xy || this.width) + ')';
                    style.position = { right: '-' + this.width, top: '0px' };
                    break;
            }
            return style;
        },


        // popup动画
        popupAnimate: function popupAnimate(xy) {
            var popupEl = this.$refs.popup;
            if (!popupEl) {
                return;
            }
            animation.transition(popupEl, {
                styles: {
                    transform: this.getStyle(xy).transform,
                    transformOrigin: 'center center'
                },
                duration: this.duration,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        },
        hide: function hide(fn) {
            var _this = this;

            // 如果是点击事件非函数调用
            if (fn === 'event' && !this.closeOnClickMask) return;
            var tm = setTimeout(function () {
                _this.$emit('wxChange', false);
                clearTimeout(tm);
                fn && fn !== 'event' && fn();
            }, this.duration);
            this.popupAnimate('0px');
            this.overlayAnimate(0);
        }
    },
    watch: {
        visible: function visible() {
            var _this2 = this;

            if (this.visible) {
                var tm = setTimeout(function () {
                    _this2.popupAnimate();
                    _this2.overlayAnimate(1);
                    clearTimeout(tm);
                }, 40);
            }
        }
    }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        width: {
            type: String,
            default: '750px'
        },
        size: {
            type: String,
            default: '44px'
        },
        align: {
            type: String,
            default: 'left'
        },
        direction: {
            type: String,
            default: 'row'
        },
        options: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        value: {
            type: Object,
            required: true
        },
        checkedColor: {
            type: String,
            default: '#027FF3'
        },
        textColor: {
            type: String,
            default: '#4D4D4D'
        },
        textFontSize: {
            type: String,
            default: '32px'
        }
    },

    data: function data() {
        return {
            checkedStyle: {},
            textStyles: {},
            rowStyle: {}
        };
    },
    created: function created() {
        this.setCheckedStyle();
        this.setTextStyle();
        this.setRowStyle();
        this.initChecked();
    },


    methods: {
        setTextStyle: function setTextStyle() {
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        setRowStyle: function setRowStyle() {
            if (this.direction === 'column') {
                this.rowStyle = {
                    'width': this.width,
                    'justify-content': 'space-between',
                    'padding-top': '24px',
                    'padding-bottom': '24px',
                    'padding-left': '40px',
                    'padding-right': '40px'
                };
            }
        },
        setCheckedStyle: function setCheckedStyle() {
            var value = Number(this.size.replace('px', '')) / 2;
            var size = value + 'px';
            this.checkedStyle = {
                height: size,
                width: size,
                'border-radius': size,
                top: value / 2 + 'px',
                left: value / 2 + 'px'
            };
        },
        getRadioStyle: function getRadioStyle(item) {
            var style = {
                height: this.size,
                width: this.size,
                'border-radius': this.size,
                'background-color': item.checked ? this.checkedColor : '#fff'
            };
            if (item.disabled) {
                style['background-color'] = '#d9d9d9';
            }
            return style;
        },
        initChecked: function initChecked() {
            var _this = this;

            this.options.forEach(function (item) {
                if (item.checked) {
                    _this.$emit('wxChange', item.value);
                    _this.$emit('input', item.value);
                }
            });
        },
        handleClick: function handleClick(item) {
            if (item.checked || item.disabled) return;
            this.options.forEach(function (el) {
                el.checked = false;
            });
            item.checked = true;
            this.$emit('wxChange', item.value);
            this.$emit('input', item.value);
        }
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        width: {
            type: String,
            default: '750px'
        },
        height: {
            type: String,
            default: '10px'
        },
        circleStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        innerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        outerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    data: function data() {
        return {
            startX: 0,
            moveX: 0,
            _circleStyle: {},
            _innerStyle: {},
            _outerStyle: {},
            _wrapStyle: {},
            data: {
                width: 0
            },
            circleSize: '60px'
        };
    },
    created: function created() {
        this.initStyle();
    },


    methods: {
        initStyle: function initStyle() {
            this.circleStyle.width = this.circleStyle.width || this.circleSize;
            this.circleStyle.height = this.circleStyle.height || this.circleSize;
            var circleSize = Number(this.circleStyle.width.replace('px', ''));
            var v = circleSize / 2;

            var h = Number(this.height.replace('px', ''));

            // _innerStyle
            var base = { width: this.width, height: this.height, 'margin-top': v - h / 2 + 'px', 'margin-left': v + 'px' };
            this._innerStyle = Object.assign({}, this.innerStyle, base);
            console.log(this._innerStyle);
            this.data.width = Number(this._innerStyle.width.replace('px', ''));

            // _circleStyle
            this._circleStyle = Object.assign({}, this.circleStyle, {
                width: this.circleStyle.width,
                height: this.circleStyle.height,
                'border-radius': v + 'px'
            });

            // _outerStyle
            this._outerStyle = Object.assign({}, this.outerStyle, {
                left: '-' + this._innerStyle.width,
                width: this._innerStyle.width,
                height: this._innerStyle.height
            });
            this._wrapStyle = {
                width: this.data.width + circleSize + 'px',
                height: this._circleStyle.height,
                'background-color': '#fff'
            };
        },


        ontouchstart: function ontouchstart(e) {
            this.preventDefault(e);
            this.startX = e.changedTouches[0].screenX;
        },

        ontouchmove: function ontouchmove(e) {
            this.preventDefault(e);
            var x = Math.floor(e.changedTouches[0].screenX - this.startX);
            if (this.moveX + x > this.data.width) {
                this.move(this.$refs.circle, this.data.width);
                this.move(this.$refs.rangeOuter, this.data.width);
                return;
            }
            if (this.moveX + x < 0) {
                this.move(this.$refs.circle, 0);
                this.move(this.$refs.rangeOuter, 0);
                return;
            }
            this.move(this.$refs.circle, this.moveX + x);
            this.move(this.$refs.rangeOuter, this.moveX + x);
            this.$emit('input', this.getRange(this.moveX + x));
        },

        getRange: function getRange(value) {
            return Math.floor(value / this.data.width * 100);
        },


        ontouchend: function ontouchend(e) {
            this.preventDefault(e);
            // 结束点(即圆圈在x轴移动的距离)
            var endPot = Math.floor(e.changedTouches[0].screenX - this.startX + this.moveX);
            if (endPot <= 0) {
                endPot = 0;
            }
            if (endPot > this.data.width) {
                endPot = this.data.width;
            }
            this.moveX = endPot;
            this.$emit('input', this.getRange(this.moveX));
            this.$emit('wxChange', this.getRange(this.moveX));
            // this.move(endPot);
        },

        move: function move(el, progress) {
            animation.transition(el, {
                styles: {
                    transform: 'translateX(' + progress + 'px)',
                    transformOrigin: 'center center'
                },
                duration: 0,
                needLayout: false,
                delay: 0 //ms
            });
        },


        /**
         * 设置范围
         * @param {Int} range 0-100数字
         */
        setRange: function setRange(range) {
            var x = this.data.width * range / 100;
            if (x <= 0) {
                x = 0;
            }
            if (x > this.data.width) {
                x = this.data.width;
            }
            this.moveX = x;
            this.move(this.$refs.circle, x);
            this.move(this.$refs.rangeOuter, x);
            this.$emit('input', range);
            this.$emit('wxChange', range);
        }
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');

exports.default = {
    props: {
        // {
        //     index: i,
        //     title: list[i].toString().substring(4) + '月',  
        //     titleColor: '#4d4d4d', 
        //     selectedColor: 'blue',
        //     titleSize: '32px',
        //     selected: false,
        //     bgColor: '#969696', 
        //     selectedBgColor: '#fff',
        // }
        items: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        wxChange: {
            type: Function,
            required: true
        },

        hasBottom: {
            type: Boolean,
            default: false
        },

        hasSelectedBottom: {
            type: Boolean,
            default: false
        },

        height: {
            type: String,
            default: '700px'
        },

        itemWidth: {
            type: String,
            default: '250px'
        },
        itemHeight: {
            type: String,
            default: '100px'
        },

        scrollDirection: {
            type: String,
            default: 'vertical'
        }
    },

    data: function data() {
        return {
            selectIndex: 0,
            count: 0,
            scrollStyle: {},
            data: {
                // parent height child height
                pheight: 0,
                cwidth: 0,
                cheight: 0
            },
            hiddenCount: 0,
            maxHidden: 0
        };
    },
    created: function created() {
        var isVertical = this.getIsVertical();
        this.scrollStyle = {
            width: isVertical ? this.itemWidth : '750px',
            height: this.height,
            'flex-direction': isVertical ? 'column' : 'row'
        };
        this.getData();
        // this.deviceHeight = weex.config.env.deviceHeight
        this.getCount();
        // 最大隐藏个数（共37条，一页10条，能隐藏37-10=27条）
        this.maxHidden = this.items.length - this.count;
    },
    mounted: function mounted() {
        this.changeTab(this.getSelectIndex(), false);
    },


    methods: {
        getData: function getData() {
            this.data = {
                pheight: Number(this.height.replace('px', '')),
                cwidth: Number(this.itemWidth.replace('px', '')),
                cheight: Number(this.itemHeight.replace('px', ''))
            };
        },
        getSelectIndex: function getSelectIndex() {
            var item = this.items.find(function (el) {
                return el.selected;
            }) || this.items[0];
            return item.index;
        },
        getCount: function getCount() {
            if (this.getIsVertical()) {
                this.count = Math.floor(this.data.pheight / this.data.cheight);
            } else {
                this.count = Math.floor(750 / this.data.cwidth);
            }
        },
        getIsVertical: function getIsVertical() {
            return this.scrollDirection === 'vertical';
        },
        changeTab: function changeTab(index) {
            var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.selectIndex = index;
            if (index) {
                var middle = Math.floor(this.count / 2);
                if (index >= middle) {
                    this.hiddenCount = index - middle;
                    this.hiddenCount = this.getCanMoves();
                    this.scrollTo(-this.hiddenCount * this.data.cheight, animated);
                } else {
                    this.hiddenCount = 0;
                    this.scrollTo(0, animated);
                }
                this.items.forEach(function (item) {
                    item.selected = false;
                });
                this.items[index].selected = true;
            }
            this.$emit('wxChange', this.items[index]);
        },


        /**
         * 获取能移动多少条，不能超过总条数
         */
        getCanMoves: function getCanMoves() {
            var bool = this.hiddenCount > this.maxHidden;
            return bool ? this.maxHidden : this.hiddenCount;
        },
        scrollTo: function scrollTo(elHeight, animated) {
            var index = elHeight / this.data.cheight;
            if (index > 0) {
                var itemStr = 'item' + (this.items.length - index);
                var el = this.$refs[itemStr][0];
                dom.scrollToElement(el, { animated: animated });
            } else {
                var _itemStr = 'item' + (0 - index);
                var _el = this.$refs[_itemStr][0];
                dom.scrollToElement(_el, { animated: animated });
            }
        },
        getItemStyle: function getItemStyle(item) {
            var bgColor = (this.selectIndex === item.index ? item.selectedBgColor : item.bgColor) || '#fff';
            return {
                width: this.itemWidth,
                height: this.itemHeight,
                'background-color': bgColor
            };
        },
        getTitleStyle: function getTitleStyle(item) {
            var color = (this.selectIndex === item.index ? item.selectedColor : item.titleColor) || '#4d4d4d';
            return {
                color: color,
                height: this.itemHeight,
                'line-height': this.itemHeight,
                'font-size': item.titleSize || '32px',
                'border-bottom-color': color
            };
        }
    }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    props: {
        value: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },

        checkedColor: {
            type: String,
            default: '#027FF3'
        }
    },

    data: function data() {
        return {
            checked: false,
            blkStyle: {},
            corestyle: {}
        };
    },
    created: function created() {
        this.initStyle();
    },
    mounted: function mounted() {
        this.checked = this.value;
        this.blkAnimation(true);
        this.animation(true);
    },


    methods: {
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled) return;
            this.checked = !this.checked;
            this.animation();
            this.blkAnimation();
        },
        animation: function animation() {
            var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var el = this.$refs.switchCore;
            // 设置为0.1 解决奇怪的Y轴会覆盖点击问题
            var s = this.checked ? '0.1' : '1';
            _animation.transition(el, {
                styles: {
                    transform: 'scale(' + s + ')'
                },
                duration: isInit ? 0 : 300,
                timingFunction: 'linear',
                needLayout: false,
                delay: 0
            });
        },
        blkAnimation: function blkAnimation() {
            var _this = this;

            var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var el = this.$refs.blk;
            var x = this.checked ? '42px' : '0px';
            _animation.transition(el, {
                styles: {
                    transform: 'translateX(' + x + ')'
                },
                duration: isInit ? 0 : 300,
                timingFunction: 'linear',
                needLayout: false,
                delay: 0
            }, function () {
                _this.$emit('wxChange', _this.checked);
                _this.$emit('input', _this.checked);
            });
        },


        // android不支持阴影
        initStyle: function initStyle() {
            var platform = weex.config.env.platform.toLowerCase();
            if (platform === 'android') {
                this.blkStyle = {
                    'border-width': '1px',
                    'border-style': 'solid',
                    'border-color': '#d9d9d9'
                };
            } else {
                this.blkStyle = {
                    'box-shadow': '0 1px 3px rgba(0,0,0,.4)',
                    top: '5px'
                };
                if (platform === 'web') {
                    this.corestyle = {
                        width: '100px',
                        height: '60px',
                        'border-radius': '60px'
                    };
                    this.blkStyle.top = '4px';
                }
            }
        }
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        tabItems: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },

        styles: {
            type: Object,
            default: function _default() {
                return {};
            },
            required: false
        },

        height: {
            type: String,
            default: '128px'
        }
    },

    data: function data() {
        return {
            selectedTab: { index: 0 },
            translateX: 'translateX(0px)',
            deviceWidth: 750,
            titleStyle: {}
        };
    },
    created: function created() {
        this.totalWidth = this.deviceWidth * this.tabItems.length;
        this.setTranslateX();
    },


    methods: {
        changeTab: function changeTab(item) {
            this.selectedTab = item;
            this.setTranslateX();
            this.$emit('wxChange', item);
        },
        setTranslateX: function setTranslateX() {
            var x = this.selectedTab.index * this.deviceWidth;
            this.translateX = 'translateX(-' + x + 'px)';
        },
        getStyles: function getStyles() {
            var baseStyle = {
                'height': this.height
            };
            return Object.assign({}, baseStyle, this.styles);
        },
        getIconStyle: function getIconStyle(item) {
            return {
                width: item.iconWdith || '38px',
                height: item.iconHeight || '38px'
            };
        },
        getTitleStyle: function getTitleStyle(item) {
            return {
                'font-size': item.fontSize || '32px',
                'color': this.selectedTab.index === item.index ? item.selectedColor : item.titleColor
            };
        }
    }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var is = {};
is.existy = function (value) {
    return value != null;
};

is.object = function (value) {
    return Object(value) === value;
};

// is a given value Array?
// check native isArray first
is.array = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
};

// is a given value empty? Objects, arrays, strings
is.empty = function (value) {
    if (is.array(value)) {
        return value.length == 0;
    } else if (is.object(value)) {
        var length = Object.keys(value).length;
        if (length === 0) {
            return true;
        }
        return false;
    }
    return value === '' || typeof value === 'undefined';
};

exports.default = is;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-tabbar[data-v-06b46507] {\n}\n.tab-component[data-v-06b46507] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    background-color: #fff;\n}\n.tabbar[data-v-06b46507] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    width: 10rem;\n    height: 1.33333rem;\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1000;\n    border-top-width: 1px;\n    border-top-style: solid;\n    border-top-color: #D8D8D8;\n    background-color: #fff;\n}\n.tabbar-item[data-v-06b46507] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.icon[data-v-06b46507] {\n    margin-top: 0.18667rem;\n    margin-bottom: 0.13333rem;\n    width: 0.50667rem;\n    height: 0.50667rem;\n}\n.wx-text[data-v-06b46507] {\n    font-size: 0.37333rem;\n    padding-top: 0.02667rem;\n    text-align: center;\n    color: #646464;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-tabbar/index.vue?2ce51c6d"],"names":[],"mappings":";AAkBA;CAEA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,aAAA;IACA,mBAAA;IACA,gBAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;IACA,cAAA;IACA,sBAAA;IACA,wBAAA;IACA,0BAAA;IACA,uBAAA;CACA;AAEA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AAEA;IACA,uBAAA;IACA,0BAAA;IACA,kBAAA;IACA,mBAAA;CACA;AAEA;IACA,sBAAA;IACA,wBAAA;IACA,mBAAA;IACA,eAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-tabbar\">\n        <div class=\"tab-component\" :style=\"{'transform': translateX, width: totalWidth + 'px'}\">\n            <slot></slot>\n        </div>\n        <div class=\"tabbar\" \n            :style=\"getStyles()\">\n            <div class=\"tabbar-item\" \n                v-for=\"item in tabItems\" \n                @click=\"changeTab(item)\">\n                <image :style=\"getIconStyle(item)\" v-if=\"selectedTab.index === item.index\" :src=\"item.selectedImage\" class=\"icon\"></image>\n                <image :style=\"getIconStyle(item)\" v-if=\"selectedTab.index !== item.index\" :src=\"item.image\" class=\"icon\"></image>\n                <text class=\"wx-text\" :style=\"getTitleStyle(item)\" >{{ item.title }}</text>\n            </div>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-tabbar {\n        \n    }\n\n    .tab-component {\n        flex-direction: row;\n        background-color: #fff;\n    }   \n\n    .tabbar {\n        flex-direction: row;\n        width: 750px;\n        height: 100px;\n        position: fixed;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 1000;\n        border-top-width: 1px;\n        border-top-style: solid;\n        border-top-color: #D8D8D8;\n        background-color: #fff;\n    }\n\n    .tabbar-item {\n        flex: 1;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .icon {\n        margin-top: 14px;\n        margin-bottom: 10px;\n        width: 38px;\n        height: 38px;\n    }\n\n    .wx-text {\n        font-size: 28px;\n        padding-top: 2px;\n        text-align: center;\n        color: #646464;\n    }\n\n</style>\n<script>\n    export default {\n        props: {\n            tabItems: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n                required: true\n            },\n\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                },\n                required: false\n            },\n\n            height: {\n                type: String,\n                default: '128px'\n            },\n        },\n\n        data () {\n            return {\n                selectedTab: {index: 0},\n                translateX: 'translateX(0px)', \n                deviceWidth: 750,\n                titleStyle: {},\n            }\n        },\n\n        created () {\n            this.totalWidth = this.deviceWidth * this.tabItems.length;\n            this.setTranslateX();\n        },\n\n        methods: {\n            changeTab (item) {\n               this.selectedTab = item;\n               this.setTranslateX();\n               this.$emit('wxChange', item);\n            },\n\n            setTranslateX () {\n                const x = this.selectedTab.index * this.deviceWidth;\n                this.translateX = `translateX(-${x}px)`;\n            },\n\n            getStyles () {\n                const baseStyle =  {\n                    'height': this.height\n                };\n                return Object.assign({}, baseStyle, this.styles);\n            },\n\n            getIconStyle (item) {\n                return {\n                    width: item.iconWdith || '38px',\n                    height: item.iconHeight || '38px',\n                }\n            },\n\n            getTitleStyle (item) {\n                return {\n                    'font-size': item.fontSize || '32px',\n                    'color': this.selectedTab.index === item.index ? item.selectedColor : item.titleColor,\n                }\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-indexlist[data-v-07ea1486]{\n    width: 10rem;\n}\n.indexList[data-v-07ea1486]{\n    position: fixed;\n    right: 0;\n    top: 0;\n}\n.scroller[data-v-07ea1486]{\n    width: 10rem;\n    /*height: 1000px;*/\n}\n.category[data-v-07ea1486] {\n    color: #666;\n    width: 10rem;\n    height: 0.8rem;\n    line-height: 0.8rem;\n    background-color: #d3d3d3;\n    font-size: 0.48rem;\n}\n.item-text[data-v-07ea1486] {\n    color: #999;\n    width: 10rem;\n    height: 0.8rem;\n    line-height: 0.8rem;\n    font-size: 0.42667rem;\n}\n.indexList-right[data-v-07ea1486] {\n    color: #666;\n    font-size: 0.42667rem;\n    padding-left: 0.53333rem;\n    padding-right: 0.13333rem;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-indexlist/index.vue?ed1ad77c"],"names":[],"mappings":";AA6DA;IACA,aAAA;CACA;AACA;IACA,gBAAA;IACA,SAAA;IACA,OAAA;CACA;AACA;IACA,aAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,eAAA;IACA,oBAAA;IACA,0BAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,eAAA;IACA,oBAAA;IACA,sBAAA;CACA;AAEA;IACA,YAAA;IACA,sBAAA;IACA,yBAAA;IACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-indexlist\">\n        <scroller :style=\"{height: getPageHeight() + 'px'}\" class=\"scroller\" show-scrollbar=\"false\">\n            <div class='eachCategory' v-for='category in items' >\n                <text class=\"category\" :ref=\"'item' + category.text\">{{category.text}}</text>\n                <text class=\"item-text\" v-for='item in category.list' @click=\"handleClick(item)\">{{item.text}}\n                </text>\n            </div>\n        </scroller>\n        <div class='indexList'>\n            <text class='indexList-right' @click=\"scrollTo(category.text)\" v-for='category in items'>{{category.text}}</text>\n        </div>\n    </div>\n</template>\n<script>\n    const modal = weex.requireModule('modal');\n    const animation = weex.requireModule('animation');\n    const dom = weex.requireModule('dom');\n    import mixins from '../utils/mixins';\n\n    export default {\n        mixins:[mixins],\n        props: {\n            items: {\n                type: Array,\n                default: function () {\n                    return [];\n                },\n                required: true\n            },\n            wxChange: {\n                type: Function,\n                required: true\n            },\n        },\n\n        data () {\n            return {\n                \n            }\n        },\n\n        created () {\n\n        },\n\n        methods: {\n            scrollTo (text) {\n                const el = this.$refs['item' + text][0];\n                dom.scrollToElement(el, {})\n            },\n\n            handleClick (item) {\n                this.$emit('wxChange', item);\n            },\n\n        }\n    }\n</script>\n\n<style scoped>\n    .wx-indexlist{\n        width: 750px;\n    }\n    .indexList{\n        position: fixed;\n        right: 0;\n        top: 0;\n    }\n    .scroller{\n        width: 750px;\n        /*height: 1000px;*/\n    }\n\n    .category {\n        color: #666;\n        width: 750px;\n        height: 60px;\n        line-height: 60px;\n        background-color: #d3d3d3;\n        font-size: 36px;\n    }\n\n    .item-text {\n        color: #999;\n        width: 750px;\n        height: 60px;\n        line-height: 60px;\n        font-size: 32px;\n    }\n\n    .indexList-right {\n        color: #666;\n        font-size: 32px;\n        padding-left: 40px;\n        padding-right: 10px;\n    }\n    \n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-overlay[data-v-0901d80e] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    z-index: 1000;\n}\n.wx-popup[data-v-0901d80e] {\n    background-color: #fff;\n    position: fixed;\n    z-index: 1001;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-popup/index.vue?bdf3036a"],"names":[],"mappings":";AASA;IACA,gBAAA;IACA,OAAA;IACA,QAAA;IACA,UAAA;IACA,SAAA;IACA,qCAAA;IACA,cAAA;CACA;AACA;IACA,uBAAA;IACA,gBAAA;IACA,cAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-container\" @touchstart=\"preventDefault\">\n        <div class=\"mask wx-overlay\" ref=\"overlay\" v-if=\"visible && hasOverley\" @click=\"hide('event')\"></div>\n        <div class=\"wx-popup\" v-if=\"visible\" :style=\"popupStyles\" ref=\"popup\">\n            <slot></slot>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n        z-index: 1000;\n    }\n    .wx-popup {\n        background-color: #fff;\n        position: fixed;\n        z-index: 1001;\n    }\n</style>\n<script>\n    import mixins from '../utils/mixins';\n    const animation = weex.requireModule('animation');\n    export default {\n        mixins:[mixins],\n        props: {\n            width: {\n                type: String,\n                default: '750px'\n            },\n\n            height: {\n                type: String,\n                default: '400px'\n            },\n\n            position: {\n                type: String,\n                default: 'bottom'\n            },\n\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n\n            visible: {\n                type: Boolean,\n                default: false\n            },\n\n            duration: {\n                type: Number,\n                // 300 ms\n                default: 300\n            },\n            hasOverley: {\n                type: Boolean,\n                default: true\n            },\n\n            closeOnClickMask: {\n                type: Boolean,\n                default: true\n            },\n        },\n\n        data () {\n            return {\n                popupStyles: {},\n            }\n        },\n\n        created () {\n            this.setStyle();\n            this.overlayAnimate();\n        },\n\n        methods: {\n            // overlay动画\n            overlayAnimate (opacity) {\n                if (!this.hasOverley) {\n                    return;\n                }\n                const overlayEl = this.$refs.overlay;\n                if (!overlayEl) {\n                    return;\n                }\n                animation.transition(overlayEl, {\n                    styles: {\n                        opacity: opacity\n                    },\n                    duration: this.duration,\n                    timingFunction: 'ease-out',\n                    needLayout: false,\n                    delay: 0 //ms\n                });\n            },\n\n            setStyle () {\n                const baseCss = {\n                    height: this.height,\n                    width: this.width,\n                };\n                let style = Object.assign(this.getStyle().position, baseCss, this.styles);\n                this.popupStyles = style;\n            },\n\n            getStyle (xy) {\n                let style = {\n                    position: {},\n                    transform: '',\n                };\n                switch (this.position) {\n                    case 'top':\n                        style.transform = `translateY(${xy || this.height})`;\n                        style.position = {top:    '-' + this.height};\n                        break;\n                    case 'bottom':\n                        style.transform = `translateY(-${xy || this.height})`;\n                        style.position = {bottom: '-' + this.height};\n                        break;\n                    case 'left':\n                        style.transform = `translateX(${xy || this.width})`;\n                        style.position = {left:   '-' + this.width, top: '0px'};\n                        break;\n                    case 'right':\n                        style.transform = `translateX(-${xy || this.width})`;\n                        style.position = {right:  '-' + this.width, top: '0px'};\n                        break;\n                }\n                return style;\n            },\n\n            // popup动画\n            popupAnimate (xy) {\n                const popupEl = this.$refs.popup;\n                if (!popupEl) {\n                    return;\n                }\n                animation.transition(popupEl, {\n                    styles: {\n                        transform: this.getStyle(xy).transform,\n                        transformOrigin: 'center center'\n                    },\n                    duration: this.duration,\n                    timingFunction: 'ease-out',\n                    needLayout: false,\n                    delay: 0 //ms\n                });\n            },\n\n            hide (fn) {\n                // 如果是点击事件非函数调用\n                if (fn === 'event' && !this.closeOnClickMask) return;\n                const tm = setTimeout(()=> {\n                    this.$emit('wxChange', false);\n                    clearTimeout(tm);\n                    fn && fn !== 'event' && fn();\n                }, this.duration);\n                this.popupAnimate('0px');\n                this.overlayAnimate(0);\n            }\n        },\n        watch: {\n            visible () {\n                if (this.visible) {\n                    const tm = setTimeout(()=> {\n                        this.popupAnimate();\n                        this.overlayAnimate(1);\n                        clearTimeout(tm);\n                    }, 40);\n                }\n            }\n        },\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-switch[data-v-0eb8f05d] {\n    position: relative;\n    width: 1.38667rem;\n    height: 0.85333rem;\n    border-radius: 0.85333rem;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #ddd;\n    background-color: #d9d9d9;\n}\n.blk[data-v-0eb8f05d] {\n    position: absolute;\n    top: 0.06667rem;\n    left: 0px;\n    z-index: 100;\n    height: 0.69333rem;\n    width: 0.74667rem;\n    background-color: #fff;\n    border-radius: 0.69333rem;\n}\n.switch-core[data-v-0eb8f05d] {\n    position: absolute;\n    top: 0;\n    width: 1.36rem;\n    height: 0.82667rem;\n    background-color: #fdfdfd;\n    border-radius: 0.82667rem;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-switch/index.vue?448ea9e5"],"names":[],"mappings":";AASA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;IACA,0BAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAEA;IACA,mBAAA;IACA,gBAAA;IACA,UAAA;IACA,aAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,0BAAA;CACA;AAEA;IACA,mBAAA;IACA,OAAA;IACA,eAAA;IACA,mBAAA;IACA,0BAAA;IACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-switch\" \n        :style=\"{'background-color': checked ? checkedColor : '#d9d9d9'}\"\n        @click=\"handleClick\">\n        <text ref=\"switchCore\" class=\"switch-core\" :style=\"corestyle\"></text>\n        <text class=\"blk\" ref=\"blk\" :style=\"blkStyle\"></text> \n    </div>\n</template>\n<style scoped>\n    .wx-switch {\n        position: relative;\n        width: 104px;\n        height: 64px;\n        border-radius: 64px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: #ddd;\n        background-color: #d9d9d9;\n    }\n    \n    .blk {\n        position: absolute;\n        top: 5px;\n        left: 0px;\n        z-index: 100;\n        height: 52px;\n        width: 56px;\n        background-color: #fff;\n        border-radius: 52px;\n    }\n\n    .switch-core {\n        position: absolute;\n        top: 0;\n        width: 102px;\n        height: 62px;\n        background-color: #fdfdfd;\n        border-radius: 62px;\n    }\n\n</style>\n<script>\n    import mixins from '../utils/mixins';\n    const animation = weex.requireModule('animation');\n\n    export default {\n        mixins:[mixins],\n        props: {\n            value: {\n                type: Boolean,\n            },\n            disabled: {\n                type: Boolean,\n            },\n\n            checkedColor: {\n                type: String,\n                default: '#027FF3',\n            }\n        },\n\n        data () {\n            return {\n                checked: false,\n                blkStyle: {},\n                corestyle: {},\n            }\n        },\n\n        created () {\n            this.initStyle();\n        },\n\n        mounted () {\n            this.checked = this.value;\n            this.blkAnimation(true);\n            this.animation(true);\n        },\n\n        methods: {\n            handleClick (e) {\n                this.preventDefault(e);\n                if (this.disabled) return;\n                this.checked = !this.checked;\n                this.animation();\n                this.blkAnimation();\n            },\n\n            animation (isInit = false) {\n                let el = this.$refs.switchCore;\n                // 设置为0.1 解决奇怪的Y轴会覆盖点击问题\n                let s = this.checked ? '0.1' : '1';\n                animation.transition(el, {\n                    styles: {\n                        transform: `scale(${s})`\n                    },\n                    duration: isInit ? 0 : 300,\n                    timingFunction: 'linear',\n                    needLayout: false,\n                    delay: 0\n                });\n            },\n\n            blkAnimation (isInit = false) {\n                let el = this.$refs.blk;\n                let x = this.checked ? '42px' : '0px';\n                animation.transition(el, {\n                    styles: {\n                        transform: `translateX(${x})`\n                    },\n                    duration: isInit ? 0 : 300,\n                    timingFunction: 'linear',\n                    needLayout: false,\n                    delay: 0\n                }, () => {\n                    this.$emit('wxChange', this.checked);\n                    this.$emit('input', this.checked);\n                });\n            },\n\n            // android不支持阴影\n            initStyle () {\n                const platform = weex.config.env.platform.toLowerCase();\n                if (platform === 'android') {\n                    this.blkStyle = {\n                        'border-width': '1px',\n                        'border-style': 'solid',\n                        'border-color': '#d9d9d9',\n                    }\n                } else {\n                    this.blkStyle = {\n                        'box-shadow': '0 1px 3px rgba(0,0,0,.4)',\n                        top: '5px'\n                    }\n                    if (platform === 'web') {\n                        this.corestyle = {\n                            width: '100px',\n                            height: '60px',\n                            'border-radius': '60px',\n                        }\n                        this.blkStyle.top = '4px';\n                    }\n                }\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-cell[data-v-12f6cc8b] {\n    height: 1.33333rem;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n    background-color: #fff;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    /*padding-right: 20px;*/\n    /*padding-left: 20px;*/\n}\n.wx-text[data-v-12f6cc8b] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    font-size: 0.42667rem;\n}\n.icon[data-v-12f6cc8b] {\n    width: 0.53333rem;\n    height: 0.53333rem;\n    margin-right: 0.26667rem;\n}\n.right-arrow[data-v-12f6cc8b] {\n    width: 0.29333rem;\n    height: 0.29333rem;\n    border-bottom-width: 0.02667rem;\n    border-bottom-style: solid;\n    border-bottom-color: #979797;\n    border-right-width: 0.02667rem;\n    border-right-style: solid;\n    border-right-color: #979797;\n    margin-right: 0.05333rem;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-cell/index.vue?7b310bcd"],"names":[],"mappings":";AAWA;IACA,mBAAA;IACA,yBAAA;IACA,2BAAA;IACA,6BAAA;IACA,uBAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,wBAAA;IACA,uBAAA;CACA;AAEA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,sBAAA;CACA;AAEA;IACA,kBAAA;IACA,mBAAA;IACA,yBAAA;CACA;AAEA;IACA,kBAAA;IACA,mBAAA;IACA,gCAAA;IACA,2BAAA;IACA,6BAAA;IACA,+BAAA;IACA,0BAAA;IACA,4BAAA;IACA,yBAAA;IACA,kCAAA;YAAA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-cell\" @click=\"handleClick\" :style=\"cellStyles\">\n        <slot name=\"left\"></slot>\n        <image class=\"icon\" v-if=\"icon\" :src=\"icon\"></image>\n        <text :style=\"textStyles\" class=\"wx-text\">{{ text }}</text>\n        <!--<slot></slot>-->\n        <slot name=\"right\"></slot>\n        <div v-if=\"hasArrow\" class=\"right-arrow\"></div>\n    </div>\n</template>\n<style scoped>\n    .wx-cell {\n        height: 100px;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n        background-color: #fff;\n        flex-direction: row;\n        align-items: center;\n        /*padding-right: 20px;*/\n        /*padding-left: 20px;*/\n    }\n\n    .wx-text {\n        flex: 1;\n        font-size: 32px;\n    }\n\n    .icon {\n        width: 40px;\n        height: 40px;\n        margin-right: 20px;\n    }\n\n    .right-arrow {\n        width: 22px;\n        height: 22px;\n        border-bottom-width: 2px;\n        border-bottom-style: solid;\n        border-bottom-color: #979797;\n        border-right-width: 2px;\n        border-right-style: solid;\n        border-right-color: #979797;\n        margin-right: 4px;\n        transform: rotate(-45deg);\n    }\n\n</style>\n<script>\n    import mixins from '../utils/mixins'\n    export default {\n        mixins:[mixins],\n        props: {\n            width: {\n                type: String\n            },\n            height: {\n                type: String,\n                default: '100px'\n            },\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            text: {\n                type: String,\n                default: ''\n            },\n            icon: {\n                type: String,\n                default: ''\n            },\n            hasArrow: {\n                type: Boolean,\n                default: true\n            },\n            textColor: {\n                type: String,\n                default: '#ffffff'\n            },\n            textFontSize: {\n                type: String,\n                default: '32px'\n            }\n        },\n\n        data () {\n            return {\n                cellStyles: {},\n                textStyles: {},\n            }\n        },\n\n        created () {\n             this.setStyle();\n        },\n\n        methods: {\n            setStyle () {\n                const baseCss = {\n                    height: this.height,\n                    width: this.width,\n                };\n                this.cellStyles = Object.assign({}, this.styles, baseCss);\n                this.textStyles = {\n                    color: this.textColor,\n                    fontSize: this.textFontSize\n                };\n            },\n\n            handleClick (e) {\n                this.preventDefault(e);\n                this.$emit('wxClick', e);\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-header[data-v-158aff14] {\n    height: 1.33333rem;\n    background-color: #fff;\n}\n.bottom-border[data-v-158aff14] {\n    border-bottom-width: 1px;  \n    border-style: solid;  \n    border-color:  #DCDCDC;\n}\n.no-border[data-v-158aff14] {\n    border-bottom-width: 0px;\n}\n.header-arrow[data-v-158aff14] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    /*browser*/\n    z-index: 100;\n    width: 1.33333rem;\n    height: 1.33333rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.icon-arrow-left[data-v-158aff14] {\n    border-right-width:0.04rem;\n    border-right-style: solid;\n    border-right-color: #4676FF;\n    border-bottom-style: solid;\n    border-bottom-width: 0.04rem;  \n    border-bottom-color:  #4676FF; \n    -webkit-transform: rotate(135deg); \n            transform: rotate(135deg); \n    margin-left: 0.61333rem;\n}\n.header-title[data-v-158aff14] {\n    width: 10rem;\n    height: 1.33333rem;\n}\n.title[data-v-158aff14] {\n    width: 10rem;\n    font-size: 0.58667rem;\n    text-align: center;\n    color: #333333;\n    height: 1.33333rem;\n    line-height: 1.33333rem;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-header/index.vue?3e394dc4"],"names":[],"mappings":";AAqBA;IACA,mBAAA;IACA,uBAAA;CACA;AAEA;IACA,yBAAA;IACA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,yBAAA;CACA;AAEA;IACA,mBAAA;IACA,UAAA;IACA,SAAA;IACA,WAAA;IACA,aAAA;IACA,kBAAA;IACA,mBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AAEA;IACA,2BAAA;IACA,0BAAA;IACA,4BAAA;IACA,2BAAA;IACA,6BAAA;IACA,8BAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wBAAA;CACA;AAEA;IACA,aAAA;IACA,mBAAA;CACA;AAEA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,eAAA;IACA,mBAAA;IACA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-header\" :class=\"[hasBottom ? 'bottom-border': 'no-border']\">\n        <!-- default -->\n        <slot>\n            <div class=\"header-title\">\n                <text class=\"title\" :style=\"getTitleStyle()\">{{ text }}</text>\n            </div>\n            <div class=\"header-arrow\" \n                @click=\"handleClick\"\n                ref=\"arrow\" \n                v-if=\"hasBackIcon\">\n                <text :style=\"getArrowStyle()\" class=\"icon-arrow-left\"></text>\n            </div>\n        </slot>\n        <!-- customer slot layout 'left center right' -->\n        <slot name=\"header-left\"></slot>\n        <slot name=\"header-center\"></slot>\n        <slot name=\"header-right\"></slot>\n    </div>\n</template>\n<style scoped>\n    .wx-header {\n        height: 100px;\n        background-color: #fff;\n    }\n\n    .bottom-border {\n        border-bottom-width: 1px;  \n        border-style: solid;  \n        border-color:  #DCDCDC;  \n    }\n\n    .no-border {\n        border-bottom-width: 0px; \n    }\n\n    .header-arrow {\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        /*browser*/\n        z-index: 100;\n        width: 100px;\n        height: 100px;\n        justify-content: center;\n    }\n\n    .icon-arrow-left {\n        border-right-width:3px ;\n        border-right-style: solid;\n        border-right-color: #4676FF;\n        border-bottom-style: solid;\n        border-bottom-width: 3px;  \n        border-bottom-color:  #4676FF; \n        transform: rotate(135deg); \n        margin-left: 46px;\n    }\n\n    .header-title {\n        width: 750px;\n        height: 100px;\n    }\n\n    .title {\n        width: 750px;\n        font-size: 44px;\n        text-align: center;\n        color: #333333;\n        height: 100px;\n        line-height: 100px;\n    }\n    \n</style>\n<script>\n    import mixins from '../utils/mixins';\n    const animation = weex.requireModule('animation');\n    const navigator = weex.requireModule('navigator');\n\n    export default {\n        mixins:[mixins],\n        props: {\n            hasBackIcon: {\n                type: Boolean,\n                default: true\n            },\n            text: {\n                type: String,\n                default: ''\n            },\n            useDefaultBack: {\n                type: Boolean,\n                default: true\n            },\n            hasBottom: {\n                type: Boolean,\n                default: false\n            },\n\n            textColor: {\n                type: String,\n                default: '#333333'\n            },\n\n            textFontSize: {\n                type: String,\n                default: '44px'\n            },\n\n            arrowColor: {\n                type: String,\n                default: '#4676FF'\n            },\n\n            arrowSize: {\n                type: String,\n                default: '32px'\n            },\n        },\n\n        created () {\n\n        },\n\n        methods: {\n            getTitleStyle () {\n                return {\n                    color: this.textColor,\n                    'font-size': this.textFontSize,\n                };\n            },\n\n            getArrowStyle () {\n                return {\n                    'border-right-color': this.arrowColor,\n                    'border-bottom-color': this.arrowColor,\n                    width: this.arrowSize,\n                    height: this.arrowSize,\n                }\n            },\n\n            handleClick (e) {\n                this.preventDefault(e);\n                this.animated();\n            },\n\n            animated () {\n                const el = this.$refs.arrow;\n                animation.transition(el, {\n                    styles: {\n                        opacity: '0.5',\n                    },\n                    duration: 200,\n                    timingFunction: 'ease-in',\n                    needLayout: false,\n                    delay: 0\n                }, () => {\n                    if (this.useDefaultBack) {\n                        if (this.$router && this.$router.back) {\n                            this.$router.back();\n                        } else {\n                            navigator.pop({animated: 'true'});\n                        }\n                    } else {\n                        this.$emit('wxBack');\n                    }\n                });\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-actionsheet-mask[data-v-2a32de76] {\n    background-color: rgba(0, 0, 0, 0.4);\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    width: 10rem;\n    opacity: 0;\n}\n.wx-actionsheet-content[data-v-2a32de76] {\n    position: fixed;\n    width: 10rem;\n    left: 0;\n}\n.action-list[data-v-2a32de76] {\n    margin-bottom: 0.26667rem;\n    width: 9.46667rem;\n    margin-left: 0.26667rem;\n}\n.action-title[data-v-2a32de76] {\n    height: 1.22667rem;\n    width: 9.46667rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    background-color: #fff;\n}\n.action-item[data-v-2a32de76] {\n    height: 1.52rem;\n    width: 9.46667rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    background-color: #fff;\n}\n.bd-btm[data-v-2a32de76] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: rgba(77,77,77,0.78);\n}\n.cancel-button[data-v-2a32de76] {\n    height: 1.52rem;\n    width: 9.46667rem;\n    margin-left: 0.26667rem;\n}\n.c-grey[data-v-2a32de76] { color: #8F8E94;\n}\n.bold[data-v-2a32de76] { font-weight: bold;\n}\n.f26[data-v-2a32de76] { font-size: 0.34667rem;\n}\n.radius-24[data-v-2a32de76] {\n    border-radius: 0.32rem;\n}\n.radius-tl-24[data-v-2a32de76] { border-top-left-radius: 0.32rem;\n}\n.radius-tr-24[data-v-2a32de76] { border-top-right-radius: 0.32rem;\n}\n.radius-bl-24[data-v-2a32de76] { border-bottom-left-radius: 0.32rem;\n}\n.radius-br-24[data-v-2a32de76] { border-bottom-right-radius: 0.32rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-actionsheet/index.vue?4868676f"],"names":[],"mappings":";AAyOA;IACA,qCAAA;IACA,gBAAA;IACA,QAAA;IACA,UAAA;IACA,OAAA;IACA,aAAA;IACA,WAAA;CACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,QAAA;CACA;AAEA;IACA,0BAAA;IACA,kBAAA;IACA,wBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,yBAAA;IACA,2BAAA;IACA,yCAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;IACA,wBAAA;CACA;AAEA,2BAAA,eAAA;CAAA;AACA,yBAAA,kBAAA;CAAA;AAEA,wBAAA,sBAAA;CAAA;AAEA;IACA,uBAAA;CACA;AACA,iCAAA,gCAAA;CAAA;AACA,iCAAA,iCAAA;CAAA;AACA,iCAAA,mCAAA;CAAA;AACA,iCAAA,oCAAA;CAAA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-actionsheet\">\n        <div\n            class=\"wx-actionsheet-mask\"\n            v-if=\"showActionsheet\"\n            ref=\"sheetMask\"\n            @click=\"close\"></div>\n        <div\n            class=\"wx-actionsheet-content\"\n            v-if=\"showActionsheet\"\n            ref=\"sheetContent\"\n            :style=\"listStyle\">\n                <div class=\"action-list\">\n                    <div class=\"action-title bd-btm radius-tl-24 radius-tr-24\" v-if=\"titleText\">\n                        <text class=\"f26 c-grey\">{{titleText}}</text>\n                    </div>\n                    <div\n                        class=\"action-item\"\n                        v-for=\"(item, index) in actions\"\n                        :key=\"index\"\n                        :class=\"itemsClass(index)\"\n                        @click=\"itemClick(item, index)\">\n                        <text class=\"bold\" :style=\"actionStyle\">{{item.name}}</text>\n                    </div>\n                </div>\n            <div\n                class=\"action-item bd-btm cancel-button radius-24\"\n                v-if=\"cancelText\"\n                @click=\"cancel\">\n                <text :style=\"cancelStyle\">{{cancelText}}</text>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    const animation = weex.requireModule('animation');\n\n    export default {\n        props: {\n            value: {\n                type: Boolean,\n                default: false\n            },\n            closeOnClickMask: {\n                type: Boolean,\n                default: true\n            },\n            cancelText: {\n                type: String,\n                default: '取消'\n            },\n            titleText: {\n                type: String,\n                default: '标题'\n            },\n            actions: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n            },\n            actionColor: {\n                type: String,\n                default: '#0076FF'\n            },\n            cancelColor: {\n                type: String,\n                default: '#0076FF'\n            },\n            actionFontSize: {\n                type: String,\n                default: '40px'\n            },\n            cancelFontSize: {\n                type: String,\n                default: '40px'\n            }\n        },\n\n        data () {\n            return {\n                showActionsheet: false,\n                mbHeight: 20,\n                actionStyle: {},\n                cancelStyle: {},\n            }\n        },\n\n        computed: {\n            listStyle () {\n                const titleHeight = 92;\n                const itemHeight = 114;\n                const listHeight = this.actions.length * itemHeight;\n\n                let totalHeight = listHeight + this.mbHeight;\n                if (this.titleText) {\n                    totalHeight += titleHeight;\n                }\n                if (this.cancelText) {\n                    totalHeight += itemHeight + this.mbHeight;\n                }\n\n                const styleObj = { 'height': totalHeight+'px', 'bottom': '-'+ totalHeight + 'px'};\n\n                return styleObj;\n            }\n        },\n\n        created () {\n            this.setStyle();\n        },\n\n        methods: {\n            setStyle () {\n                this.actionStyle = Object.assign({}, {\n                                    'color': this.actionColor,\n                                    'font-size': this.actionFontSize\n                                });\n                this.cancelStyle = Object.assign({}, {\n                                    'color': this.cancelColor,\n                                    'font-size': this.cancelFontSize\n                                });\n\n            },\n\n            itemsClass (index) {\n                let classArray = [];\n\n                if (index === (this.actions.length-1)) {\n                    classArray.push('radius-bl-24');\n                    classArray.push('radius-br-24');\n                } else {\n                    classArray.push('bd-btm');\n                }\n\n                if (index === 0 && !this.titleText) {\n                    classArray.push('radius-tl-24');\n                    classArray.push('radius-tr-24');\n                }\n\n                return classArray;\n            },\n\n            close () {\n                if (!this.closeOnClickMask) {\n                    return;\n                }\n                this.hideSheet();\n            },\n\n            itemClick (item, index) {\n                if (item.method && typeof item.method === 'function') {\n                    item.method(item, index);\n                }\n                this.hideSheet();\n            },\n\n            cancel () {\n                this.hideSheet();\n            },\n\n            showSheet () {\n                this.displaySheetMask(true, () => {\n                    this.displaySheetContent(true);\n                });\n            },\n\n            hideSheet() {\n                this.displaySheetContent(false, () => {\n                    this.displaySheetMask(false, () => {\n                        this.showActionsheet = false;\n                    });\n                });\n            },\n\n            displaySheetMask (isShow, callback) {\n                const maskEl = this.$refs.sheetMask;\n                if (!maskEl) {\n                    return;\n                }\n\n                const styles = isShow ? { opacity: 1 } : { opacity: 0 };\n\n                animation.transition(maskEl, {\n                    styles: styles,\n                    duration: 150,\n                }, function () {\n                    typeof callback === 'function' && callback();\n                });\n            },\n\n            displaySheetContent (isShow, callback) {\n                const contentEl = this.$refs.sheetContent;\n                if (!contentEl) {\n                    return;\n                }\n\n                const styles = isShow ?\n                                { transform: 'translate(0, -100%)' } :\n                                { transform: 'translate(0, 100%)' };\n                const timingF = isShow ? 'ease' : 'ease-out';\n                const duration = isShow ? 150 : 300;\n\n                animation.transition(contentEl, {\n                    styles: styles,\n                    duration: duration,\n                    timingFunction: timingF,\n                }, function () {\n                    typeof callback === 'function' && callback();\n                });\n            }\n        },\n\n        watch: {\n            value(val) {\n                if (val) {\n                    this.showActionsheet = val;\n                    const timer = setTimeout(() => {\n                        this.showSheet();\n                        clearTimeout(timer);\n                    }, 40);\n                }\n            },\n\n            showActionsheet (val) {\n                !val && this.$emit('input', val);\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    .wx-actionsheet-mask {\n        background-color: rgba(0, 0, 0, 0.4);\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        top: 0;\n        width: 750px;\n        opacity: 0;\n    }\n\n    .wx-actionsheet-content {\n        position: fixed;\n        width: 750px;\n        left: 0;\n    }\n\n    .action-list {\n        margin-bottom: 20px;\n        width: 710px;\n        margin-left: 20px;\n    }\n\n    .action-title {\n        height: 92px;\n        width: 710px;\n        justify-content: center;\n        align-items: center;\n        background-color: #fff;\n    }\n\n    .action-item {\n        height: 114px;\n        width: 710px;\n        justify-content: center;\n        align-items: center;\n        background-color: #fff;\n    }\n\n    .bd-btm {\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: rgba(77,77,77,0.78);\n    }\n\n    .cancel-button {\n        height: 114px;\n        width: 710px;\n        margin-left: 20px;\n    }\n\n    .c-grey { color: #8F8E94; }\n    .bold { font-weight: bold; }\n\n    .f26 { font-size: 26px; }\n\n    .radius-24 {\n        border-radius: 24px;\n    }\n    .radius-tl-24 { border-top-left-radius: 24px; }\n    .radius-tr-24 { border-top-right-radius: 24px; }\n    .radius-bl-24 { border-bottom-left-radius: 24px; }\n    .radius-br-24 { border-bottom-right-radius: 24px; }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-scroller[data-v-2c7a5726] {\n}\n.scroller-bottom-border[data-v-2c7a5726] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n}\n.wx-cell[data-v-2c7a5726] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.wx-text[data-v-2c7a5726] {\n    color: #4d4d4d;\n    font-size: 0.42667rem;\n}\n.selected-border[data-v-2c7a5726] {\n    border-bottom-width: 0.02667rem;\n    border-bottom-style: solid;\n}\n.select-cell[data-v-2c7a5726] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    background-color: #ffffff;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-scrollerbar/index.vue?2781fd98"],"names":[],"mappings":";AAsMA;CAEA;AAEA;IACA,yBAAA;IACA,2BAAA;IACA,6BAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,eAAA;IACA,sBAAA;CACA;AAEA;IACA,gCAAA;IACA,2BAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <scroller class=\"wx-scroller\"\n        :scroll-direction=\"scrollDirection\"\n        :style=\"scrollStyle\" show-scrollbar=\"false\">\n        <div\n            :style=\"getItemStyle(item)\"\n            :class=\"[hasBottom ? 'scroller-bottom-border' : '', selectIndex == index ? 'select-cell' : 'wx-cell']\"\n            :ref=\"'item'+index\"\n            v-for=\"(item, index) in items\" @click=\"changeTab(index)\">\n            <text \n                :style=\"getTitleStyle(item)\"\n                :class=\"[selectIndex == index && hasSelectedBottom ? 'selected-border' : '']\"\n                class=\"wx-text\">{{ item.title || item }}</text>\n        </div>\n    </scroller>\n</template>\n<script>\n    const dom = weex.requireModule('dom');\n\n    export default {\n        props: {\n            // {\n            //     index: i,\n            //     title: list[i].toString().substring(4) + '月',  \n            //     titleColor: '#4d4d4d', \n            //     selectedColor: 'blue',\n            //     titleSize: '32px',\n            //     selected: false,\n            //     bgColor: '#969696', \n            //     selectedBgColor: '#fff',\n            // }\n            items: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n                required: true\n            },\n            wxChange: {\n                type: Function,\n                required: true\n            },\n\n            hasBottom: {\n                type: Boolean,\n                default: false\n            },\n\n            hasSelectedBottom: {\n                type: Boolean,\n                default: false\n            },\n\n            height: {\n                type: String,\n                default: '700px'\n            },\n\n            itemWidth: {\n                type: String,\n                default: '250px'\n            },\n            itemHeight: {\n                type: String,\n                default: '100px'\n            },\n\n            scrollDirection: {\n                type: String,\n                default: 'vertical'\n            },\n        },\n\n        data () {\n            return {\n                selectIndex: 0,\n                count: 0,\n                scrollStyle: {},\n                data: {\n                    // parent height child height\n                    pheight: 0,\n                    cwidth: 0,\n                    cheight: 0,\n                },\n                hiddenCount: 0,\n                maxHidden: 0,\n            }\n        },\n\n        created () {\n            let isVertical = this.getIsVertical();\n            this.scrollStyle = {\n                width: isVertical ? this.itemWidth : '750px', \n                height: this.height,\n                'flex-direction': isVertical ? 'column' : 'row'\n            }\n            this.getData();\n            // this.deviceHeight = weex.config.env.deviceHeight\n            this.getCount()\n            // 最大隐藏个数（共37条，一页10条，能隐藏37-10=27条）\n            this.maxHidden = this.items.length - this.count;\n        },\n\n        mounted () {\n            this.changeTab(this.getSelectIndex(), false);\n        },\n\n        methods: {\n\n            getData () {\n                this.data = {\n                    pheight: Number(this.height.replace('px', '')),\n                    cwidth: Number(this.itemWidth.replace('px', '')),\n                    cheight: Number(this.itemHeight.replace('px', ''))\n                };\n            },\n\n            getSelectIndex() {\n                const item = this.items.find(el => el.selected) || this.items[0]\n                return item.index\n            },\n\n            getCount () {\n                if (this.getIsVertical()) {\n                    this.count = Math.floor(this.data.pheight / this.data.cheight);\n                } else {\n                    this.count = Math.floor(750 / this.data.cwidth);\n                }\n            },\n\n            getIsVertical () {\n                return this.scrollDirection === 'vertical';\n            },\n\n            changeTab (index, animated = true) {\n                this.selectIndex = index;\n                if(index){\n                    const middle = Math.floor(this.count / 2);\n                    if (index >= middle) {\n                        this.hiddenCount = index - middle;\n                        this.hiddenCount = this.getCanMoves();\n                        this.scrollTo(-this.hiddenCount * this.data.cheight, animated);\n                    } else {\n                        this.hiddenCount = 0;\n                        this.scrollTo(0, animated);\n                    }\n                    this.items.forEach(item => {\n                        item.selected = false;\n                    });\n                    this.items[index].selected = true;\n                }\n                this.$emit('wxChange', this.items[index]);\n            },\n\n            /**\n             * 获取能移动多少条，不能超过总条数\n             */\n            getCanMoves () {\n                const bool = this.hiddenCount > this.maxHidden;\n                return bool ? this.maxHidden : this.hiddenCount;\n            },\n\n            scrollTo(elHeight, animated){\n                const index = elHeight / this.data.cheight;\n                if (index > 0) {\n                    const itemStr = 'item' + (this.items.length - index);\n                    const el = this.$refs[itemStr][0];\n                    dom.scrollToElement(el, {animated});\n                } else {\n                    const itemStr = 'item' + (0 - index);\n                    const el = this.$refs[itemStr][0];\n                    dom.scrollToElement(el, {animated});\n                }\n            },\n\n            getItemStyle (item) {\n                const bgColor = (this.selectIndex === item.index ? item.selectedBgColor : item.bgColor) || '#fff';\n                return {\n                    width: this.itemWidth, \n                    height: this.itemHeight,\n                    'background-color': bgColor,\n                }\n            },\n\n            getTitleStyle (item) {\n                const color = (this.selectIndex === item.index ? item.selectedColor : item.titleColor) || '#4d4d4d';\n                return {\n                    color: color,\n                    height: this.itemHeight,\n                    'line-height': this.itemHeight,\n                    'font-size': item.titleSize || '32px',\n                    'border-bottom-color': color\n                }\n            },\n        }\n    }\n</script>\n<style scoped>\n    .wx-scroller {\n\n    }\n\n    .scroller-bottom-border {\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n    }\n\n    .wx-cell {\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .wx-text {\n        color: #4d4d4d;\n        font-size: 32px;\n    }\n\n    .selected-border {\n        border-bottom-width: 2px;\n        border-bottom-style: solid;\n    }\n\n    .select-cell {\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        background-color: #ffffff;\n    }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-dialog[data-v-3195ad71] {\n    background-color: rgba(0,0,0,0.35);\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    width: 10rem;\n    opacity: 0;\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.opacityFull[data-v-3195ad71] { opacity: 1;\n}\n.dialog-content[data-v-3195ad71] {\n    width: 7.65333rem;\n    background-color: #fff;\n    border-radius: 0.08rem;\n}\n.dialog-default[data-v-3195ad71] {\n    width: 7.65333rem;\n    background-color: #fff;\n    border-radius: 0.08rem;\n}\n.dialog-footer[data-v-3195ad71] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    height: 1.06667rem;\n    border-top-width: 1px;\n    border-top-style: solid;\n    border-top-color: #DEDEDE;\n}\n.flex-1[data-v-3195ad71] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    height: 1.06667rem;\n    font-size: 0.48rem;\n    line-height: 1.06667rem;\n    text-align: center;\n    color: #4d4d4d;\n}\n.btn-cancel[data-v-3195ad71] {\n    border-right-width: 1px;\n    border-right-style: solid;\n    border-right-color: #DEDEDE;\n    color: #7A818B;\n    font-size: 0.48rem;\n}\n.btn-confirm[data-v-3195ad71] {\n    color: #4676FF;\n    font-size: 0.48rem;\n}\n.title[data-v-3195ad71] {\n    width: 7.65333rem;\n    font-size: 0.53333rem;\n    color: #7A818B;\n    text-align: center;\n    padding-top: 1.28rem;\n    padding-bottom: 1.01333rem;\n    padding-left: 0.53333rem;\n    padding-right: 0.53333rem;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-dialog/index.vue?87d76c0c"],"names":[],"mappings":";AAwIA;IACA,mCAAA;IACA,gBAAA;IACA,QAAA;IACA,UAAA;IACA,OAAA;IACA,aAAA;IACA,WAAA;IACA,iBAAA;IACA,6BAAA;IAAA,8BAAA;IAAA,+BAAA;YAAA,uBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA,gCAAA,WAAA;CAAA;AAEA;IACA,kBAAA;IACA,uBAAA;IACA,uBAAA;CACA;AAEA;IACA,kBAAA;IACA,uBAAA;IACA,uBAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,mBAAA;IACA,sBAAA;IACA,wBAAA;IACA,0BAAA;CACA;AAEA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,mBAAA;IACA,mBAAA;IACA,wBAAA;IACA,mBAAA;IACA,eAAA;CACA;AAEA;IACA,wBAAA;IACA,0BAAA;IACA,4BAAA;IACA,eAAA;IACA,mBAAA;CACA;AAEA;IACA,eAAA;IACA,mBAAA;CACA;AAEA;IACA,kBAAA;IACA,sBAAA;IACA,eAAA;IACA,mBAAA;IACA,qBAAA;IACA,2BAAA;IACA,yBAAA;IACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-dialog\" ref=\"dialog\" v-if=\"visible\"\n         :class=\"[useDefaultFooter ? '' : 'opacityFull']\" @click=\"preventDefault\">\n        <div class=\"dialog-content\" :style=\"dialogContentStyles\">\n            <slot name=\"dialog-header\"></slot>\n            <slot name=\"dialog-body\"></slot>\n            <slot name=\"dialog-footer\"></slot>\n            <!-- 默认布局 -->\n            <div class=\"dialog-default\" v-if=\"useDefaultFooter\">\n                <text class=\"title\" v-if=\"title\">{{ title }}</text>\n                <div class=\"dialog-footer\">\n                    <text class=\"flex-1 btn-cancel\" @click=\"cancel\">{{ cancelLabel }}</text>\n                    <text class=\"flex-1 btn-confirm\" @click=\"confirm\">{{ confirmLabel }}</text>\n                </div>\n            </div>\n        </div>\n        <!--添加dialog区域外布局-->\n        <slot name=\"dialog-outer\"></slot>\n    </div>\n</template>\n<script>\n    const animation = weex.requireModule('animation');\n    import mixins from '../utils/mixins'\n\n    export default {\n        mixins:[mixins],\n        props: {\n            visible: {\n                type: Boolean,\n                required: true,\n                default: false\n            },\n\n            width: {\n                type: String,\n                default: '574px'\n            },\n\n            cancelLabel: {\n                type: String,\n                default: '取消'\n            },\n            confirmLabel: {\n                type: String,\n                default: '确定'\n            },\n            useDefaultFooter: {\n                type: Boolean,\n                default: true\n            },\n\n            title: {\n                type: String,\n                default: ''\n            },\n\n            clickConfirmHide:  {\n                type: Boolean,\n                default: true\n            },\n        },\n\n        created () {\n            this.setStyles()\n        },\n\n        methods: {\n            setStyles(){\n                let baseCss = {\n                    width: this.width\n                }\n                this.dialogContentStyles = Object.assign({}, baseCss)\n            },\n            cancel (e) {\n                this.preventDefault(e);\n                if (this.useDefaultFooter) {\n                    this.hideDialog(() => {\n                        this.$emit('cancel');\n                    });\n                    return;\n                }\n\n                this.$emit('cancel');\n            },\n\n            confirm (e) {\n                this.preventDefault(e);\n                if (this.useDefaultFooter && this.clickConfirmHide) {\n                    this.hideDialog(() => {\n                        this.$emit('confirm');\n                    });\n                    return;\n                }\n\n                this.$emit('confirm');\n            },\n\n            hideDialog (callback) {\n                const timer = setTimeout(() => {\n                    this.displayDialog(false, callback);\n                    clearTimeout(timer);\n                }, 40);\n            },\n\n            showDialog () {\n                const timer = setTimeout(() => {\n                    this.displayDialog(true);\n                    clearTimeout(timer);\n                }, 40);\n            },\n\n            displayDialog (isShow, callback) {\n                const dialogEl = this.$refs.dialog;\n                if (!dialogEl) {\n                    return;\n                }\n                const styles = isShow ? { opacity: 1 } : { opacity: 0 };\n                animation.transition(dialogEl, {\n                    styles: styles,\n                    duration: 200,\n                }, function () {\n                    typeof callback === 'function' && callback();\n                });\n            }\n        },\n\n        watch: {\n            visible () {\n                if (this.visible) {\n                    this.showDialog();\n                }\n            }\n        }\n    }\n</script>\n<style scoped type=\"text/css\">\n    .wx-dialog {\n        background-color: rgba(0,0,0,0.35);\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        top: 0;\n        width: 750px;\n        opacity: 0;\n        overflow: hidden;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .opacityFull { opacity: 1; }\n\n    .dialog-content {\n        width: 574px;\n        background-color: #fff;\n        border-radius: 6px;\n    }\n\n    .dialog-default {\n        width: 574px;\n        background-color: #fff;\n        border-radius: 6px;\n    }\n\n    .dialog-footer {\n        flex-direction: row;\n        height: 80px;\n        border-top-width: 1px;\n        border-top-style: solid;\n        border-top-color: #DEDEDE;\n    }\n\n    .flex-1 {\n        flex: 1;\n        height: 80px;\n        font-size: 36px;\n        line-height: 80px;\n        text-align: center;\n        color: #4d4d4d;\n    }\n\n    .btn-cancel {\n        border-right-width: 1px;\n        border-right-style: solid;\n        border-right-color: #DEDEDE;\n        color: #7A818B;\n        font-size: 36px;\n    }\n\n    .btn-confirm {\n        color: #4676FF;\n        font-size: 36px;\n    }\n\n    .title {\n        width: 574px;\n        font-size: 40px;\n        color: #7A818B;\n        text-align: center;\n        padding-top: 96px;\n        padding-bottom: 76px;\n        padding-left: 40px;\n        padding-right: 40px;\n    }\n\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-radio-items[data-v-35b82088] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n}\n.wx-radio-item[data-v-35b82088] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.wx-radio-label-right[data-v-35b82088] {\n    padding-right: 0.13333rem;\n}\n.wx-radio-label-left[data-v-35b82088] {\n    padding-left: 0.13333rem;\n}\n.wx-radio[data-v-35b82088] {\n    position: relative;\n    border-radius: 0.53333rem;\n}\n.wx-radio-checked[data-v-35b82088] {\n    border-width: 0px;\n}\n.wx-radio-nochecked[data-v-35b82088] {\n    background-color: #fff;\n    border-width: 0.02667rem;\n    border-style: solid;\n    border-color: #ddd;\n}\n.checked[data-v-35b82088] {\n    background-color: #fff;\n    position: absolute;\n    z-index: 100;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-radio/index.vue?1b85b558"],"names":[],"mappings":";AAiBA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,uCAAA;YAAA,+BAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,yBAAA;CACA;AAEA;IACA,mBAAA;IACA,0BAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,uBAAA;IACA,yBAAA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-radio-items\" :style=\"{'flex-direction': direction, 'width': width}\">\n        <div class=\"wx-radio-item\" \n            v-for=\"item in options\" \n            :style=\"rowStyle\"\n            @click=\"handleClick(item)\">\n            <text :style=\"textStyles\" v-if=\"align === 'left'\" class=\"wx-radio-label-right\">{{ item.title }}</text>\n            <div class=\"wx-radio\"\n                :style=\"getRadioStyle(item)\"\n                :class=\"[item.checked ? 'wx-radio-checked' : 'wx-radio-nochecked']\">\n                <text v-if=\"item.checked\" :style=\"checkedStyle\" class=\"checked\"></text>\n            </div>\n            <text :style=\"textStyles\" v-if=\"align === 'right'\" class=\"wx-radio-label-left\">{{ item.title }}</text>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-radio-items {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n\n    .wx-radio-item {\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .wx-radio-label-right {\n        padding-right: 10px;\n    }\n\n    .wx-radio-label-left {\n        padding-left: 10px;\n    }\n\n    .wx-radio {\n        position: relative;\n        border-radius: 40px;\n    }\n\n    .wx-radio-checked {\n        border-width: 0px;\n    }\n\n    .wx-radio-nochecked {\n        background-color: #fff;\n        border-width: 2px;\n        border-style: solid;\n        border-color: #ddd;\n    }\n\n    .checked {\n        background-color: #fff;\n        position: absolute;\n        z-index: 100;\n    }\n\n</style>\n<script>\n    export default {\n        props: {\n            width: {\n                type: String,\n                default: '750px'\n            },\n            size: {\n                type: String,\n                default: '44px'\n            },\n            align: {\n                type: String,\n                default: 'left'\n            },\n            direction: {\n                type: String,\n                default: 'row'\n            },\n            options: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n                required: true\n            },\n            value: {\n                type: Object,\n                required: true\n            },\n            checkedColor: {\n                type: String,\n                default: '#027FF3'\n            },\n            textColor: {\n                type: String,\n                default: '#4D4D4D'\n            },\n            textFontSize: {\n                type: String,\n                default: '32px'\n            }\n        },\n\n        data () {\n            return {\n                checkedStyle: {},\n                textStyles: {},\n                rowStyle: {},\n            }\n        },\n\n        created () {\n            this.setCheckedStyle();\n            this.setTextStyle();\n            this.setRowStyle();\n            this.initChecked();\n        },\n\n        methods: {\n            setTextStyle () {\n                this.textStyles = {\n                    color: this.textColor,\n                    fontSize: this.textFontSize\n                };\n            },\n\n            setRowStyle () {\n                if (this.direction === 'column') {\n                    this.rowStyle = { \n                        'width': this.width,\n                        'justify-content': 'space-between',\n                        'padding-top': '24px',\n                        'padding-bottom': '24px',\n                        'padding-left': '40px',\n                        'padding-right': '40px',\n                    }\n                }\n            },\n\n            setCheckedStyle () {\n                const value = Number(this.size.replace('px', '')) / 2;\n                const size = value + 'px';\n                this.checkedStyle = {\n                    height: size,\n                    width: size,\n                    'border-radius': size,\n                    top: value / 2 + 'px',\n                    left: value / 2 + 'px',\n                };\n            },\n\n            getRadioStyle (item) {\n                const style = {\n                    height: this.size,\n                    width: this.size,\n                    'border-radius': this.size,\n                    'background-color': item.checked ? this.checkedColor : '#fff',\n                };\n                if (item.disabled) {\n                    style['background-color'] = '#d9d9d9';\n                }\n                return style;\n            },\n\n            initChecked () {\n                this.options.forEach(item => {\n                    if (item.checked) {\n                        this.$emit('wxChange', item.value);\n                        this.$emit('input', item.value);\n                    }\n                });\n            },\n\n            handleClick (item) {\n                if (item.checked || item.disabled) return;\n                this.options.forEach(el => {\n                    el.checked = false;\n                });\n                item.checked = true;\n                this.$emit('wxChange', item.value);\n                this.$emit('input', item.value);\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-checkbox-list[data-v-3ca56eb5] {\n}\n.cell[data-v-3ca56eb5] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-checkbox-list/index.vue?54f01a17"],"names":[],"mappings":";AAiBA;CAEA;AACA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,uCAAA;YAAA,+BAAA;IACA,yBAAA;IACA,2BAAA;IACA,6BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-checkbox-list\" :style=\"{width: width}\">\n        <div class=\"cell\"  \n            :style=\"{width: width, height: height}\"\n            v-for=\"item in options\" @click=\"handleClick(item)\">\n            <text class=\"wx-text\" :style=\"{'padding-left': padding}\">{{ item.title }}</text>\n            <wx-checkbox\n                 :style=\"{'padding-right': padding}\"\n                class=\"checkbox\"\n                :disabled=\"item.disabled\"\n                v-model=\"item.checked\"\n                :checkedColor=\"checkedColor\">\n            </wx-checkbox>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-checkbox-list {\n\n    }\n    .cell {\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n    }\n\n</style>\n<script>\n    import mixins from '../utils/mixins';\n    import WxCheckbox from '../wx-checkbox'\n\n    export default {\n        mixins:[mixins],\n        props: {\n            options: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n                required: true\n            },\n            value: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n                required: true\n            },\n            width: {\n                width: String,\n                default: '750px'\n            },\n            height: {\n                width: String,\n                default: '100px'\n            },\n            padding: {\n                width: String,\n                default: '20px'\n            },\n            checkedColor: {\n                width: String,\n                default: '#027FF3'\n            },\n        },\n\n        created () {\n            this.fire();\n        },\n\n        methods: {\n            handleClick (item) {\n                if (item.disabled) return;\n                item.checked = !item.checked;\n                this.fire();             \n            },\n\n            fire () {\n                const list = [];\n                this.options.forEach(item => item.checked && list.push(item.value));\n                this.$emit('input', list);\n                this.$emit('wxChange', list);\n            }\n        },\n        components: { WxCheckbox }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-tabbar[data-v-629cf239] {\n    background-color: #fff;\n}\n.tab-component[data-v-629cf239] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    background-color: #fff;\n}\n.tabbar[data-v-629cf239] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    background-color: #fff;\n}\n.tabbar-item[data-v-629cf239] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.wx-title[data-v-629cf239] {\n    text-align: center;\n    font-size: 0.42667rem;\n}\n.selected[data-v-629cf239] {\n    /*font-weight: bold;*/\n}\n.noselected[data-v-629cf239] {\n    /*font-weight: normal;*/\n}\n.bottom-1[data-v-629cf239] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: red;\n}\n.nobottom[data-v-629cf239] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #fff;\n}\n.has-bottom-1[data-v-629cf239] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n}\n.no-bottom-1[data-v-629cf239] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #fff;\n}\n.line[data-v-629cf239] {\n    height: 0.02667rem;\n    position: absolute;\n    left: 0;\n    z-index: 100;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-navbar/index.vue?320f41d3"],"names":[],"mappings":";AAuBA;IACA,uBAAA;CACA;AACA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AAEA;IACA,mBAAA;IACA,sBAAA;CACA;AAEA;IACA,sBAAA;CACA;AAEA;IACA,wBAAA;CACA;AAEA;IACA,yBAAA;IACA,2BAAA;IACA,yBAAA;CACA;AACA;IACA,yBAAA;IACA,2BAAA;IACA,0BAAA;CACA;AAEA;IACA,yBAAA;IACA,2BAAA;IACA,6BAAA;CACA;AAEA;IACA,yBAAA;IACA,2BAAA;IACA,0BAAA;CACA;AAEA;IACA,mBAAA;IACA,mBAAA;IACA,QAAA;IACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-tabbar\"  :style=\"{width: this.width}\">\n        <div class=\"tabbar\" :style=\"{width: this.width, height: this.height}\">\n            <div class=\"tabbar-item\" \n                :class=\"[hasBottom ? 'has-bottom-1' : 'no-bottom-1']\"\n                v-for=\"item in tabItems\" \n                @click=\"changeTab(item)\">\n                <text \n                    :style=\"getTitleStyle(item)\"\n                    :class=\"[selectedTab.index === item.index ? 'selected' : 'noselected']\"\n                    class=\"wx-title\">{{ item.title }}</text>\n            </div>\n        </div>\n        <div v-if=\"!vif\" class=\"tab-component\" :style=\"{'transform': translateX, width: contentTotalWidth + 'px'}\">\n            <slot></slot>\n        </div>\n        <div v-if=\"vif\">\n            <slot></slot>\n        </div>\n        <text class=\"line\" ref=\"selectedLine\" :style=\"defaultLineStyle\"></text>\n    </div>\n</template>\n<style scoped>\n    .wx-tabbar {\n        background-color: #fff;\n    }\n    .tab-component {\n        flex-direction: row;\n        background-color: #fff;\n    }   \n\n    .tabbar {\n        flex-direction: row;\n        background-color: #fff;\n    }\n\n    .tabbar-item {\n        flex: 1;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .wx-title {\n        text-align: center;\n        font-size: 32px;\n    }\n\n    .selected {\n        /*font-weight: bold;*/\n    }\n\n    .noselected {\n        /*font-weight: normal;*/\n    }\n\n    .bottom-1 {\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: red;\n    }\n    .nobottom {\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #fff;\n    }\n\n    .has-bottom-1 {\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n    }\n\n    .no-bottom-1 {\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #fff;\n    }\n\n    .line {\n        height: 2px;\n        position: absolute;\n        left: 0;\n        z-index: 100;\n    }\n\n</style>\n<script>\n    import mixins from '../utils/mixins';\n    const animation = weex.requireModule('animation');\n\n    export default {\n        mixins:[mixins],\n        props: {\n            // titleColor默认4D4D4D，titleSize默认32px\n            tabItems: {\n                type: Array,\n                default: function () {\n                    return []\n                },\n                required: true\n            },\n\n            vif: {\n                type: Boolean,\n                default: false\n            },\n            // navbar整体宽度\n            width: {\n                type: String,\n                default: '750px'\n            },\n\n            // navbar整体高度\n            height: {\n                type: String,\n                default: '80px'\n            },\n\n            hasBottom: {\n                type: Boolean,\n                default: true\n            },\n\n            animated: {\n                type: Boolean,\n                default: true\n            },\n\n            lineStyle: {\n                default: function () {\n                    return {\n                        \n                    }\n                },\n            },\n        },\n\n        data () {\n            return {\n                selectedTab: {index: 0},\n                translateX: 'translateX(0px)',\n                // navbar宽度，该值等于prop width值 \n                barWidth: 750,\n                left: 0,\n                defaultLineStyle: {\n                    width: '120px',\n                    'background-color': '#4676FF',\n                },\n            }\n        },\n\n        created () {\n            // 计算宽度\n            this.barWidth = Number(this.width.replace('px', ''));\n            // 不适用vif\n            if (!this.vif) {\n                this.contentTotalWidth = 750 * this.tabItems.length;\n                this.setTranslateX();\n            }\n            // 添加pos属性，提供偏移动画适用\n            this.tabItems.forEach((item, index) => {\n                const pos =  this.barWidth / this.tabItems.length * index;\n                item.pos = pos;\n            });\n            // 初始化line style\n            this.setLineStyle();\n        },\n\n        methods: {\n\n            setLineStyle () {\n                const style = {\n                    top: Number(this.height.replace('px', '')) - 2 + 'px',\n                    left: this.getLeft() + 'px'\n                }\n                this.defaultLineStyle = Object.assign(style, this.defaultLineStyle, this.lineStyle);\n            },\n\n            /**\n             * 获得第一个距离左侧left值\n             * @return {Number}\n             */\n            getLeft () {\n                let lineWidth = this.lineStyle.width || this.defaultLineStyle.width\n                const width = Number(lineWidth.replace('px', ''));\n                return (this.barWidth / this.tabItems.length - width) / 2;\n            },\n\n            changeTab (item) {\n               if (item.index === this.selectedTab.index && (!item.hasOwnProperty('multipleTrigger') || !item['multipleTrigger'])) {\n                    return;\n               }\n               this.$emit('wxChange', item);\n               const transform = `translateX(${this.tabItems[item.index].pos}px)`\n               this.offsetPos(transform);\n               this.selectedTab = item;\n               this.setTranslateX();\n            },\n\n            setTranslateX () {\n                const x = this.selectedTab.index * 750;\n                this.translateX = `translateX(-${x}px)`;\n            },\n\n            // 设置偏移位置（是否带动画）\n            offsetPos (transform) {\n                if (this.animated) {\n                    this.lineAnimate(transform);\n                } else {\n                    this.setLineStyle();\n                }\n            },\n\n            // 选中线的动画\n            lineAnimate (transform) {\n                const selectedLineEl = this.$refs.selectedLine;\n                if (!selectedLineEl) {\n                    return;\n                }\n                animation.transition(selectedLineEl, {\n                    styles: {\n                        transform: transform,\n                        transformOrigin: 'center center'\n                    },\n                    duration: 300,\n                    timingFunction: 'ease-out',\n                    needLayout: false,\n                    delay: 0 //ms\n                });\n            },\n\n            getTitleStyle (item) {\n                return {\n                    color: this.selectedTab.index === item.index ? (item.selectedColor || '#4676FF') :(item.titleColor) || '#7A818B', \n                    'font-size': item.titleSize || '32px'\n                };\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-picker-wrapper {\n    overflow: hidden;\n    background-color: #fff;\n}\n.wx-picker {\n    overflow: hidden;\n    background-color: #fff;\n    height: 5.76rem;\n}\n.wrapper {\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    background-color: #fff;\n    margin-top: 0.42667rem;\n}\n.picker-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    text-align: center;\n    line-height: 0.96rem;\n    background-color: #fff;\n    height: 0.96rem;\n    color: #999;\n    font-size: 0.42667rem;\n}\n.picker-item-selected {\n    color: #000;\n}\n.picker-center {\n    width: 10rem;\n    height: 0.96rem;\n    border-top-width: 1px;\n    border-top-style: solid;\n    border-top-color: #DCDCDC;\n\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n    position: absolute;\n    top: 2.34667rem;\n    left: 0;\n    z-index: 100;\n    width: 750px;\n    /*margin-top: -36px;*/\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-picker/index.vue?49a26e85"],"names":[],"mappings":";AAeA;IACA,iBAAA;IACA,uBAAA;CACA;AAEA;IACA,iBAAA;IACA,uBAAA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;IACA,6BAAA;IAAA,8BAAA;IAAA,+BAAA;YAAA,uBAAA;IACA,uBAAA;IACA,uBAAA;CACA;AAEA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,mBAAA;IACA,qBAAA;IACA,uBAAA;IACA,gBAAA;IACA,YAAA;IACA,sBAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,aAAA;IACA,gBAAA;IACA,sBAAA;IACA,wBAAA;IACA,0BAAA;;IAEA,yBAAA;IACA,2BAAA;IACA,6BAAA;IACA,mBAAA;IACA,gBAAA;IACA,QAAA;IACA,aAAA;IACA,aAAA;IACA,sBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-picker-wrapper\" v-if=\"visible\" @touchstart=\"preventDefault\">\n        <div class=\"wx-picker\" @panstart=\"ontouchstart\" @panend=\"ontouchend\" @panmove=\"ontouchmove\" >\n            <div class=\"wrapper\" ref=\"wrapper\">\n                <text \n                    class=\"picker-item\"\n                    :class=\"[getSelectedClass(index)]\"\n                    v-for=\"(item, index) in data.list\">{{item.name || item}}</text>\n            </div>\n            <text class=\"picker-center\"></text>\n        </div>\n    </div>\n</template>\n<style>\n\n    .wx-picker-wrapper {\n        overflow: hidden;\n        background-color: #fff;\n    }\n\n    .wx-picker {\n        overflow: hidden;\n        background-color: #fff;\n        height: 432px;\n    }\n\n    .wrapper {\n        overflow: hidden;\n        flex-direction: column;\n        background-color: #fff;\n        margin-top: 32px;\n    }\n\n    .picker-item {\n        flex: 1;\n        text-align: center;\n        line-height: 72px;\n        background-color: #fff;\n        height: 72px;\n        color: #999;\n        font-size: 32px;\n    }\n\n    .picker-item-selected {\n        color: #000;\n    }\n\n    .picker-center {\n        width: 750px;\n        height: 72px;\n        border-top-width: 1px;\n        border-top-style: solid;\n        border-top-color: #DCDCDC;\n\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n        position: absolute;\n        top: 176px;\n        left: 0;\n        z-index: 100;\n        width: 750px;\n        /*margin-top: -36px;*/\n        justify-content: center;\n        align-items: center;\n    }\n\n</style>\n<script type=\"text/javascript\">\n    import is from '../utils/is';\n    import mixins from '../utils/mixins';\n    const animation = weex.requireModule('animation');\n\n    const getIndex = (list, item) => {\n        if (list && list.length < 1) {\n            return 0;\n        }\n        let index1 = list.findIndex(v => {\n            return v === item || (v.name && v.name === item.name);\n        });\n        let index2 = list.indexOf(item);\n        let index = Math.max(index1, index2);\n        if (index < 0) {\n            // throw new Error('list数组中不存在defaultValue');\n            return 0;\n        }\n        return index;\n    };\n\n    export default {\n        mixins:[mixins],\n        props: {\n            visible: {\n                type: Boolean,\n                default: false\n            },\n\n            data: {\n                type: Object,\n                default: function () {\n                    return {};\n                },\n                required: true\n            },\n        },\n        data () {\n            return {\n                startY: 0,\n                endY: 0,\n                currentY: 0,\n                itemHeight: 72,\n                selectedIndex: 0,\n                _defaultValue: null,\n                _startTime: 0,\n            }\n        },\n        created () {\n            this.selectedIndex = this.getInitialIndex();\n        },\n\n        mounted () {\n            this.initMove();\n        },\n        \n        methods: {\n\n            getInitialIndex() {\n                let index = getIndex(\n                  this.data.list,\n                  this.data.defaultValue\n                );\n                if (!this.data.defaultValue && this.data.list.length > 3) {\n                  index = Math.floor(this.data.list.length / 2);\n                }\n                return index;\n            },\n\n            initMove () {\n                this.currentY = 0;\n                if (this.selectedIndex > 2) {\n                  this.currentY = - (this.selectedIndex - 2) * this.itemHeight;\n                } else {\n                  this.currentY = (2 - this.selectedIndex) * this.itemHeight;\n                }\n                this.move(this.currentY);\n            },\n\n            getSelectedClass (index) {\n                if (this.selectedIndex === index) {\n                  return 'picker-item-selected';\n                }\n                return '';\n            },\n\n            ontouchstart (e) {\n                this.preventDefault(e);\n                if (this.data.list.length <= 1) {\n                    return;\n                }\n                this.startY = e.changedTouches[0].screenY;\n                this._startTime = new Date().getTime();\n            },\n\n            ontouchmove (e) {\n                this.preventDefault(e);\n                if (this.data.list.length <= 1) {\n                  return;\n                }\n                const pageY = e.changedTouches[0].screenY;\n                let value = parseInt(pageY - this.startY);\n                const y = this.currentY + value;\n                this.move(y);\n            },\n\n            ontouchend (e) {\n                this.preventDefault(e);\n                if (this.data.list.length <= 1) {\n                  return;\n                }\n                this.endY = e.changedTouches[0].screenY;\n                // 实际滚动距离\n                let v = parseInt(this.endY - this.startY);\n                // 如果快速滑动，实际滑动距离放大5倍\n                const endTime = new Date().getTime();\n                if (endTime - this._startTime < 200) {\n                    v = v * 5;\n                }\n                let value = v % this.itemHeight;\n                // 计算出每次拖动的36px整倍数\n                this.currentY += (v - value);\n\n                // 正数y最大值\n                const max1 = 2 * this.itemHeight;\n                // 负数y最小值\n                const max2 = (this.data.list.length - 3) * this.itemHeight;\n\n                if (this.currentY > max1) {\n                  this.currentY = max1;\n                }\n                else if (this.currentY > 0 && this.currentY < max1) {\n                  this.currentY = this.currentY;\n                }\n                else if (this.currentY === max1) {\n                  this.currentY = this.currentY;\n                }\n                else if (Math.abs(this.currentY) > max2) {\n                  this.currentY = - max2;\n                }\n\n                this.countListIndex(this.currentY);\n                this.move(this.currentY, true);\n            },\n\n            // 计算list数组索引\n            countListIndex (pageY) {\n                let n = pageY / this.itemHeight;\n                n = n > 0 ? 2 - n : Math.abs(n) + 2;\n                this.setSelectedValue(n);\n            },\n\n            // set选中值\n            setSelectedValue (index) {\n                const length = this.data.list.length;\n                if (length === 0) {\n                  this.callback(null);\n                  return;\n                }\n                if (index < 0 || index > length -1) {\n                  throw new Error('滑动取值索引数值出现错误'+ index);\n                }\n                const value = this.data.list[index];\n                this.selectedIndex = index;\n\n                this.callback(value)\n            },\n\n            // 回调wxChange\n            callback (value) {\n                this.data.defaultValue = value;\n                this.$emit('wxChange', value);\n            },\n\n            move (y, bool) {\n                const el = this.$refs.wrapper;\n                let obj = {\n                    styles: {\n                        transform: `translateY(${y}px)`,\n                        transformOrigin: 'center center'\n                    },\n                    needLayout: false,\n                    delay: 0 //ms\n                };\n                if (bool) {\n                    obj.duration = 300;\n                    obj.timingFunction = 'ease-out';\n                }\n                animation.transition(el, obj);\n            },\n        },\n        watch: {\n            'data.list' () {\n                this.selectedIndex = this.getInitialIndex();\n                this.initMove();\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-field[data-v-a3bc8a72] {\n    width: 10rem;\n    height: 1.33333rem;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n}\n.wx-text[data-v-a3bc8a72] {\n    font-size: 0.45333rem;\n    color: #333333;\n    width: 2.4rem;\n    -webkit-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n}\n.wx-input[data-v-a3bc8a72] {\n    font-size: 0.42667rem;\n    color: #333333;\n    height: 1.46667rem;\n    line-height: 1.46667rem;\n    -webkit-box-flex: 3;\n    -webkit-flex: 3;\n            flex: 3;\n    text-align: left;\n}\n.wx-content[data-v-a3bc8a72] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.wx-cli-text[data-v-a3bc8a72] {\n    color: #999999;\n    font-size: 0.42667rem;\n    -webkit-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n}\n.wx-unit[data-v-a3bc8a72] {\n    font-size: 0.42667rem;\n    width: 0.66667rem;\n}\n.wx-enter[data-v-a3bc8a72] {\n}\n.right-arrow[data-v-a3bc8a72] {\n    width: 0.29333rem;\n    height: 0.29333rem;\n    margin-top: 0.26667rem;\n    border-bottom-width: 0.02667rem;\n    border-bottom-style: solid;\n    border-bottom-color: #DCDCDC;\n    border-right-width: 0.02667rem;\n    border-right-style: solid;\n    border-right-color: #DCDCDC;\n    /*margin-right: 4px;*/\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n/*label在上边的情况*/\n.wx-text-top[data-v-a3bc8a72] {\n    width: 10rem;\n    padding-top: 0.53333rem;\n    /*padding-bottom: 40px;*/\n    font-size: 0.45333rem;\n    color: #333333;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-field/index.vue?06b4be9e"],"names":[],"mappings":";AAuBA;IACA,aAAA;IACA,mBAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IACA,2BAAA;IACA,6BAAA;IACA,wBAAA;YAAA,gBAAA;CACA;AAEA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;IACA,0BAAA;YAAA,kBAAA;CACA;AAEA;IACA,sBAAA;IACA,eAAA;IACA,mBAAA;IACA,wBAAA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,iBAAA;CACA;AAEA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,oBAAA;IAAA,gBAAA;YAAA,QAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,eAAA;IACA,sBAAA;IACA,0BAAA;YAAA,kBAAA;CACA;AAEA;IACA,sBAAA;IACA,kBAAA;CACA;AAEA;CAEA;AAEA;IACA,kBAAA;IACA,mBAAA;IACA,uBAAA;IACA,gCAAA;IACA,2BAAA;IACA,6BAAA;IACA,+BAAA;IACA,0BAAA;IACA,4BAAA;IACA,sBAAA;IACA,kCAAA;YAAA,0BAAA;CACA;;AAEA,eAAA;AACA;IACA,aAAA;IACA,wBAAA;IACA,yBAAA;IACA,sBAAA;IACA,eAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-field\" :style=\"fieldStyles\" @click=\"clickHandler\">\n        <text :class=\"[labelPosition==='top'?'wx-text-top':'wx-text']\" :style=\"textTitleStyles\">{{ label }}</text>\n        <div class=\"wx-content\">\n            <input\n                    v-if=\"!disabled\"\n                    @input=\"handleChange\"\n                    @blur=\"blur\"\n                    class=\"wx-input\"\n                    :type=\"type\"\n                    :style=\"inputStyles\"\n                    :maxlength=\"maxlength\"\n                    :autofocus=\"autofocus\"\n                    :disabled=\"disabled\"\n                    :value=\"value\"\n                    :placeholder=\"placeholder\"/>\n            <text v-if=\"disabled\" class=\"wx-input\" :style=\"cliTextStyles\">{{value === '' ? placeholder : value}}</text>\n            <text class=\"wx-unit\" v-if=\"unit\">{{unit}}</text>\n            <wx-icon name=\"enter\" v-if=\"hasArrow\" class=\"wx-enter\"></wx-icon>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-field {\n        width: 750px;\n        height: 100px;\n        flex-direction: row;\n        align-items: center;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n        flex-wrap: wrap;\n    }\n\n    .wx-text {\n        font-size: 34px;\n        color: #333333;\n        width: 180px;\n        flex-wrap: nowrap;\n    }\n\n    .wx-input {\n        font-size: 32px;\n        color: #333333;\n        height: 110px;\n        line-height: 110px;\n        flex: 3;\n        text-align: left;\n    }\n\n    .wx-content {\n        flex-direction: row;\n        flex: 1;\n        align-items: center;\n    }\n\n    .wx-cli-text {\n        color: #999999;\n        font-size: 32px;\n        flex-wrap: nowrap;\n    }\n\n    .wx-unit {\n        font-size: 32px;\n        width: 50px;\n    }\n\n    .wx-enter {\n        \n    }\n\n    .right-arrow {\n        width: 22px;\n        height: 22px;\n        margin-top: 20px;\n        border-bottom-width: 2px;\n        border-bottom-style: solid;\n        border-bottom-color: #DCDCDC;\n        border-right-width: 2px;\n        border-right-style: solid;\n        border-right-color: #DCDCDC;\n        /*margin-right: 4px;*/\n        transform: rotate(-45deg);\n    }\n\n    /*label在上边的情况*/\n    .wx-text-top {\n        width: 750px;\n        padding-top: 40px;\n        /*padding-bottom: 40px;*/\n        font-size: 34px;\n        color: #333333;\n    }\n</style>\n<script>\n    import mixins from '../utils/mixins'\n    const modal = weex.requireModule('modal')\n    import WxIcon from '../wx-icon'\n\n    export default {\n        mixins:[mixins],\n        components: { WxIcon },\n        props: {\n            width: {\n                type: String,\n                default: '750px'\n            },\n            cliWidth: {\n                type: String\n            },\n            titleWidth: {\n                type: String\n            },\n            height: {\n                type: String,\n                default: '100px'\n            },\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            inputStyles: {\n                type: Object\n            },\n            label: {\n                type: String,\n                default: ''\n            },\n            labelPosition: {\n                type: String,\n                default: 'left'\n            },\n            type: {\n                type: String,\n                default: 'text'\n            },\n            maxlength: {\n                type: String,\n                default: '200'\n            },\n            autofocus: {\n                type: Boolean,\n                default: false\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            placeholder: {\n                type: String,\n                default: ''\n            },\n            unit: {\n                type: String\n            },\n            hasArrow: {\n                type: Boolean,\n                default: false\n            },\n            value: {\n                type: String\n            }\n        },\n\n        data () {\n            return {\n                fieldStyles: {},\n                textTitleStyles: {},\n            }\n        },\n\n        created () {\n            this.setStyle()\n        },\n        watch: {\n            'value': function () {\n                if(this.value !== ''){\n                    this.cliTextStyles.color = '#333333'\n                }else{\n                    this.cliTextStyles.color = '#999999'\n                }\n            }\n        },\n\n        methods: {\n            setStyle () {\n\n                // fieldStyles 样式\n                const baseCss = {\n                    height: this.height,\n                    width: this.width,\n                }\n                this.fieldStyles = Object.assign({},  baseCss, this.styles)\n\n//                if(this.disabled){\n//                    modal.toast({\n//                        message: this.width.replace('px','') - 26 + 'px'\n//                    })\n//                }\n\n                // cliTextStyles样式\n                let width = ''\n                if(this.cliWidth != null){\n                    width = this.cliWidth\n                }else{\n                    width = this.width\n                }\n                const cliTextCss = {\n                    width: width.replace('px','') - 26 + 'px',\n                    color: this.value === '' ? '#999999' : '#333333'\n                }\n                this.cliTextStyles = Object.assign({},  cliTextCss)\n\n                if(this.titleWidth ){\n                    // textTitleStyles 样式\n                    const titleStyles = {\n                        width: this.titleWidth\n                    }\n                    this.textTitleStyles = Object.assign({},  titleStyles)\n                }\n\n            },\n\n            handleChange (e) {\n                this.preventDefault(e);\n                this.$emit('input', e.value)\n            },\n\n            blur (e) {\n                this.preventDefault(e);\n                this.$emit('wxBlur', e.target.attr.value);\n            },\n\n            clickHandler(){\n                if (this.disabled){\n                    this.$emit('wxClick')\n                }\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-range[data-v-b2f7c96c] {\n    background-color: #fff;\n    position: relative;\n}\n.range-inner[data-v-b2f7c96c] {\n    position: relative;\n    overflow: hidden;\n    background-color: #1890ff;\n}\n.range-outer[data-v-b2f7c96c] {\n    position: absolute;\n    z-index: 100;\n    background-color: #1890ff;\n}\n.circle[data-v-b2f7c96c] {\n    background-color: #f5f5f5;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 100;\n    -webkit-box-shadow: 0 1px 0.04rem rgba(0,0,0,.4);\n            box-shadow: 0 1px 0.04rem rgba(0,0,0,.4);\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-range/index.vue?4eb7fea7"],"names":[],"mappings":";AASA;IACA,uBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;CACA;AAEA;IACA,mBAAA;IACA,aAAA;IACA,0BAAA;CACA;AAEA;IACA,0BAAA;IACA,mBAAA;IACA,QAAA;IACA,OAAA;IACA,aAAA;IACA,iDAAA;YAAA,yCAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-range\" @touchstart=\"preventDefault\" @touchmove=\"preventDefault\" :style=\"_wrapStyle\">\n        <div class=\"range-inner\" :style=\"_innerStyle\">\n            <div class=\"range-outer\" ref=\"rangeOuter\" :style=\"_outerStyle\"></div>\n        </div>\n        <div ref=\"circle\" :style=\"_circleStyle\" class=\"circle\" @panstart=\"ontouchstart\" @panend=\"ontouchend\" @panmove=\"ontouchmove\"></div>\n    </div>\n</template>\n<style scoped>\n    .wx-range {\n        background-color: #fff;\n        position: relative;\n    }\n\n    .range-inner {\n        position: relative;\n        overflow: hidden;\n        background-color: #1890ff;\n    }\n\n    .range-outer {\n        position: absolute;\n        z-index: 100;\n        background-color: #1890ff;\n    }\n\n    .circle {\n        background-color: #f5f5f5;\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 100;\n        box-shadow: 0 1px 3px rgba(0,0,0,.4);\n    }\n\n</style>\n<script>\n    import mixins from '../utils/mixins';\n    const animation = weex.requireModule('animation');\n\n    export default {\n        mixins:[mixins],\n        props: {\n            width: {\n                type: String,\n                default: '750px'\n            },\n            height: {\n                type: String,\n                default: '10px'\n            },\n            circleStyle: {\n                type: Object,\n                default: function () {\n                    return {\n                        \n                    }\n                }\n            },\n            innerStyle: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            outerStyle: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n        },\n\n        data () {\n            return {\n                startX: 0,\n                moveX: 0,\n                _circleStyle: {},\n                _innerStyle: {},\n                _outerStyle: {},\n                _wrapStyle: {},\n                data: {\n                    width: 0,\n                },\n                circleSize: '60px'\n            }\n        },\n\n        created () {\n            this.initStyle();\n        },\n\n        methods: {\n\n            initStyle () {\n                this.circleStyle.width = this.circleStyle.width || this.circleSize;\n                this.circleStyle.height = this.circleStyle.height || this.circleSize;\n                const circleSize = Number(this.circleStyle.width.replace('px', ''));\n                const v = circleSize / 2;\n\n                const h = Number(this.height.replace('px', ''));\n\n                // _innerStyle\n                const base = {width: this.width, height: this.height, 'margin-top': v - h/2 +'px', 'margin-left': v + 'px' };\n                this._innerStyle = Object.assign({}, this.innerStyle, base);\n                console.log(this._innerStyle)\n                this.data.width = Number(this._innerStyle.width.replace('px', ''));\n\n                // _circleStyle\n                this._circleStyle = Object.assign({}, this.circleStyle, {\n                    width: this.circleStyle.width,\n                    height: this.circleStyle.height,\n                    'border-radius': v + 'px',\n                });\n\n                // _outerStyle\n                this._outerStyle = Object.assign({}, this.outerStyle, {\n                    left: '-' + this._innerStyle.width,\n                    width: this._innerStyle.width,\n                    height: this._innerStyle.height,\n                });\n                this._wrapStyle = {\n                    width: this.data.width + circleSize + 'px',\n                    height: this._circleStyle.height,\n                    'background-color': '#fff',\n                }\n            },\n\n            ontouchstart:function(e) {\n                this.preventDefault(e);\n                this.startX = e.changedTouches[0].screenX;\n            },\n\n            ontouchmove:function(e) {\n                this.preventDefault(e);\n                const x = Math.floor(e.changedTouches[0].screenX - this.startX);\n                if (this.moveX + x > this.data.width) {\n                    this.move(this.$refs.circle, this.data.width);\n                    this.move(this.$refs.rangeOuter, this.data.width);\n                    return;\n                }\n                if (this.moveX + x < 0) {\n                    this.move(this.$refs.circle, 0);\n                    this.move(this.$refs.rangeOuter, 0);\n                    return;\n                }\n                this.move(this.$refs.circle, this.moveX + x);\n                this.move(this.$refs.rangeOuter, this.moveX + x);\n                this.$emit('input', this.getRange(this.moveX + x));\n            },\n\n            getRange (value) {\n                return Math.floor(value / this.data.width * 100);\n            },\n\n            ontouchend: function(e) {\n                this.preventDefault(e);\n                // 结束点(即圆圈在x轴移动的距离)\n                let endPot = Math.floor(e.changedTouches[0].screenX - this.startX + this.moveX);\n                if (endPot <= 0) {\n                    endPot = 0;\n                }\n                if (endPot > this.data.width) {\n                    endPot = this.data.width;\n                }\n                this.moveX = endPot;\n                this.$emit('input', this.getRange(this.moveX));\n                this.$emit('wxChange', this.getRange(this.moveX));\n                // this.move(endPot);\n            },\n\n            move (el, progress) {\n                animation.transition(el, {\n                    styles: {\n                        transform: `translateX(${progress}px)`,\n                        transformOrigin: 'center center'\n                    },\n                    duration: 0,\n                    needLayout: false,\n                    delay: 0 //ms\n                });\n            },\n\n            /**\n             * 设置范围\n             * @param {Int} range 0-100数字\n             */\n            setRange (range) {\n                let x = this.data.width * range / 100;\n                if (x <= 0) {\n                    x = 0;\n                }\n                if (x > this.data.width) {\n                    x = this.data.width;\n                }\n                this.moveX = x;\n                this.move(this.$refs.circle, x);\n                this.move(this.$refs.rangeOuter, x);\n                this.$emit('input', range);\n                this.$emit('wxChange', range);\n            },\n\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-marquee {\n    overflow: hidden;\n}\n.wrap {\n    overflow: hidden;\n    position: relative;\n}\n.marquee1 {\n    position: absolute;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.marquee2 {\n    position: absolute;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.text-item {\n    lines: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-marquee/index.vue?4acab063"],"names":[],"mappings":";AAmBA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,mBAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,SAAA;IACA,iBAAA;IACA,oBAAA;IACA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-marquee\" ref=\"wxMarquee\" :style=\"wrapStyle\">\n        <div class=\"wrap\" v-if=\"direction === 'row'\" :style=\"baseStyle\">\n            <div class=\"marquee1\" ref=\"marquee1\" :style=\"marquee1\">\n                <text :style=\"textStyle\" class=\"wx-text\">{{ text }}</text>\n            </div>\n            <div class=\"marquee2\" ref=\"marquee2\" :style=\"marquee2\">\n                <text :style=\"textStyle\" class=\"wx-text\">{{ text }}</text>\n            </div>\n        </div>\n        <div v-if=\"direction === 'column'\" :style=\"baseStyle\">\n            <div ref=\"wrapColumn\" :style=\"baseStyleWrap\">\n                <text v-for=\"txt in text\" class=\"text-item\" :style=\"textStyle\">{{ txt }}</text>\n                <text class=\"text-item\" :style=\"textStyle\">{{ this.text[0] }}</text>\n            </div>\n        </div>\n    </div>\n</template>\n<style>\n    .wx-marquee {\n        overflow: hidden;\n    }\n\n    .wrap {\n        overflow: hidden;\n        position: relative;\n    }\n\n    .marquee1 {\n        position: absolute;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .marquee2 {\n        position: absolute;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .text-item {\n        lines: 1;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n    }\n\n</style>\n<script type=\"text/javascript\">\n    const animation = weex.requireModule('animation');\n    const dom = weex.requireModule('dom');\n    import mixins from '../utils/mixins';\n\n    export default {\n        mixins:[mixins],\n        props: {\n            width: {\n                type: String,\n                default: '750px'\n            },\n            textWidth: {\n                type: String,\n                default: '750px'\n            },\n            \n            height: {\n                type: String,\n                default: '80px'\n            },\n            direction: {\n                type: String,\n                // or column\n                default: 'row'\n            },\n            text: {\n                type: [String, Array]\n            },\n            fontSize: {\n                type: String,\n                default: '32px'\n            },\n            textColor: {\n                type: String,\n                default: '#333'\n            },\n            bgColor: {\n                type: String,\n                default: '#fff'\n            },\n            duration: {\n                type: Number,\n                // ms\n                default: 5000\n            },\n            delay: {\n                type: Number,\n                // ms\n                default: 0\n            },\n        },\n        data () {\n            return {\n                base:{ \n                    x: Number(this.textWidth.replace('px','')),\n                    t: this.duration,\n                    h: Number(this.height.replace('px',''))\n                },\n                marquee1: {},\n                marquee2: {},\n                wrapStyle: {},\n                baseStyle: {},\n                textStyle: {},\n            }\n        },\n\n        created () {\n            this.wrapStyle = { width: this.width, height: this.height, 'background-color': this.bgColor };\n            let width = this.direction === 'row' ? this.textWidth : this.width;\n            this.baseStyle = { width: width, height: this.height, 'background-color': this.bgColor };\n\n            this.baseStyleWrap = Object.assign({}, this.baseStyle, {\n                height: this.base.h * (this.text.length + 1) + 'px'});\n\n            let textStyle = { height: this.height, width: width, 'font-size': this.fontSize, 'color': this.textColor, 'line-height': this.height };\n\n            if (this.$data.$env.isWeb) textStyle.display = 'block';\n            this.textStyle = textStyle;\n        },\n\n        mounted () {\n            if (this.direction === 'row' && this.base.x > 750) {\n                this.initStyle();\n                this.startRow();\n            } else if (this.direction === 'column') {\n                this.startCol();\n            }\n        },\n        \n        methods: {\n            initStyle () {\n                let base = {height: this.height, width: this.textWidth};\n                if (this.$data.$env.isWeb) {\n                    this.marquee1 = Object.assign({\n                        left: '0px'\n                    }, base);\n                    this.marquee2 = Object.assign({\n                        left: `${this.base.x}px`\n                    }, base);\n                } else {\n                    this.marquee1 = Object.assign({\n                        transform: `translateX(0px)`\n                    }, base);\n                    this.marquee2 = Object.assign({\n                        transform: `translateX(${this.base.x}px)`\n                    }, base);\n                }\n            },\n\n            startRow () {\n                setTimeout(() => {\n                    this.animation1('marquee1');\n                    this.animation2('marquee2');\n                }, this.delay);\n            },\n\n            startCol () {\n                let index = 0;\n                let d = this.duration;\n                let next = () => {\n                  if (index > this.text.length - 1) {\n                    index = 0;\n                    // 处理浏览器兼容，设置停留100ms\n                    d = 100;\n                    this.animationCol(0, 0);\n                  } else {\n                    d = this.duration;\n                    index ++;\n                    let y = `${-1 * index * 100 / (this.text.length + 1)}%`;\n                    this.animationCol(this.duration, y);\n                  }\n                  setTimeout(next, d);\n                }\n                setTimeout(() => {\n                    next();\n                }, this.delay);\n            },\n\n            animation1 (ref) {\n                let el = this.$refs[ref];\n                animation.transition(el, {\n                    styles: this.getStyles(-this.base.x),\n                    duration: this.base.t,\n                    timingFunction: 'linear',\n                }, () => {\n                    this.end(ref);\n                });\n            },\n\n            getStyles (x) {\n                if (this.$data.$env.isWeb) {\n                    return {left: `${x}px`};\n                } else {\n                    return {transform: `translateX(${x}px)`};\n                }\n            },\n\n            animation2 (ref) {\n                let el = this.$refs[ref];\n                let x = this.base.x;\n                let d = this.base.t * 2;\n                animation.transition(el, {\n                    styles: this.getStyles(-x),\n                    duration: d,\n                    timingFunction: 'linear',\n                }, () => {\n                    this.end(ref);\n                });\n            },\n\n            end (ref) {\n                let el = this.$refs[ref];\n                animation.transition(el, {\n                    styles: this.getStyles(this.base.x),\n                    duration: 0,\n                });\n                setTimeout(() => {\n                    this.animation2(ref);\n                }, 20);\n            },\n\n            animationCol (duration, y) {\n                var el = this.$refs.wrapColumn;\n                if (this.$data.$env.isWeb) {\n                    el.style.transitionDuration = duration + 'ms';\n                    el.style.transitionTimingFunction = 'ease';\n                    el.style.transform = `translate3d(0, ${y}, 0)`\n                    return;\n                }\n                animation.transition(el, {\n                    styles: {\n                        transform: `translateY(${y})`\n                    },\n                    duration: duration,\n                    timingFunction: 'ease'\n                });\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-checkbox[data-v-e9f2baa8] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.wx-text[data-v-e9f2baa8] {\n    font-size: 0.42667rem;\n}\n.align-right[data-v-e9f2baa8] {\n    padding-left: 0.21333rem;\n}\n.align-left[data-v-e9f2baa8] {\n    padding-right: 0.21333rem;\n}\n.wx-box[data-v-e9f2baa8] {\n    width: 0.58667rem;\n    height: 0.58667rem;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #DCDCDC;\n    background-color: #fff;\n    border-radius: 0.05333rem;\n}\n.checked[data-v-e9f2baa8] {\n    position: absolute;\n    top: 0.08rem;\n    left: 0.18667rem;\n    z-index: 100;\n    width: 0.18667rem;\n    height: 0.32rem;\n    border-bottom-width: 0.02667rem;\n    border-bottom-style: solid;\n    /*border-bottom-color: #027FF3;*/\n    border-right-width: 0.02667rem;\n    border-right-style: solid;\n    /*border-right-color: #027FF3;*/\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-checkbox/index.vue?c22ab722"],"names":[],"mappings":";AAaA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA;IACA,sBAAA;CACA;AACA;IACA,yBAAA;CACA;AACA;IACA,0BAAA;CACA;AAEA;IACA,kBAAA;IACA,mBAAA;IACA,kBAAA;IACA,oBAAA;IACA,sBAAA;IACA,uBAAA;IACA,0BAAA;CACA;AAEA;IACA,mBAAA;IACA,aAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;IACA,gCAAA;IACA,2BAAA;IACA,iCAAA;IACA,+BAAA;IACA,0BAAA;IACA,gCAAA;IACA,iCAAA;YAAA,yBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-checkbox\" @click=\"handleClick\">\n        <text v-if=\"align === 'left'\" \n            class=\"wx-text align-left\">{{ text }}</text>\n        <!-- CheckBox -->\n        <div class=\"wx-box\" :style=\"boxStyle\">\n            <div v-if=\"checked\" class=\"checked\" :style=\"{'border-right-color': checkedColor, 'border-bottom-color': checkedColor}\"></div>\n        </div>\n        <text v-if=\"align === 'right'\" \n            class=\"wx-text align-right\">{{ text }}</text>\n    </div>\n</template>\n<style scoped>\n    .wx-checkbox {\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .wx-text {\n        font-size: 32px;\n    }\n    .align-right {\n        padding-left: 16px;\n    }\n    .align-left {\n        padding-right: 16px;\n    }\n\n    .wx-box {\n        width: 44px;\n        height: 44px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: #DCDCDC;\n        background-color: #fff;\n        border-radius: 4px;\n    }\n\n    .checked {\n        position: absolute;\n        top: 6px;\n        left: 14px;\n        z-index: 100;\n        width: 14px;\n        height: 24px;\n        border-bottom-width: 2px;\n        border-bottom-style: solid;\n        /*border-bottom-color: #027FF3;*/\n        border-right-width: 2px;\n        border-right-style: solid;\n        /*border-right-color: #027FF3;*/\n        transform: rotate(45deg);\n    }\n\n</style>\n<script>\n    import mixins from '../utils/mixins';\n\n    export default {\n        mixins:[mixins],\n        props: {\n            value: {\n                type: Boolean,\n                required: true\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            text: {\n                type: String,\n                default: ''\n            },\n            align: {\n                type: String,\n                // left or right\n                default: 'left' \n            },\n            checkedColor: {\n                type: String,\n                default: '#027FF3' \n            },\n        },\n\n        data () {\n            return {\n                checked: false,\n                boxStyle: {},\n            }\n        },\n\n        created () {\n            this.checked = this.value;\n            if (!this.disabled) {\n                this.boxStyle = {\n                    'border-color': this.checked ? this.checkedColor : '#DCDCDC'\n                }\n            } else {\n                this.boxStyle = {\n                    'border-color': '#DCDCDC',\n                    'background-color': '#f2f3f4',\n                }\n            }\n        },\n\n        methods: {\n            handleClick (e) {\n                this.preventDefault(e);\n                if (this.disabled) return;\n                this.checked = !this.checked;\n                this.$emit('wxChange', this.checked);\n                this.$emit('input', this.checked);\n            },\n        },\n\n        watch: {\n            value (v) {\n                this.checked = v;\n            },\n\n            checked () {\n                if (!this.disabled) {\n                    this.boxStyle = {\n                        'border-color': this.checked ? this.checkedColor : '#DCDCDC'\n                    }\n                }\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(119),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2a32de76",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-actionsheet/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a32de76", Component.options)
  } else {
    hotAPI.reload("data-v-2a32de76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(117),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-12f6cc8b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-cell/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12f6cc8b", Component.options)
  } else {
    hotAPI.reload("data-v-12f6cc8b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(123),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3ca56eb5",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-checkbox-list/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ca56eb5", Component.options)
  } else {
    hotAPI.reload("data-v-3ca56eb5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(129),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e9f2baa8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-checkbox/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9f2baa8", Component.options)
  } else {
    hotAPI.reload("data-v-e9f2baa8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(138)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(121),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3195ad71",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-dialog/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3195ad71", Component.options)
  } else {
    hotAPI.reload("data-v-3195ad71", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(126),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a3bc8a72",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-field/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3bc8a72", Component.options)
  } else {
    hotAPI.reload("data-v-a3bc8a72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(118),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-158aff14",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-header/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-158aff14", Component.options)
  } else {
    hotAPI.reload("data-v-158aff14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(114),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-07ea1486",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-indexlist/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07ea1486", Component.options)
  } else {
    hotAPI.reload("data-v-07ea1486", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(128),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-marquee/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca61a922", Component.options)
  } else {
    hotAPI.reload("data-v-ca61a922", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(124),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-629cf239",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-navbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-629cf239", Component.options)
  } else {
    hotAPI.reload("data-v-629cf239", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-picker/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9af04d92", Component.options)
  } else {
    hotAPI.reload("data-v-9af04d92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(115),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0901d80e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-popup/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0901d80e", Component.options)
  } else {
    hotAPI.reload("data-v-0901d80e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(122),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-35b82088",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-radio/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35b82088", Component.options)
  } else {
    hotAPI.reload("data-v-35b82088", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(127),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b2f7c96c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-range/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2f7c96c", Component.options)
  } else {
    hotAPI.reload("data-v-b2f7c96c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(120),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2c7a5726",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-scrollerbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c7a5726", Component.options)
  } else {
    hotAPI.reload("data-v-2c7a5726", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(116),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0eb8f05d",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-switch/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0eb8f05d", Component.options)
  } else {
    hotAPI.reload("data-v-0eb8f05d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(113),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-06b46507",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-tabbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06b46507", Component.options)
  } else {
    hotAPI.reload("data-v-06b46507", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-tabbar weex-ct",
    attrs: {}
  }, [_c('div', {
    staticClass: "tab-component weex-ct",
    style: ({
      'transform': _vm._px2rem(_vm.translateX, 75),
      width: _vm._px2rem(_vm.totalWidth + 'px', 75)
    }),
    attrs: {}
  }, [_vm._t("default", null, {})], 2), _vm._v(" "), _c('div', {
    staticClass: "tabbar weex-ct",
    style: (_vm._px2rem(_vm.getStyles(), 75)),
    attrs: {}
  }, _vm._l((_vm.tabItems), function(item) {
    return _c('div', {
      staticClass: "tabbar-item weex-ct",
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.changeTab(item)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.changeTab(item)
        }
      }
    }, [(_vm.selectedTab.index === item.index) ? _c('figure', {
      staticClass: "icon weex-el weex-img",
      staticStyle: {
        "background-size": "100%100%"
      },
      style: (_vm._px2rem(_vm.getIconStyle(item), 75)),
      attrs: {
        "src": item.selectedImage,
        "data-img-src": item.selectedImage
      }
    }) : _vm._e(), _vm._v(" "), (_vm.selectedTab.index !== item.index) ? _c('figure', {
      staticClass: "icon weex-el weex-img",
      staticStyle: {
        "background-size": "100%100%"
      },
      style: (_vm._px2rem(_vm.getIconStyle(item), 75)),
      attrs: {
        "src": item.image,
        "data-img-src": item.image
      }
    }) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "wx-text weex-el weex-text",
      style: (_vm._processExclusiveStyle(_vm.getTitleStyle(item), 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(item.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-06b46507", module.exports)
  }
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-indexlist weex-ct",
    attrs: {}
  }, [_c('scroller', {
    staticClass: "scroller",
    style: ({
      height: _vm._px2rem(_vm.getPageHeight() + 'px', 75)
    }),
    attrs: {
      "show-scrollbar": "false"
    }
  }, _vm._l((_vm.items), function(category) {
    return _c('div', {
      staticClass: "eachCategory weex-ct",
      attrs: {}
    }, [_c('p', {
      ref: 'item' + category.text,
      refInFor: true,
      staticClass: "category weex-el weex-text",
      attrs: {}
    }, [_vm._v(_vm._s(category.text))]), _vm._v(" "), _vm._l((category.list), function(item) {
      return _c('p', {
        staticClass: "item-text weex-el weex-text",
        attrs: {
          "data-evt-click": ""
        },
        on: {
          "weex$tap": function($event) {
            $event.stopPropagation();
            _vm.handleClick(item)
          }
        },
        nativeOn: {
          "weex$tap": function($event) {
            $event.stopPropagation();
            _vm.handleClick(item)
          }
        }
      }, [_vm._v(_vm._s(item.text) + "\n            ")])
    })], 2)
  })), _vm._v(" "), _c('div', {
    staticClass: "indexList weex-ct",
    attrs: {}
  }, _vm._l((_vm.items), function(category) {
    return _c('p', {
      staticClass: "indexList-right weex-el weex-text",
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.scrollTo(category.text)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.scrollTo(category.text)
        }
      }
    }, [_vm._v(_vm._s(category.text))])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07ea1486", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-container weex-ct",
    attrs: {
      "data-evt-touchstart": ""
    },
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    },
    nativeOn: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    }
  }, [(_vm.visible && _vm.hasOverley) ? _c('div', {
    ref: "overlay",
    staticClass: "mask wx-overlay weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.hide('event')
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.hide('event')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.visible) ? _c('div', {
    ref: "popup",
    staticClass: "wx-popup weex-ct",
    style: (_vm._px2rem(_vm.popupStyles, 75)),
    attrs: {}
  }, [_vm._t("default", null, {})], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0901d80e", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-switch weex-ct",
    style: ({
      'background-color': _vm.checked ? _vm.checkedColor : '#d9d9d9'
    }),
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    }
  }, [_c('p', {
    ref: "switchCore",
    staticClass: "switch-core weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.corestyle, 75, 'text')),
    attrs: {}
  }), _vm._v(" "), _c('p', {
    ref: "blk",
    staticClass: "blk weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.blkStyle, 75, 'text')),
    attrs: {}
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0eb8f05d", module.exports)
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-cell weex-ct",
    style: (_vm._px2rem(_vm.cellStyles, 75)),
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    }
  }, [_vm._t("left", null, {}), _vm._v(" "), (_vm.icon) ? _c('figure', {
    staticClass: "icon weex-el weex-img",
    staticStyle: {
      "background-size": "100%100%"
    },
    attrs: {
      "src": _vm.icon,
      "data-img-src": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "wx-text weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.textStyles, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _vm._t("right", null, {}), _vm._v(" "), (_vm.hasArrow) ? _c('div', {
    staticClass: "right-arrow weex-ct",
    attrs: {}
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12f6cc8b", module.exports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-header weex-ct",
    class: [_vm.hasBottom ? 'bottom-border' : 'no-border'],
    attrs: {}
  }, [_vm._t("default", [_c('div', {
    staticClass: "header-title weex-ct",
    attrs: {}
  }, [_c('p', {
    staticClass: "title weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.getTitleStyle(), 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.text))])]), _vm._v(" "), (_vm.hasBackIcon) ? _c('div', {
    ref: "arrow",
    staticClass: "header-arrow weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    }
  }, [_c('p', {
    staticClass: "icon-arrow-left weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.getArrowStyle(), 75, 'text')),
    attrs: {}
  })]) : _vm._e()], {}), _vm._v(" "), _vm._t("header-left", null, {}), _vm._v(" "), _vm._t("header-center", null, {}), _vm._v(" "), _vm._t("header-right", null, {})], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-158aff14", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-actionsheet weex-ct",
    attrs: {}
  }, [(_vm.showActionsheet) ? _c('div', {
    ref: "sheetMask",
    staticClass: "wx-actionsheet-mask weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.close($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.close($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showActionsheet) ? _c('div', {
    ref: "sheetContent",
    staticClass: "wx-actionsheet-content weex-ct",
    style: (_vm._px2rem(_vm.listStyle, 75)),
    attrs: {}
  }, [_c('div', {
    staticClass: "action-list weex-ct",
    attrs: {}
  }, [(_vm.titleText) ? _c('div', {
    staticClass: "action-title bd-btm radius-tl-24 radius-tr-24 weex-ct",
    attrs: {}
  }, [_c('p', {
    staticClass: "f26 c-grey weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.titleText))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.actions), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "action-item weex-ct",
      class: _vm.itemsClass(index),
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.itemClick(item, index)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.itemClick(item, index)
        }
      }
    }, [_c('p', {
      staticClass: "bold weex-el weex-text",
      style: (_vm._processExclusiveStyle(_vm.actionStyle, 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(item.name))])])
  })], 2), _vm._v(" "), (_vm.cancelText) ? _c('div', {
    staticClass: "action-item bd-btm cancel-button radius-24 weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.cancel($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.cancel($event)
      }
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.cancelStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a32de76", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: "wx-scroller",
    style: (_vm._px2rem(_vm.scrollStyle, 75)),
    attrs: {
      "scroll-direction": _vm.scrollDirection,
      "show-scrollbar": "false"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      ref: 'item' + index,
      refInFor: true,
      staticClass: " weex-ct",
      class: [_vm.hasBottom ? 'scroller-bottom-border' : '', _vm.selectIndex == index ? 'select-cell' : 'wx-cell'],
      style: (_vm._px2rem(_vm.getItemStyle(item), 75)),
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.changeTab(index)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.changeTab(index)
        }
      }
    }, [_c('p', {
      staticClass: "wx-text weex-el weex-text",
      class: [_vm.selectIndex == index && _vm.hasSelectedBottom ? 'selected-border' : ''],
      style: (_vm._processExclusiveStyle(_vm.getTitleStyle(item), 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(item.title || item))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c7a5726", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    ref: "dialog",
    staticClass: "wx-dialog weex-ct",
    class: [_vm.useDefaultFooter ? '' : 'opacityFull'],
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    }
  }, [_c('div', {
    staticClass: "dialog-content weex-ct",
    style: (_vm._px2rem(_vm.dialogContentStyles, 75)),
    attrs: {}
  }, [_vm._t("dialog-header", null, {}), _vm._v(" "), _vm._t("dialog-body", null, {}), _vm._v(" "), _vm._t("dialog-footer", null, {}), _vm._v(" "), (_vm.useDefaultFooter) ? _c('div', {
    staticClass: "dialog-default weex-ct",
    attrs: {}
  }, [(_vm.title) ? _c('p', {
    staticClass: "title weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer weex-ct",
    attrs: {}
  }, [_c('p', {
    staticClass: "flex-1 btn-cancel weex-el weex-text",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.cancel($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.cancel($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]), _vm._v(" "), _c('p', {
    staticClass: "flex-1 btn-confirm weex-el weex-text",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.confirm($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.confirm($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmLabel))])])]) : _vm._e()], 2), _vm._v(" "), _vm._t("dialog-outer", null, {})], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3195ad71", module.exports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-radio-items weex-ct",
    style: ({
      'flex-direction': _vm.direction,
      'width': _vm._px2rem(_vm.width, 75)
    }),
    attrs: {}
  }, _vm._l((_vm.options), function(item) {
    return _c('div', {
      staticClass: "wx-radio-item weex-ct",
      style: (_vm._px2rem(_vm.rowStyle, 75)),
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.handleClick(item)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.handleClick(item)
        }
      }
    }, [(_vm.align === 'left') ? _c('p', {
      staticClass: "wx-radio-label-right weex-el weex-text",
      style: (_vm._processExclusiveStyle(_vm.textStyles, 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(item.title))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "wx-radio weex-ct",
      class: [item.checked ? 'wx-radio-checked' : 'wx-radio-nochecked'],
      style: (_vm._px2rem(_vm.getRadioStyle(item), 75)),
      attrs: {}
    }, [(item.checked) ? _c('p', {
      staticClass: "checked weex-el weex-text",
      style: (_vm._processExclusiveStyle(_vm.checkedStyle, 75, 'text')),
      attrs: {}
    }) : _vm._e()]), _vm._v(" "), (_vm.align === 'right') ? _c('p', {
      staticClass: "wx-radio-label-left weex-el weex-text",
      style: (_vm._processExclusiveStyle(_vm.textStyles, 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35b82088", module.exports)
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-checkbox-list weex-ct",
    style: ({
      width: _vm._px2rem(_vm.width, 75)
    }),
    attrs: {}
  }, _vm._l((_vm.options), function(item) {
    return _c('div', {
      staticClass: "cell weex-ct",
      style: ({
        width: _vm._px2rem(_vm.width, 75),
        height: _vm._px2rem(_vm.height, 75)
      }),
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.handleClick(item)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.handleClick(item)
        }
      }
    }, [_c('p', {
      staticClass: "wx-text weex-el weex-text",
      style: ({
        'padding-left': _vm.padding
      }),
      attrs: {}
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('wx-checkbox', {
      staticClass: "checkbox",
      style: ({
        'padding-right': _vm.padding
      }),
      attrs: {
        "disabled": item.disabled,
        "checkedColor": _vm.checkedColor
      },
      model: {
        value: (item.checked),
        callback: function($$v) {
          _vm.$set(item, "checked", $$v)
        },
        expression: "item.checked"
      }
    })], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ca56eb5", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-tabbar weex-ct",
    style: ({
      width: _vm._px2rem(this.width, 75)
    }),
    attrs: {}
  }, [_c('div', {
    staticClass: "tabbar weex-ct",
    style: ({
      width: _vm._px2rem(this.width, 75),
      height: _vm._px2rem(this.height, 75)
    }),
    attrs: {}
  }, _vm._l((_vm.tabItems), function(item) {
    return _c('div', {
      staticClass: "tabbar-item weex-ct",
      class: [_vm.hasBottom ? 'has-bottom-1' : 'no-bottom-1'],
      attrs: {
        "data-evt-click": ""
      },
      on: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.changeTab(item)
        }
      },
      nativeOn: {
        "weex$tap": function($event) {
          $event.stopPropagation();
          _vm.changeTab(item)
        }
      }
    }, [_c('p', {
      staticClass: "wx-title weex-el weex-text",
      class: [_vm.selectedTab.index === item.index ? 'selected' : 'noselected'],
      style: (_vm._processExclusiveStyle(_vm.getTitleStyle(item), 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(item.title))])])
  })), _vm._v(" "), (!_vm.vif) ? _c('div', {
    staticClass: "tab-component weex-ct",
    style: ({
      'transform': _vm._px2rem(_vm.translateX, 75),
      width: _vm._px2rem(_vm.contentTotalWidth + 'px', 75)
    }),
    attrs: {}
  }, [_vm._t("default", null, {})], 2) : _vm._e(), _vm._v(" "), (_vm.vif) ? _c('div', [_vm._t("default", null, {})], 2) : _vm._e(), _vm._v(" "), _c('p', {
    ref: "selectedLine",
    staticClass: "line weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.defaultLineStyle, 75, 'text')),
    attrs: {}
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-629cf239", module.exports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: "wx-picker-wrapper weex-ct",
    attrs: {
      "data-evt-touchstart": ""
    },
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    },
    nativeOn: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    }
  }, [_c('div', {
    staticClass: "wx-picker weex-ct",
    attrs: {
      "data-evt-panstart": "",
      "data-evt-panend": "",
      "data-evt-panmove": ""
    },
    on: {
      "panstart": function($event) {
        $event.stopPropagation();
        return _vm.ontouchstart($event)
      },
      "panend": function($event) {
        $event.stopPropagation();
        return _vm.ontouchend($event)
      },
      "panmove": function($event) {
        $event.stopPropagation();
        return _vm.ontouchmove($event)
      }
    },
    nativeOn: {
      "panstart": function($event) {
        $event.stopPropagation();
        return _vm.ontouchstart($event)
      },
      "panend": function($event) {
        $event.stopPropagation();
        return _vm.ontouchend($event)
      },
      "panmove": function($event) {
        $event.stopPropagation();
        return _vm.ontouchmove($event)
      }
    }
  }, [_c('div', {
    ref: "wrapper",
    staticClass: "wrapper weex-ct",
    attrs: {}
  }, _vm._l((_vm.data.list), function(item, index) {
    return _c('p', {
      staticClass: "picker-item weex-el weex-text",
      class: [_vm.getSelectedClass(index)],
      attrs: {}
    }, [_vm._v(_vm._s(item.name || item))])
  })), _vm._v(" "), _c('p', {
    staticClass: "picker-center weex-el weex-text",
    attrs: {}
  })])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9af04d92", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-field weex-ct",
    style: (_vm._px2rem(_vm.fieldStyles, 75)),
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.clickHandler($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.clickHandler($event)
      }
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    class: [_vm.labelPosition === 'top' ? 'wx-text-top' : 'wx-text'],
    style: (_vm._processExclusiveStyle(_vm.textTitleStyles, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('div', {
    staticClass: "wx-content weex-ct",
    attrs: {}
  }, [(!_vm.disabled) ? _c('input', {
    staticClass: "wx-input",
    style: (_vm._px2rem(_vm.inputStyles, 75)),
    attrs: {
      "type": _vm.type,
      "maxlength": _vm.maxlength,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder,
      "data-evt-input": "",
      "data-evt-blur": ""
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        $event.stopPropagation();
        return _vm.handleChange($event)
      },
      "blur": function($event) {
        $event.stopPropagation();
        return _vm.blur($event)
      }
    },
    nativeOn: {
      "input": function($event) {
        $event.stopPropagation();
        return _vm.handleChange($event)
      },
      "blur": function($event) {
        $event.stopPropagation();
        return _vm.blur($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.disabled) ? _c('p', {
    staticClass: "wx-input weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.cliTextStyles, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.value === '' ? _vm.placeholder : _vm.value))]) : _vm._e(), _vm._v(" "), (_vm.unit) ? _c('p', {
    staticClass: "wx-unit weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.unit))]) : _vm._e(), _vm._v(" "), (_vm.hasArrow) ? _c('wx-icon', {
    staticClass: "wx-enter",
    attrs: {
      "name": "enter"
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a3bc8a72", module.exports)
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-range weex-ct",
    style: (_vm._px2rem(_vm._wrapStyle, 75)),
    attrs: {
      "data-evt-touchstart": "",
      "data-evt-touchmove": ""
    },
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      },
      "touchmove": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    },
    nativeOn: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      },
      "touchmove": function($event) {
        $event.stopPropagation();
        return _vm.preventDefault($event)
      }
    }
  }, [_c('div', {
    staticClass: "range-inner weex-ct",
    style: (_vm._px2rem(_vm._innerStyle, 75)),
    attrs: {}
  }, [_c('div', {
    ref: "rangeOuter",
    staticClass: "range-outer weex-ct",
    style: (_vm._px2rem(_vm._outerStyle, 75)),
    attrs: {}
  })]), _vm._v(" "), _c('div', {
    ref: "circle",
    staticClass: "circle weex-ct",
    style: (_vm._px2rem(_vm._circleStyle, 75)),
    attrs: {
      "data-evt-panstart": "",
      "data-evt-panend": "",
      "data-evt-panmove": ""
    },
    on: {
      "panstart": function($event) {
        $event.stopPropagation();
        return _vm.ontouchstart($event)
      },
      "panend": function($event) {
        $event.stopPropagation();
        return _vm.ontouchend($event)
      },
      "panmove": function($event) {
        $event.stopPropagation();
        return _vm.ontouchmove($event)
      }
    },
    nativeOn: {
      "panstart": function($event) {
        $event.stopPropagation();
        return _vm.ontouchstart($event)
      },
      "panend": function($event) {
        $event.stopPropagation();
        return _vm.ontouchend($event)
      },
      "panmove": function($event) {
        $event.stopPropagation();
        return _vm.ontouchmove($event)
      }
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b2f7c96c", module.exports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wxMarquee",
    staticClass: "wx-marquee weex-ct",
    style: (_vm._px2rem(_vm.wrapStyle, 75)),
    attrs: {}
  }, [(_vm.direction === 'row') ? _c('div', {
    staticClass: "wrap weex-ct",
    style: (_vm._px2rem(_vm.baseStyle, 75)),
    attrs: {}
  }, [_c('div', {
    ref: "marquee1",
    staticClass: "marquee1 weex-ct",
    style: (_vm._px2rem(_vm.marquee1, 75)),
    attrs: {}
  }, [_c('p', {
    staticClass: "wx-text weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.textStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.text))])]), _vm._v(" "), _c('div', {
    ref: "marquee2",
    staticClass: "marquee2 weex-ct",
    style: (_vm._px2rem(_vm.marquee2, 75)),
    attrs: {}
  }, [_c('p', {
    staticClass: "wx-text weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.textStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.text))])])]) : _vm._e(), _vm._v(" "), (_vm.direction === 'column') ? _c('div', {
    staticClass: " weex-ct",
    style: (_vm._px2rem(_vm.baseStyle, 75)),
    attrs: {}
  }, [_c('div', {
    ref: "wrapColumn",
    staticClass: " weex-ct",
    style: (_vm._px2rem(_vm.baseStyleWrap, 75)),
    attrs: {}
  }, [_vm._l((_vm.text), function(txt) {
    return _c('p', {
      staticClass: "text-item weex-el weex-text",
      style: (_vm._processExclusiveStyle(_vm.textStyle, 75, 'text')),
      attrs: {}
    }, [_vm._v(_vm._s(txt))])
  }), _vm._v(" "), _c('p', {
    staticClass: "text-item weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.textStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(this.text[0]))])], 2)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ca61a922", module.exports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-checkbox weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    }
  }, [(_vm.align === 'left') ? _c('p', {
    staticClass: "wx-text align-left weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "wx-box weex-ct",
    style: (_vm._px2rem(_vm.boxStyle, 75)),
    attrs: {}
  }, [(_vm.checked) ? _c('div', {
    staticClass: "checked weex-ct",
    style: ({
      'border-right-color': _vm.checkedColor,
      'border-bottom-color': _vm.checkedColor
    }),
    attrs: {}
  }) : _vm._e()]), _vm._v(" "), (_vm.align === 'right') ? _c('p', {
    staticClass: "wx-text align-right weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e9f2baa8", module.exports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b361d8f6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06b46507\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06b46507\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("436bd4c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07ea1486\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07ea1486\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("983c14a0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0901d80e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0901d80e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("718bd0ff", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0eb8f05d\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0eb8f05d\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("99b98cf0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12f6cc8b\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12f6cc8b\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6cb2059a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-158aff14\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-158aff14\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6028bc16", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a32de76\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a32de76\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6afae722", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7a5726\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7a5726\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4295464c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3195ad71\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3195ad71\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f9514326", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35b82088\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35b82088\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("64381f46", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ca56eb5\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ca56eb5\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("79d71ceb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-629cf239\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-629cf239\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("74fc657b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9af04d92\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9af04d92\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a55868e8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a3bc8a72\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a3bc8a72\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("33aa20c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2f7c96c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2f7c96c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1abb0d9e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca61a922\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca61a922\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("41df5ca6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e9f2baa8\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e9f2baa8\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(260),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/tabbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f31ebc2", Component.options)
  } else {
    hotAPI.reload("data-v-5f31ebc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(28);

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        WxTabbar: _index.WxTabbar,
        WxHeader: _index.WxHeader,
        WxButton: _index.WxButton
    },
    data: function data() {
        return {
            tabItems: [{
                index: 0,
                title: "主页",
                titleColor: '#646464',
                selectedColor: '#4676FF',
                fontSize: '28px',
                iconWdith: '38px',
                iconHeight: '38px',
                image: "http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5paqsppfj302v02gmwx.jpg",
                selectedImage: "http://ww3.sinaimg.cn/large/0060lm7Tgw1fb5pacghqhj302v02g744.jpg"
            }, {
                index: 1,
                title: "收藏",
                titleColor: '#646464',
                selectedColor: '#4676FF',
                fontSize: '28px',
                iconWdith: '38px',
                iconHeight: '38px',
                image: "http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5oxe9vbkj302s02g0si.jpg",
                selectedImage: "http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5ow9ddswj302s02gglh.jpg"
            }, {
                index: 2,
                title: "我的",
                titleColor: '#646464',
                selectedColor: '#4676FF',
                fontSize: '28px',
                iconWdith: '38px',
                iconHeight: '38px',
                image: "http://ww1.sinaimg.cn/large/0060lm7Tgw1fb5pbtauy1j302c02hmwx.jpg",
                selectedImage: "http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5pbb390dj302c02hglg.jpg"
            }]
        };
    },
    created: function created() {},

    methods: {
        handleChange: function handleChange(item) {
            modal.alert({
                message: item.title
            });
        }
    }
};

/***/ }),
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(171);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.tab-page {\n    width: 10rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/tabbar/index.vue?79ac7bb4"],"names":[],"mappings":";AAUA;IACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-demo\">\n        <wx-tabbar :styles=\"{'border-top-width': '1px'}\" bottom=\"0px\" height=\"128px\" :tabItems=\"tabItems\" @wxChange=\"handleChange\">\n            <text class=\"tab-page\">1</text>\n            <text class=\"tab-page\">2</text>\n            <text class=\"tab-page\">3</text>\n        </wx-tabbar>\n    </div>\n</template>\n<style type=\"text/css\">\n    .tab-page {\n        width: 750px;\n    }\n</style>\n<script>\n    import { WxTabbar, WxHeader, WxButton } from '../../index';\n    const modal = weex.requireModule('modal');\n    export default {\n        components: {\n            WxTabbar,\n            WxHeader,\n            WxButton,\n        },\n        data () {\n            return {\n                tabItems:[\n                    {\n                        index:0,\n                        title:\"主页\",  \n                        titleColor:'#646464',  \n                        selectedColor: '#4676FF',\n                        fontSize: '28px',\n                        iconWdith: '38px',\n                        iconHeight: '38px',\n                        image:\"http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5paqsppfj302v02gmwx.jpg\",  \n                        selectedImage:\"http://ww3.sinaimg.cn/large/0060lm7Tgw1fb5pacghqhj302v02g744.jpg\",  \n                    },  \n                    {\n                        index:1,  \n                        title:\"收藏\",  \n                        titleColor:'#646464',  \n                        selectedColor: '#4676FF',\n                        fontSize: '28px',\n                        iconWdith: '38px',\n                        iconHeight: '38px',\n                        image:\"http://ww2.sinaimg.cn/large/0060lm7Tgw1fb5oxe9vbkj302s02g0si.jpg\",  \n                        selectedImage:\"http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5ow9ddswj302s02gglh.jpg\",  \n                    },  \n                    {\n                        index:2,  \n                        title:\"我的\",   \n                        titleColor:'#646464',  \n                        selectedColor: '#4676FF',\n                        fontSize: '28px',\n                        iconWdith: '38px',\n                        iconHeight: '38px',\n                        image:\"http://ww1.sinaimg.cn/large/0060lm7Tgw1fb5pbtauy1j302c02hmwx.jpg\",  \n                        selectedImage:\"http://ww4.sinaimg.cn/large/0060lm7Tgw1fb5pbb390dj302c02hglg.jpg\",  \n                    }  \n                ]  \n            }\n        },\n        created () {\n\n        },\n        methods: {\n            handleChange (item) {\n                modal.alert({\n                    message: item.title\n                })\n            },\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-demo weex-ct",
    attrs: {}
  }, [_c('wx-tabbar', {
    attrs: {
      "styles": {
        'border-top-width': '1px'
      },
      "bottom": "0px",
      "height": "128px",
      "tabItems": _vm.tabItems,
      "data-evt-wxChange": ""
    },
    on: {
      "wxChange": _vm.handleChange
    },
    nativeOn: {
      "wxChange": _vm.handleChange
    }
  }, [_c('p', {
    staticClass: "tab-page weex-el weex-text",
    attrs: {}
  }, [_vm._v("1")]), _vm._v(" "), _c('p', {
    staticClass: "tab-page weex-el weex-text",
    attrs: {}
  }, [_vm._v("2")]), _vm._v(" "), _c('p', {
    staticClass: "tab-page weex-el weex-text",
    attrs: {}
  }, [_vm._v("3")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f31ebc2", module.exports)
  }
}

/***/ }),
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0d113ddb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f31ebc2\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f31ebc2\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.web.js.map