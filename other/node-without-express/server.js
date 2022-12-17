const SERVER_PORT = 3000;

const http = require("http");
const app = require("./app");

const server = http.createServer(app);
server.listen(SERVER_PORT);
console.log("SREVER: Node.js web server is listening (port 3000) ...");
