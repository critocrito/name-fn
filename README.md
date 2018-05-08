# namefn

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/namefn.svg?style=flat)](https://www.npmjs.com/package/namefn) [![Build Status](https://travis-ci.org/critocrito/namefn.svg?branch=master)](https://travis-ci.org/critocrito/namefn) [![Coverage Status](https://coveralls.io/repos/github/critocrito/namefn/badge.svg)](https://coveralls.io/github/critocrito/namefn)


## Development

### Build targets

The following `npm run` targets are available:

- `test`: Run all tests in `test`.
- `test:watch`: Run the tests in watch mode.
- `coverage`: Run the tests and generate a coverage report.
- `compile`: Compile all sources into the `dist` directory.
- `compile:watch`: Watch for changes in the sources and trigger a compile.
- `lint`: Check the coding style.
- `fix`: Automatically reformat and fix the coding style.
- `flow`: Run the type checker.
- `flow-types`: Install libdefs of dependencies.
- `flow-coverage`: Generate a flow coverage report.
- `build`: Make a full build. Lint, test, type check and compile.
- `release`: Prepare a new release and bump the version number.
- `release-candidate`: Make a new rc pre-release.
- `clean`: Remove compiled sources.
- `security-scan`: Check dependencies in package.json for known
  vulnerabilities. This doesn't check dependencies of dependencies.
