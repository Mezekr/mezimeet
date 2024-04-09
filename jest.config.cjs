module.exports = {
	testEnvironment: 'jsdom',
	transformIgnorePatterns: [],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
		'^.+\\.svg$': 'jest-transformer-svg',
	},
	setupFilesAfterEnv: ['./src/jest-setup.js'],
};
