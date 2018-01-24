export default function appendChild (parent, element) {

	try {
		parent.appendChild(element);
	}
	catch (err) {
		console.warn(err);
		document.body.insertBefore(element, document.body.firstChild);
	}

}
