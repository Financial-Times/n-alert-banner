# n-gage bootstrapping logic
node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

export IGNORE_A11Y = true

demo:
	./node_modules/.bin/obt demo --run-server --watch

verify:
	./node_modules/.bin/obt verify

test:
	./node_modules/.bin/obt test
