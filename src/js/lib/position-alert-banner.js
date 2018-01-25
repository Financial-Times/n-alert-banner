export default {

	appendChild: (parent, element) => {
		parent.appendChild(element);
	},

	prepend: (selectedElement, element) => {
		document.body.insertBefore(element, selectedElement)
	}
};
