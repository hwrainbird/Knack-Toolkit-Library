var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err, data) {
		console.log('__dirname =',__dirname);//$$$
		console.log('req.url =',req.url);//$$$

        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(3000);
