/* eslint-env mocha, sinon, proclaim */

import AlertBanner from './../main';
import {default as AlertBannerSrc} from './../src/js/alert-banner';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('main', () => {

	beforeEach(() => {
		sinon.stub(AlertBanner, 'init');
		sinon.spy(document, 'removeEventListener');
	});

	afterEach(() => {
		AlertBanner.init.restore();
		document.removeEventListener.restore();
	});

	it('exports the alertBanner class', () => {
		assert.isFunction(AlertBanner);
		assert.strictEqual(AlertBanner, AlertBannerSrc);
	});

	it('should auto-initialize banners', done => {
		document.addEventListener('o.DOMContentLoaded', () => {
			assert.calledOnce(AlertBanner.init);
			assert.calledWithExactly(AlertBanner.init);
			assert.calledOnce(document.removeEventListener);
			assert.calledWith(document.removeEventListener, 'o.DOMContentLoaded');
			done();
		});
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});

});
