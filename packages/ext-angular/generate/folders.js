var fs = require("fs");
var path = require("path");

var rmdir = function(dir) {
		if (fs.existsSync(dir)){
			var list = fs.readdirSync(dir);
			for(var i = 0; i < list.length; i++) {
					var filename = path.join(dir, list[i]);
					var stat = fs.statSync(filename);

					if(filename == "." || filename == "..") {
							// pass these files
					} else if(stat.isDirectory()) {
							// rmdir recursively
							rmdir(filename);
					} else {
							// rm fiilename
							fs.unlinkSync(filename);
					}
			}
			fs.rmdirSync(dir);
		}
};

var mkdir = function(dir) {
	if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
	}
};

module.exports.rmdir = rmdir;
module.exports.mkdir = mkdir;
