import AlertBanner from '../../main';

function initDemos() {
	document.addEventListener('DOMContentLoaded', () => {

		document.getElementById('alert-banner-error-button').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'error',
				contentLongBold: 'Something went wrong!',
				contentLong: 'Please check and try again.',
				contentShort: 'Please check and try again.',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link'
			});
		});

		document.getElementById('alert-banner-neutral-button').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'neutral',
				contentLongBold: 'Good to know!',
				contentLong: 'Keeping you informed a neutral thing happened.',
				contentShort: 'A neutral thing happened.',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link'
			});
		});

		document.getElementById('alert-banner-success-button').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'success',
				contentLongBold: 'Well done!',
				contentLong: 'You successfully completed this task.',
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
