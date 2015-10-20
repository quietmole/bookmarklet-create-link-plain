# link-plain

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Create plain link from current page (for bookmarklet)


## Install

```
$ npm install --save link-plain
```


## Usage

```js
var linkPlain = require('link-plain');

linkPlain();
//=> 'quietmole/bookmarklet-create-link-plain https://github.com/quietmole/bookmarklet-create-link-plain'
```



## API

### linkPlain() -> String

*Title**(Space)**Url*


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/quietmole/node-link-plain
[travis-image]: https://img.shields.io/travis/quietmole/node-link-plain/master.svg?style=flat-square&label=build%20%28linux%29
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-link-plain/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-link-plain/master.svg?style=flat-square&label=build%20%28windows%29
[npm-url]: https://npmjs.org/package/link-plain
[npm-image]: https://img.shields.io/npm/v/link-plain.svg?style=flat-square
[daviddm-url]: https://david-dm.org/quietmole/node-link-plain
[daviddm-image]: https://img.shields.io/david/quietmole/node-link-plain.svg?style=flat-square
