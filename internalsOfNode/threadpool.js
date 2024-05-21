process.env.UV_THREADPOOL_SIZE = 5;
const crypto = require("crypto");
const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});
// PS C:\Users\Dell\OneDrive\Desktop\advance-node> node threadpool.js
// 1: 1761
// 4: 1831
// 2: 1929
// 3: 1937
// 5: 3683
// PS C:\Users\Dell\OneDrive\Desktop\advance-node>
// why is this happening ?
// i have 4 cores and each cores is processing 4 threads so in each time 4 threads is processed by the a single core and than the 5th thread is processed
