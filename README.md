# Dedupe Compare

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
