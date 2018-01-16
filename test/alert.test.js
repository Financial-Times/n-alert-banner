/* eslint-env mocha, sinon, proclaim */
import AlertBanner from './../src/js/alert-banner';
import getOptions from './../src/js/lib/get-options';
import buildElement from './../src/js/lib/build-element';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';
import mainFixture from './fixture/main';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('AlertBanner', () => {
	let testArea;

	before(() => {
		document.body.innerHTML += '<div id="test-area"></div>';
		testArea = document.getElementById('test-area');
	});

	afterEach(() => {
		testArea.innerHTML = '';
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
			testArea.innerHTML = mainFixture;
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
				contentLong1: '&hellip;',
				contentLong2: '&hellip;',
				contentShort: null,
				buttonLabel: null,
				buttonUrl: '#',
				linkLabel: null,
				linkUrl: '#',
				closeButtonLabel: 'Close',
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
				alertBannerRenderStub = sinon.stub(AlertBanner.prototype, 'render');
				alertBannerOpenStub = sinon.stub(AlertBanner.prototype, 'open');

				// Create a alertBanner
				options.alertBannerClass = 'payment-alert';
				alertBanner = new AlertBanner(alertBannerElement, options);

				// Restore constructor stubs
				AlertBanner.prototype.render.restore();
				AlertBanner.prototype.open.restore();

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
				alertBannerRenderStub = sinon.stub(AlertBanner.prototype, 'render');
				alertBannerOpenStub = sinon.stub(AlertBanner.prototype, 'open');

				alertBannerGetOptionsFromDomStub.returns({
					mockOption: 'from dom'
				});

				// Create a alertBanner
				alertBanner = new AlertBanner(alertBannerElement);

				// Restore constructor stubs
				getOptions.fromDom.restore();
				AlertBanner.prototype.render.restore();
				AlertBanner.prototype.open.restore();

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

		describe('buildElement.alertBanner()', () => {
			let returnValue;

			beforeEach(() => {

				// Mock options used to test output HTML
				options = {
					alertBannerClass: 'mockAlertClass',
					alertBannerClosedClass: 'mockAlertClosedClass',
					outerClass: 'mockOuterClass',
					innerClass: 'mockInnerClass',
					contentClass: 'mockContentClass',
					contentLongClass: 'mockContentLongClass',
					contentShortClass: 'mockContentShortClass',
					actionsClass: 'mockActionsClass',
					actionClass: 'mockActionClass',
					actionSecondaryClass: 'mockActionSecondaryClass',
					buttonClass: 'mockButtonClass',
					linkClass: 'mockLinkClass',
					contentLong1: 'mockContentLong1',
					contentLong2: 'mockContentLong2',
					contentShort: 'mockContentShort',
					buttonLabel: 'mockButtonLabel',
					buttonUrl: 'mockButtonUrl',
					linkLabel: 'mockLinkLabel',
					linkUrl: 'mockLinkUrl',
					theme: 'mock-theme'
				};

				returnValue = buildElement.alertBanner(options);
			});

			it('returns an HTML element', () => {
				assert.instanceOf(returnValue, HTMLElement);
			});

			it('constructs the element HTML based on the given options', () => {
				assert.strictEqual(returnValue.outerHTML.replace(/[\t\n]+/g, ''), `
					<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
						<div class="mockOuterClass">
							<div class="mockInnerClass" data-n-alert-banner-inner="">
								<div class="mockContentClass mockContentLongClass">
									<p><b>mockContentLong1</b> mockContentLong2</p>
								</div>
								<div class="mockContentClass mockContentShortClass">
									<p>mockContentShort</p>
								</div>
								<div class="mockActionsClass">
									<div class="mockActionClass">
										<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
									</div>
									<div class="mockActionClass mockActionSecondaryClass">
										<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				`.replace(/[\t\n]+/g, ''));
			});

			describe('when `options.contentShort` is not a string', () => {

				beforeEach(() => {
					options.contentShort = null;
					returnValue = buildElement.alertBanner(options);
				});

				it('outputs only one content element using `options.contentLong`', () => {
					assert.strictEqual(returnValue.outerHTML.replace(/[\t\n]+/g, ''), `
					<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
						<div class="mockOuterClass">
							<div class="mockInnerClass" data-n-alert-banner-inner="">
								<div class="mockContentClass mockContentLongClass">
									<p><b>mockContentLong1</b> mockContentLong2</p>
								</div>
								<div class="mockActionsClass">
									<div class="mockActionClass">
										<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
									</div>
									<div class="mockActionClass mockActionSecondaryClass">
										<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					`.replace(/[\t\n]+/g, ''));
				});

			});

			describe('when `options.linkLabel` is not a string', () => {

				beforeEach(() => {
					options.linkLabel = null;
					returnValue = buildElement.alertBanner(options);
				});

				it('does not include a secondary action/link', () => {
					assert.strictEqual(returnValue.outerHTML.replace(/[\t\n]+/g, ''), `
					<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
						<div class="mockOuterClass">
							<div class="mockInnerClass" data-n-alert-banner-inner="">
								<div class="mockContentClass mockContentLongClass">
									<p><b>mockContentLong1</b> mockContentLong2</p>
								</div>
								<div class="mockContentClass mockContentShortClass">
									<p>mockContentShort</p>
								</div>
								<div class="mockActionsClass">
									<div class="mockActionClass">
										<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					`.replace(/[\t\n]+/g, ''));
				});

			});

			describe('when `options.theme` is defined and is a string', () => {

				beforeEach(() => {
					returnValue = buildElement.alertBanner(options);
				});

				it('adds the theme class to the alert banner element', () => {
					assert.strictEqual(returnValue.outerHTML.replace(/[\t\n]+/g, ''), `
					<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
						<div class="mockOuterClass">
							<div class="mockInnerClass" data-n-alert-banner-inner="">
								<div class="mockContentClass mockContentLongClass">
									<p><b>mockContentLong1</b> mockContentLong2</p>
								</div>
								<div class="mockContentClass mockContentShortClass">
									<p>mockContentShort</p>
								</div>
								<div class="mockActionsClass">
									<div class="mockActionClass">
										<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
									</div>
									<div class="mockActionClass mockActionSecondaryClass">
										<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					`.replace(/[\t\n]+/g, ''));
				});

			});

		});

		it('has a buildCloseButtonElement method', () => {
			assert.isFunction(buildElement.alertBanner);
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

	describe('.getOptionsFromDom(alertBannerElement)', () => {
		let mockAlertElement;
		let returnValue;

		beforeEach(() => {
			mockAlertElement = document.createElement('div');
			mockAlertElement.setAttribute('data-n-component', 'n-alert-banner');
			mockAlertElement.setAttribute('data-key', 'value');
			mockAlertElement.setAttribute('data-another-key', 'value');
			mockAlertElement.setAttribute('data-n-alert-banner-foo', 'bar');
			mockAlertElement.setAttribute('data-n-alert-banner-json', '{"foo": "bar"}');
			mockAlertElement.setAttribute('data-n-alert-banner-json-single', '{\'foo\': \'bar\'}');
			returnValue = getOptions.fromDom(mockAlertElement);
		});

		it('returns an object', () => {
			assert.isObject(returnValue);
		});

		it('extracts values from data attributes and returns them as object keys', () => {
			assert.strictEqual(returnValue.key, 'value');
		});

		it('converts the keys to camel-case', () => {
			assert.isUndefined(returnValue['another-key']);
			assert.strictEqual(returnValue.anotherKey, 'value');
		});

		it('ignores the `data-n-component` attribute', () => {
			assert.isUndefined(returnValue.nComponent);
		});

		it('strips "alert" from the key', () => {
			assert.isUndefined(returnValue.oAlertFoo);
			assert.strictEqual(returnValue.foo, 'bar');
		});

		it('parses the key as JSON if it\'s valid', () => {
			assert.isObject(returnValue.json);
			assert.deepEqual(returnValue.json, {
				foo: 'bar'
			});
		});


		it('parses the key as JSON even if single quotes are used', () => {
			assert.isObject(returnValue.jsonSingle);
			assert.deepEqual(returnValue.jsonSingle, {
				foo: 'bar'
			});
		});

		describe('when `alertBannerElement` is not an HTML element', () => {
			let returnValue;

			beforeEach(() => {
				returnValue = getOptions.fromDom(null);
			});

			it('returns an empty object', () => {
				assert.isObject(returnValue);
				assert.deepEqual(returnValue, {});
			});

		});

	});

	describe('.init(rootElement, options)', () => {
		let mockRootElement;
		let options;
		let returnValue;

		beforeEach(() => {
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

});
