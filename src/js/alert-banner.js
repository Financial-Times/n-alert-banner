import buildElement from './lib/build-element';
import getOptions from './lib/get-options';
import appendChild from './lib/append-child';
import * as constants from './constants';
/**
 * Represents a alertBanner.
 */
class AlertBanner {

	/**
	 * Class constructor.
	 * @param {HTMLElement} [alertBannerElement] - The alertBanner element in the DOM
	 * @param {Object} [options={}] - An options object for configuring the alertBanner
	 */
	constructor (alertBannerElement, options) {

		this.alertBannerElement = alertBannerElement;

		// Default the options
		const alertBannerClass = options && options.alertBannerClass ? options.alertBannerClass : constants.DEFAULT_ALERT_BANNER_CLASS;
		const noCloseButton = this.alertBannerElement && this.alertBannerElement.querySelector('[data-n-alert-banner-close-button="false"]') !== null || options && options.noCloseButton === true;

		this.options = Object.assign({}, {
			autoOpen: true,

			alertBannerClass: alertBannerClass,
			alertBannerClosedClass: `${alertBannerClass}--closed`,
			outerClass: `${alertBannerClass}__outer`,
			innerClass: `${alertBannerClass}__inner`,
			contentClass: `${alertBannerClass}__content`,
			contentLongClass: `${alertBannerClass}__content--long`,
			contentShortClass: `${alertBannerClass}__content--short`,
			actionsClass: `${alertBannerClass}__actions`,
			actionClass: `${alertBannerClass}__action`,
			actionSecondaryClass: `${alertBannerClass}__action--secondary`,
			buttonClass: `${alertBannerClass}__button`,
			linkClass: `${alertBannerClass}__link`,
			closeButtonClass: `${alertBannerClass}__close`,

			contentLongBold: '&hellip;',
			contentLong: '&hellip;',
			contentShort: null,
			buttonLabel: null,
			buttonUrl: '#',
			linkLabel: null,
			linkUrl: '#',
			closeButtonLabel: 'Close',
			noCloseButton: noCloseButton || false,
			attachToElement: false,

			theme: null

		}, options || getOptions.fromDom(alertBannerElement));

		// Render the alertBanner
		this.render();

		// There can be only one
		AlertBanner._alertInstances.forEach(alertBanner => alertBanner.close());
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
	render () {
		// If the alertBanner element is not an HTML Element, build one
		if (!(this.alertBannerElement instanceof HTMLElement)) {
			this.alertBannerElement = buildElement.alertBanner(this.options);
		}

		// attach alertBanner to specified parentElement or default to document body
		let parentElement = this.options.attachToElement ? document.querySelector(this.options.attachToElement) : document.body;
		appendChild(parentElement, this.alertBannerElement);

		// Select all the elements we need
		this.innerElement = this.alertBannerElement.querySelector(constants.ALERT_BANNER_INNER_ELEMENT);

		if (!this.options.noCloseButton) {
			// Build the close button
			this.closeButtonElement = buildElement.closeButton(this);
			appendChild(this.innerElement, this.closeButtonElement);
		}

	}

	/**
	 * Open the alert banner.
	 */
	open () {
		this.alertBannerElement.classList.remove(this.options.alertBannerClosedClass);
		this.alertBannerElement.dispatchEvent(new CustomEvent(constants.ALERT_BANNER_OPEN));
	}

	/**
	 * Close the alertBanner.
	 */
	close () {
		this.alertBannerElement.classList.add(this.options.alertBannerClosedClass);
		this.alertBannerElement.dispatchEvent(new CustomEvent(constants.ALERT_BANNER_CLOSED));
	}

	/**
	 * Initialise alertBanner components.
	 * @param {(HTMLElement|String)} rootElement - The root element to intialise banners in, or a CSS selector for the root element
	 * @param {Object} [options={}] - An options object for configuring the banners
	 */
	static init (rootElement, options) {

		if (!rootElement) {
			rootElement = document.body;
		}

		// If the rootElement isnt an HTMLElement, treat it as a selector
		if (!(rootElement instanceof HTMLElement)) {
			rootElement = document.querySelector(rootElement);
		}

		// If the rootElement is an HTMLElement (ie it was found in the document anywhere)
		// AND the rootElement has the data-n-component=n-alert-banner then initialise just 1 alertBanner (this one)
		if (rootElement instanceof HTMLElement && /\balert\b/.test(rootElement.getAttribute(constants.ALERT_BANNER_N_COMPONENT))) {
			return new AlertBanner(rootElement, options);
		}

		// If the rootElement wasn't itself a alertBanner, then find ALL of the child things that have the data-n-component=n-alert-banner set
		return Array.from(rootElement.querySelectorAll(constants.ALERT_BANNER_DATA_COMPONENT), alertBannerElement => new AlertBanner(alertBannerElement, options));
	}

}

AlertBanner._alertInstances = [];

// Exports
export default AlertBanner;
