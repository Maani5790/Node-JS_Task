const fs = require("fs");

fs.writeFile("read.text" , "hello world"), (err)=>{
    console.log("file created");
    console.log("error");
}

