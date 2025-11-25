import js from '@eslint/js';
import globals from 'globals';
import unicornPlugin from 'eslint-plugin-unicorn';
import stylisticPlugin from '@stylistic/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      stylisticPlugin.configs.customize({
        indent: 2,
        semi: true,
        jsx: false,
      }),
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off',
    },
  },
  {
    name: 'unicorn',
    files: ['**/.js'],
    extends: [unicornPlugin.configs.recommended],
  },
]);
