const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 9997;
const server = http.createServer((req, res) => {
	if (req.method == "POST") {
		} else {
		var q = url.parse(req.url, true);
		var filename = q.pathname == "/" ? "index.html" : "." + q.pathname;
		fs.readFile(filename, (err, data) => {
			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 Not Found: " + filename);
			} 
			res.statusCode = 200;
			res.setHeader('Content-Type', filename.endsWith("html") ? 'text/html' : filename.endsWith("js") ?							"text/javascript" : filename.endsWith("css") ? "text/css":"");
			res.write(data);
			return res.end();
		});
	}
});
server.listen(port, null, () => {
	console.log(`Server running...`);
});
