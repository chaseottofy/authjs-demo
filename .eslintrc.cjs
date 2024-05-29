module.exports = {
  env: {
    browser: true,
    'es2021': true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'next',
    'plugin:@typescript-eslint/strict',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/all',
    // 'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:@typescript-eslint/stylistic-type-checked',
    // 'plugin:jsx-a11y/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  plugins: [
    // 'jsx-a11y',
    '@typescript-eslint',
    'import',
    'unicorn',
    'react-hooks',
    'react',
    'react-refresh',
    'simple-import-sort',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-misused-promises': [0, {
      checksVoidReturn: false
    }],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/semi': 1,
    'import/extensions': 0,
    'import/prefer-default-export': 0,


    // AlLY
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/label-has-associated-control': [2, {
    //   controlComponents: ['HookFormInput'],
    //   depth: 3
    // }],
    // 'jsx-a11y/no-autofocus': 0,
    // 'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,


    'jsx-quotes': [1, 'prefer-single'],
    'linebreak-style': 0,
    'no-console': 0,
    'no-tabs': [2, {
      allowIndentationTabs: true
    }],
    'no-trailing-spaces': 1,
    'react-refresh/only-export-components': [1, {
      'allowExportNames': ['metadata']
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx', '.ts']
    }],
    'react/jsx-no-undef': [2, {
      allowGlobals: false
    }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': [2, {
      // https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
      groups: [// Side effect imports.
      ['^\\u0000'], // Node.js builtins prefixed with `node:`.
      ["^node:"], // React specific & Packages.
      ['^react', '^@?\\w'], // @/import
      ['^@/'], // anything that starts with a dot
      ['^\\.', '^\\.\\./', '^\\.\\.(?!/?$)', '^\\.\\./?$'], // Style imports.
      ['^@?\\w', '^.+\\.s?css$']]
    }],
    'unicorn/consistent-destructuring': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/no-keyword-prefix': 0,
    'unicorn/no-null': 0,
    'unicorn/numeric-separators-style': [1, {
      number: {
        groupLength: 3,
        minimumDigits: 0
      }
    }],
    'unicorn/prefer-at': 0,
    'unicorn/prefer-logical-operator-over-ternary': 0,
    'unicorn/prefer-spread': 0,
    'unicorn/prevent-abbreviations': 0
  },
};