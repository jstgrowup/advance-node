const https = require("https");
const start = Date.now();
function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
// PS C:\Users\Dell\OneDrive\Desktop\advance-node> node async.js
// 628
// 657
// 663
// 699
// 710
// 744
// 798
