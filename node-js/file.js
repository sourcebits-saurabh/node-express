const fs = require("fs");

//create file

fs.writeFile('example.txt','This is an example',(err)=>{

    if(err)
        console.log(err)
    else
        console.log('File Created Succefull');
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                console.log(file);

        });
});

//rename file

fs.rename('example.txt','exp.txt',(err)=>{
    if(err)
        console.log(err)
    else
        console.log('File Renamed');
});

//appended file

fs.appendFile("exp.txt", " My name is saurabh kamble", err => {
  if (err) console.log(err);
  else console.log("File Appended");
});
//Delete file
fs.unlink('exp.txt',(err)=>{
    if(err)
        console.log(err)
    else
        console.log("File deleted");
})
