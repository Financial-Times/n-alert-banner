/**
 * Get the data attributes from the alertBannerElement. If the alertBanner is being set up
 * declaratively, this method is used to extract the data attributes from the DOM.
 * @param {HTMLElement} alertBannerElement - The alertBanner element in the DOM
 */

export default {

	fromDom: (alertBannerElement) => {

		if (!(alertBannerElement instanceof HTMLElement)) {
			return {};
		}

		return Object.keys(alertBannerElement.dataset).reduce((options, key) => {

			// Ignore data-n-component
			if (key === 'nComponent') {
				return options;
			}

			// Build a concise key and get the option value
			const shortKey = key.replace(/^nAlertBanner(\w)(\w+)$/, (m, m1, m2) => m1.toLowerCase() + m2);
			const value = alertBannerElement.dataset[key];

			// Try parsing the value as JSON, otherwise just set it as a string
			try {
				options[shortKey] = JSON.parse(value.replace(/\'/g, '"'));
			} catch (error) {
				options[shortKey] = value;
			}

			return options;
		}, {});
	}
}
