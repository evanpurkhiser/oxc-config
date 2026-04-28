const common = {
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react'],

  rules: {
    // Best practices
    'array-callback-return': ['warn'],
    'consistent-return': ['warn'],
    'no-caller': ['warn'],
    'no-else-return': ['error', {allowElseIf: false}],
    'no-extra-label': ['error'],
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-useless-call': ['warn'],
    'no-useless-concat': ['warn'],
    'no-useless-return': ['warn'],
    'require-await': ['warn'],
    curly: ['error'],
    eqeqeq: ['error'],
    radix: ['warn'],

    // ECMAScript
    'no-var': ['error'],
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
  },
};

export {common};
