module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
  ],
  // plugins: [
  //   'stylelint-declaration-block-no-ignored-properties',
  // ],
  rules: {
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'media-feature-range-notation': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'color-hex-length': null,
    'property-no-vendor-prefix': null,
    // 'plugin/declaration-block-no-ignored-properties': true,
  }
};