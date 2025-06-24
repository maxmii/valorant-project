// Root Jest config for monorepo (TypeScript)
import type {Config} from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/backend/tests/jest-e2e.json',
    '<rootDir>/frontend/jest.config.js'
  ]
};

export default config;
