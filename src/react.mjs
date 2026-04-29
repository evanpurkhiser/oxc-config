const react = {
  env: {
    browser: true,
  },

  rules: {
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/display-name': ['off'],
    'react/no-this-in-sfc': ['warn'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-pascal-case': ['warn'],
    'react/button-has-type': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/jsx-no-constructed-context-values': ['warn'],
    'react/no-array-index-key': ['warn'],
    'react/jsx-no-useless-fragment': ['warn'],
    'react/self-closing-comp': ['warn'],
    'react/jsx-curly-brace-presence': ['warn'],
    'react/jsx-fragments': ['warn'],
    'react/forward-ref-uses-ref': ['warn'],
  },
};

export {react};
