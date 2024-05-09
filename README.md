# name

Starter repo for NPM package, all types of packages are handled using [`lbundle`](https://github.com/AbdUlHamedMaree/lbundle) ✨

# Prepare

- this starter relays on [bun](https://bun.sh/), so make sure to prepare it first.
- don't update `eslint` or `eslint-config-react-ts-hero` since `eslint@9` doesn't support the old API and most eslint plugins are going to fail, wait until `eslint-config-react-ts-hero@2` fully released and then use it.
- Make sure to add `NPM_TOKEN` secret in "Repository > Settings > Secrets and variables > Actions > New repository secret" to your action by adding it to your repo's secrets.
- Update workflows permissions in "Repository > Settings > Actions > General > Workflow permissions" to be "Read and write permissions".
- create the jsr package and link it to your github repo.
- replace `<scope>`, `<name>`, `<description>`, `<gh-user>` , `<user-name>`, `<email>`, `<user-page>` and `<repo-name>` with proper values, e.g.:

```js
{
    scope: '@mrii',
    name: 'package-name',
    description: 'package-description',
    'gh-user': 'AbdUlHamedMaree',
    'user-name': 'AbdUlHameed Murie',
    'email': 'hmidmrii@gmail.com',
    'user-page': 'https://www.linkedin.com/in/abd-ul-hameed-maree/',
    'repo-name': 'github-repo',
}
```

# Usage

## Utility library

This starter is prepared to be utility library

## CLI

Just adjust `package.json` to have both `bin:source` and `bin` fields as mentioned [here](https://github.com/AbdUlHamedMaree/lbundle?tab=readme-ov-file#packagejson)

and don't forget to add shebang at the start of the cli entry (e.g. `#!/usr/bin/env node`)

## UI library

`lbundle` supports bundling all kind of CSS files (`.scss`, `.less`, `pcss`, ...), but you need to install the related compiler as mentioned [here](https://github.com/AbdUlHamedMaree/lbundle?tab=readme-ov-file#-features) (e.g. install [`sass`](https://www.npmjs.com/package/sass) when you need to use `.sass` and `scss` files)

make sure to append the CSS entry in your `exports` field in your `package.json` as mentioned [here](https://github.com/AbdUlHamedMaree/lbundle?tab=readme-ov-file#packagejson)

### React

`lbundle` is prepared to bundle react applications, just make sure to install `react` and `react-dom`, and append them to the `peerDependencies` field in your `package.json`.

`lbundle` transforms JSX into either `jsx()` or `React.createElement()` according to your react version.

# Guides

## I don't want JSR

just remove the following:

- `jsr.json` file.
- in `samantic-release.js`, remove the plugin `@sebbo2002/semantic-release-jsr` and remove `jsr.json` from `@samantic-release/git` config.
- uninstall `@sebbo2002/semantic-release-jsr` (`bun remove @sebbo2002/semantic-release-jsr`)
