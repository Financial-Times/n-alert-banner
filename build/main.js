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

var _alert = __webpack_require__("./src/js/alert.js");

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function constructAll() {
	_alert2['default'].init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
}

document.addEventListener('o.DOMContentLoaded', constructAll);

exports['default'] = _alert2['default'];
module.exports = exports['default'];


/***/ }),

/***/ "./src/js/alert.js":
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
 * Represents a alert.
 */
var Alert = function () {

	/**
  * Class constructor.
  * @param {HTMLElement} [alertElement] - The alert element in the DOM
  * @param {Object} [options={}] - An options object for configuring the alert
  */
	function Alert(alertElement, options) {
		_classCallCheck(this, Alert);

		this.alertElement = alertElement;

		// Default the options
		var alertClass = options && options.alertClass ? options.alertClass : 'n-alert';
		var alertType = options && options.alertType ? options.alertType : 'neutral';
		this.options = Object.assign({}, {
			autoOpen: true,

			alertClass: alertClass,
			alertClosedClass: alertClass + '--closed',
			outerClass: alertClass + '__outer',
			outerClassAlertType: alertClass + '__outer--' + alertType,
			innerClass: alertClass + '__inner',
			innerClassAlertType: alertClass + '__inner--' + alertType,
			contentClass: alertClass + '__content',
			contentClassType: alertClass + '__content--' + alertType,
			contentLongClass: alertClass + '__content--long',
			contentShortClass: alertClass + '__content--short',
			actionsClass: alertClass + '__actions',
			actionClass: alertClass + '__action',
			actionSecondaryClass: alertClass + '__action--secondary',
			buttonClass: alertClass + '__button',
			buttonClassAlertType: alertClass + '__button--' + alertType,
			linkClass: alertClass + '__link',
			linkClassAlertType: alertClass + '__link--' + alertType,
			closeButtonClass: alertClass + '__close',
			closeButtonClassAlertType: alertClass + '__close--' + alertType,

			contentLong1: '&hellip;',
			contentLong2: '&hellip;',
			contentShort: null,
			buttonLabel: null,
			buttonUrl: '#',
			linkLabel: null,
			linkUrl: '#',
			closeButtonLabel: 'Close'

		}, options || _getOptions2['default'].optionsFromDom(alertElement));

		// Render the alert
		this.render();

		// There can be only one
		Alert._alertInstances.forEach(function (alert) {
			return alert.close();
		});
		Alert._alertInstances = [this];

		if (this.options.autoOpen) {
			this.open();
		} else {
			this.close();
		}
	}

	/**
  * Render the alert.
  */


	_createClass(Alert, [{
		key: 'render',
		value: function render() {
			// If the alert element is not an HTML Element, build one
			if (!(this.alertElement instanceof HTMLElement)) {
				this.alertElement = _buildElement2['default'].alertBanner(this.options);
				document.body.appendChild(this.alertElement);
			}

			// Select all the elements we need
			this.innerElement = this.alertElement.querySelector('[data-n-alert-inner]');
			// Build the close button
			this.closeButtonElement = _buildElement2['default'].closeButton(this);
			this.innerElement.appendChild(this.closeButtonElement);
		}

		/**
   * Open the alert.
   */

	}, {
		key: 'open',
		value: function open() {
			this.alertElement.classList.remove(this.options.alertClosedClass);
			this.alertElement.dispatchEvent(new CustomEvent('n-alertOpened')); //TODO: look into this
		}

		/**
   * Close the alert.
   */

	}, {
		key: 'close',
		value: function close() {
			this.alertElement.classList.add(this.options.alertClosedClass);
			this.alertElement.dispatchEvent(new CustomEvent('n-alertClosed'));
		}

		/**
   * Initialise alert components.
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
			// AND the rootElement has the data-o-component=alert then initialise just 1 alert (this one)
			if (rootElement instanceof HTMLElement && /\balert\b/.test(rootElement.getAttribute('data-o-component'))) {
				return new Alert(rootElement, options);
			}

			// If the rootElement wasn't itself a alert, then find ALL of the child things that have the data-o-component=alert set
			return Array.from(rootElement.querySelectorAll('[data-o-component="n-alert"]'), function (alertElement) {
				return new Alert(alertElement, options);
			});
		}
	}]);

	return Alert;
}();

Alert._alertInstances = [];

// Exports
exports['default'] = Alert;
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
		var alertElement = document.createElement('div');
		alertElement.classList.add(options.alertClass);
		alertElement.setAttribute('data-o-component', 'n-alert');

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

		alertElement.innerHTML = '\n\t\t<div class="' + options.outerClass + ' ' + options.outerClassAlertType + '">\n\t\t\t<div class="' + options.innerClass + ' ' + options.innerClassAlertType + '" data-n-alert-inner="">\n\t\t\t\t' + contentHtml + '\n\t\t\t\t' + actionHTML + '\n\t\t\t</div>\n\t\t</div>\n\t\t';

		return alertElement;
	},

	closeButton: function closeButton(alert) {

		var options = alert.options;
		var closeButton = document.createElement('a');
		closeButton.classList.add(options.closeButtonClass, options.closeButtonClassAlertType);
		closeButton.setAttribute('role', 'button');
		closeButton.setAttribute('href', '#void');
		closeButton.setAttribute('aria-label', options.closeButtonLabel);
		closeButton.setAttribute('title', options.closeButtonLabel);

		// Add event listeners
		closeButton.addEventListener('click', function (event) {
			alert.close();
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
 * Get the data attributes from the alertElement. If the alert is being set up
 * declaratively, this method is used to extract the data attributes from the DOM.
 * @param {HTMLElement} alertElement - The alert element in the DOM
 */

exports['default'] = {

	optionsFromDom: function optionsFromDom(alertElement) {

		if (!(alertElement instanceof HTMLElement)) {
			return {};
		}

		return Object.keys(alertElement.dataset).reduce(function (options, key) {

			// Ignore data-o-component
			if (key === 'oComponent') {
				return options;
			}

			// Build a concise key and get the option value
			var shortKey = key.replace(/^alert(\w)(\w+)$/, function (m, m1, m2) {
				return m1.toLowerCase() + m2;
			});
			var value = alertElement.dataset[key];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIGNhNjQzNmQwY2JjYmI0NWU4OWRjIiwiLi9tYWluLmpzIiwiLi9zcmMvanMvYWxlcnQuanMiLCIuL3NyYy9qcy9saWIvYnVpbGQtZWxlbWVudC5qcyIsIi4vc3JjL2pzL2xpYi9nZXQtb3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RBbGwiLCJpbml0IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFsZXJ0IiwiYWxlcnRFbGVtZW50Iiwib3B0aW9ucyIsImFsZXJ0Q2xhc3MiLCJhbGVydFR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJhdXRvT3BlbiIsImFsZXJ0Q2xvc2VkQ2xhc3MiLCJvdXRlckNsYXNzIiwib3V0ZXJDbGFzc0FsZXJ0VHlwZSIsImlubmVyQ2xhc3MiLCJpbm5lckNsYXNzQWxlcnRUeXBlIiwiY29udGVudENsYXNzIiwiY29udGVudENsYXNzVHlwZSIsImNvbnRlbnRMb25nQ2xhc3MiLCJjb250ZW50U2hvcnRDbGFzcyIsImFjdGlvbnNDbGFzcyIsImFjdGlvbkNsYXNzIiwiYWN0aW9uU2Vjb25kYXJ5Q2xhc3MiLCJidXR0b25DbGFzcyIsImJ1dHRvbkNsYXNzQWxlcnRUeXBlIiwibGlua0NsYXNzIiwibGlua0NsYXNzQWxlcnRUeXBlIiwiY2xvc2VCdXR0b25DbGFzcyIsImNsb3NlQnV0dG9uQ2xhc3NBbGVydFR5cGUiLCJjb250ZW50TG9uZzEiLCJjb250ZW50TG9uZzIiLCJjb250ZW50U2hvcnQiLCJidXR0b25MYWJlbCIsImJ1dHRvblVybCIsImxpbmtMYWJlbCIsImxpbmtVcmwiLCJjbG9zZUJ1dHRvbkxhYmVsIiwib3B0aW9uc0Zyb21Eb20iLCJyZW5kZXIiLCJfYWxlcnRJbnN0YW5jZXMiLCJmb3JFYWNoIiwiYWxlcnQiLCJjbG9zZSIsIm9wZW4iLCJIVE1MRWxlbWVudCIsImFsZXJ0QmFubmVyIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaW5uZXJFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlQnV0dG9uRWxlbWVudCIsImNsb3NlQnV0dG9uIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYWRkIiwicm9vdEVsZW1lbnQiLCJ0ZXN0IiwiZ2V0QXR0cmlidXRlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb250ZW50SHRtbCIsImFjdGlvbkhUTUwiLCJzZWNvbmRhcnlBY3Rpb25IdG1sIiwiYnV0dG9uSFRNTCIsImlubmVySFRNTCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlzIiwiZGF0YXNldCIsInJlZHVjZSIsImtleSIsInNob3J0S2V5IiwicmVwbGFjZSIsIm0iLCJtMSIsIm0yIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsIkpTT04iLCJwYXJzZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O0FBRUEsU0FBU0EsWUFBVCxHQUF5QjtBQUN4QixvQkFBTUMsSUFBTjtBQUNBQyxVQUFTQyxtQkFBVCxDQUE2QixvQkFBN0IsRUFBbURILFlBQW5EO0FBQ0E7O0FBRURFLFNBQVNFLGdCQUFULENBQTBC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Q0FBSixFQUE0QztBQUMzQyxVQUFPLEVBQVA7QUFDQTs7QUFFRCxTQUFPcEMsT0FBT2dFLElBQVAsQ0FBWXBFLGFBQWFxRSxPQUF6QixFQUFrQ0MsTUFBbEMsQ0FBeUMsVUFBQ3JFLE9BQUQsRUFBVXNFLEdBQVYsRUFBa0I7O0FBRWpFO0FBQ0EsT0FBSUEsUUFBUSxZQUFaLEVBQTBCO0FBQ3pCLFdBQU90RSxPQUFQO0FBQ0E7O0FBRUQ7QUFDQSxPQUFNdUUsV0FBV0QsSUFBSUUsT0FBSixDQUFZLGtCQUFaLEVBQWdDLFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFRQyxFQUFSO0FBQUEsV0FBZUQsR0FBR0UsV0FBSCxLQUFtQkQsRUFBbEM7QUFBQSxJQUFoQyxDQUFqQjtBQUNBLE9BQU1FLFFBQVE5RSxhQUFhcUUsT0FBYixDQUFxQkUsR0FBckIsQ0FBZDs7QUFFQTtBQUNBLE9BQUk7QUFDSHRFLFlBQVF1RSxRQUFSLElBQW9CTyxLQUFLQyxLQUFMLENBQVdGLE1BQU1MLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLENBQVgsQ0FBcEI7QUFDQSxJQUZELENBRUUsT0FBT1EsS0FBUCxFQUFjO0FBQ2ZoRixZQUFRdUUsUUFBUixJQUFvQk0sS0FBcEI7QUFDQTs7QUFFRCxVQUFPN0UsT0FBUDtBQUNBLEdBbkJNLEVBbUJKLEVBbkJJLENBQVA7QUFvQkE7QUE1QmEsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21haW4uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2E2NDM2ZDBjYmNiYjQ1ZTg5ZGMiLCJpbXBvcnQgQWxlcnQgZnJvbSAnLi9zcmMvanMvYWxlcnQnO1xuXG5mdW5jdGlvbiBjb25zdHJ1Y3RBbGwgKCkge1xuXHRBbGVydC5pbml0KCk7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ28uRE9NQ29udGVudExvYWRlZCcsIGNvbnN0cnVjdEFsbCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ28uRE9NQ29udGVudExvYWRlZCcsIGNvbnN0cnVjdEFsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsImltcG9ydCBidWlsZEVsZW1lbnQgZnJvbSAnLi9saWIvYnVpbGQtZWxlbWVudCc7XG5pbXBvcnQgZ2V0T3B0aW9ucyBmcm9tICcuL2xpYi9nZXQtb3B0aW9ucyc7XG4vKipcbiAqIFJlcHJlc2VudHMgYSBhbGVydC5cbiAqL1xuY2xhc3MgQWxlcnQge1xuXG5cdC8qKlxuXHQgKiBDbGFzcyBjb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2FsZXJ0RWxlbWVudF0gLSBUaGUgYWxlcnQgZWxlbWVudCBpbiB0aGUgRE9NXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBBbiBvcHRpb25zIG9iamVjdCBmb3IgY29uZmlndXJpbmcgdGhlIGFsZXJ0XG5cdCAqL1xuXHRjb25zdHJ1Y3RvciAoYWxlcnRFbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHR0aGlzLmFsZXJ0RWxlbWVudCA9IGFsZXJ0RWxlbWVudDtcblxuXHRcdC8vIERlZmF1bHQgdGhlIG9wdGlvbnNcblx0XHRjb25zdCBhbGVydENsYXNzID0gb3B0aW9ucyAmJiBvcHRpb25zLmFsZXJ0Q2xhc3MgPyBvcHRpb25zLmFsZXJ0Q2xhc3MgOiAnbi1hbGVydCc7XG5cdFx0Y29uc3QgYWxlcnRUeXBlID0gb3B0aW9ucyAmJiBvcHRpb25zLmFsZXJ0VHlwZSA/IG9wdGlvbnMuYWxlcnRUeXBlIDogJ25ldXRyYWwnO1xuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcblx0XHRcdGF1dG9PcGVuOiB0cnVlLFxuXG5cblx0XHRcdGFsZXJ0Q2xhc3M6IGFsZXJ0Q2xhc3MsXG5cdFx0XHRhbGVydENsb3NlZENsYXNzOiBgJHthbGVydENsYXNzfS0tY2xvc2VkYCxcblx0XHRcdG91dGVyQ2xhc3M6IGAke2FsZXJ0Q2xhc3N9X19vdXRlcmAsXG5cdFx0XHRvdXRlckNsYXNzQWxlcnRUeXBlOiBgJHthbGVydENsYXNzfV9fb3V0ZXItLSR7YWxlcnRUeXBlfWAsXG5cdFx0XHRpbm5lckNsYXNzOiBgJHthbGVydENsYXNzfV9faW5uZXJgLFxuXHRcdFx0aW5uZXJDbGFzc0FsZXJ0VHlwZTogYCR7YWxlcnRDbGFzc31fX2lubmVyLS0ke2FsZXJ0VHlwZX1gLFxuXHRcdFx0Y29udGVudENsYXNzOiBgJHthbGVydENsYXNzfV9fY29udGVudGAsXG5cdFx0XHRjb250ZW50Q2xhc3NUeXBlOiBgJHthbGVydENsYXNzfV9fY29udGVudC0tJHthbGVydFR5cGV9YCxcblx0XHRcdGNvbnRlbnRMb25nQ2xhc3M6IGAke2FsZXJ0Q2xhc3N9X19jb250ZW50LS1sb25nYCxcblx0XHRcdGNvbnRlbnRTaG9ydENsYXNzOiBgJHthbGVydENsYXNzfV9fY29udGVudC0tc2hvcnRgLFxuXHRcdFx0YWN0aW9uc0NsYXNzOiBgJHthbGVydENsYXNzfV9fYWN0aW9uc2AsXG5cdFx0XHRhY3Rpb25DbGFzczogYCR7YWxlcnRDbGFzc31fX2FjdGlvbmAsXG5cdFx0XHRhY3Rpb25TZWNvbmRhcnlDbGFzczogYCR7YWxlcnRDbGFzc31fX2FjdGlvbi0tc2Vjb25kYXJ5YCxcblx0XHRcdGJ1dHRvbkNsYXNzOiBgJHthbGVydENsYXNzfV9fYnV0dG9uYCxcblx0XHRcdGJ1dHRvbkNsYXNzQWxlcnRUeXBlOiBgJHthbGVydENsYXNzfV9fYnV0dG9uLS0ke2FsZXJ0VHlwZX1gLFxuXHRcdFx0bGlua0NsYXNzOiBgJHthbGVydENsYXNzfV9fbGlua2AsXG5cdFx0XHRsaW5rQ2xhc3NBbGVydFR5cGU6IGAke2FsZXJ0Q2xhc3N9X19saW5rLS0ke2FsZXJ0VHlwZX1gLFxuXHRcdFx0Y2xvc2VCdXR0b25DbGFzczogYCR7YWxlcnRDbGFzc31fX2Nsb3NlYCxcblx0XHRcdGNsb3NlQnV0dG9uQ2xhc3NBbGVydFR5cGU6IGAke2FsZXJ0Q2xhc3N9X19jbG9zZS0tJHthbGVydFR5cGV9YCxcblxuXHRcdFx0Y29udGVudExvbmcxOiAnJmhlbGxpcDsnLFxuXHRcdFx0Y29udGVudExvbmcyOiAnJmhlbGxpcDsnLFxuXHRcdFx0Y29udGVudFNob3J0OiBudWxsLFxuXHRcdFx0YnV0dG9uTGFiZWw6IG51bGwsXG5cdFx0XHRidXR0b25Vcmw6ICcjJyxcblx0XHRcdGxpbmtMYWJlbDogbnVsbCxcblx0XHRcdGxpbmtVcmw6ICcjJyxcblx0XHRcdGNsb3NlQnV0dG9uTGFiZWw6ICdDbG9zZSdcblxuXHRcdH0sIG9wdGlvbnMgfHwgZ2V0T3B0aW9ucy5vcHRpb25zRnJvbURvbShhbGVydEVsZW1lbnQpKTtcblxuXHRcdC8vIFJlbmRlciB0aGUgYWxlcnRcblx0XHR0aGlzLnJlbmRlcigpO1xuXG5cdFx0Ly8gVGhlcmUgY2FuIGJlIG9ubHkgb25lXG5cdFx0QWxlcnQuX2FsZXJ0SW5zdGFuY2VzLmZvckVhY2goYWxlcnQgPT4gYWxlcnQuY2xvc2UoKSk7XG5cdFx0QWxlcnQuX2FsZXJ0SW5zdGFuY2VzID0gW3RoaXNdO1xuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVyIHRoZSBhbGVydC5cblx0ICovXG5cdHJlbmRlciAoKSB7XG5cdFx0Ly8gSWYgdGhlIGFsZXJ0IGVsZW1lbnQgaXMgbm90IGFuIEhUTUwgRWxlbWVudCwgYnVpbGQgb25lXG5cdFx0aWYgKCEodGhpcy5hbGVydEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRcdHRoaXMuYWxlcnRFbGVtZW50ID0gYnVpbGRFbGVtZW50LmFsZXJ0QmFubmVyKHRoaXMub3B0aW9ucyk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYWxlcnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBTZWxlY3QgYWxsIHRoZSBlbGVtZW50cyB3ZSBuZWVkXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSB0aGlzLmFsZXJ0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uLWFsZXJ0LWlubmVyXScpO1xuXHRcdC8vIEJ1aWxkIHRoZSBjbG9zZSBidXR0b25cblx0XHR0aGlzLmNsb3NlQnV0dG9uRWxlbWVudCA9IGJ1aWxkRWxlbWVudC5jbG9zZUJ1dHRvbih0aGlzKTtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uRWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogT3BlbiB0aGUgYWxlcnQuXG5cdCAqL1xuXHRvcGVuICgpIHtcblx0XHR0aGlzLmFsZXJ0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5hbGVydENsb3NlZENsYXNzKTtcblx0XHR0aGlzLmFsZXJ0RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbi1hbGVydE9wZW5lZCcpKTsvL1RPRE86IGxvb2sgaW50byB0aGlzXG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgdGhlIGFsZXJ0LlxuXHQgKi9cblx0Y2xvc2UgKCkge1xuXHRcdHRoaXMuYWxlcnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmFsZXJ0Q2xvc2VkQ2xhc3MpO1xuXHRcdHRoaXMuYWxlcnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduLWFsZXJ0Q2xvc2VkJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpc2UgYWxlcnQgY29tcG9uZW50cy5cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8U3RyaW5nKX0gcm9vdEVsZW1lbnQgLSBUaGUgcm9vdCBlbGVtZW50IHRvIGludGlhbGlzZSBiYW5uZXJzIGluLCBvciBhIENTUyBzZWxlY3RvciBmb3IgdGhlIHJvb3QgZWxlbWVudFxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gQW4gb3B0aW9ucyBvYmplY3QgZm9yIGNvbmZpZ3VyaW5nIHRoZSBiYW5uZXJzXG5cdCAqL1xuXHRzdGF0aWMgaW5pdCAocm9vdEVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdGlmICghcm9vdEVsZW1lbnQpIHtcblx0XHRcdHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgcm9vdEVsZW1lbnQgaXNudCBhbiBIVE1MRWxlbWVudCwgdHJlYXQgaXQgYXMgYSBzZWxlY3RvclxuXHRcdGlmICghKHJvb3RFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0XHRyb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSByb290RWxlbWVudCBpcyBhbiBIVE1MRWxlbWVudCAoaWUgaXQgd2FzIGZvdW5kIGluIHRoZSBkb2N1bWVudCBhbnl3aGVyZSlcblx0XHQvLyBBTkQgdGhlIHJvb3RFbGVtZW50IGhhcyB0aGUgZGF0YS1vLWNvbXBvbmVudD1hbGVydCB0aGVuIGluaXRpYWxpc2UganVzdCAxIGFsZXJ0ICh0aGlzIG9uZSlcblx0XHRpZiAocm9vdEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAvXFxiYWxlcnRcXGIvLnRlc3Qocm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW8tY29tcG9uZW50JykpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEFsZXJ0KHJvb3RFbGVtZW50LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgcm9vdEVsZW1lbnQgd2Fzbid0IGl0c2VsZiBhIGFsZXJ0LCB0aGVuIGZpbmQgQUxMIG9mIHRoZSBjaGlsZCB0aGluZ3MgdGhhdCBoYXZlIHRoZSBkYXRhLW8tY29tcG9uZW50PWFsZXJ0IHNldFxuXHRcdHJldHVybiBBcnJheS5mcm9tKHJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW8tY29tcG9uZW50PVwibi1hbGVydFwiXScpLCBhbGVydEVsZW1lbnQgPT4gbmV3IEFsZXJ0KGFsZXJ0RWxlbWVudCwgb3B0aW9ucykpO1xuXHR9XG5cbn1cblxuQWxlcnQuX2FsZXJ0SW5zdGFuY2VzID0gW107XG5cbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FsZXJ0LmpzIiwiLyoqXG4gKiBCdWlsZCBhIGNsb3NlIGJ1dHRvbiBlbGVtZW50LlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIHRoZSBuZXcgY2xvc2UgYnV0dG9uIGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cblx0YWxlcnRCYW5uZXI6IChvcHRpb25zKSA9PiB7XG5cdFx0Y29uc3QgYWxlcnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YWxlcnRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3B0aW9ucy5hbGVydENsYXNzKTtcblx0XHRhbGVydEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW8tY29tcG9uZW50JywgJ24tYWxlcnQnKTtcblxuXHRcdGxldCBjb250ZW50SHRtbDtcblx0XHRsZXQgYWN0aW9uSFRNTCA9ICcnO1xuXHRcdGxldCBzZWNvbmRhcnlBY3Rpb25IdG1sID0gJyc7XG5cdFx0bGV0IGJ1dHRvbkhUTUwgPSAnJztcblxuXHRcdGlmIChvcHRpb25zLmNvbnRlbnRTaG9ydCkge1xuXHRcdFx0Y29udGVudEh0bWwgPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY29udGVudENsYXNzfSAke29wdGlvbnMuY29udGVudExvbmdDbGFzc30gJHtvcHRpb25zLmNvbnRlbnRDbGFzc1R5cGV9XCI+XG5cdFx0XHRcdFx0PHA+PGI+JHtvcHRpb25zLmNvbnRlbnRMb25nMX08L2I+ICR7b3B0aW9ucy5jb250ZW50TG9uZzJ9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIiR7b3B0aW9ucy5jb250ZW50Q2xhc3N9ICR7b3B0aW9ucy5jb250ZW50U2hvcnRDbGFzc30gJHtvcHRpb25zLmNvbnRlbnRDbGFzc1R5cGV9XCI+XG5cdFx0XHRcdFx0PHA+JHtvcHRpb25zLmNvbnRlbnRTaG9ydH08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGVudEh0bWwgPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCIke29wdGlvbnMuY29udGVudENsYXNzfSAke29wdGlvbnMuY29udGVudExvbmdDbGFzc30gJHtvcHRpb25zLmNvbnRlbnRDbGFzc1R5cGV9XCI+XG5cdFx0XHRcdFx0PHA+PGI+JHtvcHRpb25zLmNvbnRlbnRMb25nMX08L2I+ICR7b3B0aW9ucy5jb250ZW50TG9uZzJ9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGA7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMubGlua0xhYmVsKSB7XG5cdFx0XHRzZWNvbmRhcnlBY3Rpb25IdG1sID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmFjdGlvbkNsYXNzfSAke29wdGlvbnMuYWN0aW9uU2Vjb25kYXJ5Q2xhc3N9XCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiR7b3B0aW9ucy5saW5rVXJsfVwiIGNsYXNzPVwiJHtvcHRpb25zLmxpbmtDbGFzc30gJHtvcHRpb25zLmxpbmtDbGFzc0FsZXJ0VHlwZX1cIj4ke29wdGlvbnMubGlua0xhYmVsfTwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmJ1dHRvbkxhYmVsKSB7XG5cdFx0XHRidXR0b25IVE1MID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmFjdGlvbkNsYXNzfVwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIke29wdGlvbnMuYnV0dG9uVXJsfVwiIGNsYXNzPVwiJHtvcHRpb25zLmJ1dHRvbkNsYXNzfSAke29wdGlvbnMuYnV0dG9uQ2xhc3NBbGVydFR5cGV9XCI+JHtvcHRpb25zLmJ1dHRvbkxhYmVsfTwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbnMubGlua0xhYmVsIHx8IG9wdGlvbnMuYnV0dG9uTGFiZWwpIHtcblx0XHRcdGFjdGlvbkhUTUwgPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCIke29wdGlvbnMuYWN0aW9uc0NsYXNzfVwiPlxuXHRcdFx0XHRcdCR7YnV0dG9uSFRNTH1cblx0XHRcdFx0XHQke3NlY29uZGFyeUFjdGlvbkh0bWx9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9XG5cblx0XHRhbGVydEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuXHRcdDxkaXYgY2xhc3M9XCIke29wdGlvbnMub3V0ZXJDbGFzc30gJHtvcHRpb25zLm91dGVyQ2xhc3NBbGVydFR5cGV9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiJHtvcHRpb25zLmlubmVyQ2xhc3N9ICR7b3B0aW9ucy5pbm5lckNsYXNzQWxlcnRUeXBlfVwiIGRhdGEtbi1hbGVydC1pbm5lcj1cIlwiPlxuXHRcdFx0XHQke2NvbnRlbnRIdG1sfVxuXHRcdFx0XHQke2FjdGlvbkhUTUx9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdFx0cmV0dXJuIGFsZXJ0RWxlbWVudDtcblx0fSxcblxuIGNsb3NlQnV0dG9uOiAoYWxlcnQpID0+IHtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBhbGVydC5vcHRpb25zXG5cdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0Y2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChvcHRpb25zLmNsb3NlQnV0dG9uQ2xhc3MsIG9wdGlvbnMuY2xvc2VCdXR0b25DbGFzc0FsZXJ0VHlwZSk7XG5cdFx0Y2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuXHRcdGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjdm9pZCcpO1xuXHRcdGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIG9wdGlvbnMuY2xvc2VCdXR0b25MYWJlbCk7XG5cdFx0Y2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIG9wdGlvbnMuY2xvc2VCdXR0b25MYWJlbCk7XG5cblx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG5cdFx0Y2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRhbGVydC5jbG9zZSgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjbG9zZUJ1dHRvbjtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9idWlsZC1lbGVtZW50LmpzIiwiLyoqXG4gKiBHZXQgdGhlIGRhdGEgYXR0cmlidXRlcyBmcm9tIHRoZSBhbGVydEVsZW1lbnQuIElmIHRoZSBhbGVydCBpcyBiZWluZyBzZXQgdXBcbiAqIGRlY2xhcmF0aXZlbHksIHRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZXh0cmFjdCB0aGUgZGF0YSBhdHRyaWJ1dGVzIGZyb20gdGhlIERPTS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFsZXJ0RWxlbWVudCAtIFRoZSBhbGVydCBlbGVtZW50IGluIHRoZSBET01cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cblx0b3B0aW9uc0Zyb21Eb206IChhbGVydEVsZW1lbnQpID0+IHtcblxuXHRcdGlmICghKGFsZXJ0RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhhbGVydEVsZW1lbnQuZGF0YXNldCkucmVkdWNlKChvcHRpb25zLCBrZXkpID0+IHtcblxuXHRcdFx0Ly8gSWdub3JlIGRhdGEtby1jb21wb25lbnRcblx0XHRcdGlmIChrZXkgPT09ICdvQ29tcG9uZW50Jykge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH1cblxuXHRcdFx0Ly8gQnVpbGQgYSBjb25jaXNlIGtleSBhbmQgZ2V0IHRoZSBvcHRpb24gdmFsdWVcblx0XHRcdGNvbnN0IHNob3J0S2V5ID0ga2V5LnJlcGxhY2UoL15hbGVydChcXHcpKFxcdyspJC8sIChtLCBtMSwgbTIpID0+IG0xLnRvTG93ZXJDYXNlKCkgKyBtMik7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGFsZXJ0RWxlbWVudC5kYXRhc2V0W2tleV07XG5cblx0XHRcdC8vIFRyeSBwYXJzaW5nIHRoZSB2YWx1ZSBhcyBKU09OLCBvdGhlcndpc2UganVzdCBzZXQgaXQgYXMgYSBzdHJpbmdcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9wdGlvbnNbc2hvcnRLZXldID0gSlNPTi5wYXJzZSh2YWx1ZS5yZXBsYWNlKC9cXCcvZywgJ1wiJykpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0b3B0aW9uc1tzaG9ydEtleV0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0fSwge30pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2dldC1vcHRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==