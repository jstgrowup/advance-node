const cluster = require("cluster");
const crypto = require("crypto");
// true
// we are asking is the file being executed in master mode?
// that means is cluster.isMaster is true or not
if (cluster.isMaster) {
  // cause index.js to be executed again but in the chlid mode
  cluster.fork();
} else {
  // i am child and i am going to act like a server and do nothing else
  const express = require("express");
  const app = express();
  // function doWork(duration) {
  //   const start = Date.now();
  //   while (Date.now() - start < duration) {}
  // }
  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there");
    });
    // doWork(5000);
    // lets say if there is two machines hitting the smae api its gonna take a long time to process thats where clustering comes into picture
  });
  app.get("/fast", (req, res) => {
    res.send("this was fast");
  });
  app.listen(3000);
}
