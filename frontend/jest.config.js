// jest.config.js (ESM, compatible with "type": "module")
import { pathsToModuleNameMapper } from 'ts-jest';
import { readFileSync } from 'fs';

const tsconfig = JSON.parse(
  readFileSync(new URL('./tsconfig.jest.json', import.meta.url), 'utf-8')
);

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/../shared/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(tsconfig.compilerOptions?.paths || {}, { prefix: '<rootDir>/' })
  },
  testMatch: ['<rootDir>/tests/**/*.(spec|test).ts?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.jest.json'
      }
    ]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react|react-dom|@testing-library)/)'
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};
