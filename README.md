#is-arguments <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4] [![dependency status][5]][6] [![dev dependency status][7]][8]

[![npm badge][13]][1]

[![browser support][9]][10]

Is this an arguments object? It's a harder question than you think.

## Example

```js
var isArguments = require('is-arguments');
var assert = require('assert');

assert.equal(isArguments({}), false);
assert.equal(isArguments([]), false);
(function () {
	assert.equal(isArguments(arguments), true);
}())
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-arguments
[2]: http://vb.teelaun.ch/ljharb/is-arguments.svg
[3]: https://travis-ci.org/ljharb/is-arguments.png
[4]: https://travis-ci.org/ljharb/is-arguments
[5]: https://david-dm.org/ljharb/is-arguments.png
[6]: https://david-dm.org/ljharb/is-arguments
[7]: https://david-dm.org/ljharb/is-arguments/dev-status.png
[8]: https://david-dm.org/ljharb/is-arguments#info=devDependencies
[9]: https://ci.testling.com/ljharb/is-arguments.png
[10]: https://ci.testling.com/ljharb/is-arguments
[11]: https://github.com/es-shims/es5-shim/blob/master/es5-shim.js#L542-589
[12]: https://github.com/bestiejs/lodash
[13]: https://nodei.co/npm/is-arguments.png?downloads=true&stars=true

