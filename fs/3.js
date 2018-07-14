const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
// readFile()
// 一边读，另一个文件，Stream

const inFile = fs.createReadStream('./a.txt');

const outFile = fs.createWriteStream('./a.txt.gz');

inFile.pipe(gzip).pipe(outFile);