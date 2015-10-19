# gobble-gzip
Compress files with GZIP.

## Installation
Make sure to have [gobble](https://github.com/gobblejs/gobble) installed. Then,
```
npm i -D gobble-gzip
```

## Usage

**gobblefile.js**

```js
var gobble = require('gobble');

var js = gobble( 'js' );

module.exports = gobble([
  js,
  js.transform( 'gzip' )
]);
```

This will make gobble serve all files in the `js/` directory, along with gzip-compressed versions of the `.js` files with a `.js.gz` extension.

To process file types other than JavaScript, such as Markdown, supply the `accept` and `ext` options like so.

```js
markdown.transform( 'gzip', {
  accept: [ '.md', '.markdown' ],
  ext: '.md.gz'
})
```

You can pass additional [options to zlib](https://nodejs.org/api/zlib.html#zlib_options) using the `zlib` option.

## License
MIT. Copyright 2015 Oskar Segersvärd
