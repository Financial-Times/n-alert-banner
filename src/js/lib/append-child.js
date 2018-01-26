import * as constants from '../constants';

export default function appendChild (parent, element) {

	try {
		parent.appendChild(element);
	}
	catch (err) {
		console.warn(err);

		if (!element.classList.contains(constants.CLOSE_BUTTON_CLASS)) {
			document.body.insertBefore(element, document.body.firstChild);
		}
	}

}
