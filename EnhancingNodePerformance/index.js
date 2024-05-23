const crypto = require("crypto");

const express = require("express");
const app = express();
const Worker = require("worker_threads").Worker;
app.get("/", (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = function () {
      let counter = 0;
      while (counter < 10e9) {
        counter++;
      }
      postMessage(counter);
    };
  });
  worker.onmessage = function (message) {
    res.send("" + message.data);
  };
  worker.postMessage();
});

app.listen(3000);
