const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world from node js ");
    res.end();
  }else{
      res.write("Using other domain");
      res.end();
  }
});

server.listen("4000");
