
const fs = require("fs");
const zlib = require("zlib"); //zip the content whiling writing
const gzip = zlib.createGzip(); //to zip content
const ungzip = zlib.createGunzip(); //to unzip content

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('unzip-saurabh.txt');

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// })

/*
connection between readstream and writestream via pip
*/
readStream.pipe(ungzip).pipe(writeStream);