const react = {
  env: {
    browser: true,
  },

  rules: {
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    'react/no-access-state-in-setstate': ['warn'],
    'react/no-this-in-sfc': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-pascal-case': ['warn'],
  },
};

export {react};
