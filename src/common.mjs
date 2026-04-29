const common = {
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react', 'promise', 'node'],

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

    // Correctness
    'no-template-curly-in-string': ['error'],
    'no-throw-literal': ['error'],
    'default-case-last': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'no-extend-native': ['error'],
    'preserve-caught-error': ['error'],
    'no-implicit-coercion': ['warn'],

    // Style cleanup
    'object-shorthand': ['warn'],
    'no-useless-rename': ['warn'],
    'no-unneeded-ternary': ['warn'],
    'prefer-object-spread': ['warn'],
    'prefer-object-has-own': ['warn'],

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
    'typescript/consistent-type-imports': ['error'],
    'typescript/no-import-type-side-effects': ['error'],
    'typescript/no-non-null-asserted-optional-chain': ['error'],
    'typescript/no-non-null-asserted-nullish-coalescing': ['error'],
    'typescript/prefer-as-const': ['error'],
    'typescript/ban-ts-comment': ['warn'],
    'typescript/prefer-ts-expect-error': ['error'],
    'typescript/prefer-enum-initializers': ['error'],
    'typescript/prefer-literal-enum-member': ['error'],
    'typescript/no-mixed-enums': ['error'],
    'typescript/no-inferrable-types': ['warn'],
    'typescript/consistent-generic-constructors': ['warn'],

    // Imports
    'import/no-duplicates': ['error'],
    'import/no-self-import': ['error'],
    'import/no-empty-named-blocks': ['error'],
    'import/no-named-as-default': ['warn'],
    'import/no-named-as-default-member': ['warn'],
    'import/first': ['warn'],

    // Unicorn
    'unicorn/prefer-node-protocol': ['error'],
    'unicorn/prefer-string-slice': ['warn'],
    'unicorn/no-useless-undefined': ['warn'],
    'unicorn/prefer-array-flat-map': ['warn'],
    'unicorn/prefer-date-now': ['warn'],
    'unicorn/prefer-regexp-test': ['warn'],
    'unicorn/prefer-math-min-max': ['warn'],
    'unicorn/prefer-string-replace-all': ['warn'],
    'unicorn/prefer-number-properties': ['warn'],
    'unicorn/no-instanceof-array': ['warn'],
    'unicorn/no-typeof-undefined': ['warn'],
    'unicorn/no-useless-promise-resolve-reject': ['warn'],
    'unicorn/error-message': ['error'],
    'unicorn/new-for-builtins': ['error'],

    // Promise
    'promise/no-new-statics': ['error'],
    'promise/valid-params': ['error'],
    'promise/param-names': ['warn'],

    // Node
    'node/no-new-require': ['error'],
    'node/no-path-concat': ['error'],
  },
};

export {common};
