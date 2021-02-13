const app = require("./server");

const thePort = 8080;
app.listen(thePort);

console.log("Server running on port: " + thePort);
