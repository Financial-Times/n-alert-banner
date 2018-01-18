/**
 * Build a close button element.
 * @returns {HTMLElement} Returns the new close button element
 */

export default {

	alertBanner: (options) => {
		const alertBannerElement = document.createElement('div');
		alertBannerElement.classList.add(options.alertBannerClass);
		alertBannerElement.classList.add(`${options.alertBannerClass}--${options.theme}`);

		alertBannerElement.setAttribute('data-n-component', 'n-alert-banner');

		let contentHtml;
		let actionHTML = '';
		let secondaryActionHtml = '';
		let buttonHTML = '';

		if (options.contentShort) {
			contentHtml = `
				<div class="${options.contentClass} ${options.contentLongClass}">
					<p><b>${options.contentLongBold}</b> ${options.contentLong}</p>
				</div>
				<div class="${options.contentClass} ${options.contentShortClass}">
					<p>${options.contentShort}</p>
				</div>
			`;
		} else {
			contentHtml = `
				<div class="${options.contentClass} ${options.contentLongClass}">
					<p><b>${options.contentLongBold}</b> ${options.contentLong}</p>
				</div>
			`;
		}

		if (options.linkLabel) {
			secondaryActionHtml = `
				<div class="${options.actionClass} ${options.actionSecondaryClass}">
					<a href="${options.linkUrl}" class="${options.linkClass}">${options.linkLabel}</a>
				</div>
			`;
		}

		if (options.buttonLabel) {
			buttonHTML = `
				<div class="${options.actionClass}">
					<a href="${options.buttonUrl}" class="${options.buttonClass}">${options.buttonLabel}</a>
				</div>
			`;
		}

		if(options.linkLabel || options.buttonLabel) {
			actionHTML = `
				<div class="${options.actionsClass}">
					${buttonHTML}
					${secondaryActionHtml}
				</div>
			`;
		}

		alertBannerElement.innerHTML = `
		<div class="${options.outerClass}">
			<div class="${options.innerClass}" data-n-alert-banner-inner="">
				${contentHtml}
				${actionHTML}
			</div>
		</div>
		`;

		return alertBannerElement;
	},

	closeButton: (alertBannerElement) => {

		const options = alertBannerElement.options;
		const closeButton = document.createElement('a');
		closeButton.classList.add(options.closeButtonClass);
		closeButton.setAttribute('role', 'button');
		closeButton.setAttribute('href', '#void');
		closeButton.setAttribute('aria-label', options.closeButtonLabel);
		closeButton.setAttribute('title', options.closeButtonLabel);

		// Add event listeners
		closeButton.addEventListener('click', event => {
			alertBannerElement.close();
			event.preventDefault();
		});

		return closeButton;
	}
};
