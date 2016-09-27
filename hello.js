const fs = require('fs');
const http = require('http');
const PORT=8080;
var dataInJSON;

function handleRequest(request, response){
	if (request.method === "GET") {
			switch (request.url) {
			case '/gender':
				fs.readFile('file.json', "utf-8", (err, data) => {
				  if (err) throw err;
				  dataInJSON = JSON.parse(data);
				  response.end((dataInJSON.gender).toString());
				});
				break;
			case '/name':
				fs.readFile('file.json', "utf-8", (err, data) => {
				  if (err) throw err;
				  dataInJSON = JSON.parse(data);
				  response.end((dataInJSON.name).toString());
				});
				break;
			default:
				fs.readFile('file.json', "utf-8", (err, data) => {
				  if (err) throw err;
				  response.end(data);
				});
		}
	} else if (request.method === "POST") {
		console.log("POST");

		//TODO: parse the zip file and return in JSON format and handle request to get different data.

		response.end("Server get your zip file");
	}
	
    
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});