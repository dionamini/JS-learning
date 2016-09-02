var fs = require('fs');
var strBuff = undefined;
fs.readFile(process.argv[2], 'utf8', function callback(err, fileContent){
	strBuff = fileContent.split('\n').length-1;
	console.log(strBuff);
}); 

