const fs = require('fs');

//path Module
const path = require('path');  // folder module
const dirpath=path.join(__dirname,'public/demo')

//create file in crud folder

for(i=0;i<5;i++)
{
	fs.writeFileSync(`${dirpath}/hello${i}.txt`,"Some simple text in file")
}

