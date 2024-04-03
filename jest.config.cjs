module.exports = {
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
	},
	setupFilesAfterEnv: ['./src/jest-setup.js'],
};
