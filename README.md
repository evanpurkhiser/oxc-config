## Evan Purkhiser's Personal JS code styles

[![publish](https://github.com/evanpurkhiser/oxc-config/workflows/publish/badge.svg)](https://github.com/evanpurkhiser/oxc-config/actions?query=workflow%3Apublish)
[![NPM](https://img.shields.io/npm/v/@evanpurkhiser/oxc-config)](https://www.npmjs.com/package/@evanpurkhiser/oxc-config)

These are my Oxc linting and formatting configurations that I use across my
various personal
projects.

```bash
npm install -D oxlint oxfmt @evanpurkhiser/oxc-config
```

Create an `oxlint.config.ts` file with the contents:

```ts
import {defineConfig} from 'oxlint';
import {all} from '@evanpurkhiser/oxc-config';

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
import {common} from '@evanpurkhiser/oxc-config';

export default defineConfig({
  extends: [common],
});
```

For Oxfmt, create an `oxfmt.config.ts` file:

```ts
import {defineConfig} from 'oxfmt';
import {oxfmt} from '@evanpurkhiser/oxc-config/oxfmt';

export default defineConfig(oxfmt);
```
