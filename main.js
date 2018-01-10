import AlertBanner from './src/js/alert-banner';

function constructAll () {
	AlertBanner.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
}

document.addEventListener('o.DOMContentLoaded', constructAll);

export default AlertBanner;
