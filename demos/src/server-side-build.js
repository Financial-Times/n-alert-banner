import AlertBanner from '../../main';

function initDemos() {
	document.addEventListener('DOMContentLoaded', () => {

		document.getElementById('alert-banner-error-button').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'error',
				contentLong: '<p><b>Something went wrong!</b> Please check and try again.</p>',
				contentShort: '<p>Please check and try again.</p>',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link',
				appendToElement: '#site-navigation'
			});
		});

		document.getElementById('alert-banner-neutral-button').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'neutral',
				contentLong: '<p><b>Good to know!</b> Keeping you informed a neutral thing happened.</p>',
				contentShort: '<p>Keeping you informed a neutral thing happened.</p>',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link',
				appendToElement: '#ttt'
			});
		});

		document.getElementById('alert-banner-success-button').addEventListener('click', () => {
			new AlertBanner(null, {
				theme: 'success',
				contentLong: '<p><b>Well done!</b> You successfully completed this task.</p>',
				contentShort: '<p>You successfully completed this task.</p>',
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link'
			});
		});
	});
}

initDemos();
