install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	pm publish --dry-run