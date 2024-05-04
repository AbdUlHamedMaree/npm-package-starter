# name

Starter repo for NPM package, all types of packages are handled using [`lbundle`](https://github.com/AbdUlHamedMaree/lbundle) ✨

# Prepare

- Make sure to add `NPM_TOKEN` secret in "Repository > Settings > Secrets and variables > Actions > New repository secret" to your action by adding it to your repo's secrets.
- Update workflows permissions in "Repository > Settings > Actions > General > Workflow permissions" to be "Read and write permissions".
- create the jsr first and link it to your github repo.
- replace `<scope>`, `<name>`, `<description>` abd `<repo-name>` with proper values, and adjust `homepage`, `bugs`, `repository`, `author` and `contributors` with proper values.

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
