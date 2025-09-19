// eslint.config.mts
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // ✅ disable the React import error
      'prettier/prettier': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
