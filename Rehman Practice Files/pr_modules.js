const fs = require("fs");
fs.writeFileSync("read.txt", "hello world");
fs.writeFileSync("read.txt", "hello world programmers");
fs.appendFileSync("read.txt", "hey");

                      //   buffer is data type only available in node js
const data1 =  fs.readFileSync("read.txt");
console.log(data1);
const data2 = data1.toString();
console.log(data2);

fs.renameSync("read.txt", "file.txt");

// fs.unlinkSync("file.txt");
// fs.rmdir("");