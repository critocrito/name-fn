# `name-fn`

Set the name property of a function.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/name-fn.svg?style=flat)](https://www.npmjs.com/package/name-fn) [![Build Status](https://travis-ci.org/critocrito/name-fn.svg?branch=master)](https://travis-ci.org/critocrito/name-fn) [![Coverage Status](https://coveralls.io/repos/github/critocrito/name-fn/badge.svg)](https://coveralls.io/github/critocrito/name-fn)

When programmatically generating functions in JavaScript, they often lack a
name. This reduces the usability of using those functions in a REPL. `name-fn`
is a little helper to set the names of functions at construction time.

## Installation

```sh
npm install name-fn
```

## Usage

```js
import namefn from "name-fn";

const f = namefn("identity", x => x);
console.log(f.name); // identity
f; // [Function: identity]
```

## Examples

```js
import namefn from "name-fn";

const f = x => () => x;

const g = f(23);
console.log(g.name); // ""
g; // ""

const constant23 = namefn("constant23", f(23));
console.log(constant23.name); // "constant23"
constant23; // "[Function: constant23]"
```

The following example implements a `curry` function, and includes the number
of missing arguments in the function name.

```js
import namefn from "name-fn";

const curry = n => {
  const localCurry = (name, f, ...args) => {
    const g = (...largs) => {
      const rest = args.concat(largs);

      if (rest.length < n) return localCurry(name, f, ...rest);
      return f(...rest);
    };
    return namefn(`${name}-${n - args.length}`, g);
  };

  return namefn(`curry${n}`, localCurry);
};
const curry2 = curry(2);

const map = curry2("map", (f, xs) => xs.map(f));
map; // [Function: map-2]

const addOne = map(i => i + 1);
addOne; // [Function: map-1]
```

## License

[GPL 3.0 licensed](LICENSE)