const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});
/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    // '^@/(.*)$': '<rootDir>/src/$1',
    // "@/*": ["./src/*"]
    // '^@/(.*)$': '<rootDir>/src/$1',
    // '^@components/(.*)$': '<rootDir>/src/components/$1',
    // '^@components/ui/(.*)$': '<rootDir>/src/components/Footer/$1',
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  verbose: true,
};

module.exports = createJestConfig(config);