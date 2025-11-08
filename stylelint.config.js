/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'import-notation': 'string',
    'color-no-hex': true,
    'selector-class-pattern': null,
  },
};
