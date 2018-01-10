import AlertBanner from '../../main';

function initDemos() {
	document.addEventListener('DOMContentLoaded', () => {

		document.getElementById('alert-banner-error-button').addEventListener('click', () => {
			new AlertBanner(null, {
				alertBannerType: 'error',
				contentLong1: 'Something went wrong!',
				contentLong2: 'Please check and try again.',
				contentShort: 'Please check and try again.',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link'
			});
		});

		document.getElementById('alert-banner-neutral-button').addEventListener('click', () => {
			new AlertBanner(null, {
				alertBannerType: 'neutral',
				contentLong1: 'Good to know!',
				contentLong2: 'Keeping you informed a neutral thing happened.',
				contentShort: 'A neutral thing happened.',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link'
			});
		});

		document.getElementById('alert-banner-success-button').addEventListener('click', () => {
			new AlertBanner(null, {
				alertBannerType: 'success',
				contentLong1: 'Well done!',
				contentLong2: 'You successfully completed this task.',
				contentShort: 'You successfully completed this task.',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link'
			});
		});
	});
}

initDemos();
