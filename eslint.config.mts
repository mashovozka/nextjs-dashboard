import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // 👈 turn off the error
    },
    settings: {
      react: {
        version: 'detect', // auto-detect installed React version
      },
    },
  },
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
