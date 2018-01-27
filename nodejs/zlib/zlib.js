const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');


const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');
const out2 = fs.createWriteStream('input.txt.zip');

inp.pipe(gzip).pipe(out);
inp.pipe(gzip).pipe(out2);

const input = '.................................';
zlib.deflate(input, (err, buffer) => {
    if (!err) {
        console.log(buffer.toString('base64'));
    } else {
        // handle error
    }
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
zlib.unzip(buffer, (err, buffer) => {
    if (!err) {
        console.log(buffer.toString());
    } else {
        // handle error
    }
});