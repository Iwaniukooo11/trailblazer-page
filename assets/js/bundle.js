/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vanillajs-scrollspy/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanillajs-scrollspy/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar fncAnimation = function fncAnimation(callback) {\n  window.setTimeout(callback, 1000 / 60);\n  return callback;\n};\n\nwindow.requestAnimFrame = function () {\n  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fncAnimation;\n}();\n\nvar VanillaScrollspy = function () {\n  function VanillaScrollspy(menu) {\n    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;\n    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutSine';\n\n    _classCallCheck(this, VanillaScrollspy);\n\n    this.menu = menu;\n    this.speed = speed;\n    this.easing = easing;\n  }\n\n  _createClass(VanillaScrollspy, [{\n    key: 'scrollToY',\n    value: function scrollToY() {\n      var _this = this;\n\n      var targetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n      var scrollTargetY = targetY;\n      var scrollY = window.scrollY || document.documentElement.scrollTop;\n      var currentTime = 0;\n      var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));\n\n      var easingEquations = {\n        easeOutSine: function easeOutSine(pos) {\n          return Math.sin(pos * (Math.PI / 2));\n        },\n        easeInOutSine: function easeInOutSine(pos) {\n          return -0.5 * (Math.cos(Math.PI * pos) - 1);\n        },\n        easeInOutQuint: function easeInOutQuint(pos) {\n          /* eslint-disable-next-line */\n          if ((pos /= 0.5) < 1) {\n            return 0.5 * Math.pow(pos, 5);\n          }\n          return 0.5 * (Math.pow(pos - 2, 5) + 2);\n        }\n      };\n\n      var tick = function tick() {\n        currentTime += 1 / 60;\n        var p = currentTime / time;\n        var t = easingEquations[_this.easing](p);\n\n        if (p < 1) {\n          window.requestAnimFrame(tick);\n          window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);\n        } else {\n          window.scrollTo(0, scrollTargetY);\n        }\n      };\n\n      tick();\n    }\n  }, {\n    key: 'menuControl',\n    value: function menuControl() {\n      var i = void 0;\n      var currLink = void 0;\n      var refElement = void 0;\n      var links = this.menu.querySelectorAll('a[href^=\"#\"]');\n      var scrollPos = window.scrollY || document.documentElement.scrollTop;\n\n      for (i = 0; i < links.length; i += 1) {\n        currLink = links[i];\n        refElement = document.querySelector(currLink.getAttribute('href'));\n\n        if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.clientHeight > scrollPos) {\n          currLink.classList.add('active');\n        } else {\n          currLink.classList.remove('active');\n        }\n      }\n    }\n  }, {\n    key: 'animated',\n    value: function animated() {\n      var self = this;\n      function control(e) {\n        e.preventDefault();\n        var target = document.querySelector(this.hash);\n        self.scrollToY(target.offsetTop);\n      }\n\n      var i = void 0;\n      var link = void 0;\n      var links = this.menu.querySelectorAll('a[href^=\"#\"]');\n\n      for (i = 0; i < links.length; i += 1) {\n        link = links[i];\n        link.addEventListener('click', control);\n      }\n    }\n  }, {\n    key: 'init',\n    value: function init() {\n      var _this2 = this;\n\n      this.animated();\n      document.addEventListener('scroll', function () {\n        _this2.menuControl();\n      });\n    }\n  }]);\n\n  return VanillaScrollspy;\n}();\n\nexports.default = VanillaScrollspy;\n\n//# sourceURL=webpack:///./node_modules/vanillajs-scrollspy/lib/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanillajs-scrollspy */ \"./node_modules/vanillajs-scrollspy/lib/index.js\");\n/* harmony import */ var vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0__);\n// import lightGallery from 'lightGallery'\n// lightGallery(document.getElementById('lightGallery'))\nconst nav = document.querySelector('.nav');\nconst navLinks = document.querySelectorAll('.nav__link');\nconst navCloser = document.querySelector('.closer');\nconst time = 800;\nconst burger = document.querySelector('.burger');\nconst lastLine = document.querySelector('.burger__line--last');\nnavLinks.forEach(e => e.addEventListener('click', () => {\n  setTimeout(() => {\n    nav.classList.remove('on');\n    navCloser.classList.remove('on');\n    lastLine.classList.remove('on');\n  }, time - 10);\n}));\nnavCloser.addEventListener('click', () => {\n  navCloser.classList.remove('on');\n  nav.classList.remove('on');\n  lastLine.classList.remove('on');\n});\nburger.addEventListener('click', () => {\n  nav.classList.toggle('on');\n  lastLine.classList.toggle('on');\n  navCloser.classList.toggle('on');\n});\n\nconst navbar = document.querySelector('.nav');\nconst scrollspy = new vanillajs_scrollspy__WEBPACK_IMPORTED_MODULE_0___default.a(navbar, time);\nscrollspy.init();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });