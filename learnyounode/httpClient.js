var httpmod = require('http');

httpmod.get(process.argv[2], function(response){
	response = response.setEncoding('utf8');
	response.on("data", function (dat){
		console.log(dat);
	});
});
