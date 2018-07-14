const fs  = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip();

var inFile = fs.createReadStream('./extra/fileForCompress.txt')

var out = fs.createWriteStream('./extra/fileForCompress.txt.gz')

inFile.pipe(gzip).pipe(out)