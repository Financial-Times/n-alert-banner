/* eslint-env mocha, sinon, proclaim */
import AlertBanner from '../../src/js/alert-banner';
import buildElement from '../../src/js/lib/build-element';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';
import { fixtures, stubs, createOneLineString } from './helpers/index';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('.buildCloseButtonElement()', () => {
	let alertBannerElement;
	let alertBanner;
	let sandbox;
	let testArea;

	beforeEach(() => {
		document.body.innerHTML += '<div id="test-area"></div>';
		testArea = document.getElementById('test-area');
		testArea.innerHTML = fixtures.mainNoCloseButton;
		AlertBanner._alertInstances = [];

		sandbox = sinon.sandbox.create();
		stubs.alertBannerGetOptionsFromDom(sandbox);
		stubs.alertBannerOpen(sandbox);
		stubs.alertBannerClose(sandbox);

		alertBannerElement = document.querySelector('[data-n-component="n-alert-banner"]');

	});

	afterEach(() => {
		testArea.innerHTML='';
		sandbox.restore();
	});

	describe('is called', () => {
		let returnValue;

		beforeEach(() => {
			stubs.alertBannerRender(sandbox);

			let options = {};
			alertBanner = new AlertBanner(alertBannerElement, options);

			sandbox.restore();

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
			assert.strictEqual(createOneLineString(returnValue.outerHTML), createOneLineString(fixtures.mockCloseButtonElement));
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

	describe('is not called', () => {
		let mockCloseButtonElement;
		let alertBanner;

		beforeEach(() => {

			stubs.buildElementAlertBanner(sandbox);
			sinon.stub(document.body, 'appendChild');
			sinon.stub(buildElement, 'closeButton').returns(mockCloseButtonElement);
		});

		afterEach(() => {
			buildElement.closeButton.restore();
			document.body.appendChild.restore();
		});

		describe('imperatively', () => {

			beforeEach(() => {

				mockCloseButtonElement = document.createElement('a');

				let options = { closeButton: false };
				alertBanner = new AlertBanner(alertBannerElement, options);

				sandbox.restore();

			});

			it('has closeButton set to false', () => {
				assert.notCalled(buildElement.closeButton);
			});

			it('therefore does not construct the element HTML based on the given options', () => {
				assert.notEqual(alertBanner.innerElement, fixtures.closeButtonElement);
			});
		});

		describe('declaratively', () => {

			beforeEach(() => {

				let options = { closeButton: false };
				alertBanner = new AlertBanner(alertBannerElement, options);

			});

			it('has closeButton set to false', () => {
				assert.notCalled(buildElement.closeButton);
			});

			it('does not have a close button in the HTML', () => {
				assert.notEqual(createOneLineString(fixtures.mainWithCloseButton), createOneLineString(fixtures.mainNoCloseButton));
			});
		});
	});
});
