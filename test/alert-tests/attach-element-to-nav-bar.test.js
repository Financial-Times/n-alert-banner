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

describe('attach alertBannerElement to navigation', () => {
	let testNav;
	let testArea;
	let sandbox;
	let alertBanner;
	let alertBannerElement;

	beforeEach(() => {
		document.body.innerHTML += '<div id="site-navigation"></div>';
		document.body.innerHTML += '<div id="test-area"></div>';
		testNav = document.getElementById('site-navigation');
		testArea = document.getElementById('test-area');
		testArea.innerHTML = fixtures.attachToNavMain;

		AlertBanner._alertInstances = [];

		sandbox = sinon.sandbox.create();
		stubs.alertBannerOpen(sandbox);
		stubs.alertBannerClose(sandbox);
		stubs.buildElementAlertBanner(sandbox);

		alertBannerElement = document.querySelector('[data-n-component="n-alert-banner"]');
		let options = null;
		alertBanner = new AlertBanner(alertBannerElement, options);

		let mockAlertElement = document.createElement('div');
		let mockAlertInnerElement = document.createElement('div');

		sinon.stub(buildElement, 'closeButton').returns(fixtures.mockCloseButtonElement);
		sinon.stub(alertBannerElement, 'querySelector').returns(mockAlertInnerElement);
		sinon.stub(mockAlertElement, 'querySelector').returns(mockAlertInnerElement);


	});

	afterEach(() => {
		testNav.remove();
		testArea.remove();
		buildElement.closeButton.restore();
		alertBannerElement.querySelector.restore();
		sandbox.restore();
	});

	it('has attachToNavigation set to false', () => {
		assert.deepEqual(alertBanner.options.attachToNavigation, true);
	});

	it('when there is a data-n-alert-banner-attach-to-navigation="true" selector in the html', () => {
		const result = document.getElementById('site-navigation');
		assert.strictEqual(createOneLineString(result.outerHTML), createOneLineString(fixtures.NavParentElementOfAlertBanner));
	});
});
