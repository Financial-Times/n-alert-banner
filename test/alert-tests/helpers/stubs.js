import AlertBanner from '../../../src/js/alert-banner';
import getOptions from '../../../src/js/lib/get-options';
import buildElement from '../../../src/js/lib/build-element';

export default{
	alertBannerGetOptionsFromDom: (sandbox) => {
		sandbox.stub(getOptions, 'fromDom');
	},
	alertBannerRender: (sandbox) => {
		sandbox.stub(AlertBanner.prototype, 'render');
	},
	alertBannerOpen: (sandbox) => {
		sandbox.stub(AlertBanner.prototype, 'open');
	},
	alertBannerClose: (sandbox) => {
		sandbox.stub(AlertBanner.prototype, 'close');
	},
	buildElementAlertBanner: (sandbox) => {
		sandbox.stub(buildElement, 'alertBanner');
	}
};
