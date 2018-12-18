const fs = require("fs");
// fs.mkdir("Folder", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder is created");
//     // fs.rmdir("folder",(err)=>{

//     //     if(err)
//     //         console.log(err)
//     //     else
//     //         console.log("Folder is deleted")
//     // });
//     fs.writeFile(
//       "./Folder/saurabh.txt",
//       "This is saurabh kamble writing the file",
//       err => {
//         if (err) console.log(err);
//         else console.log("File is created in folder ");
//       }
//     );
//   }
// });
// fs.unlink("./Folder/saurabh.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir("Folder", err => {
//       if (err) console.log(err);
//       else console.log("Folder is deleted");
//     });
//   }
// });

//Delete multiple files in a folder

fs.readdir("example",(err,files)=>{

    if(err)
        console.log(err);
    else
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err)
                    console.log(err)
                else
                    console.log("Files Deleted Successfully")

            });

        }




});


