// eslint.config.mts
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  tsPlugin.configs.flat.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+ does not require import React
      'prettier/prettier': 'off', // disable Prettier errors
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
