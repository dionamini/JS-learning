var localModule = require('./ModuleFunction');
localModule(process.argv[2], process.argv[3], function (err, data){
		if(err){
			console.log("error");
		}
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
		}
});
