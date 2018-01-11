import AlertBanner from '../../src/js/alert-banner';

function initDemos () {

	document.addEventListener('DOMContentLoaded', () => {
		document.getElementById('payment-failure').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'error',
				contentLong1: 'Payment Alert!',
				contentLong2: 'Please update your card details to continue your FT subscription.',
				contentShort: 'Please update your card details.',
				linkLabel: 'My Account',
				linkUrl: 'https://myaccount-test.ft.com/payment/view'
			});
		});
	});
}

initDemos();
