# Linter Cheatsheet

It happens to be a major PITA to find these little snippets, so I gather all useful findings here. As a rule of thumb, you should use these as last resort to solve a linting issue.

_* Some `JSlint` suppressors work with `JSHint`, YMMV. For `JShint/JSLint` compatibility, `space` after a comment token (`/_`) must be omitted.

## ESLint

<http://eslint.org/docs/rules/>

- Suppress all

```
/* eslint-disable */
```

- Suppress all for a single line

```
// eslint-disable-line
```

- Suppress a rule for a single line

```
// eslint-disable-line <rule1> <rule2>
```

- Suppress a rule for all

```
/* eslint-disable <rule> */ E.g.: /* eslint-disable space-before-function-paren */
```

## JShint

<http://jshint.com/docs/options/>

- Suppress environment warnings

```
// jslint browser: true
// jslint jquery: true
// jshint esversion: 6
```

- Suppress undefined global variables. **

```
/*global <var1>, <var2>, ... */
```

- Suppress exported/unused global variables. **

```
/*exported <var1>, <var2>, ... */
```

- Suppress a single warning. E.g.: `// jshint -W001`

```
// jshint -<*>
// jshint +<*>
```

- Suppress all warnings

```
// jshint ignore:start
// jshint ignore:end
```

- Suppress all warnings for a single line

```
// jshint ignore:line
```

## HTML-Lint

[Rules](https://github.com/yaniswang/HTMLHint/wiki/Rules)

```
<!--htmlhint spec-char-escape: false -->
```

## SCSS-Lint

- Suppress a single warning. Example: `// scss-lint:enable Compass::PropertyWithMixin`

```
// scss-lint:enable <*>
// scss-lint:disable <*>
```

## Pug-lint (was Jade)

<https://github.com/pugjs/pug-lint/blob/master/docs/rules.md>

## Beautify

- Suppress through a section (must be a block-comment)

```
/* beautify ignore:start */
/* beautify ignore:end */
```
