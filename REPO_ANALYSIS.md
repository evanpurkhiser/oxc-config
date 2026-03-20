# ESLint to Oxlint migration analysis

## Scope reviewed

- `/home/evan/coding/recovery`
- `/home/evan/coding/instagram-saver`
- `/home/evan/coding/meal-log`
- `/home/evan/coding/atuin-abacus`
- `/home/evan/coding/prolink-connect`
- `/home/evan/coding/waitress`
- `/home/evan/coding/transmission-helper`
- `/home/evan/coding/email-to-lunchmoney`
- `/home/evan/coding/tooling-personal`
- `/home/evan/coding/rekordbox-parser`
- `/home/evan/coding/tune-manager`
- `/home/evan/coding/doppovich-bot`
- `/home/evan/coding/keyway-twilio`
- `/home/evan/coding/prolink-tools`

## Findings by repository

| Repository            | Current ESLint setup                                                                                                     | Recommended Oxlint preset | Special handling                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------------------------------ |
| `recovery`            | Flat config: `common` + `prettier/prettier: off`                                                                         | `common`                  | No custom lint rules needed.                                                         |
| `instagram-saver`     | Flat config: `all` + `prettier/prettier: off`                                                                            | `all`                     | No custom lint rules needed.                                                         |
| `meal-log`            | Flat config: `common` + `prettier/prettier: off`                                                                         | `common`                  | No custom lint rules needed.                                                         |
| `atuin-abacus`        | Flat config: `common` + `prettier/prettier: off`                                                                         | `common`                  | Deno repo; validate JS/TS file globs for CLI usage.                                  |
| `prolink-connect`     | Flat config: `common` + `prettier/prettier: off`                                                                         | `common`                  | Keep test-specific overrides local if needed later.                                  |
| `waitress`            | Flat config: `all` + `prettier/prettier: off`                                                                            | `all`                     | Browser React app.                                                                   |
| `transmission-helper` | Flat config: `common` + `prettier/prettier: off`                                                                         | `common`                  | No custom lint rules needed.                                                         |
| `email-to-lunchmoney` | Flat config: `common` + `prettier/prettier: off`                                                                         | `common`                  | Cloudflare Worker; add env/global overrides only if diagnostics require it.          |
| `tooling-personal`    | Flat config: `all` + `prettier/prettier: off`                                                                            | `all`                     | Tooling repo likely to become migration templates.                                   |
| `rekordbox-parser`    | Legacy `.eslintrc.js`: extends `common`, node env, prettier off                                                          | `common`                  | Add `env.node: true` in local config.                                                |
| `tune-manager`        | Legacy `.eslintrc.js`: extends default (`all`), browser env, prettier off                                                | `all`                     | Add `env.browser: true` explicitly if needed.                                        |
| `doppovich-bot`       | Legacy `.eslintrc.js`: extends `common`, node env, prettier off                                                          | `common`                  | Add `env.node: true` in local config.                                                |
| `keyway-twilio`       | Legacy `.eslintrc.js`: extends `common`, node env, prettier off                                                          | `common`                  | Add `env.node: true` in local config.                                                |
| `prolink-tools`       | Legacy `.eslintrc.js`: extends default (`all`) with custom import groups and `typescript/no-unused-vars` ignore patterns | `all`                     | Keep repo-local overrides for import sorting groups and unused-vars ignore patterns. |

## Cross-repo migration notes

1. Every repo disables `prettier/prettier`; this is naturally removed in Oxlint.
2. Most repos can use only one line of config via `extends: [common]` or `extends: all`.
3. Legacy repos that currently set `env.node` should keep that as repo-local override.
4. `prolink-tools` should keep local customizations because the internal import groups differ from the shared default.
5. Run dual lint (`oxlint` + `eslint`) temporarily only for repos where any unsupported rule must be retained.
