import {builtinModules} from 'node:module';

const common = {
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react'],

  jsPlugins: ['eslint-plugin-simple-import-sort'],

  rules: {
    // Best practices
    'array-callback-return': ['warn'],
    'consistent-return': ['warn'],
    'no-caller': ['warn'],
    'no-else-return': ['error', {allowElseIf: false}],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-return-await': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-useless-call': ['warn'],
    'no-useless-concat': ['warn'],
    'no-useless-return': ['warn'],
    'require-await': ['warn'],
    curly: ['error'],
    eqeqeq: ['error'],
    radix: ['warn'],

    // Variables
    'no-undef-init': ['warn'],

    // Style (mostly handled by prettier/oxfmt)
    'eol-last': ['error', 'always'],
    'new-parens': ['error'],
    'padded-blocks': ['warn', 'never'],
    'spaced-comment': ['warn', 'always'],

    // ECMAScript
    'no-var': ['error'],
    'prefer-arrow-callback': ['warn'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['off'],
    'prefer-numeric-literals': ['warn'],
    'prefer-rest-params': ['warn'],
    'prefer-spread': ['warn'],
    'prefer-template': ['warn'],
    'arrow-body-style': ['error', 'as-needed'],

    // Disabled for TypeScript
    'no-unused-expressions': ['off'],

    // TypeScript
    'typescript/explicit-function-return-type': ['off'],
    'typescript/no-use-before-define': ['off'],
    'typescript/no-explicit-any': ['off'],
    'typescript/no-non-null-assertion': ['off'],
    'typescript/explicit-module-boundary-types': ['off'],
    'typescript/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'typescript/no-unused-expressions': ['error'],
    'typescript/no-useless-constructor': ['error'],
    'typescript/array-type': ['error', {default: 'array-simple'}],

    // Sort imports
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          [`^(${builtinModules.join('|')})(/|$)`],
          ['^(src|app)(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};

export {common};
