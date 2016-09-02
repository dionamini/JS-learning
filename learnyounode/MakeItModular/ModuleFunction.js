var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extFilter, callback){
	fs.readdir(dirName, function (err, list){
		if(err) {return callback(err);}

		var data = [];	
		extFilter = "." + extFilter;
		for(var i = 0; i < list.length; ++i){
			if(path.extname(list[i]) == extFilter){
				data.push(list[i]);
			}
		}
		callback(null,data);
	});	
};
