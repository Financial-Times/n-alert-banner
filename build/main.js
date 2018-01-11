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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/***/ (function(module, exports, __webpack_require__) {

var require;/*** IMPORTS FROM imports-loader ***/
var define = false;
var requireText = require;

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alertBanner = __webpack_require__("./src/js/alert-banner.js");

var _alertBanner2 = _interopRequireDefault(_alertBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function constructAll() {
	_alertBanner2['default'].init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
}

document.addEventListener('o.DOMContentLoaded', constructAll);

exports['default'] = _alertBanner2['default'];
module.exports = exports['default'];


/***/ }),

/***/ "./src/js/alert-banner.js":
/***/ (function(module, exports, __webpack_require__) {

var require;/*** IMPORTS FROM imports-loader ***/
var define = false;
var requireText = require;

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buildElement = __webpack_require__("./src/js/lib/build-element.js");

var _buildElement2 = _interopRequireDefault(_buildElement);

var _getOptions = __webpack_require__("./src/js/lib/get-options.js");

var _getOptions2 = _interopRequireDefault(_getOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a alertBanner.
 */
var AlertBanner = function () {

	/**
  * Class constructor.
  * @param {HTMLElement} [alertBannerElement] - The alertBanner element in the DOM
  * @param {Object} [options={}] - An options object for configuring the alertBanner
  */
	function AlertBanner(alertBannerElement, options) {
		_classCallCheck(this, AlertBanner);

		this.alertBannerElement = alertBannerElement;

		// Default the options
		var alertBannerClass = options && options.alertBannerClass ? options.alertBannerClass : 'n-alert-banner';
		var alertBannerType = options && options.alertBannerType ? options.alertBannerType : 'neutral';
		this.options = Object.assign({}, {
			autoOpen: true,

			alertBannerClass: alertBannerClass,
			alertBannerClosedClass: alertBannerClass + '--closed',
			outerClass: alertBannerClass + '__outer',
			outerClassAlertType: alertBannerClass + '__outer--' + alertBannerType,
			innerClass: alertBannerClass + '__inner',
			innerClassAlertType: alertBannerClass + '__inner--' + alertBannerType,
			contentClass: alertBannerClass + '__content',
			contentClassType: alertBannerClass + '__content--' + alertBannerType,
			contentLongClass: alertBannerClass + '__content--long',
			contentShortClass: alertBannerClass + '__content--short',
			actionsClass: alertBannerClass + '__actions',
			actionClass: alertBannerClass + '__action',
			actionSecondaryClass: alertBannerClass + '__action--secondary',
			buttonClass: alertBannerClass + '__button',
			buttonClassAlertType: alertBannerClass + '__button--' + alertBannerType,
			linkClass: alertBannerClass + '__link',
			linkClassAlertType: alertBannerClass + '__link--' + alertBannerType,
			closeButtonClass: alertBannerClass + '__close',
			closeButtonClassAlertType: alertBannerClass + '__close--' + alertBannerType,

			contentLong1: '&hellip;',
			contentLong2: '&hellip;',
			contentShort: null,
			buttonLabel: null,
			buttonUrl: '#',
			linkLabel: null,
			linkUrl: '#',
			closeButtonLabel: 'Close'

		}, options || _getOptions2['default'].fromDom(alertBannerElement));

		// Render the alertBanner
		this.render();

		// There can be only one
		AlertBanner._alertInstances.forEach(function (alertBanner) {
			return alertBanner.close();
		});
		AlertBanner._alertInstances = [this];

		if (this.options.autoOpen) {
			this.open();
		} else {
			this.close();
		}
	}
	/**
  * Render the alertBanner.
  */


	_createClass(AlertBanner, [{
		key: 'render',
		value: function render() {
			// If the alertBanner element is not an HTML Element, build one
			if (!(this.alertBannerElement instanceof HTMLElement)) {
				this.alertBannerElement = _buildElement2['default'].alertBanner(this.options);
				document.body.appendChild(this.alertBannerElement);
			}

			// Select all the elements we need
			this.innerElement = this.alertBannerElement.querySelector('[data-n-alert-banner-inner]');
			// Build the close button
			this.closeButtonElement = _buildElement2['default'].closeButton(this);
			this.innerElement.appendChild(this.closeButtonElement);
		}

		/**
   * Open the alert banner.
   */

	}, {
		key: 'open',
		value: function open() {
			this.alertBannerElement.classList.remove(this.options.alertBannerClosedClass);
			this.alertBannerElement.dispatchEvent(new CustomEvent('n.alertBannerOpened'));
		}

		/**
   * Close the alertBanner.
   */

	}, {
		key: 'close',
		value: function close() {
			this.alertBannerElement.classList.add(this.options.alertBannerClosedClass);
			this.alertBannerElement.dispatchEvent(new CustomEvent('n.alertBannerClosed'));
		}

		/**
   * Initialise alertBanner components.
   * @param {(HTMLElement|String)} rootElement - The root element to intialise banners in, or a CSS selector for the root element
   * @param {Object} [options={}] - An options object for configuring the banners
   */

	}], [{
		key: 'init',
		value: function init(rootElement, options) {

			if (!rootElement) {
				rootElement = document.body;
			}

			// If the rootElement isnt an HTMLElement, treat it as a selector
			if (!(rootElement instanceof HTMLElement)) {
				rootElement = document.querySelector(rootElement);
			}

			// If the rootElement is an HTMLElement (ie it was found in the document anywhere)
			// AND the rootElement has the data-n-component=n-alert-banner then initialise just 1 alertBanner (this one)
			if (rootElement instanceof HTMLElement && /\balert\b/.test(rootElement.getAttribute('data-n-component'))) {
				return new AlertBanner(rootElement, options);
			}

			// If the rootElement wasn't itself a alertBanner, then find ALL of the child things that have the data-n-component=n-alert-banner set
			return Array.from(rootElement.querySelectorAll('[data-n-component="n-alert-banner"]'), function (alertBannerElement) {
				return new AlertBanner(alertBannerElement, options);
			});
		}
	}]);

	return AlertBanner;
}();

AlertBanner._alertInstances = [];

// Exports
exports['default'] = AlertBanner;
module.exports = exports['default'];


/***/ }),

/***/ "./src/js/lib/build-element.js":
/***/ (function(module, exports, __webpack_require__) {

var require;/*** IMPORTS FROM imports-loader ***/
var define = false;
var requireText = require;

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Build a close button element.
 * @returns {HTMLElement} Returns the new close button element
 */

exports['default'] = {

	alertBanner: function alertBanner(options) {
		var alertBannerElement = document.createElement('div');
		alertBannerElement.classList.add(options.alertBannerClass);
		alertBannerElement.setAttribute('data-n-component', 'n-alert-banner');

		var contentHtml = void 0;
		var actionHTML = '';
		var secondaryActionHtml = '';
		var buttonHTML = '';

		if (options.contentShort) {
			contentHtml = '\n\t\t\t\t<div class="' + options.contentClass + ' ' + options.contentLongClass + ' ' + options.contentClassType + '">\n\t\t\t\t\t<p><b>' + options.contentLong1 + '</b> ' + options.contentLong2 + '</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="' + options.contentClass + ' ' + options.contentShortClass + ' ' + options.contentClassType + '">\n\t\t\t\t\t<p>' + options.contentShort + '</p>\n\t\t\t\t</div>\n\t\t\t';
		} else {
			contentHtml = '\n\t\t\t\t<div class="' + options.contentClass + ' ' + options.contentLongClass + ' ' + options.contentClassType + '">\n\t\t\t\t\t<p><b>' + options.contentLong1 + '</b> ' + options.contentLong2 + '</p>\n\t\t\t\t</div>\n\t\t\t';
		}

		if (options.linkLabel) {
			secondaryActionHtml = '\n\t\t\t\t<div class="' + options.actionClass + ' ' + options.actionSecondaryClass + '">\n\t\t\t\t\t<a href="' + options.linkUrl + '" class="' + options.linkClass + ' ' + options.linkClassAlertType + '">' + options.linkLabel + '</a>\n\t\t\t\t</div>\n\t\t\t';
		}

		if (options.buttonLabel) {
			buttonHTML = '\n\t\t\t\t<div class="' + options.actionClass + '">\n\t\t\t\t\t<a href="' + options.buttonUrl + '" class="' + options.buttonClass + ' ' + options.buttonClassAlertType + '">' + options.buttonLabel + '</a>\n\t\t\t\t</div>\n\t\t\t';
		}

		if (options.linkLabel || options.buttonLabel) {
			actionHTML = '\n\t\t\t\t<div class="' + options.actionsClass + '">\n\t\t\t\t\t' + buttonHTML + '\n\t\t\t\t\t' + secondaryActionHtml + '\n\t\t\t\t</div>\n\t\t\t';
		}

		alertBannerElement.innerHTML = '\n\t\t<div class="' + options.outerClass + ' ' + options.outerClassAlertType + '">\n\t\t\t<div class="' + options.innerClass + ' ' + options.innerClassAlertType + '" data-n-alert-banner-inner="">\n\t\t\t\t' + contentHtml + '\n\t\t\t\t' + actionHTML + '\n\t\t\t</div>\n\t\t</div>\n\t\t';

		return alertBannerElement;
	},

	closeButton: function closeButton(alertBannerElement) {

		var options = alertBannerElement.options;
		var closeButton = document.createElement('a');
		closeButton.classList.add(options.closeButtonClass, options.closeButtonClassAlertType);
		closeButton.setAttribute('role', 'button');
		closeButton.setAttribute('href', '#void');
		closeButton.setAttribute('aria-label', options.closeButtonLabel);
		closeButton.setAttribute('title', options.closeButtonLabel);

		// Add event listeners
		closeButton.addEventListener('click', function (event) {
			alertBannerElement.close();
			event.preventDefault();
		});

		return closeButton;
	}
};
module.exports = exports['default'];


/***/ }),

/***/ "./src/js/lib/get-options.js":
/***/ (function(module, exports, __webpack_require__) {

var require;/*** IMPORTS FROM imports-loader ***/
var define = false;
var requireText = require;

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Get the data attributes from the alertBannerElement. If the alertBanner is being set up
 * declaratively, this method is used to extract the data attributes from the DOM.
 * @param {HTMLElement} alertBannerElement - The alertBanner element in the DOM
 */

exports['default'] = {

	fromDom: function fromDom(alertBannerElement) {

		if (!(alertBannerElement instanceof HTMLElement)) {
			return {};
		}

		return Object.keys(alertBannerElement.dataset).reduce(function (options, key) {

			// Ignore data-n-component
			if (key === 'nComponent') {
				return options;
			}

			// Build a concise key and get the option value
			var shortKey = key.replace(/^alert(\w)(\w+)$/, function (m, m1, m2) {
				return m1.toLowerCase() + m2;
			});
			var value = alertBannerElement.dataset[key];

			// Try parsing the value as JSON, otherwise just set it as a string
			try {
				options[shortKey] = JSON.parse(value.replace(/\'/g, '"'));
			} catch (error) {
				options[shortKey] = value;
			}

			return options;
		}, {});
	}
};
module.exports = exports['default'];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIGI2OTMxN2I1OGJlNjMyM2RmMmFhIiwiLi9tYWluLmpzIiwiLi9zcmMvanMvYWxlcnQtYmFubmVyLmpzIiwiLi9zcmMvanMvbGliL2J1aWxkLWVsZW1lbnQuanMiLCIuL3NyYy9qcy9saWIvZ2V0LW9wdGlvbnMuanMiXSwibmFtZXMiOlsiY29uc3RydWN0QWxsIiwiaW5pdCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJBbGVydEJhbm5lciIsImFsZXJ0QmFubmVyRWxlbWVudCIsIm9wdGlvbnMiLCJhbGVydEJhbm5lckNsYXNzIiwiYWxlcnRCYW5uZXJUeXBlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXV0b09wZW4iLCJhbGVydEJhbm5lckNsb3NlZENsYXNzIiwib3V0ZXJDbGFzcyIsIm91dGVyQ2xhc3NBbGVydFR5cGUiLCJpbm5lckNsYXNzIiwiaW5uZXJDbGFzc0FsZXJ0VHlwZSIsImNvbnRlbnRDbGFzcyIsImNvbnRlbnRDbGFzc1R5cGUiLCJjb250ZW50TG9uZ0NsYXNzIiwiY29udGVudFNob3J0Q2xhc3MiLCJhY3Rpb25zQ2xhc3MiLCJhY3Rpb25DbGFzcyIsImFjdGlvblNlY29uZGFyeUNsYXNzIiwiYnV0dG9uQ2xhc3MiLCJidXR0b25DbGFzc0FsZXJ0VHlwZSIsImxpbmtDbGFzcyIsImxpbmtDbGFzc0FsZXJ0VHlwZSIsImNsb3NlQnV0dG9uQ2xhc3MiLCJjbG9zZUJ1dHRvbkNsYXNzQWxlcnRUeXBlIiwiY29udGVudExvbmcxIiwiY29udGVudExvbmcyIiwiY29udGVudFNob3J0IiwiYnV0dG9uTGFiZWwiLCJidXR0b25VcmwiLCJsaW5rTGFiZWwiLCJsaW5rVXJsIiwiY2xvc2VCdXR0b25MYWJlbCIsImZyb21Eb20iLCJyZW5kZXIiLCJfYWxlcnRJbnN0YW5jZXMiLCJmb3JFYWNoIiwiYWxlcnRCYW5uZXIiLCJjbG9zZSIsIm9wZW4iLCJIVE1MRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImlubmVyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZUJ1dHRvbkVsZW1lbnQiLCJjbG9zZUJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImFkZCIsInJvb3RFbGVtZW50IiwidGVzdCIsImdldEF0dHJpYnV0ZSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY29udGVudEh0bWwiLCJhY3Rpb25IVE1MIiwic2Vjb25kYXJ5QWN0aW9uSHRtbCIsImJ1dHRvbkhUTUwiLCJpbm5lckhUTUwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5cyIsImRhdGFzZXQiLCJyZWR1Y2UiLCJrZXkiLCJzaG9ydEtleSIsInJlcGxhY2UiLCJtIiwibTEiLCJtMiIsInRvTG93ZXJDYXNlIiwidmFsdWUiLCJKU09OIiwicGFyc2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7OztBQUVBLFNBQVNBLFlBQVQsR0FBeUI7QUFDeEIsMEJBQVlDLElBQVo7QUFDQUMsVUFBU0MsbUJBQVQsQ0FBNkIsb0JBQTdCLEVBQW1ESCxZQUFuRDtBQUNBOztB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Ozs7Ozs7cUJBTWU7O0FBRWRiLFVBQVMsaUJBQUNqQyxrQkFBRCxFQUF3Qjs7QUFFaEMsTUFBSSxFQUFFQSw4QkFBOEJ3QyxXQUFoQyxDQUFKLEVBQWtEO0FBQ2pELFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU9wQyxPQUFPK0QsSUFBUCxDQUFZbkUsbUJBQW1Cb0UsT0FBL0IsRUFBd0NDLE1BQXhDLENBQStDLFVBQUNwRSxPQUFELEVBQVVxRSxHQUFWLEVBQWtCOztBQUV2RTtBQUNBLE9BQUlBLFFBQVEsWUFBWixFQUEwQjtBQUN6QixXQUFPckUsT0FBUDtBQUNBOztBQUVEO0FBQ0EsT0FBTXNFLFdBQVdELElBQUlFLE9BQUosQ0FBWSxrQkFBWixFQUFnQyxVQUFDQyxDQUFELEVBQUlDLEVBQUosRUFBUUMsRUFBUjtBQUFBLFdBQWVELEdBQUdFLFdBQUgsS0FBbUJELEVBQWxDO0FBQUEsSUFBaEMsQ0FBakI7QUFDQSxPQUFNRSxRQUFRN0UsbUJBQW1Cb0UsT0FBbkIsQ0FBMkJFLEdBQTNCLENBQWQ7O0FBRUE7QUFDQSxPQUFJO0FBQ0hyRSxZQUFRc0UsUUFBUixJQUFvQk8sS0FBS0MsS0FBTCxDQUFXRixNQUFNTCxPQUFOLENBQWMsS0FBZCxFQUFxQixHQUFyQixDQUFYLENBQXBCO0FBQ0EsSUFGRCxDQUVFLE9BQU9RLEtBQVAsRUFBYztBQUNmL0UsWUFBUXNFLFFBQVIsSUFBb0JNLEtBQXBCO0FBQ0E7O0FBRUQsVUFBTzVFLE9BQVA7QUFDQSxHQW5CTSxFQW1CSixFQW5CSSxDQUFQO0FBb0JBO0FBNUJhLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2OTMxN2I1OGJlNjMyM2RmMmFhIiwiaW1wb3J0IEFsZXJ0QmFubmVyIGZyb20gJy4vc3JjL2pzL2FsZXJ0LWJhbm5lcic7XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdEFsbCAoKSB7XG5cdEFsZXJ0QmFubmVyLmluaXQoKTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignby5ET01Db250ZW50TG9hZGVkJywgY29uc3RydWN0QWxsKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignby5ET01Db250ZW50TG9hZGVkJywgY29uc3RydWN0QWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRCYW5uZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLmpzIiwiaW1wb3J0IGJ1aWxkRWxlbWVudCBmcm9tICcuL2xpYi9idWlsZC1lbGVtZW50JztcbmltcG9ydCBnZXRPcHRpb25zIGZyb20gJy4vbGliL2dldC1vcHRpb25zJztcbi8qKlxuICogUmVwcmVzZW50cyBhIGFsZXJ0QmFubmVyLlxuICovXG5jbGFzcyBBbGVydEJhbm5lciB7XG5cblx0LyoqXG5cdCAqIENsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbYWxlcnRCYW5uZXJFbGVtZW50XSAtIFRoZSBhbGVydEJhbm5lciBlbGVtZW50IGluIHRoZSBET01cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSAtIEFuIG9wdGlvbnMgb2JqZWN0IGZvciBjb25maWd1cmluZyB0aGUgYWxlcnRCYW5uZXJcblx0ICovXG5cdGNvbnN0cnVjdG9yIChhbGVydEJhbm5lckVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdHRoaXMuYWxlcnRCYW5uZXJFbGVtZW50ID0gYWxlcnRCYW5uZXJFbGVtZW50O1xuXG5cdFx0Ly8gRGVmYXVsdCB0aGUgb3B0aW9uc1xuXHRcdGNvbnN0IGFsZXJ0QmFubmVyQ2xhc3MgPSBvcHRpb25zICYmIG9wdGlvbnMuYWxlcnRCYW5uZXJDbGFzcyA/IG9wdGlvbnMuYWxlcnRCYW5uZXJDbGFzcyA6ICduLWFsZXJ0LWJhbm5lcic7XG5cdFx0Y29uc3QgYWxlcnRCYW5uZXJUeXBlID0gb3B0aW9ucyAmJiBvcHRpb25zLmFsZXJ0QmFubmVyVHlwZSA/IG9wdGlvbnMuYWxlcnRCYW5uZXJUeXBlIDogJ25ldXRyYWwnO1xuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcblx0XHRcdGF1dG9PcGVuOiB0cnVlLFxuXG5cblx0XHRcdGFsZXJ0QmFubmVyQ2xhc3M6IGFsZXJ0QmFubmVyQ2xhc3MsXG5cdFx0XHRhbGVydEJhbm5lckNsb3NlZENsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfS0tY2xvc2VkYCxcblx0XHRcdG91dGVyQ2xhc3M6IGAke2FsZXJ0QmFubmVyQ2xhc3N9X19vdXRlcmAsXG5cdFx0XHRvdXRlckNsYXNzQWxlcnRUeXBlOiBgJHthbGVydEJhbm5lckNsYXNzfV9fb3V0ZXItLSR7YWxlcnRCYW5uZXJUeXBlfWAsXG5cdFx0XHRpbm5lckNsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfV9faW5uZXJgLFxuXHRcdFx0aW5uZXJDbGFzc0FsZXJ0VHlwZTogYCR7YWxlcnRCYW5uZXJDbGFzc31fX2lubmVyLS0ke2FsZXJ0QmFubmVyVHlwZX1gLFxuXHRcdFx0Y29udGVudENsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfV9fY29udGVudGAsXG5cdFx0XHRjb250ZW50Q2xhc3NUeXBlOiBgJHthbGVydEJhbm5lckNsYXNzfV9fY29udGVudC0tJHthbGVydEJhbm5lclR5cGV9YCxcblx0XHRcdGNvbnRlbnRMb25nQ2xhc3M6IGAke2FsZXJ0QmFubmVyQ2xhc3N9X19jb250ZW50LS1sb25nYCxcblx0XHRcdGNvbnRlbnRTaG9ydENsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfV9fY29udGVudC0tc2hvcnRgLFxuXHRcdFx0YWN0aW9uc0NsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfV9fYWN0aW9uc2AsXG5cdFx0XHRhY3Rpb25DbGFzczogYCR7YWxlcnRCYW5uZXJDbGFzc31fX2FjdGlvbmAsXG5cdFx0XHRhY3Rpb25TZWNvbmRhcnlDbGFzczogYCR7YWxlcnRCYW5uZXJDbGFzc31fX2FjdGlvbi0tc2Vjb25kYXJ5YCxcblx0XHRcdGJ1dHRvbkNsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfV9fYnV0dG9uYCxcblx0XHRcdGJ1dHRvbkNsYXNzQWxlcnRUeXBlOiBgJHthbGVydEJhbm5lckNsYXNzfV9fYnV0dG9uLS0ke2FsZXJ0QmFubmVyVHlwZX1gLFxuXHRcdFx0bGlua0NsYXNzOiBgJHthbGVydEJhbm5lckNsYXNzfV9fbGlua2AsXG5cdFx0XHRsaW5rQ2xhc3NBbGVydFR5cGU6IGAke2FsZXJ0QmFubmVyQ2xhc3N9X19saW5rLS0ke2FsZXJ0QmFubmVyVHlwZX1gLFxuXHRcdFx0Y2xvc2VCdXR0b25DbGFzczogYCR7YWxlcnRCYW5uZXJDbGFzc31fX2Nsb3NlYCxcblx0XHRcdGNsb3NlQnV0dG9uQ2xhc3NBbGVydFR5cGU6IGAke2FsZXJ0QmFubmVyQ2xhc3N9X19jbG9zZS0tJHthbGVydEJhbm5lclR5cGV9YCxcblxuXHRcdFx0Y29udGVudExvbmcxOiAnJmhlbGxpcDsnLFxuXHRcdFx0Y29udGVudExvbmcyOiAnJmhlbGxpcDsnLFxuXHRcdFx0Y29udGVudFNob3J0OiBudWxsLFxuXHRcdFx0YnV0dG9uTGFiZWw6IG51bGwsXG5cdFx0XHRidXR0b25Vcmw6ICcjJyxcblx0XHRcdGxpbmtMYWJlbDogbnVsbCxcblx0XHRcdGxpbmtVcmw6ICcjJyxcblx0XHRcdGNsb3NlQnV0dG9uTGFiZWw6ICdDbG9zZSdcblxuXHRcdH0sIG9wdGlvbnMgfHwgZ2V0T3B0aW9ucy5mcm9tRG9tKGFsZXJ0QmFubmVyRWxlbWVudCkpO1xuXG5cdFx0Ly8gUmVuZGVyIHRoZSBhbGVydEJhbm5lclxuXHRcdHRoaXMucmVuZGVyKCk7XG5cblx0XHQvLyBUaGVyZSBjYW4gYmUgb25seSBvbmVcblx0XHRBbGVydEJhbm5lci5fYWxlcnRJbnN0YW5jZXMuZm9yRWFjaChhbGVydEJhbm5lciA9PiBhbGVydEJhbm5lci5jbG9zZSgpKTtcblx0XHRBbGVydEJhbm5lci5fYWxlcnRJbnN0YW5jZXMgPSBbdGhpc107XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogUmVuZGVyIHRoZSBhbGVydEJhbm5lci5cblx0ICovXG5cdHJlbmRlciAoKSB7XG5cdFx0Ly8gSWYgdGhlIGFsZXJ0QmFubmVyIGVsZW1lbnQgaXMgbm90IGFuIEhUTUwgRWxlbWVudCwgYnVpbGQgb25lXG5cdFx0aWYgKCEodGhpcy5hbGVydEJhbm5lckVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRcdHRoaXMuYWxlcnRCYW5uZXJFbGVtZW50ID0gYnVpbGRFbGVtZW50LmFsZXJ0QmFubmVyKHRoaXMub3B0aW9ucyk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYWxlcnRCYW5uZXJFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBTZWxlY3QgYWxsIHRoZSBlbGVtZW50cyB3ZSBuZWVkXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSB0aGlzLmFsZXJ0QmFubmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uLWFsZXJ0LWJhbm5lci1pbm5lcl0nKTtcblx0XHQvLyBCdWlsZCB0aGUgY2xvc2UgYnV0dG9uXG5cdFx0dGhpcy5jbG9zZUJ1dHRvbkVsZW1lbnQgPSBidWlsZEVsZW1lbnQuY2xvc2VCdXR0b24odGhpcyk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbkVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW4gdGhlIGFsZXJ0IGJhbm5lci5cblx0ICovXG5cdG9wZW4gKCkge1xuXHRcdHRoaXMuYWxlcnRCYW5uZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLmFsZXJ0QmFubmVyQ2xvc2VkQ2xhc3MpO1xuXHRcdHRoaXMuYWxlcnRCYW5uZXJFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduLmFsZXJ0QmFubmVyT3BlbmVkJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSBhbGVydEJhbm5lci5cblx0ICovXG5cdGNsb3NlICgpIHtcblx0XHR0aGlzLmFsZXJ0QmFubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5hbGVydEJhbm5lckNsb3NlZENsYXNzKTtcblx0XHR0aGlzLmFsZXJ0QmFubmVyRWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbi5hbGVydEJhbm5lckNsb3NlZCcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXNlIGFsZXJ0QmFubmVyIGNvbXBvbmVudHMuXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fFN0cmluZyl9IHJvb3RFbGVtZW50IC0gVGhlIHJvb3QgZWxlbWVudCB0byBpbnRpYWxpc2UgYmFubmVycyBpbiwgb3IgYSBDU1Mgc2VsZWN0b3IgZm9yIHRoZSByb290IGVsZW1lbnRcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSAtIEFuIG9wdGlvbnMgb2JqZWN0IGZvciBjb25maWd1cmluZyB0aGUgYmFubmVyc1xuXHQgKi9cblx0c3RhdGljIGluaXQgKHJvb3RFbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHRpZiAoIXJvb3RFbGVtZW50KSB7XG5cdFx0XHRyb290RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHJvb3RFbGVtZW50IGlzbnQgYW4gSFRNTEVsZW1lbnQsIHRyZWF0IGl0IGFzIGEgc2VsZWN0b3Jcblx0XHRpZiAoIShyb290RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdFx0cm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgcm9vdEVsZW1lbnQgaXMgYW4gSFRNTEVsZW1lbnQgKGllIGl0IHdhcyBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgYW55d2hlcmUpXG5cdFx0Ly8gQU5EIHRoZSByb290RWxlbWVudCBoYXMgdGhlIGRhdGEtbi1jb21wb25lbnQ9bi1hbGVydC1iYW5uZXIgdGhlbiBpbml0aWFsaXNlIGp1c3QgMSBhbGVydEJhbm5lciAodGhpcyBvbmUpXG5cdFx0aWYgKHJvb3RFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgL1xcYmFsZXJ0XFxiLy50ZXN0KHJvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uLWNvbXBvbmVudCcpKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBBbGVydEJhbm5lcihyb290RWxlbWVudCwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHJvb3RFbGVtZW50IHdhc24ndCBpdHNlbGYgYSBhbGVydEJhbm5lciwgdGhlbiBmaW5kIEFMTCBvZiB0aGUgY2hpbGQgdGhpbmdzIHRoYXQgaGF2ZSB0aGUgZGF0YS1uLWNvbXBvbmVudD1uLWFsZXJ0LWJhbm5lciBzZXRcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShyb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uLWNvbXBvbmVudD1cIm4tYWxlcnQtYmFubmVyXCJdJyksIGFsZXJ0QmFubmVyRWxlbWVudCA9PiBuZXcgQWxlcnRCYW5uZXIoYWxlcnRCYW5uZXJFbGVtZW50LCBvcHRpb25zKSk7XG5cdH1cblxufVxuXG5BbGVydEJhbm5lci5fYWxlcnRJbnN0YW5jZXMgPSBbXTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgQWxlcnRCYW5uZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYWxlcnQtYmFubmVyLmpzIiwiLyoqXG4gKiBCdWlsZCBhIGNsb3NlIGJ1dHRvbiBlbGVtZW50LlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIHRoZSBuZXcgY2xvc2UgYnV0dG9uIGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cblx0YWxlcnRCYW5uZXI6IChvcHRpb25zKSA9PiB7XG5cdFx0Y29uc3QgYWxlcnRCYW5uZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YWxlcnRCYW5uZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQob3B0aW9ucy5hbGVydEJhbm5lckNsYXNzKTtcblx0XHRhbGVydEJhbm5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW4tY29tcG9uZW50JywgJ24tYWxlcnQtYmFubmVyJyk7XG5cblx0XHRsZXQgY29udGVudEh0bWw7XG5cdFx0bGV0IGFjdGlvbkhUTUwgPSAnJztcblx0XHRsZXQgc2Vjb25kYXJ5QWN0aW9uSHRtbCA9ICcnO1xuXHRcdGxldCBidXR0b25IVE1MID0gJyc7XG5cblx0XHRpZiAob3B0aW9ucy5jb250ZW50U2hvcnQpIHtcblx0XHRcdGNvbnRlbnRIdG1sID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNvbnRlbnRDbGFzc30gJHtvcHRpb25zLmNvbnRlbnRMb25nQ2xhc3N9ICR7b3B0aW9ucy5jb250ZW50Q2xhc3NUeXBlfVwiPlxuXHRcdFx0XHRcdDxwPjxiPiR7b3B0aW9ucy5jb250ZW50TG9uZzF9PC9iPiAke29wdGlvbnMuY29udGVudExvbmcyfTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY29udGVudENsYXNzfSAke29wdGlvbnMuY29udGVudFNob3J0Q2xhc3N9ICR7b3B0aW9ucy5jb250ZW50Q2xhc3NUeXBlfVwiPlxuXHRcdFx0XHRcdDxwPiR7b3B0aW9ucy5jb250ZW50U2hvcnR9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRlbnRIdG1sID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmNvbnRlbnRDbGFzc30gJHtvcHRpb25zLmNvbnRlbnRMb25nQ2xhc3N9ICR7b3B0aW9ucy5jb250ZW50Q2xhc3NUeXBlfVwiPlxuXHRcdFx0XHRcdDxwPjxiPiR7b3B0aW9ucy5jb250ZW50TG9uZzF9PC9iPiAke29wdGlvbnMuY29udGVudExvbmcyfTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmxpbmtMYWJlbCkge1xuXHRcdFx0c2Vjb25kYXJ5QWN0aW9uSHRtbCA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5hY3Rpb25DbGFzc30gJHtvcHRpb25zLmFjdGlvblNlY29uZGFyeUNsYXNzfVwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIke29wdGlvbnMubGlua1VybH1cIiBjbGFzcz1cIiR7b3B0aW9ucy5saW5rQ2xhc3N9ICR7b3B0aW9ucy5saW5rQ2xhc3NBbGVydFR5cGV9XCI+JHtvcHRpb25zLmxpbmtMYWJlbH08L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5idXR0b25MYWJlbCkge1xuXHRcdFx0YnV0dG9uSFRNTCA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5hY3Rpb25DbGFzc31cIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiJHtvcHRpb25zLmJ1dHRvblVybH1cIiBjbGFzcz1cIiR7b3B0aW9ucy5idXR0b25DbGFzc30gJHtvcHRpb25zLmJ1dHRvbkNsYXNzQWxlcnRUeXBlfVwiPiR7b3B0aW9ucy5idXR0b25MYWJlbH08L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9XG5cblx0XHRpZihvcHRpb25zLmxpbmtMYWJlbCB8fCBvcHRpb25zLmJ1dHRvbkxhYmVsKSB7XG5cdFx0XHRhY3Rpb25IVE1MID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmFjdGlvbnNDbGFzc31cIj5cblx0XHRcdFx0XHQke2J1dHRvbkhUTUx9XG5cdFx0XHRcdFx0JHtzZWNvbmRhcnlBY3Rpb25IdG1sfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGA7XG5cdFx0fVxuXG5cdFx0YWxlcnRCYW5uZXJFbGVtZW50LmlubmVySFRNTCA9IGBcblx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLm91dGVyQ2xhc3N9ICR7b3B0aW9ucy5vdXRlckNsYXNzQWxlcnRUeXBlfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5pbm5lckNsYXNzfSAke29wdGlvbnMuaW5uZXJDbGFzc0FsZXJ0VHlwZX1cIiBkYXRhLW4tYWxlcnQtYmFubmVyLWlubmVyPVwiXCI+XG5cdFx0XHRcdCR7Y29udGVudEh0bWx9XG5cdFx0XHRcdCR7YWN0aW9uSFRNTH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0XHRyZXR1cm4gYWxlcnRCYW5uZXJFbGVtZW50O1xuXHR9LFxuXG4gY2xvc2VCdXR0b246IChhbGVydEJhbm5lckVsZW1lbnQpID0+IHtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBhbGVydEJhbm5lckVsZW1lbnQub3B0aW9uc1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQob3B0aW9ucy5jbG9zZUJ1dHRvbkNsYXNzLCBvcHRpb25zLmNsb3NlQnV0dG9uQ2xhc3NBbGVydFR5cGUpO1xuXHRcdGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcblx0XHRjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3ZvaWQnKTtcblx0XHRjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBvcHRpb25zLmNsb3NlQnV0dG9uTGFiZWwpO1xuXHRcdGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBvcHRpb25zLmNsb3NlQnV0dG9uTGFiZWwpO1xuXG5cdFx0Ly8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuXHRcdGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0YWxlcnRCYW5uZXJFbGVtZW50LmNsb3NlKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNsb3NlQnV0dG9uO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2J1aWxkLWVsZW1lbnQuanMiLCIvKipcbiAqIEdldCB0aGUgZGF0YSBhdHRyaWJ1dGVzIGZyb20gdGhlIGFsZXJ0QmFubmVyRWxlbWVudC4gSWYgdGhlIGFsZXJ0QmFubmVyIGlzIGJlaW5nIHNldCB1cFxuICogZGVjbGFyYXRpdmVseSwgdGhpcyBtZXRob2QgaXMgdXNlZCB0byBleHRyYWN0IHRoZSBkYXRhIGF0dHJpYnV0ZXMgZnJvbSB0aGUgRE9NLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYWxlcnRCYW5uZXJFbGVtZW50IC0gVGhlIGFsZXJ0QmFubmVyIGVsZW1lbnQgaW4gdGhlIERPTVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuXHRmcm9tRG9tOiAoYWxlcnRCYW5uZXJFbGVtZW50KSA9PiB7XG5cblx0XHRpZiAoIShhbGVydEJhbm5lckVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYWxlcnRCYW5uZXJFbGVtZW50LmRhdGFzZXQpLnJlZHVjZSgob3B0aW9ucywga2V5KSA9PiB7XG5cblx0XHRcdC8vIElnbm9yZSBkYXRhLW4tY29tcG9uZW50XG5cdFx0XHRpZiAoa2V5ID09PSAnbkNvbXBvbmVudCcpIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJ1aWxkIGEgY29uY2lzZSBrZXkgYW5kIGdldCB0aGUgb3B0aW9uIHZhbHVlXG5cdFx0XHRjb25zdCBzaG9ydEtleSA9IGtleS5yZXBsYWNlKC9eYWxlcnQoXFx3KShcXHcrKSQvLCAobSwgbTEsIG0yKSA9PiBtMS50b0xvd2VyQ2FzZSgpICsgbTIpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBhbGVydEJhbm5lckVsZW1lbnQuZGF0YXNldFtrZXldO1xuXG5cdFx0XHQvLyBUcnkgcGFyc2luZyB0aGUgdmFsdWUgYXMgSlNPTiwgb3RoZXJ3aXNlIGp1c3Qgc2V0IGl0IGFzIGEgc3RyaW5nXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvcHRpb25zW3Nob3J0S2V5XSA9IEpTT04ucGFyc2UodmFsdWUucmVwbGFjZSgvXFwnL2csICdcIicpKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdG9wdGlvbnNbc2hvcnRLZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdH0sIHt9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9nZXQtb3B0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=