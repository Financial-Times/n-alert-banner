/* eslint-env mocha, sinon, proclaim */

import AlertBanner from '../../src/js/alert-banner';
import getOptions from '../../src/js/lib/get-options';
import buildElement from '../../src/js/lib/build-element';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';
import mainFixture from '../fixture/main';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('new AlertBanner(alertBannerElement, options)', () => {
	let alertBanner;
	let alertBannerCloseStub;
	let alertBannerElement;
	let alertBannerGetOptionsFromDomStub;
	let alertBannerOpenStub;
	let alertBannerRenderStub;
	let options;

	beforeEach(() => {
		AlertBanner._alertInstances = [];

		// Stub out methods called in constructor
		alertBannerGetOptionsFromDomStub = sinon.stub(getOptions, 'fromDom');
		alertBannerRenderStub = sinon.stub(AlertBanner.prototype, 'render');
		alertBannerOpenStub = sinon.stub(AlertBanner.prototype, 'open');
		alertBannerCloseStub = sinon.stub(AlertBanner.prototype, 'close');

		// Create a alertBanner
		alertBannerElement = document.querySelector('[data-n-component="n-alert-banner"]');
		options = {};
		alertBanner = new AlertBanner(alertBannerElement, options);

		// Restore constructor stubs
		getOptions.fromDom.restore();
		AlertBanner.prototype.render.restore();
		AlertBanner.prototype.open.restore();
		AlertBanner.prototype.close.restore();

	});

	describe('.buildCloseButtonElement()', () => {
		let returnValue;

		beforeEach(() => {

			// Mock options used to test output HTML
			alertBanner.options.closeButtonClass = 'mockCloseButtonClass';
			alertBanner.options.closeButtonLabel = 'mockCloseButtonLabel';

			sinon.stub(HTMLElement.prototype, 'addEventListener');

			returnValue = buildElement.closeButton(alertBanner);
		});

		afterEach(() => {
			HTMLElement.prototype.addEventListener.restore();
		});

		it('returns an HTML element', () => {
			assert.instanceOf(returnValue, HTMLElement);
		});

		it('constructs the element HTML based on the given options', () => {
			assert.strictEqual(returnValue.outerHTML.replace(/[\t\n]+/g, ''), `
				<a class="mockCloseButtonClass" role="button" href="#void" aria-label="mockCloseButtonLabel" title="mockCloseButtonLabel"></a>
			`.replace(/[\t\n]+/g, ''));
		});

		it('adds a handler for the button click event', () => {
			assert.calledOnce(returnValue.addEventListener);
			assert.calledWith(returnValue.addEventListener, 'click');
			assert.isFunction(returnValue.addEventListener.firstCall.args[1]);
		});

		describe('click handler', () => {
			let event;

			beforeEach(() => {
				const clickHandler = returnValue.addEventListener.firstCall.args[1];
				event = {
					preventDefault: sinon.stub()
				};
				sinon.stub(alertBanner, 'close');
				clickHandler(event);
			});

			it('closes the alertBanner', () => {
				assert.calledOnce(alertBanner.close);
			});

			it('prevents the default click behaviour', () => {
				assert.calledOnce(event.preventDefault);
			});

		});

	});
});
