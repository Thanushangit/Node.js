const http = require("http");
const data=require("./data/Favourite.json")

const PORT_NUMBER = 3000;

http.createServer((req, res) => {
    console.log("The server is running");
    res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify(data))
    res.end("Hello from the server!");
}).listen(PORT_NUMBER, () => {
    console.log(`Server is listening on port ${PORT_NUMBER}`);
});












