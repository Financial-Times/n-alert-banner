import AlertBanner from '../../main.js';

const isClientInitialised = document.querySelector('#client-initialised-demo');

if (isClientInitialised) {
	const buttons = document.querySelectorAll('.buttons button');

	buttons.forEach(el => {
		const type = el.dataset['type'];
		el.addEventListener('click', () => {
			new AlertBanner(null, {
				theme: type,
				contentLong: `<p><b>Example ${type} message</b> Content Long block.</p>`,
				contentShort: `<p>Content short block.</p>`,
				buttonLabel: 'Button',
				buttonUrl: '#try-button',
				linkLabel: 'Text link',
				linkUrl: '#feedback-link',
				appendToElement: '#site-navigation'
			});
		});
	});
} else {
	AlertBanner.init();
}
