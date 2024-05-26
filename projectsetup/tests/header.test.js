const puppeteer = require("puppeteer");
let browser, page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  // headless :false will make sure we see the graphical user interface
  page = await browser.newPage();
  console.log("page:", page);
  await page.goto("localhost:3000");
});
afterEach(async () => {
  await browser.close();
});
test(" header has the correct text", async () => {
  const text = await page.$eval("a.brand-logo", (el) => el.innerHTML);
  // Okay, so hopefully that gives you a little bit better idea
  // of what's going on behind the scenes
  // when we make use of puppeteer.
  // The real idea here is that all the code that we run
  // is being serialized into text, sent over to Chromium,
  // executed, the result gets serialized back in the text,
  // and then sent back over to our NodeJS runtime.
  expect(text).toEqual("Blogster");
});
test("clicking login starts the oauth flow", async () => {});
