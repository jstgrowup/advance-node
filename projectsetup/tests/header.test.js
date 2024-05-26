const puppeteer = require("puppeteer");
test("Adds two numbers", () => {
  const sum = 1 + 2;
  expect(sum).toEqual(3);
});
test("we can launch a browser", async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  // headless :false will make sure we see the graphical user interface
  const page = await browser.newPage();
  console.log("page:", page);
  await page.goto("localhost:3000");
});
