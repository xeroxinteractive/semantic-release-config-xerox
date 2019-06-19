# semantic-release-config-xerox

> semantic-release shareable config for Xerox projects

[![circleci status][circleci-badge]][circleci-link]
[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license]
[![commit style angular][commit-style-badge]][commit-style-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]

## Usage
1. Install this config and eslint as a `devDependency`:
```bash
yarn add semantic-release semantic-release-config-xerox --dev
# or
npm install semantic-release semantic-release-config-xerox --save-dev
```
2. Extend the base and any additional configs in your semantic release configuration:
```json
{
  "extends": "semantic-release-config-xerox/npm"
}
```

## Configurations
### npm
Uses the following plugins:
* [@semantic-release/plugin-commit-analyzer](https://github.com/semantic-release/commit-analyzer)
* [@semantic-release/plugin-release-notes-generator](https://github.com/semantic-release/release-notes-generator)
* [@semantic-release/plugin-changelog](https://github.com/semantic-release/changelog)
* [@semantic-release/plugin-npm](https://github.com/semantic-release/npm)
* [@semantic-release/plugin-git](https://github.com/semantic-release/git)
* [@semantic-release/plugin-github](https://github.com/semantic-release/github)
* [@semantic-release-slack-bot](https://github.com/juliuscc/semantic-release-slack-bot/)

These plugins require the following environment variables:
* `NPM_TOKEN`: so semantic-release can publish to npm.
* `GH_TOKEN`: so semantic-release can comment on PRs and create releases.


---

[LICENSE][license] | [CHANGELOG][changelog] | [ISSUES][issues]

[license]: ./LICENSE
[changelog]: ./CHANGELOG.md
[issues]: https://github.com/xeroxinteractive/semantic-release-config-xerox/issues

[circleci-badge]: https://flat.badgen.net/circleci/github/xeroxinteractive/semantic-release-config-xerox/master
[circleci-link]: https://circleci.com/gh/xeroxinteractive/semantic-release-config-xerox/tree/master

[npm-badge]: https://flat.badgen.net/npm/v/semantic-release-config-xerox?color=cyan
[npm-link]: https://www.npmjs.com/package/semantic-release-config-xerox

[license-badge]: https://flat.badgen.net/npm/license/semantic-release-config-xerox

[commit-style-badge]: https://flat.badgen.net/badge/commit%20style/angular/purple
[commit-style-link]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines
[semantic-release-badge]: https://flat.badgen.net/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80/semantic%20release/e10079
[semantic-release-link]: https://github.com/semantic-release/semantic-release
