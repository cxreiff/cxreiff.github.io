import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  clearMocks: true,
  automock: false,
  testEnvironment: "jsdom",
  roots: [
    '<rootDir>/src'
  ],
  setupFilesAfterEnv: [
    './jest.setup.ts'
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^react$': 'preact/compat',
    '^react-dom/test-utils$': 'preact/test-utils',
    '^react-dom$': 'preact/compat',
    '^react/jsx-runtime$': 'preact/jsx-runtime',
    '^/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.(css|scss|png|jpg|svg|vert|frag)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!('
    + 'react-markdown'
    + '|vfile(-.*)*'
    + '|unist(-.*)*'
    + '|unified'
    + '|bail'
    + '|trough'
    + '|remark(-.*)*'
    + '|mdast(-.*)*'
    + '|micromark(-.*)*'
    + '|parse-entities'
    + '|character-entities'
    + '|property-information'
    + '|space-separated-tokens'
    + '|comma-separated-tokens'
    + '|babylonjs-hook'
    + '|decode-named-character-reference'
    + '|hast-util-whitespace'
    + '|react-syntax-highlighter'
    + '|is-plain-obj'
    + '|tslib'
    + '|@testing-library/preact'
    + ')/)'
  ]
};

export default config;
