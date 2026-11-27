import {RuleTester} from 'oxlint/plugins-dev';

import {describe, it} from 'node:test';

import comments from '../src/oxlint/comments.mjs';

RuleTester.describe = describe;
RuleTester.it = it;

const ruleName = 'multiline-jsdoc';
const tester = new RuleTester({languageOptions: {parserOptions: {lang: 'ts'}}});

tester.run(ruleName, comments.rules[ruleName], {
  valid: [
    '/**\n *\n */',
    '/**\r\n * Describes the value.\r\n * @type {number}\r\n */\r\nconst value = 1;',
    '// A line comment.\n/* An ordinary block comment. */',
    "const text = '/** testing */';",
  ],
  invalid: [
    {
      code: '/** testing */',
      output: '/**\n * testing\n */',
      errors: 1,
    },
    {
      code: '/** */\nconst value = 1;',
      output: '/**\n *\n */\nconst value = 1;',
      errors: 1,
    },
    {
      name: 'preserves indentation and CRLF when expanding a tag',
      code: 'function getValue() {\r\n  /** @type {number} */\r\n  const value = 1;\r\n}',
      output:
        'function getValue() {\r\n  /**\r\n   * @type {number}\r\n   */\r\n  const value = 1;\r\n}',
      errors: 1,
    },
    {
      code: '/** opening text\n * body\n */',
      output: null,
      errors: 1,
    },
    {
      code: '/**\n * body\n closing text */',
      output: null,
      errors: 1,
    },
    {
      code: '/**\n body without a star\n */',
      output: null,
      errors: 1,
    },
    {
      name: 'preserves inline comments where a newline could change parsing',
      code: 'function getValue() { return /** testing */ 1; }',
      output: null,
      errors: 1,
    },
    {
      name: 'preserves TypeScript suppression directives',
      code: '/** @ts-expect-error Intentional type mismatch. */\nconst value: string = 1;',
      output: null,
      errors: 1,
    },
  ],
});
