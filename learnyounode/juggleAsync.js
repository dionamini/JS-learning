var httpmod = require('http');
var a = 0;
var b = 0;

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
			console.log(dataResp);
		}
		a = 1;
	});
});
		
httpmod.get(process.argv[3], function(res){
	while(a< 1){}
	res = res.setEncoding('utf8');
	dataResp = undefined;
	res.on("data", function (d){
		if(dataResp == undefined){
			dataResp = d;
		}else{
			dataResp += d;
		}
	});

	res.on("end",function(){
		
			if(dataResp != undefined){
				console.log(dataResp);
				b = 1;
			}
		});
});

httpmod.get(process.argv[4], function(r){
	while(b < 1){}
	r = r.setEncoding('utf8');
	dataResp = undefined;
	r.on("data", function(da){
		if(dataResp == undefined){
			dataResp = da;
		}else{
			dataResp += da;
		}
	});	
	r.on("end", function(){
		
		if(dataResp != undefined){
			console.log(dataResp);
		}
	});
});
