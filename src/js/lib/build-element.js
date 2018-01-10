/**
 * Build a close button element.
 * @returns {HTMLElement} Returns the new close button element
 */

export default {

	alertBanner: (options) => {
		const alertBannerElement = document.createElement('div');
		alertBannerElement.classList.add(options.alertBannerClass);
		alertBannerElement.setAttribute('data-n-component', 'n-alert-banner');

		let contentHtml;
		let actionHTML = '';
		let secondaryActionHtml = '';
		let buttonHTML = '';

		if (options.contentShort) {
			contentHtml = `
				<div class="${options.contentClass} ${options.contentLongClass} ${options.contentClassType}">
					<p><b>${options.contentLong1}</b> ${options.contentLong2}</p>
				</div>
				<div class="${options.contentClass} ${options.contentShortClass} ${options.contentClassType}">
					<p>${options.contentShort}</p>
				</div>
			`;
		} else {
			contentHtml = `
				<div class="${options.contentClass} ${options.contentLongClass} ${options.contentClassType}">
					<p><b>${options.contentLong1}</b> ${options.contentLong2}</p>
				</div>
			`;
		}

		if (options.linkLabel) {
			secondaryActionHtml = `
				<div class="${options.actionClass} ${options.actionSecondaryClass}">
					<a href="${options.linkUrl}" class="${options.linkClass} ${options.linkClassAlertType}">${options.linkLabel}</a>
				</div>
			`;
		}

		if (options.buttonLabel) {
			buttonHTML = `
				<div class="${options.actionClass}">
					<a href="${options.buttonUrl}" class="${options.buttonClass} ${options.buttonClassAlertType}">${options.buttonLabel}</a>
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
		<div class="${options.outerClass} ${options.outerClassAlertType}">
			<div class="${options.innerClass} ${options.innerClassAlertType}" data-n-alert-banner-inner="">
				${contentHtml}
				${actionHTML}
			</div>
		</div>
		`;

		return alertBannerElement;
	},

 closeButton: (alertBannerElement) => {
	 console.log('================')
	 console.log("alertBannerElement", alertBannerElement);
	 console.log('================')

		const options = alertBannerElement.options
		const closeButton = document.createElement('a');
		closeButton.classList.add(options.closeButtonClass, options.closeButtonClassAlertType);
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
}
