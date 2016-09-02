var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var strbuff = buff.toString();
var delimited = strbuff.split('\n');
var number = 0;
for(var i = 0; i < delimited.length-1; ++i){
	number += 1;
}
console.log(number);
