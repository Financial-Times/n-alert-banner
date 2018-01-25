export default function positionAlertBanner (attachToElement, alertBanner) {

	try {
		attachToElement.position(attachToElement.elementSelected, alertBanner);
	}
	catch (err) {
		console.warn(err);
		document.body.insertBefore(alertBanner, document.body.firstChild);
	}

}
