const fs = require("fs");

fs.mkdirSync("rehman");

fs.writeFileSync("file1.text", "hey");
fs.writeFileSync("file1.text", "hey programmers");

const data3 =fs.readFileSync("file1.text");
const data4 = data3.toString();
console.log(data4);

fs.renameSync("file1.text" , "files.txt");