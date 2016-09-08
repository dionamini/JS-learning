var httpmod = require('http');

httpmod.get(process.argv[2], function(response){
	response = response.setEncoding('utf8');
	dataResp = undefined;
	response.on("data", function (dat){
		if(dataResp == undefined){
			dataResp = dat;
		}else{
			dataResp += dat;
		}
	});	
	
	response.on("end", function(){
		if(dataResp != undefined){
			console.log(dataResp.length);
			console.log(dataResp);
		}
	});
});
