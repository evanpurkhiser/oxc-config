const oxfmt = {
  bracketSpacing: false,
  printWidth: 90,
  singleQuote: true,
  arrowParens: 'avoid',
  sortImports: {
    sortSideEffects: true,
    customGroups: [
      {
        groupName: 'react-libs',
        selector: 'external',
        elementNamePattern: ['react', 'react-**'],
      },
      {
        groupName: 'project-internal',
        selector: 'import',
        elementNamePattern: ['src', 'src/**', 'app', 'app/**'],
      },
    ],
    groups: [
      'side_effect',
      'react-libs',
      'external',
      'builtin',
      'project-internal',
      'parent',
      ['sibling', 'index'],
      'unknown',
    ],
  },
};

export {oxfmt};
