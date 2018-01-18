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
				contentLongBold: 'mockContentLong1',
				contentLong: 'mockContentLong2',
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

});
