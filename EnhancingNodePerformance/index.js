const express = require("express");
const app = express();
function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}
app.get("/", (req, res) => {
  doWork(5000);
  //   lets say if there is two machines hitting the smae api its gonna take a long time to process thats where clustering comes into picture
  res.send("Hi there");
});
app.listen(3000);
