var gzipSync = require( 'zlib' ).gzipSync;

module.exports = gzip;

function gzip ( code, options ) {
	return gzipSync( code, options.zlib );
}

gzip.defaults = {
  accept: '.js',
  ext: '.js.gz'
};
