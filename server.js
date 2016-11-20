//Lets require/import the HTTP module
var fs = require("fs");
var path = require("path")
var http = require("http");

//Lets define a port we want to listen to
const PORT=8080; 


//Create a server
var server = http.createServer(function(req, res) {

	var fileName = null;
	var file = null;

	if(req.url === "/" || req.url === "index.html") {
		fileName = "index.html"
	}

	file = fs.createReadStream(path.join(__dirname, "app", fileName));

	res.writeHead(200, {"Content-Type": "text/html"});

	file.pipe(res);


});

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});