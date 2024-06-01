// process.env.UV_THREADPOOL_SIZE = 5;
// to do the above operations we need to execute the below code
// $env:UV_THREADPOOL_SIZE=5; node multitask.js
const crypto = require("crypto");
const https = require("https");
const fs = require("fs");
const start = Date.now();
function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("do request", Date.now() - start);
      });
    })
    .end();
}
function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("hash:", Date.now() - start);
  });
}
fs.readFile("multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start);
});
doRequest();
doHash();
doHash();
doHash();
doHash();
// PS C:\Users\Dell\OneDrive\Desktop\advance-node> node multitask.js
// do request 476
// hash: 1886
// FS: 1888
// hash: 1971
// hash: 1987
// hash: 2047
