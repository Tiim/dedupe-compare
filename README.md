# Dedupe Compare


⚠ Deprecated: use Lodash [_.uniq](https://lodash.com/docs/#uniq), [_.uniqBy](https://lodash.com/docs/#uniqBy) or [_.uniqWith](https://lodash.com/docs/#uniqWith) instead.



[![npm version](https://badge.fury.io/js/dedupe-compare.svg)](https://badge.fury.io/js/dedupe-compare)
[![Build Status](https://travis-ci.org/Tiim/dedupe-compare.svg?branch=master)](https://travis-ci.org/Tiim/dedupe-compare)
[![Greenkeeper badge](https://badges.greenkeeper.io/Tiim/dedupe-compare.svg)](https://greenkeeper.io/)

De-duplicate arrays of arbitrary objects with a equality function.

## Installation

```sh
npm install --save dedupe-compare
```

## Ussage

With standart comparator function

```js
const dedupe = require("dedupe-compare");

const array = [1, 1, 2, 2, 3, 1, 5];

const result = dedupe(array);
// [1, 2, 3, 5];
```

With a custom comparator function.

```js
const dedupe = require("dedupe-compare");

const array = [{ a: "x", b: "y" }, { a: "x", b: "y" }, { a: "b", b: "y" }];

const equal = (x, y) => x.a === y.a;
const result = dedupe(array, equal);
// [{ a: "x", b: "y" }, { a: "b", b: "y" }]
```
