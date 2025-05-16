/**
 * This script is used to register tsconfig paths 
 * for production builds running in Node.js
 */
const tsConfigPaths = require('tsconfig-paths');
const path = require('path');

// Calculate the paths relative to the project root (where dist is located)
const baseUrl = path.resolve(__dirname);
const { paths } = require('./tsconfig.json').compilerOptions;

// Register the path mappings
tsConfigPaths.register({
  baseUrl,
  paths: {
    '@shared/*': [
      path.resolve(__dirname, '../shared/*'),
      path.resolve(__dirname, 'dist/shared/*'),
    ],
  },
});
