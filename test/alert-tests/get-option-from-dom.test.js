/* eslint-env mocha, sinon, proclaim */
import getOptions from '../../src/js/lib/get-options';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
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
