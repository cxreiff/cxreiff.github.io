import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  roots: [
    "<rootDir>/src"
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^react$": "preact/compat",
    "^react-dom/test-utils$": "preact/test-utils",
    "^react-dom$": "preact/compat",
    "^/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  setupFiles: [
    "./src/jestSetup.ts"
  ],
  transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
};

export default config;
