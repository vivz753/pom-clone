const app = require("./server");

const thePort = process.env.PORT || 8080;
app.listen(thePort);

console.log("Server running on port: " + thePort);
