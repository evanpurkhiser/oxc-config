import {RuleTester} from 'oxlint/plugins-dev';

import {describe, it} from 'node:test';

import plugin from '../src/oxlint/plugin.mjs';

RuleTester.describe = describe;
RuleTester.it = it;

const ruleName = 'no-parenthesized-method-receiver';
const tester = new RuleTester({languageOptions: {parserOptions: {lang: 'ts'}}});

tester.run(ruleName, plugin.rules[ruleName], {
  valid: [
    'const items = (input ?? []); items.map(fn);',
    'getItems().map(fn);',
    'obj?.method?.();',
    '(obj.method)();',
    '(input ?? []).length;',
    '(input ?? []).nested.method();',
    'new (input ?? Fallback).Constructor();',
    'use(obj.method());',
  ],
  invalid: [
    '(obj).method();',
    '(ready ? items : []).map(fn);',
    '((input ?? [])).map(fn);',
    '(await getItems()).map(fn);',
    '(input as Item[]).map<Result>(fn);',
    '(input /* comment */)?.[method]?.();',
    '(obj).method!();',
  ].map(code => ({code, errors: 1})),
});
