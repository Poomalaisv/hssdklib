(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./modules */ \"./app/modules/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (HsModules) {\n  \"use strict\";\n\n  HsModules = _interopRequireWildcard(HsModules);\n\n  function _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\n  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\n  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n  /**\r\n   * Gives the referance to the object.\r\n   * @package\r\n   *\r\n   */\n  (function () {\n    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;\n    module.exports = _objectSpread({}, HsModules);\n  })(void 0);\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/modules/index.js":
/*!******************************!*\
  !*** ./app/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./router/router */ \"./app/modules/router/router.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (_exports, _router) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  Object.defineProperty(_exports, \"Router\", {\n    enumerable: true,\n    get: function get() {\n      return _router.Router;\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app/modules/index.js?");

/***/ }),

/***/ "./app/modules/router/router.js":
/*!**************************************!*\
  !*** ./app/modules/router/router.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! cross-fetch */ \"./node_modules/cross-fetch/dist/browser-ponyfill.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (_exports, _crossFetch) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports.Router = void 0;\n  _crossFetch = _interopRequireDefault(_crossFetch);\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  /**\r\n   * Class is used to maintain the router details and\r\n   * @class\r\n   * @since 1.0.0\r\n   */\n  var Router = {\n    /**\r\n       * Get Router Details\r\n       * @method getRouters\r\n       * @param {GET_ROUTERS_PARAM} obj Has household url and Authorization token.\r\n       * @returns {object} Returns API response\r\n       */\n    getRouters: function getRouters() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var url = \"\".concat(obj.household_url, \"api/v3/routers\");\n      return (0, _crossFetch[\"default\"])(url, {\n        method: \"GET\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: obj.authToken\n        }\n      }).then(function (response) {\n        if (response.status === 200) {\n          return response.json();\n        } else {\n          return response;\n        }\n      });\n    },\n\n    /**\r\n       *\r\n       * Ping Router\r\n       * @method ping\r\n       *\r\n       * @since 1.0.0\r\n       * @param {string} routerIp IP of the router\r\n       * @returns {Object} Returns API response\r\n       */\n    ping: function ping(routerIp) {\n      return (0, _crossFetch[\"default\"])(\"https://\".concat(routerIp, \":8081/ping\"), {\n        method: \"PUT\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        }\n      });\n    },\n\n    /**\r\n       *\r\n       * Activation\r\n       * @method activate\r\n       *\r\n       * @since 1.0.0\r\n       * @param {string} routerIp IP of the router\r\n       * @returns {Object} Returns API response\r\n       */\n    activate: function activate(routerIp) {\n      var url = \"https://\".concat(routerIp, \":8081/activation\");\n      return (0, _crossFetch[\"default\"])(url, {\n        method: \"GET\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (response) {\n        if (response.status === 200) {\n          return response.json();\n        } else {\n          return response;\n        }\n      });\n    }\n  };\n  _exports.Router = Router;\n});\n\n//# sourceURL=webpack:///./app/modules/router/router.js?");

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __self__ = (function (root) {\nfunction F() {\nthis.fetch = false;\nthis.DOMException = root.DOMException\n}\nF.prototype = root;\nreturn new F();\n})(typeof self !== 'undefined' ? self : this);\n(function(self) {\n\nvar irrelevant = (function (exports) {\n  var support = {\n    searchParams: 'URLSearchParams' in self,\n    iterable: 'Symbol' in self && 'iterator' in Symbol,\n    blob:\n      'FileReader' in self &&\n      'Blob' in self &&\n      (function() {\n        try {\n          new Blob();\n          return true\n        } catch (e) {\n          return false\n        }\n      })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  };\n\n  function isDataView(obj) {\n    return obj && DataView.prototype.isPrototypeOf(obj)\n  }\n\n  if (support.arrayBuffer) {\n    var viewClasses = [\n      '[object Int8Array]',\n      '[object Uint8Array]',\n      '[object Uint8ClampedArray]',\n      '[object Int16Array]',\n      '[object Uint16Array]',\n      '[object Int32Array]',\n      '[object Uint32Array]',\n      '[object Float32Array]',\n      '[object Float64Array]'\n    ];\n\n    var isArrayBufferView =\n      ArrayBuffer.isView ||\n      function(obj) {\n        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n      };\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name);\n    }\n    if (/[^a-z0-9\\-#$%&'*+.^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value);\n    }\n    return value\n  }\n\n  // Build a destructive iterator for the value list\n  function iteratorFor(items) {\n    var iterator = {\n      next: function() {\n        var value = items.shift();\n        return {done: value === undefined, value: value}\n      }\n    };\n\n    if (support.iterable) {\n      iterator[Symbol.iterator] = function() {\n        return iterator\n      };\n    }\n\n    return iterator\n  }\n\n  function Headers(headers) {\n    this.map = {};\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value);\n      }, this);\n    } else if (Array.isArray(headers)) {\n      headers.forEach(function(header) {\n        this.append(header[0], header[1]);\n      }, this);\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name]);\n      }, this);\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name);\n    value = normalizeValue(value);\n    var oldValue = this.map[name];\n    this.map[name] = oldValue ? oldValue + ', ' + value : value;\n  };\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)];\n  };\n\n  Headers.prototype.get = function(name) {\n    name = normalizeName(name);\n    return this.has(name) ? this.map[name] : null\n  };\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  };\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = normalizeValue(value);\n  };\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    for (var name in this.map) {\n      if (this.map.hasOwnProperty(name)) {\n        callback.call(thisArg, this.map[name], name, this);\n      }\n    }\n  };\n\n  Headers.prototype.keys = function() {\n    var items = [];\n    this.forEach(function(value, name) {\n      items.push(name);\n    });\n    return iteratorFor(items)\n  };\n\n  Headers.prototype.values = function() {\n    var items = [];\n    this.forEach(function(value) {\n      items.push(value);\n    });\n    return iteratorFor(items)\n  };\n\n  Headers.prototype.entries = function() {\n    var items = [];\n    this.forEach(function(value, name) {\n      items.push([name, value]);\n    });\n    return iteratorFor(items)\n  };\n\n  if (support.iterable) {\n    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true;\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result);\n      };\n      reader.onerror = function() {\n        reject(reader.error);\n      };\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader();\n    var promise = fileReaderReady(reader);\n    reader.readAsArrayBuffer(blob);\n    return promise\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader();\n    var promise = fileReaderReady(reader);\n    reader.readAsText(blob);\n    return promise\n  }\n\n  function readArrayBufferAsText(buf) {\n    var view = new Uint8Array(buf);\n    var chars = new Array(view.length);\n\n    for (var i = 0; i < view.length; i++) {\n      chars[i] = String.fromCharCode(view[i]);\n    }\n    return chars.join('')\n  }\n\n  function bufferClone(buf) {\n    if (buf.slice) {\n      return buf.slice(0)\n    } else {\n      var view = new Uint8Array(buf.byteLength);\n      view.set(new Uint8Array(buf));\n      return view.buffer\n    }\n  }\n\n  function Body() {\n    this.bodyUsed = false;\n\n    this._initBody = function(body) {\n      this._bodyInit = body;\n      if (!body) {\n        this._bodyText = '';\n      } else if (typeof body === 'string') {\n        this._bodyText = body;\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body;\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body;\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this._bodyText = body.toString();\n      } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n        this._bodyArrayBuffer = bufferClone(body.buffer);\n        // IE 10-11 can't handle a DataView body.\n        this._bodyInit = new Blob([this._bodyArrayBuffer]);\n      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n        this._bodyArrayBuffer = bufferClone(body);\n      } else {\n        this._bodyText = body = Object.prototype.toString.call(body);\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8');\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type);\n        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n        }\n      }\n    };\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this);\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyArrayBuffer) {\n          return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      };\n\n      this.arrayBuffer = function() {\n        if (this._bodyArrayBuffer) {\n          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)\n        } else {\n          return this.blob().then(readBlobAsArrayBuffer)\n        }\n      };\n    }\n\n    this.text = function() {\n      var rejected = consumed(this);\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return readBlobAsText(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as text')\n      } else {\n        return Promise.resolve(this._bodyText)\n      }\n    };\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      };\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    };\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase();\n    return methods.indexOf(upcased) > -1 ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {};\n    var body = options.body;\n\n    if (input instanceof Request) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url;\n      this.credentials = input.credentials;\n      if (!options.headers) {\n        this.headers = new Headers(input.headers);\n      }\n      this.method = input.method;\n      this.mode = input.mode;\n      this.signal = input.signal;\n      if (!body && input._bodyInit != null) {\n        body = input._bodyInit;\n        input.bodyUsed = true;\n      }\n    } else {\n      this.url = String(input);\n    }\n\n    this.credentials = options.credentials || this.credentials || 'same-origin';\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers);\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET');\n    this.mode = options.mode || this.mode || null;\n    this.signal = options.signal || this.signal;\n    this.referrer = null;\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body);\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this, {body: this._bodyInit})\n  };\n\n  function decode(body) {\n    var form = new FormData();\n    body\n      .trim()\n      .split('&')\n      .forEach(function(bytes) {\n        if (bytes) {\n          var split = bytes.split('=');\n          var name = split.shift().replace(/\\+/g, ' ');\n          var value = split.join('=').replace(/\\+/g, ' ');\n          form.append(decodeURIComponent(name), decodeURIComponent(value));\n        }\n      });\n    return form\n  }\n\n  function parseHeaders(rawHeaders) {\n    var headers = new Headers();\n    // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n    // https://tools.ietf.org/html/rfc7230#section-3.2\n    var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ');\n    preProcessedHeaders.split(/\\r?\\n/).forEach(function(line) {\n      var parts = line.split(':');\n      var key = parts.shift().trim();\n      if (key) {\n        var value = parts.join(':').trim();\n        headers.append(key, value);\n      }\n    });\n    return headers\n  }\n\n  Body.call(Request.prototype);\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {};\n    }\n\n    this.type = 'default';\n    this.status = options.status === undefined ? 200 : options.status;\n    this.ok = this.status >= 200 && this.status < 300;\n    this.statusText = 'statusText' in options ? options.statusText : 'OK';\n    this.headers = new Headers(options.headers);\n    this.url = options.url || '';\n    this._initBody(bodyInit);\n  }\n\n  Body.call(Response.prototype);\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  };\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''});\n    response.type = 'error';\n    return response\n  };\n\n  var redirectStatuses = [301, 302, 303, 307, 308];\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  };\n\n  exports.DOMException = self.DOMException;\n  try {\n    new exports.DOMException();\n  } catch (err) {\n    exports.DOMException = function(message, name) {\n      this.message = message;\n      this.name = name;\n      var error = Error(message);\n      this.stack = error.stack;\n    };\n    exports.DOMException.prototype = Object.create(Error.prototype);\n    exports.DOMException.prototype.constructor = exports.DOMException;\n  }\n\n  function fetch(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request = new Request(input, init);\n\n      if (request.signal && request.signal.aborted) {\n        return reject(new exports.DOMException('Aborted', 'AbortError'))\n      }\n\n      var xhr = new XMLHttpRequest();\n\n      function abortXhr() {\n        xhr.abort();\n      }\n\n      xhr.onload = function() {\n        var options = {\n          status: xhr.status,\n          statusText: xhr.statusText,\n          headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n        };\n        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');\n        var body = 'response' in xhr ? xhr.response : xhr.responseText;\n        resolve(new Response(body, options));\n      };\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'));\n      };\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'));\n      };\n\n      xhr.onabort = function() {\n        reject(new exports.DOMException('Aborted', 'AbortError'));\n      };\n\n      xhr.open(request.method, request.url, true);\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true;\n      } else if (request.credentials === 'omit') {\n        xhr.withCredentials = false;\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob';\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value);\n      });\n\n      if (request.signal) {\n        request.signal.addEventListener('abort', abortXhr);\n\n        xhr.onreadystatechange = function() {\n          // DONE (success or failure)\n          if (xhr.readyState === 4) {\n            request.signal.removeEventListener('abort', abortXhr);\n          }\n        };\n      }\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);\n    })\n  }\n\n  fetch.polyfill = true;\n\n  if (!self.fetch) {\n    self.fetch = fetch;\n    self.Headers = Headers;\n    self.Request = Request;\n    self.Response = Response;\n  }\n\n  exports.Headers = Headers;\n  exports.Request = Request;\n  exports.Response = Response;\n  exports.fetch = fetch;\n\n  return exports;\n\n}({}));\n})(__self__);\ndelete __self__.fetch.polyfill\nexports = __self__.fetch // To enable: import fetch from 'cross-fetch'\nexports.default = __self__.fetch // For TypeScript consumers without esModuleInterop.\nexports.fetch = __self__.fetch // To enable: import {fetch} from 'cross-fetch'\nexports.Headers = __self__.Headers\nexports.Request = __self__.Request\nexports.Response = __self__.Response\nmodule.exports = exports\n\n\n//# sourceURL=webpack:///./node_modules/cross-fetch/dist/browser-ponyfill.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/index.js?");

/***/ })

/******/ });
});