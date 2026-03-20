## Evan Purkhiser's Personal JS code styles

[![publish](https://github.com/evanpurkhiser/oxlint-config/workflows/publish/badge.svg)](https://github.com/evanpurkhiser/oxlint-config/actions?query=workflow%3Apublish)
[![NPM](https://img.shields.io/npm/v/@evanpurkhiser/oxlint-config)](https://www.npmjs.com/package/@evanpurkhiser/oxlint-config)

These are my oxlint configurations that I use across my various personal
projects.

```bash
npm install -D oxlint @evanpurkhiser/oxlint-config
```

Create an `oxlint.config.ts` file with the contents:

```ts
import {defineConfig} from 'oxlint';
import {all} from '@evanpurkhiser/oxlint-config';

export default defineConfig({
  extends: all,
});
```

The default configuration is for React apps, but you can select from the
following configurations:

- `common` - ES6 and Typescript rules
- `react` - React specific rules

For example:

```ts
import {defineConfig} from 'oxlint';
import {common} from '@evanpurkhiser/oxlint-config';

export default defineConfig({
  extends: [common],
});
```
