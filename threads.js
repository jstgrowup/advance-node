const crypto = require("crypto");
const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});
// both of the code will be executed at the same time
// PS C:\Users\Dell\OneDrive\Desktop\advance-node> node threads.js
// 1: 813
// PS C:\Users\Dell\OneDrive\Desktop\advance-node> node threads.js
// 1: 1016
// 2: 1022
// PS C:\Users\Dell\OneDrive\Desktop\advance-node>
// if node was single threaded the second console would have been there after 2sec
