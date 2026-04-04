
/*

Node.js File System / Crud in dir

core module : path


const path = require('node:path');
const notes = '/users/joe/notes.txt';
path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

*/

const fs = require('fs');


//path Core Module 
const path = require('path');  // folder module
const dirPath= path.join(__dirname,'myDir');  // current crud folder path 
const filePath = `${dirPath}/apple.txt`;


//create file &Write data in myDir folder

/*

fs.writeFileSync(filePath,'this is a simple file',(err)=>{
if(!err) { console.log("file is created"); }
})

*/


// read
/*
 
 fs.readFile(filePath,'utf8',(err,data)=>{
 console.log(data);
})

*/

// update

/*
fs.appendFile(filePath,'for fruits',(err)=>{
if(!err) {
	console.log("file is updated");
	}
})

*/


// rename

/*

fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})

*/  

// Delete 	fs.unlink('test.txt', function ())


fs.unlinkSync(`${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file is deleted")
});
