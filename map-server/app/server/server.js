const http = require("http");
const url = require("url");
const route = require("../router/router");

const hostname = '127.0.0.1';
const port = 3001;

function start(route, handle) {
    const server = http.createServer((req, res) => {
        let postData = "";
        let pathname = url.parse(req.url).pathname;
        if (pathname != '/favicon.ico') {
            console.log("Request for " + pathname + " received.");

            route(handle, pathname, res, req);
        }
    });
	
	// 监听本地IP
    // server.listen(port, hostname, () => {
    //     console.log(`服务器运行在 http://${hostname}:${port}/`);
    // });
	
	// 监听所有IP
	server.listen(port, () => {
        console.log(`服务器运行在 http://${hostname}:${port}/`);
    });
}

exports.start = start;