const fs = require("fs");
const HyperExpress = require("hyper-express");
const webserver = new HyperExpress.Server();

webserver.get("/", (request, response) => {
  const stream = fs.createReadStream("./sample.txt");
  stream.pipe(response);
});

webserver
  .listen(3000)
  .then((socket) => console.log("Webserver started on port 3000"))
  .catch((error) => console.log("Failed to start webserver on port 3000"));
