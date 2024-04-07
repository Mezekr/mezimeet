module.exports = {
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-transformer-svg',
	},
	setupFilesAfterEnv: ['./src/jest-setup.js'],
};
