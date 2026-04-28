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
  },
};

export {react};
