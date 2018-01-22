/* eslint-env mocha, sinon, proclaim */
import buildElement from '../../src/js/lib/build-element';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';
import { fixtures, createOneLineString } from './helpers/index';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('buildElement.alertBanner()', () => {
	let options;
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
			contentLongBold: 'mockContentLongBold',
			contentLong: 'mockContentLong',
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
		assert.strictEqual(createOneLineString(returnValue.outerHTML), createOneLineString(fixtures.mockMain));
	});

	describe('when `options.contentShort` is not a string', () => {

		beforeEach(() => {
			options.contentShort = null;
			returnValue = buildElement.alertBanner(options);
		});

		it('outputs only one content element using `options.contentLong`', () => {
			assert.strictEqual(createOneLineString(returnValue.outerHTML), createOneLineString(fixtures.noContentShort));
		});

	});

	describe('when `options.linkLabel` is not a string', () => {

		beforeEach(() => {
			options.linkLabel = null;
			returnValue = buildElement.alertBanner(options);
		});

		it('does not include a secondary action/link', () => {
			assert.strictEqual(createOneLineString(returnValue.outerHTML), createOneLineString(fixtures.noLink));
		});

	});

	describe('when `options.buttonLabel` is not a string', () => {

		beforeEach(() => {
			options.buttonLabel = null;
			returnValue = buildElement.alertBanner(options);
		});

		it('does not include a button', () => {
			assert.strictEqual(createOneLineString(returnValue.outerHTML), createOneLineString(fixtures.noButton));
		});

	});

	describe('when `options.theme` is defined and is a string', () => {

		beforeEach(() => {
			returnValue = buildElement.alertBanner(options);
		});

		it('adds the theme class to the alert banner element', () => {
			assert.strictEqual(createOneLineString(returnValue.outerHTML), createOneLineString(fixtures.mockTheme));
		});

	});

});
