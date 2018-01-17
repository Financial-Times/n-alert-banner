/* eslint-env mocha, sinon, proclaim */
import AlertBanner from '../../src/js/alert-banner';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('.init(rootElement, options)', () => {
	let mockRootElement;
	let options;
	let returnValue;

	beforeEach(() => {
		document.body.innerHTML += '<div id="test-area"></div>';
		testArea = document.getElementById('test-area');

		sinon.stub(document, 'querySelector');
		sinon.stub(AlertBanner.prototype, 'render');
		sinon.stub(AlertBanner.prototype, 'open');
		mockRootElement = document.createElement('div');
		options = {
			mockOption: 'test'
		};
	});

	afterEach(() => {
		document.querySelector.restore();
		AlertBanner.prototype.render.restore();
		AlertBanner.prototype.open.restore();

		testArea.innerHTML = '';
	});

	describe('when `rootElement` is an HTML element with a `data-n-component` attribute set to "n-alert-banner"', () => {

		beforeEach(() => {
			mockRootElement.setAttribute('data-n-component', 'n-alert-banner');
			returnValue = AlertBanner.init(mockRootElement, options);
		});

		it('does not query the the document', () => {
			assert.notCalled(document.querySelector);
		});

		it('creates a new AlertBanner instance with the passed in arguments, and returns it', () => {
			assert.instanceOf(returnValue, AlertBanner);
			assert.strictEqual(returnValue.alertBannerElement, mockRootElement);
			assert.strictEqual(returnValue.options.mockOption, 'test');
		});

	});

	describe('when `rootElement` is an HTML element with no `data-n-component` attribute', () => {
		let mockAlert1;
		let mockAlert2;
		let mockNotAlert;

		beforeEach(() => {
			mockAlert1 = document.createElement('div');
			mockAlert1.setAttribute('data-n-component', 'n-alert-banner');
			mockAlert2 = document.createElement('div');
			mockAlert2.setAttribute('data-n-component', 'n-alert-banner');
			mockNotAlert = document.createElement('div');
			mockRootElement.appendChild(mockAlert1);
			mockRootElement.appendChild(mockAlert2);
			mockRootElement.appendChild(mockNotAlert);
			sinon.spy(mockRootElement, 'querySelectorAll');
			returnValue = AlertBanner.init(mockRootElement, options);
		});

		it('does not query the the document', () => {
			assert.notCalled(document.querySelector);
		});

		it('queries the `rootElement` for n-alert-banner elements', () => {
			assert.calledOnce(mockRootElement.querySelectorAll);
			assert.calledWithExactly(mockRootElement.querySelectorAll, '[data-n-component="n-alert-banner"]');
		});

		it('creates a new AlertBanner instance with each alertBanner element in `rootElement`, and returns an array of them', () => {
			assert.isArray(returnValue);
			assert.lengthEquals(returnValue, 2);
			assert.instanceOf(returnValue[0], AlertBanner);
			assert.strictEqual(returnValue[0].alertBannerElement, mockAlert1);
			assert.strictEqual(returnValue[0].options.mockOption, 'test');
			assert.instanceOf(returnValue[1], AlertBanner);
			assert.strictEqual(returnValue[1].alertBannerElement, mockAlert2);
			assert.strictEqual(returnValue[1].options.mockOption, 'test');
		});

	});

	describe('when `rootElement` is defined, but is not an HTML element', () => {
		let foundElement;

		beforeEach(() => {
			foundElement = document.createElement('div');
			foundElement.setAttribute('data-n-component', 'n-alert-banner');
			document.querySelector.returns(foundElement);
			returnValue = AlertBanner.init('mock-selector', options);
		});

		it('queries the DOM using `rootElement` as a selector', () => {
			assert.calledOnce(document.querySelector);
			assert.calledWithExactly(document.querySelector, 'mock-selector');
		});

		it('creates a new AlertBanner instance with the found element, and returns it', () => {
			assert.instanceOf(returnValue, AlertBanner);
			assert.strictEqual(returnValue.alertBannerElement, foundElement);
			assert.strictEqual(returnValue.options.mockOption, 'test');
		});

	});

	describe('when `rootElement` is not defined', () => {
		let mockAlert1;
		let mockAlert2;

		beforeEach(() => {
			mockAlert1 = document.createElement('div');
			mockAlert1.setAttribute('data-n-component', 'n-alert-banner');
			mockAlert2 = document.createElement('div');
			mockAlert2.setAttribute('data-n-component', 'n-alert-banner');
			testArea.appendChild(mockAlert1);
			testArea.appendChild(mockAlert2);
			sinon.spy(document.body, 'querySelectorAll');
			returnValue = AlertBanner.init(null, options);
		});

		afterEach(() => {
			document.body.querySelectorAll.restore();
		});

		it('does not query the the document', () => {
			assert.notCalled(document.querySelector);
		});

		it('queries `document.body` for alertelements', () => {
			assert.calledOnce(document.body.querySelectorAll);
			assert.calledWithExactly(document.body.querySelectorAll, '[data-n-component="n-alert-banner"]');
		});

		it('creates a new AlertBanner instance with each alertBanner element in `document.body`, and returns an array of them', () => {
			assert.isArray(returnValue);
			assert.lengthEquals(returnValue, 2);
			assert.instanceOf(returnValue[0], AlertBanner);
			assert.strictEqual(returnValue[0].alertBannerElement, mockAlert1);
			assert.strictEqual(returnValue[0].options.mockOption, 'test');
			assert.instanceOf(returnValue[1], AlertBanner);
			assert.strictEqual(returnValue[1].alertBannerElement, mockAlert2);
			assert.strictEqual(returnValue[1].options.mockOption, 'test');
		});
	});

});
