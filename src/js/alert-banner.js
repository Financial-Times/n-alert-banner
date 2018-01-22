import buildElement from './lib/build-element';
import getOptions from './lib/get-options';
import addAlertBannerUnderNav from './lib/add-alert-banner-under-nav';

const NAV_ELEMENT_ID ='#site-navigation';
const ALERT_BANNER_DATA_COMPONENT = '[data-n-component="n-alert-banner"]';
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
		const alertBannerClass = options && options.alertBannerClass ? options.alertBannerClass : 'n-alert-banner';

		const attachToNavigation = this.alertBannerElement && this.alertBannerElement.querySelector('[data-n-alert-banner-attach-to-navigation="true"]') !== null || options && options.attachToNavigation === true;

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
			closeButton: true,
			attachToNavigation: attachToNavigation || false,

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
			document.body.appendChild(this.alertBannerElement);
		}

		if (this.options.closeButton) {
			// Select all the elements we need
			this.innerElement = this.alertBannerElement.querySelector('[data-n-alert-banner-inner]');
			// Build the close button
			this.closeButtonElement = buildElement.closeButton(this);
			this.innerElement.appendChild(this.closeButtonElement);
		}

		// Attach alert banner below navigation header.
		if (this.options.attachToNavigation) {
			const navHeader = document.querySelector(NAV_ELEMENT_ID);
			const alertBannerDataComponent = document.querySelector(ALERT_BANNER_DATA_COMPONENT);
			addAlertBannerUnderNav(navHeader, alertBannerDataComponent);
		}

	}

	/**
	 * Open the alert banner.
	 */
	open () {
		this.alertBannerElement.classList.remove(this.options.alertBannerClosedClass);
		this.alertBannerElement.dispatchEvent(new CustomEvent('n.alertBannerOpened'));
	}

	/**
	 * Close the alertBanner.
	 */
	close () {
		this.alertBannerElement.classList.add(this.options.alertBannerClosedClass);
		this.alertBannerElement.dispatchEvent(new CustomEvent('n.alertBannerClosed'));
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
		if (rootElement instanceof HTMLElement && /\balert\b/.test(rootElement.getAttribute('data-n-component'))) {
			return new AlertBanner(rootElement, options);
		}

		// If the rootElement wasn't itself a alertBanner, then find ALL of the child things that have the data-n-component=n-alert-banner set
		return Array.from(rootElement.querySelectorAll('[data-n-component="n-alert-banner"]'), alertBannerElement => new AlertBanner(alertBannerElement, options));
	}

}

AlertBanner._alertInstances = [];

// Exports
export default AlertBanner;
