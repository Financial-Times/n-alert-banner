export default function appendChild (elementSelected, alertBanner, position) {

	try {
		position(elementSelected, alertBanner);
	}
	catch (err) {
		console.warn(err);
		document.body.insertBefore(alertBanner, document.body.firstChild);
	}

}
