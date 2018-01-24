/* eslint-env mocha, sinon, proclaim */

import AlertBanner from '../../src/js/alert-banner';
import getOptions from '../../src/js/lib/get-options';
import buildElement from '../../src/js/lib/build-element';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';
import * as fixtures from './helpers/fixtures';
import stubs from './helpers/stubs';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('new AlertBanner(alertBannerElement, options)', () => {
	let testArea;
	let alertBanner;
	let alertBannerCloseStub;
	let alertBannerElement;
	let alertBannerGetOptionsFromDomStub;
	let alertBannerOpenStub;
	let alertBannerRenderStub;
	let options;
	let sandbox;

	beforeEach(() => {
		document.body.innerHTML += '<div id="test-area"></div>';
		testArea = document.getElementById('test-area');
		testArea.innerHTML = fixtures.main;
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

	afterEach(() => {
		testArea.innerHTML = '';
	});

	it('stores `alertBannerElement` in a `alertBannerElement` property', () => {
		assert.strictEqual(alertBanner.alertBannerElement, alertBannerElement);
	});

	it('defaults the options and stores them in an `options` property', () => {
		assert.isObject(alertBanner.options);
		assert.notStrictEqual(alertBanner.options, options);
		assert.deepEqual(alertBanner.options, {
			autoOpen: true,
			alertBannerClass: 'n-alert-banner',
			alertBannerClosedClass: 'n-alert-banner--closed',
			outerClass: 'n-alert-banner__outer',
			innerClass: 'n-alert-banner__inner',
			contentClass: 'n-alert-banner__content',
			contentLongClass: 'n-alert-banner__content--long',
			contentShortClass: 'n-alert-banner__content--short',
			actionsClass: 'n-alert-banner__actions',
			actionClass: 'n-alert-banner__action',
			actionSecondaryClass: 'n-alert-banner__action--secondary',
			buttonClass: 'n-alert-banner__button',
			linkClass: 'n-alert-banner__link',
			closeButtonClass: 'n-alert-banner__close',
			contentLongBold: '&hellip;',
			contentLong: '&hellip;',
			contentShort: null,
			buttonLabel: null,
			buttonUrl: '#',
			linkLabel: null,
			linkUrl: '#',
			closeButtonLabel: 'Close',
			noCloseButton: false,
			attachToElement: false,

			theme: null
		});
	});

	it('does not extract options from the DOM', () => {
		assert.notCalled(alertBannerGetOptionsFromDomStub);
	});

	it('opens the alertBanner', () => {
		assert.calledOnce(alertBannerOpenStub);
	});

	it('does not close the alertBanner', () => {
		assert.notCalled(alertBannerCloseStub);
	});

	it('renders the alertBanner', () => {
		assert.calledOnce(alertBannerRenderStub);
	});

	describe('when `options.autoOpen` is `false`', () => {

		beforeEach(() => {
			AlertBanner._alertInstances = [];

			// Stub out methods called in constructor
			alertBannerRenderStub = sinon.stub(AlertBanner.prototype, 'render');
			alertBannerOpenStub = sinon.stub(AlertBanner.prototype, 'open');
			alertBannerCloseStub = sinon.stub(AlertBanner.prototype, 'close');

			// Create a alertBanner
			options.autoOpen = false;
			alertBanner = new AlertBanner(alertBannerElement, options);

			// Restore constructor stubs
			AlertBanner.prototype.render.restore();
			AlertBanner.prototype.open.restore();
			AlertBanner.prototype.close.restore();

		});

		it('does not open the alertBanner', () => {
			assert.notCalled(alertBannerOpenStub);
		});

		it('closes the alertBanner', () => {
			assert.calledOnce(alertBannerCloseStub);
		});

	});

	describe('when `options.alertClass` is specified but no other classes are', () => {

		beforeEach(() => {

			// Stub out methods called in constructor
			sandbox = sinon.sandbox.create();
			stubs.alertBannerRender(sandbox);
			stubs.alertBannerOpen(sandbox);
			stubs.alertBannerClose(sandbox);

			// Create a alertBanner
			options.alertBannerClass = 'payment-alert';
			alertBanner = new AlertBanner(alertBannerElement, options);

			// Restore constructor stubs
			sandbox.restore();

		});

		it('defaults the other class options based on the alertBanner class', () => {
			assert.strictEqual(alertBanner.options.alertBannerClosedClass, 'payment-alert--closed');
			assert.strictEqual(alertBanner.options.outerClass, 'payment-alert__outer');
			assert.strictEqual(alertBanner.options.innerClass, 'payment-alert__inner');
			assert.strictEqual(alertBanner.options.contentClass, 'payment-alert__content');
			assert.strictEqual(alertBanner.options.contentLongClass, 'payment-alert__content--long');
			assert.strictEqual(alertBanner.options.contentShortClass, 'payment-alert__content--short');
			assert.strictEqual(alertBanner.options.actionsClass, 'payment-alert__actions');
			assert.strictEqual(alertBanner.options.actionClass, 'payment-alert__action');
			assert.strictEqual(alertBanner.options.actionSecondaryClass, 'payment-alert__action--secondary');
			assert.strictEqual(alertBanner.options.buttonClass, 'payment-alert__button');
			assert.strictEqual(alertBanner.options.linkClass, 'payment-alert__link');
		});

	});

	describe('when `options` is not defined', () => {

		beforeEach(() => {

			// Stub out methods called in constructor
			alertBannerGetOptionsFromDomStub = sinon.stub(getOptions, 'fromDom');
			sandbox = sinon.sandbox.create();
			stubs.alertBannerRender(sandbox);
			stubs.alertBannerOpen(sandbox);
			stubs.alertBannerClose(sandbox);

			alertBannerGetOptionsFromDomStub.returns({
				mockOption: 'from dom'
			});

			// Create a alertBanner
			alertBanner = new AlertBanner(alertBannerElement);

			// Restore constructor stubs
			getOptions.fromDom.restore();
			sandbox.restore();

		});

		it('extracts the options from the DOM', () => {
			assert.calledOnce(alertBannerGetOptionsFromDomStub);
			assert.strictEqual(alertBanner.options.mockOption, 'from dom');
		});

	});

	it('has a render method', () => {
		assert.isFunction(alertBanner.render);
	});

	describe('.render()', () => {
		let mockAlertElement;
		let mockAlertInnerElement;
		let mockCloseButtonElement;

		beforeEach(() => {
			mockAlertElement = document.createElement('div');
			mockAlertInnerElement = document.createElement('div');
			mockCloseButtonElement = document.createElement('a');
			options = {};

			sinon.stub(buildElement, 'alertBanner').returns(mockAlertElement);
			sinon.stub(alertBannerElement, 'querySelector').returns(mockAlertInnerElement);
			sinon.stub(mockAlertElement, 'querySelector').returns(mockAlertInnerElement);
			sinon.stub(buildElement, 'closeButton').withArgs(alertBanner).returns(mockCloseButtonElement);
			sinon.stub(mockAlertInnerElement, 'appendChild');

			alertBanner.render();
		});

		afterEach(() => {
			buildElement.alertBanner.restore();
			buildElement.closeButton.restore();
		});

		it('does not build a alertBanner element', () => {
			assert.notCalled(buildElement.alertBanner);
		});

		it('selects the inner element and stores it on the `innerElement` property', () => {
			assert.calledOnce(alertBannerElement.querySelector);
			assert.calledWithExactly(alertBannerElement.querySelector, '[data-n-alert-banner-inner]');
			assert.strictEqual(alertBanner.innerElement, mockAlertInnerElement);
		});

		it('builds a close button element and stores it on the `closeButtonElement` property', () => {
			assert.calledOnce(buildElement.closeButton);
			assert.strictEqual(buildElement.closeButton(alertBanner), mockCloseButtonElement);
		});

		it('appends the close button element to the inner element', () => {
			assert.calledOnce(mockAlertInnerElement.appendChild);
			assert.calledWithExactly(mockAlertInnerElement.appendChild, mockCloseButtonElement);
		});

		describe('when the `alertBannerElement` property is not an HTML element', () => {

			beforeEach(() => {
				alertBanner.alertBannerElement = null;
				sinon.stub(document.body, 'appendChild');
				alertBanner.render();
			});

			afterEach(() => {
				document.body.appendChild.restore();
			});

			it('builds a alertBanner element and stores it on the `alertBannerElement` property', () => {
				assert.calledOnce(buildElement.alertBanner);
				assert.strictEqual(alertBanner.alertBannerElement, mockAlertElement);
			});

			it('appends the alertBanner element to the body', () => {
				assert.calledOnce(document.body.appendChild);
				assert.calledWithExactly(document.body.appendChild, mockAlertElement);
			});

		});

	});

	it('has an open method', () => {
		assert.isFunction(alertBanner.open);
	});

	describe('.open()', () => {

		beforeEach(() => {
			sinon.spy(alertBannerElement.classList, 'remove');
			sinon.spy(alertBannerElement, 'dispatchEvent');
			alertBanner.open();
		});

		it('removes the alertBanner closed class', () => {
			assert.calledOnce(alertBannerElement.classList.remove);
			assert.calledWith(alertBannerElement.classList.remove, alertBanner.options.alertBannerClosedClass);
		});

		it('dispatches an `n-alertOpened` event', () => {
			assert.calledOnce(alertBannerElement.dispatchEvent);
			assert.instanceOf(alertBannerElement.dispatchEvent.firstCall.args[0], CustomEvent);
			assert.strictEqual(alertBannerElement.dispatchEvent.firstCall.args[0].type, 'n.alertBannerOpened');
		});

	});

	it('has a close method', () => {
		assert.isFunction(alertBanner.close);
	});

	describe('.close()', () => {

		beforeEach(() => {
			sinon.spy(alertBannerElement.classList, 'add');
			sinon.spy(alertBannerElement, 'dispatchEvent');
			alertBanner.close();
		});

		it('adds the alertBanner closed class', () => {
			assert.calledOnce(alertBannerElement.classList.add);
			assert.calledWith(alertBannerElement.classList.add, alertBanner.options.alertBannerClosedClass);
		});

		it('dispatches an `n-alertClosed` event', () => {
			assert.calledOnce(alertBannerElement.dispatchEvent);
			assert.instanceOf(alertBannerElement.dispatchEvent.firstCall.args[0], CustomEvent);
			assert.strictEqual(alertBannerElement.dispatchEvent.firstCall.args[0].type, 'n.alertBannerClosed');
		});

	});

	it('has a buildAlertElement method', () => {
		assert.isFunction(buildElement.alertBanner);
	});

	it('has a buildCloseButtonElement method', () => {
		assert.isFunction(buildElement.alertBanner);
	});

});
