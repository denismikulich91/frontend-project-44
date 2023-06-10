install:
	npm ci

brain-calc:
	node games/brain-calc.js

brain-even:
	node games/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix