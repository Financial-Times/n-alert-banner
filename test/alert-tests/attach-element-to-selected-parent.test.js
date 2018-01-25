/* eslint-env mocha, sinon, proclaim */

import AlertBanner from '../../src/js/alert-banner';
import buildElement from '../../src/js/lib/build-element';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';
import { createOneLineString, fixtures, stubs } from './helpers/index';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('alertBannerElement position', () => {
	let sandbox;
	let alertBanner;
	let alertBannerElement;


	const mockAlertElement = document.createElement('div');
	const mockAlertInnerElement = document.createElement('div');

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
		stubs.alertBannerOpen(sandbox);
		stubs.alertBannerClose(sandbox);
		stubs.buildElementAlertBanner(sandbox);
	});

	afterEach(() => {
		document.body.innerHTML = '';
		sandbox.restore();
	});

	describe('determined by parent element found on page', () => {
		let testNav;
		let testArea;

		beforeEach(() => {
			document.body.innerHTML += '<div id="site-navigation"></div>';
			document.body.innerHTML += '<div id="test-area"></div>';
			testNav = document.getElementById('site-navigation');
			testArea = document.getElementById('test-area');
		});

		afterEach(() => {
			testNav.remove();
			testArea.remove();
		});

		describe('not specified', () => {
			beforeEach(() => {
				testArea.innerHTML = fixtures.main;

				AlertBanner._alertInstances = [];

				alertBannerElement = document.querySelector('[data-n-component="n-alert-banner"]');
				let options = null;
				alertBanner = new AlertBanner(alertBannerElement, options);

				sinon.stub(buildElement, 'closeButton').returns(fixtures.mockCloseButtonElement);
				sinon.stub(alertBannerElement, 'querySelector').returns(mockAlertInnerElement);
				sinon.stub(mockAlertElement, 'querySelector').returns(mockAlertInnerElement);
			});

			afterEach(() => {
				buildElement.closeButton.restore();
				alertBannerElement.querySelector.restore();
				mockAlertElement.querySelector.restore();
			});

			it('has selectedParentElement set to false', () => {
				assert.deepEqual(alertBanner.options.selectedParentElement, false);
			});

			it('defaults to template location', () => {
				const result = document.getElementById('site-navigation');
				assert.strictEqual(createOneLineString(result.outerHTML), createOneLineString(fixtures.siteNavigation));
			});
		});

		describe('attach to FT navigation', () => {

			beforeEach(() => {
				testArea.innerHTML = fixtures.attachToNavMain;

				AlertBanner._alertInstances = [];

				alertBannerElement = document.querySelector('[data-n-component="n-alert-banner"]');
				let options = null;
				alertBanner = new AlertBanner(alertBannerElement, options);

				sinon.stub(buildElement, 'closeButton').returns(fixtures.mockCloseButtonElement);
				sinon.stub(alertBannerElement, 'querySelector').returns(mockAlertInnerElement);
				sinon.stub(mockAlertElement, 'querySelector').returns(mockAlertInnerElement);

			});

			afterEach(() => {
				buildElement.closeButton.restore();
				alertBannerElement.querySelector.restore();
				mockAlertElement.querySelector.restore();
			});

			it('has selectedParentElement set to chosen id', () => {
				assert.deepEqual(alertBanner.options.selectedParentElement, '#site-navigation');
			});

			it('when there is a data-n-alert-banner-attach-to-navigation="choosenID" selector in the html', () => {
				const result = document.getElementById('site-navigation');
				assert.strictEqual(createOneLineString(result.outerHTML), createOneLineString(fixtures.navParentElementOfAlertBanner));
			});
		});

	});

	describe('NO site-navigation id on page', () => {
		let testTitle;
		let testArea;

		beforeEach(() => {
			document.body.innerHTML += '<div id="title">FT TITLE</div>';
			document.body.innerHTML += '<div id="test-area"></div>';
			testTitle = document.getElementById('title');
			testArea = document.getElementById('test-area');
			testArea.innerHTML = fixtures.attachToNavMain;

			AlertBanner._alertInstances = [];

			alertBannerElement = document.querySelector('[data-n-component="n-alert-banner"]');
			let options = null;
			alertBanner = new AlertBanner(alertBannerElement, options);

			sinon.stub(buildElement, 'closeButton').returns(fixtures.mockCloseButtonElement);
			sinon.stub(alertBannerElement, 'querySelector').returns(mockAlertInnerElement);
			sinon.stub(mockAlertElement, 'querySelector').returns(mockAlertInnerElement);
		});

		afterEach(() => {
			testTitle.remove();
			testArea.remove();
			sandbox.restore();
			buildElement.closeButton.restore();
			alertBannerElement.querySelector.restore();
			mockAlertElement.querySelector.restore();
		});

		it('has selectedParentElement set to choosen id', () => {
			assert.deepEqual(alertBanner.options.selectedParentElement, '#site-navigation');
		});

		it('top of body', () => {
			assert.strictEqual(createOneLineString(document.body.firstChild.outerHTML), createOneLineString(fixtures.attachToNavMain));
		});

	});

});
